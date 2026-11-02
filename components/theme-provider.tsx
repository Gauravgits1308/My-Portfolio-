"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

export type ThemePreference = "system" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

export interface ThemeContextValue {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
  isMounted: boolean;
}

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "dark";
  }
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === "system") {
    return getSystemTheme();
  }
  return preference === "light" ? "light" : "dark";
}

function applyThemeToDOM(resolved: ResolvedTheme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [isMounted, setIsMounted] = useState(false);

  // Synchronize on mount with localStorage or DOM attribute
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "system" || stored === "dark" || stored === "light") {
        const active = resolveTheme(stored);
        setThemeState(stored);
        setResolvedTheme(active);
        applyThemeToDOM(active);
        return;
      }
    } catch {
      // localStorage is unavailable or blocked (e.g. sandbox/private mode)
    }

    // Fallback: read existing DOM attribute or default to dark
    const currentAttr = document.documentElement.getAttribute("data-theme");
    const active = currentAttr === "light" ? "light" : "dark";
    setThemeState("dark");
    setResolvedTheme(active);
    applyThemeToDOM(active);
  }, []);

  // Listen for OS system theme changes when preference is 'system'
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (e: MediaQueryListEvent) => {
        if (theme === "system") {
          const nextResolved: ResolvedTheme = e.matches ? "dark" : "light";
          setResolvedTheme(nextResolved);
          applyThemeToDOM(nextResolved);
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch {
      // Older browser or unsupported matchMedia
    }
  }, [theme]);

  const setTheme = useCallback((newPreference: ThemePreference) => {
    // Validate value
    const validPreference: ThemePreference =
      newPreference === "system" ||
      newPreference === "dark" ||
      newPreference === "light"
        ? newPreference
        : "dark";

    const nextResolved = resolveTheme(validPreference);

    setThemeState(validPreference);
    setResolvedTheme(nextResolved);
    applyThemeToDOM(nextResolved);

    try {
      localStorage.setItem(STORAGE_KEY, validPreference);
    } catch {
      // Handled gracefully if storage is restricted
    }
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      isMounted,
    }),
    [theme, resolvedTheme, setTheme, isMounted]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return context;
}
