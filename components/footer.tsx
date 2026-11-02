import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-subtle bg-canvas mt-auto transition-colors duration-fast">
      <div className="layout-container py-space-8 flex flex-col md:flex-row items-center justify-between gap-space-4 text-center md:text-left">
        {/* Left: Copyright */}
        <p className="text-body-small text-secondary">
          © {new Date().getFullYear()} Gaurav Gupta. All rights reserved.
        </p>

        {/* Center slot: Future social/contact links foundation */}
        <div className="flex items-center gap-space-4 text-mono-micro text-tertiary" />

        {/* Right: Architectural Colophon */}
        <p className="font-mono text-mono-micro text-tertiary">
          Built with Next.js, TypeScript & Tailwind CSS. Typography in Geist.
        </p>
      </div>
    </footer>
  );
}
