"use client";

import { useEffect, useState } from "react";

export interface ScrollState {
  scrollY: number;
  direction: "up" | "down" | "none";
  progress: number;
}

export function useScrollSpy(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    direction: "none",
    progress: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollHeight > 0 ? Math.min(Math.max(currentScrollY / totalScrollHeight, 0), 1) : 0;
      const direction = currentScrollY > lastScrollY ? "down" : currentScrollY < lastScrollY ? "up" : "none";

      setScrollState({
        scrollY: currentScrollY,
        direction,
        progress,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollState;
}
