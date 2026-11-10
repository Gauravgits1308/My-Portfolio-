"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#achievements", label: "Honors" },
  { href: "#contact", label: "Get in Touch" },
];

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-void-border/40 bg-void/85 backdrop-blur-xl transition-all duration-300",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Insignia */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary rounded-md p-1"
          aria-label="Gaurav Gupta — Software Development Engineer"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-void-border bg-void-elevated transition-colors group-hover:border-crimson-primary/50 group-hover:bg-burgundy-deep/30">
            <span className="font-display text-xs font-bold tracking-wider text-neutral-white">
              G<span className="text-crimson-primary">G</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs font-semibold tracking-wider text-neutral-white group-hover:text-neutral-light">
              GAURAV GUPTA
            </span>
            <span className="font-mono text-[9px] tracking-wider text-neutral-muted uppercase">
              SDE &amp; Creative Technologist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg font-mono text-xs text-neutral-muted hover:text-neutral-white hover:bg-void-elevated/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/api/resume?download=1"
            download="Gaurav_Gupta_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-crimson-primary/50 bg-crimson-primary/10 hover:bg-crimson-primary/20 text-crimson-glow font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-void-border bg-void-elevated text-neutral-muted hover:text-neutral-white hover:border-void-border-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-void-border bg-void-charcoal/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-mono text-sm text-neutral-muted hover:text-neutral-white hover:bg-void-elevated transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/api/resume?download=1"
            download="Gaurav_Gupta_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-lg bg-crimson-primary text-white font-mono text-xs font-semibold"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      )}
    </header>
  );
}
