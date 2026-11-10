"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  subtitle,
}: ImageModalProps) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-void-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title || imageAlt}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl border border-void-border-bright bg-void-charcoal/95 p-4 sm:p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-void-border/60">
          <div>
            {title && (
              <h3 className="font-display text-base sm:text-lg font-semibold text-neutral-white">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="font-mono text-xs text-neutral-muted">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-void-border bg-void-elevated hover:bg-void-border hover:text-crimson-glow text-neutral-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative mt-4 flex-1 min-h-[300px] max-h-[70vh] w-full flex items-center justify-center overflow-auto rounded-lg bg-void-black/50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            unoptimized
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
