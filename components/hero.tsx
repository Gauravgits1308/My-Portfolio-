import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { AtmosphericLattice } from "@/components/three";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="w-full relative pt-space-12 pb-space-16 md:pt-space-16 md:pb-space-24 transition-colors duration-fast"
    >
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-10 lg:gap-space-12 items-center">
          {/* Left Column: Editorial Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-6 text-left">
            {/* Eyebrow / Kicker */}
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent/80 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-mono-micro text-accent uppercase tracking-widest select-none">
                {"PORTFOLIO // 2026"}
              </span>
            </div>

            {/* Name Heading (Single <h1> Landmark) */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[62px] font-bold text-primary tracking-[-0.035em] leading-[1.08]">
              GAURAV GUPTA
            </h1>

            {/* Professional Positioning */}
            <p className="font-sans text-xl sm:text-2xl text-primary font-medium tracking-[-0.02em] leading-snug">
              Software Engineer &amp; Full-Stack Developer
            </p>

            {/* Core Introduction */}
            <p className="font-sans text-base sm:text-body-large text-secondary leading-relaxed max-w-prose">
              Computer Science undergraduate at IIIT Kota, building scalable
              applications, intelligent developer tools and reliable software systems.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-space-4 pt-space-2">
              <Button
                href="#projects"
                variant="primary"
                trailingIcon={
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
              >
                View Projects
              </Button>

              <Button
                href="/assets/My_resume.pdf"
                download="Gaurav_Gupta_Resume.pdf"
                variant="secondary"
                trailingIcon={
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                }
              >
                Download Resume
              </Button>
            </div>

            {/* Direct Social Links */}
            <div className="flex flex-wrap items-center gap-x-space-6 gap-y-space-2 pt-space-6 border-t border-subtle/60 w-full text-mono-micro">
              <TextLink
                href="https://github.com/Gauravgits1308"
                arrow="external"
                mono
              >
                GitHub
              </TextLink>
              <TextLink
                href="https://linkedin.com/in/gaurav-gupta-48258a323"
                arrow="external"
                mono
              >
                LinkedIn
              </TextLink>
              <TextLink
                href="mailto:gaurav.init13@gmail.com"
                arrow="external"
                mono
              >
                gaurav.init13@gmail.com
              </TextLink>
            </div>
          </div>

          {/* Right Column: Architectural Portrait Frame with Three.js Atmospheric Lattice */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative">
            {/* Atmospheric System Lattice 3D Background Layer */}
            <div className="absolute -inset-6 sm:-inset-10 lg:-inset-16 pointer-events-none -z-10 flex items-center justify-center">
              <AtmosphericLattice className="w-full h-full" />
            </div>

            {/* Foreground Portrait Frame */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] p-2 sm:p-2.5 rounded-md bg-surface border border-subtle shadow-card transition-all duration-fast hover:border-border-medium group">
              {/* Image Frame */}
              <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-surface-subtle">
                <Image
                  src="/assets/My_image1.jpg"
                  alt="Gaurav Gupta — Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                  className="object-cover object-center select-none transition-transform duration-medium group-hover:scale-[1.01]"
                />
              </div>

              {/* Architectural Technical Detail Micro-Caption */}
              <div className="flex items-center justify-between px-1.5 pt-2 text-[11px] font-mono text-tertiary select-none">
                <span className="tracking-wider">{"// PORTRAIT.01"}</span>
                <span className="tracking-tight text-accent/70">1060 × 1060 RAW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
