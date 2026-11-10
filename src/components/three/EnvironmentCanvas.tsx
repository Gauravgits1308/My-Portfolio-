"use client";

import React, { Suspense, Component, useState, useEffect, useRef, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { useWebGLSupport } from "@/hooks/use-webgl-support";
import { WebGLFallback } from "./WebGLFallback";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ThreeErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn("Three.js EnvironmentCanvas caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export interface EnvironmentCanvasProps {
  children?: ReactNode;
  className?: string;
  fallbackMessage?: string;
  ariaLabel?: string;
  forceFallback?: boolean;
  maxDpr?: number;
  pauseWhenHidden?: boolean;
}


export function EnvironmentCanvas({
  children,
  className = "h-96 w-full",
  fallbackMessage,
  ariaLabel = "Interactive Systems Architecture Environment",
  forceFallback = false,
  maxDpr = 2,
  pauseWhenHidden = true,
}: EnvironmentCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSupported, isChecking } = useWebGLSupport();
  const [isInViewport, setIsInViewport] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);

  // IntersectionObserver to pause continuous rendering when scrolled out of view
  useEffect(() => {
    if (!pauseWhenHidden || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const currentEl = containerRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "250px" }
    );

    observer.observe(currentEl);
    return () => observer.disconnect();
  }, [pauseWhenHidden]);

  // Page visibility listener to pause rendering when browser tab is inactive
  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const shouldRender = isInViewport && isTabVisible;

  if (isChecking) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-void-border bg-void-charcoal ${className}`}
        aria-busy="true"
        aria-label="Initializing 3D environment"
      >
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-crimson-primary border-t-transparent" />
      </div>
    );
  }

  if (!isSupported || forceFallback) {
    return <WebGLFallback className={className} message={fallbackMessage} />;
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      role="region"
      aria-label={ariaLabel}
    >
      <ThreeErrorBoundary fallback={<WebGLFallback className={className} message={fallbackMessage} />}>
        <Canvas
          frameloop={shouldRender ? "always" : "demand"}
          dpr={[1, maxDpr]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          onCreated={({ gl, scene, camera }) => {
            if (typeof window !== "undefined") {
              Object.assign(window, {
                __THREE_SCENE__: scene,
                __THREE_CAMERA__: camera,
              });
            }
            // Clean disposal hook configuration
            gl.domElement.addEventListener("webglcontextlost", (event) => {
              event.preventDefault();
              console.warn("WebGL context lost. Entering fallback mode.");
            });
          }}
        >
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
