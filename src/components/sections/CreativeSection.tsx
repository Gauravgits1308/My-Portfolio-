"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ImageModal } from "@/components/ui/ImageModal";

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  series: string;
}

const PHOTOGRAPHY_WORKS: PhotoItem[] = [
  {
    id: "photo-01",
    src: "/assets/Personal/Photography1.jpg",
    alt: "Gaurav Gupta — Architectural Photography Series I",
    title: "Spatial Geometry & Silhouette",
    series: "Light & Silhouette",
  },
  {
    id: "photo-02",
    src: "/assets/Personal/Photography2.jpg",
    alt: "Gaurav Gupta — Architectural Photography Series II",
    title: "Light, Shadow & Horizon",
    series: "Dusk & Horizon",
  },
  {
    id: "photo-03",
    src: "/assets/Personal/Photography3.jpg",
    alt: "Gaurav Gupta — Architectural Photography Series III",
    title: "Organic Rhythm & Focal Depth",
    series: "Natural Forms",
  },
];

export function CreativeSection() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="creative" className="py-20 sm:py-28 border-b border-void-border/30 scroll-mt-16 relative">
      {/* Anchor alias for #beyond-the-code */}
      <div id="beyond-the-code" className="absolute -top-16 left-0 h-0 w-0 pointer-events-none" />

      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-12">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 06. CREATIVE EXPRESSION
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Beyond the Code
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Visual Studies &amp; Perspective
            </p>
          </div>

          {/* Compact Refined Editorial Gallery Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PHOTOGRAPHY_WORKS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-void-border/60 bg-void-charcoal/40 cursor-zoom-in shadow-lg transition-all hover:border-crimson-primary/40 hover:shadow-crimson-primary/10"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-black/85 via-void-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Minimal Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5">
                  <span className="font-mono text-[9px] text-crimson-glow tracking-wider uppercase block">
                    {photo.series}
                  </span>
                  <h3 className="font-display text-sm font-semibold text-neutral-white group-hover:text-neutral-light transition-colors truncate">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-neutral-muted text-center pt-8 max-w-xl mx-auto">
            Exploring light discipline, perspective, and scale beyond the terminal.
          </p>
        </MotionReveal>

        {/* Fullscreen Photo Lightbox */}
        {activePhoto && (
          <ImageModal
            imageSrc={activePhoto.src}
            imageAlt={activePhoto.alt}
            title={activePhoto.title}
            subtitle={`${activePhoto.series} • Original visual study by Gaurav Gupta`}
            isOpen={!!activePhoto}
            onClose={() => setActivePhoto(null)}
          />
        )}
      </Container>
    </section>
  );
}
