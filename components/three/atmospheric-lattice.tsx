"use client";

import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { SystemLatticeMesh } from "./system-lattice-mesh";

interface AtmosphericLatticeProps {
  className?: string;
}

function isWebGLSupported(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Ultra-lightweight CSS/SVG fallback coordinate grid
 * Active for mobile, reduced-motion, low-power, or unsupported WebGL environments.
 */
function StaticLatticeFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ""}`}
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-muted)_0%,transparent_70%)] opacity-60" />

      {/* SVG Mathematical Grid Pattern */}
      <svg
        className="w-full h-full opacity-30 stroke-current text-secondary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="lattice-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <circle cx="0" cy="0" r="1" className="fill-accent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice-pattern)" />
      </svg>
    </div>
  );
}

export function AtmosphericLattice({ className }: AtmosphericLatticeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [canUseWebGL, setCanUseWebGL] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", onMotionChange);

    // 2. Check viewport size (disable heavy WebGL on mobile < 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // 3. Check WebGL support & hardware capability
    const webglOk = isWebGLSupported();
    const concurrencyOk =
      !navigator.hardwareConcurrency || navigator.hardwareConcurrency >= 4;
    setCanUseWebGL(webglOk && concurrencyOk);

    // 4. Viewport IntersectionObserver for Frameloop pause/resume
    if (containerRef.current && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
        motionQuery.removeEventListener("change", onMotionChange);
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Use fallback if conditions dictate
  const shouldUseFallback =
    !mounted ||
    !canUseWebGL ||
    webglError ||
    isMobile ||
    prefersReducedMotion;

  if (shouldUseFallback) {
    return <StaticLatticeFallback className={className} />;
  }

  // Dynamic frameloop: pauses rendering when scrolled out of view to free 100% of GPU/CPU cycles
  const frameloop = isInView && !prefersReducedMotion ? "always" : "never";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className || ""}`}
    >
      {/* Smooth Radial Vignette Mask: Prevents the 3D lattice from obscuring text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--bg-canvas)_80%)]" />

      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.2], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={() => {
          // Canvas initialized successfully
        }}
        onError={() => {
          setWebglError(true);
        }}
        className="w-full h-full pointer-events-none"
      >
        <SystemLatticeMesh interactive={!prefersReducedMotion} />
      </Canvas>
    </div>
  );
}
