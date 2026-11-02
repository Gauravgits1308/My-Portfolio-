import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full h-16 border-b border-subtle bg-canvas/80 backdrop-blur-md transition-colors duration-fast">
      <div className="layout-container h-full flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-sans font-semibold text-[15px] tracking-tight text-primary hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-xs"
        >
          <span>GAURAV GUPTA</span>
          <span className="font-mono text-mono-micro text-accent select-none">
            {"// SDE"}
          </span>
        </Link>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-space-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
