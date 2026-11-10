"use client";

import React from "react";
import { Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 sm:py-28 border-b border-void-border/30">
      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-12">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 07. CURRICULUM VITAE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Resume &amp; Credentials
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Single-Page Verified Profile • Updated 2026
            </p>
          </div>

          {/* Minimal Editorial Callout */}
          <div className="p-8 sm:p-10 rounded-2xl border border-void-border/60 bg-void-charcoal/20 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="h-12 w-12 rounded-xl bg-crimson-primary/10 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-neutral-white">
                    Gaurav Gupta — Software Engineer Resume
                  </h3>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/30">
                    PDF Document
                  </span>
                </div>
                <p className="font-light text-sm text-neutral-light leading-relaxed">
                  Includes verified coursework at IIIT Kota, production SDE metrics at Orasis Infotech, full-stack case studies (Revora, Cafe Cloud, Voter List Management System), and competitive hackathon honors.
                </p>
                <div className="flex items-center gap-3 pt-1 text-neutral-muted font-mono text-xs">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-crimson-glow" />
                    Verified MIME: application/pdf
                  </span>
                  <span>•</span>
                  <span>Single-Page Format</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/api/resume?download=1"
                download="Gaurav_Gupta_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-lg shadow-crimson-primary/20 hover:translate-y-[-1px]"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-void-border-bright bg-void-elevated/70 hover:bg-void-border text-neutral-white font-mono text-xs font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-crimson-glow" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
