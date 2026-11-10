"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={cn(
        "mt-auto border-t border-void-border/60 bg-void-black/90 py-10 backdrop-blur-md",
        className
      )}
    >
      <Container size="lg">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-void-border/40">
            {/* Left Brand Identity */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-bold text-neutral-white">
                  GAURAV GUPTA
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary" />
                <span className="font-mono text-xs text-neutral-muted">
                  IIIT Kota &apos;28
                </span>
              </div>
              <p className="font-mono text-xs text-neutral-light">
                Software Development Engineer & Creative Technologist
              </p>
            </div>

            {/* Quick Links & Profiles */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/Gauravgits1308"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-neutral-muted hover:text-crimson-glow transition-colors"
              >
                GitHub
              </a>
              <span className="text-void-border">•</span>
              <a
                href="https://linkedin.com/in/gaurav-gupta-48258a323"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-neutral-muted hover:text-crimson-glow transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-void-border">•</span>
              <a
                href="mailto:gaurav.init13@gmail.com"
                className="font-mono text-xs text-neutral-muted hover:text-crimson-glow transition-colors"
              >
                Email
              </a>
              <span className="text-void-border">•</span>
              <Link
                href="/dev/three-playground"
                className="font-mono text-xs text-neutral-muted/70 hover:text-neutral-light transition-colors"
              >
                Dev Test Harness
              </Link>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-void-border bg-void-elevated hover:bg-void-border text-neutral-muted hover:text-neutral-white font-mono text-xs transition-colors self-start md:self-auto"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Bottom Copyright & Tech Stack */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-muted">
            <p>
              © {currentYear} Gaurav Gupta. All authentic materials verified.
            </p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-crimson-primary" aria-hidden="true" />
              <span>Engineered with Next.js 16, TypeScript, Three.js & Framer Motion</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
