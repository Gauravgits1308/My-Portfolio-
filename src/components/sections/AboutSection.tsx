"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-void-border/30">
      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Editorial Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-16">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 02. BACKGROUND &amp; PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                About Me
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Systems Engineering &amp; Visual Craft
            </p>
          </div>

          {/* Asymmetric Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 7 Cols: Personal Biography & Education */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-5 text-base sm:text-lg font-light text-neutral-light leading-relaxed">
                <p>
                  I am a Computer Science undergraduate at the{" "}
                  <strong className="text-neutral-white font-medium">Indian Institute of Information Technology (IIIT) Kota</strong>{" "}
                  (CGPA: 7.78). My work is focused on building high-throughput distributed backends, semantic search systems,
                  and developer tools that feel natural to use.
                </p>

                <p>
                  During my internship as an{" "}
                  <strong className="text-crimson-glow font-medium">SDE Intern at Orasis Infotech</strong>, I engineered backend RESTful APIs
                  for Savvy HRMS, reducing database query retrieval latency by 20% while closing 25+ critical production tickets across Agile sprints.
                </p>

                <p>
                  Outside of backend engineering, my creative work as former{" "}
                  <strong className="text-neutral-white font-medium">Photography Lead at Neon Cinematics</strong> informs how I approach software design.
                  I treat visual hierarchy, typography, light discipline, and spatial motion with the same precision I bring to system architectures.
                </p>
              </div>

              {/* Compact Education Item */}
              <div className="pt-4 border-t border-void-border/40">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-void-border bg-void-charcoal shrink-0">
                    <Image
                      src="/assets/Logos/IIIT Kota Logo.webp"
                      alt="IIIT Kota Crest"
                      fill
                      unoptimized
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-crimson-glow" />
                      <h3 className="font-display text-base font-semibold text-neutral-white">
                        Indian Institute of Information Technology, Kota
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-neutral-muted mt-0.5">
                      B.Tech in Computer Science &amp; Engineering • CGPA: 7.78 (2024 – 2028)
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus Areas Strip */}
              <div className="pt-2 font-mono text-xs text-neutral-muted space-y-2">
                <span className="text-neutral-light font-medium block">{"//"} CORE FOCUS AREAS</span>
                <div className="flex flex-wrap gap-2 text-neutral-light">
                  <span className="px-3 py-1 rounded-lg border border-void-border/50 bg-void-charcoal/30">Distributed Systems</span>
                  <span className="px-3 py-1 rounded-lg border border-void-border/50 bg-void-charcoal/30">AST Code Parsing &amp; RAG</span>
                  <span className="px-3 py-1 rounded-lg border border-void-border/50 bg-void-charcoal/30">Queue Workers (BullMQ / Redis)</span>
                  <span className="px-3 py-1 rounded-lg border border-void-border/50 bg-void-charcoal/30">Spatial 3D Interfaces</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Authentic Workspace Visual */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-void-border/60 bg-void-black shadow-2xl group">
                <Image
                  src="/assets/Personal/My Personal Space.png"
                  alt="Gaurav Gupta Personal Workspace & Setup at IIIT Kota"
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Location Marker */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl border border-void-border/70 bg-void-black/80 backdrop-blur-md">
                  <div>
                    <span className="block font-display text-xs font-semibold text-neutral-white">
                      Personal Engineering Setup
                    </span>
                    <span className="block font-mono text-[10px] text-crimson-glow">
                      IIIT Kota Campus
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-muted">
                    <MapPin className="h-3 w-3 text-crimson-primary" />
                    <span>Kota, India</span>
                  </div>
                </div>
              </div>
              <p className="font-mono text-[11px] text-neutral-muted text-center">
                Visual environment &amp; workspace setup where ideas turn into code.
              </p>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
