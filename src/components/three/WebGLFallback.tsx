import React from "react";

interface WebGLFallbackProps {
  className?: string;
  message?: string;
}

export function WebGLFallback({
  className = "",
  message = "Static Render (Hardware acceleration unavailable)",
}: WebGLFallbackProps) {
  return (
    <div
      role="img"
      aria-label="Atmospheric Crimson and Charcoal Geometric Graphic"
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-void-border bg-void-charcoal p-8 ${className}`}
    >
      {/* Ambient background glows */}
      <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-crimson-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-burgundy-deep/30 blur-3xl pointer-events-none" />

      {/* Geometric SVG graphic */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <svg
          className="h-20 w-20 text-crimson-primary/80"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="42" strokeDasharray="4 4" className="opacity-40" />
          <polygon
            points="50,15 82,34 82,72 50,91 18,72 18,34"
            className="stroke-crimson-primary"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="50" r="10" className="fill-crimson-dark stroke-crimson-glow" />
        </svg>

        <span className="mt-4 font-mono text-xs text-neutral-muted tracking-wider uppercase">
          {message}
        </span>
      </div>
    </div>
  );
}
