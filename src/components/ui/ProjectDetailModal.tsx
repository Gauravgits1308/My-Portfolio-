"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Compass, Layers, Database, Cpu } from "lucide-react";

export interface ProjectDetailData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  overview: string;
  stack: string[];
  githubUrl?: string;
  implementedCapabilities: { title: string; description: string }[];
  plannedRoadmap: { title: string; description: string }[];
  technicalHighlights: { label: string; value: string }[];
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetailData | null;
}

export function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-void-black/85 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl border border-void-border bg-void-charcoal/95 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-void-border/60 bg-void-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider text-crimson-glow uppercase">
                {project.category}
              </span>
              <span className="text-void-border">•</span>
              <span className="font-mono text-[10px] text-neutral-muted">Technical Deep Dive</span>
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-muted hover:text-neutral-white hover:bg-void-elevated transition-colors"
            aria-label="Close architecture modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 text-sm">
          {/* Main Screenshot Preview */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-void-border bg-void-black">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs text-neutral-muted uppercase tracking-wider mb-2">
              System Overview
            </h4>
            <p className="font-light text-neutral-light leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Technical Highlights Bar */}
          {project.technicalHighlights.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-void-border/60 bg-void-black/30">
              {project.technicalHighlights.map((th, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-[10px] text-neutral-muted uppercase block">
                    {th.label}
                  </span>
                  <span className="font-mono text-xs text-neutral-white font-medium block">
                    {th.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Implemented vs Planned Roadmap Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Implemented */}
            <div className="p-4 rounded-xl border border-void-border/60 bg-void-black/30 space-y-3">
              <div className="flex items-center gap-2 text-crimson-glow font-mono text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4 text-crimson-primary" />
                <span>IMPLEMENTED CAPABILITIES</span>
              </div>
              <ul className="space-y-2.5">
                {project.implementedCapabilities.map((item, idx) => (
                  <li key={idx} className="text-xs space-y-0.5">
                    <span className="font-semibold text-neutral-white block font-mono">
                      {item.title}
                    </span>
                    <span className="text-neutral-light font-light block leading-relaxed">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planned */}
            <div className="p-4 rounded-xl border border-void-border/60 bg-void-black/30 space-y-3">
              <div className="flex items-center gap-2 text-neutral-light font-mono text-xs font-semibold">
                <Compass className="h-4 w-4 text-neutral-muted" />
                <span>PLANNED ARCHITECTURE ROADMAP</span>
              </div>
              <ul className="space-y-2.5">
                {project.plannedRoadmap.map((item, idx) => (
                  <li key={idx} className="text-xs space-y-0.5">
                    <span className="font-semibold text-neutral-light block font-mono">
                      {item.title}
                    </span>
                    <span className="text-neutral-muted font-light block leading-relaxed">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="font-mono text-xs text-neutral-muted uppercase tracking-wider mb-2">
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md border border-void-border bg-void-elevated font-mono text-xs text-neutral-light"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-void-border/60 bg-void-black/40">
          <span className="font-mono text-xs text-neutral-muted">
            All details verified against actual implementation.
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold transition-colors"
              >
                <span>View on GitHub</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-void-border text-neutral-light hover:text-white font-mono text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
