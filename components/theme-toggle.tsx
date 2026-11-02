"use client";

import React from "react";
import { useTheme, ThemePreference } from "./theme-provider";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, isMounted } = useTheme();

  const options: Array<{
    id: ThemePreference;
    label: string;
    icon: React.ReactNode;
  }> = [
    {
      id: "dark",
      label: "Dark theme",
      icon: (
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ),
    },
    {
      id: "light",
      label: "Light theme",
      icon: (
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
    },
    {
      id: "system",
      label: "System theme",
      icon: (
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme preference"
      className="inline-flex items-center gap-1 p-1 bg-surface border border-subtle rounded-sm"
    >
      {options.map((option) => {
        const isActive = isMounted
          ? theme === option.id
          : option.id === "dark";

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={option.label}
            title={option.label}
            onClick={() => setTheme(option.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-mono-micro rounded-xs transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-surface ${
              isActive
                ? "bg-surface-elevated text-accent border border-border-accent shadow-card"
                : "text-secondary hover:text-primary hover:bg-surface-subtle border border-transparent"
            }`}
          >
            {option.icon}
            <span className="capitalize">{option.id}</span>
          </button>
        );
      })}
      <span className="sr-only">
        Active resolved theme: {isMounted ? resolvedTheme : "dark"}
      </span>
    </div>
  );
}
