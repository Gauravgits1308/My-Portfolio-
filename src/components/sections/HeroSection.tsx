"use client";

import React from "react";
import { ArrowDown, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ThreeCanvas } from "@/components/three/ThreeCanvas";
import { SystemsCore } from "@/components/three/SystemsLattice/SystemsCore";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-void-border/40 pt-16 pb-20">
      {/* Background Spatial Atmosphere Layer */}
      <div className="absolute inset-0 bg-radial-crimson-subtle pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <Container size="lg" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Semantic Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <MotionReveal delay={0.1}>
              {/* Institution & Role Subhead */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-crimson-primary/40 bg-crimson-primary/10 text-crimson-glow font-mono text-xs font-semibold tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary animate-pulse" />
                <span>IIIT KOTA &apos;28 • FORMER SDE INTERN @ ORASIS</span>
              </div>
            </MotionReveal>

            {/* Premium Masked Typography Reveal */}
            <div className="pt-2">
              <div className="relative inline-block max-w-full">
                {/* Subtle baseline clipping / masking container */}
                <div className="overflow-hidden pb-2 pt-1">
                  <motion.h1
                    initial={reducedMotion ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                      delay: reducedMotion ? 0 : 0.15,
                    }}
                    className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-white"
                  >
                    Hi, I&apos;m{" "}
                    <motion.span
                      initial={reducedMotion ? false : { color: "rgba(240, 240, 245, 0.85)" }}
                      animate={{ color: "#ffffff" }}
                      transition={{
                        duration: 0.6,
                        delay: reducedMotion ? 0 : 0.65,
                        ease: "easeOut",
                      }}
                      className="text-white font-extrabold tracking-tight"
                    >
                      Gaurav
                    </motion.span>
                  </motion.h1>
                </div>

                {/* Thin, elegant crimson accent underneath the heading appearing after text reveal */}
                <motion.div
                  initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    delay: reducedMotion ? 0 : 0.85,
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: "left" }}
                  className="h-[2px] w-24 sm:w-36 bg-crimson-primary mt-2.5 rounded-full"
                  aria-hidden="true"
                />
              </div>

              <p className="font-mono text-sm sm:text-base text-crimson-glow font-medium mt-3 tracking-wide">
                Software Development Engineer &amp; Creative Technologist
              </p>
            </div>

            <MotionReveal delay={0.25}>
              {/* Memorable Concise Headline */}
              <p className="font-display text-2xl sm:text-3xl text-neutral-light font-normal leading-snug max-w-2xl pt-2">
                Building resilient distributed backends, semantic retrieval systems, and thoughtful spatial interfaces.
              </p>

              {/* Maximum Two Short Introductory Sentences */}
              <p className="font-light text-base text-neutral-muted leading-relaxed max-w-xl">
                Computer Science undergraduate at IIIT Kota and former SDE Intern at Orasis Infotech.
                I engineer high-throughput systems and bridge algorithmic rigor with human-centered visual craftsmanship.
              </p>

              {/* Compact Professional Achievements Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-void-border/70 bg-void-charcoal/40 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-crimson-primary shrink-0" />
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                      SDE Intern
                    </span>
                    <span className="font-mono text-[10px] text-neutral-muted block truncate">
                      Orasis Infotech
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-void-border/70 bg-void-charcoal/40 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-crimson-glow shrink-0" />
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                      National Finalist
                    </span>
                    <span className="font-mono text-[10px] text-neutral-muted block truncate">
                      Odoo × Adani Hackathon
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-void-border/70 bg-void-charcoal/40 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-crimson-primary shrink-0" />
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                      CodeChef 2-Star
                    </span>
                    <span className="font-mono text-[10px] text-neutral-muted block truncate">
                      Competitive Programmer
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions & Social Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-lg shadow-crimson-primary/20 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-glow"
                >
                  <span>Explore Projects</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>

                <a
                  href="/api/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-void-border-bright bg-void-elevated/70 hover:bg-void-border text-neutral-white font-mono text-xs font-medium transition-all hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary"
                >
                  <FileText className="h-3.5 w-3.5 text-crimson-glow" />
                  <span>View Resume</span>
                </a>

                {/* Minimal Social Links */}
                <div className="flex items-center gap-2 pl-1">
                  <a
                    href="https://github.com/Gauravgits1308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-void-border bg-void-charcoal/40 hover:border-crimson-primary/50 hover:text-crimson-glow text-neutral-muted transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/gaurav-gupta-48258a323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-void-border bg-void-charcoal/40 hover:border-crimson-primary/50 hover:text-crimson-glow text-neutral-muted transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:gaurav.init13@gmail.com"
                    className="p-3 rounded-xl border border-void-border bg-void-charcoal/40 hover:border-crimson-primary/50 hover:text-crimson-glow text-neutral-muted transition-colors"
                    aria-label="Send Email"
                  >
                    <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Three.js Spatial Core Experience */}
          <div className="lg:col-span-5 h-[380px] sm:h-[480px] lg:h-[540px] w-full relative rounded-2xl overflow-hidden border border-void-border/50 bg-void-charcoal/30 shadow-2xl backdrop-blur-sm">
            <ThreeCanvas className="w-full h-full">
              <SystemsCore />
            </ThreeCanvas>
            <div className="absolute bottom-3 right-3 font-mono text-[9px] text-neutral-muted/60 pointer-events-none tracking-widest uppercase">
              Three.js • Interactive Polyhedral Lattice
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
