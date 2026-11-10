"use client";

import React, { Suspense, Component, type ReactNode } from "react";
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
    console.warn("Three.js Canvas encountered an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface ThreeCanvasProps {
  children?: ReactNode;
  className?: string;
  fallbackMessage?: string;
  ariaLabel?: string;
  forceFallback?: boolean;
}

export function ThreeCanvas({
  children,
  className = "h-64 w-full",
  fallbackMessage,
  ariaLabel = "Interactive 3D Graphic Canvas",
  forceFallback = false,
}: ThreeCanvasProps) {
  const { isSupported, isChecking } = useWebGLSupport();

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
      className={`relative overflow-hidden ${className}`}
      role="region"
      aria-label={ariaLabel}
    >
      <ThreeErrorBoundary fallback={<WebGLFallback className={className} message={fallbackMessage} />}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
