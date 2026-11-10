import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/ui/SkipToContent";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-void text-neutral-white">
      {/* Keyboard Accessibility Skip Link */}
      <SkipToContent targetId="main-content" />

      {/* Atmospheric lighting layers */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-radial-crimson-subtle opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-radial-burgundy-deep opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid-subtle [background-size:48px_48px] opacity-40"
        aria-hidden="true"
      />

      {/* Application Header */}
      <Navbar />

      {/* Main Content Landmark */}
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 flex flex-1 flex-col outline-none"
      >
        {children}
      </main>

      {/* Application Footer */}
      <Footer />
    </div>
  );
}
