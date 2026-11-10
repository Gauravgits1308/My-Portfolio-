"use client";

import React, { useState } from "react";
import { EnvironmentCanvas } from "./EnvironmentCanvas";
import { SystemsCore } from "./SystemsLattice/SystemsCore";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useWebGLSupport } from "@/hooks/use-webgl-support";
import { PERFORMANCE_PRESETS } from "./constants";

export function InteractivePlayground() {
  const systemReducedMotion = useReducedMotion();
  const { isSupported: webglSupported } = useWebGLSupport();

  // Interactive verification states
  const [devicePreset, setDevicePreset] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [wireframeVisible, setWireframeVisible] = useState(true);
  const [enableSynapses, setEnableSynapses] = useState(true);
  const [manualReducedMotion, setManualReducedMotion] = useState(false);
  const [simulateFallback, setSimulateFallback] = useState(false);

  const activePreset = PERFORMANCE_PRESETS[devicePreset];
  const effectiveReducedMotion = systemReducedMotion || manualReducedMotion;

  return (
    <div className="space-y-6">
      {/* 3D Viewport Window */}
      <Card variant="default" className="relative overflow-hidden border-void-border">
        {/* Floating Ambient Status Overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
          <Badge
            variant={webglSupported && !simulateFallback ? "crimson" : "burgundy"}
            dot
            size="sm"
          >
            {webglSupported && !simulateFallback ? "Systems Lattice Online" : "WebGL Fallback Active"}
          </Badge>
          <Badge variant="default" size="sm">
            Preset: {devicePreset.toUpperCase()}
          </Badge>
          {effectiveReducedMotion && (
            <Badge variant="outline" size="sm">
              Reduced Motion Active
            </Badge>
          )}
        </div>

        {/* 3D Canvas Container */}
        <div className="h-[420px] sm:h-[500px] w-full bg-void-charcoal/40">
          <EnvironmentCanvas
            className="h-full w-full"
            forceFallback={simulateFallback}
            maxDpr={activePreset.dprMax}
            fallbackMessage="Static Architectural Schematic (WebGL Fallback)"
            ariaLabel="Interactive Systems Architecture 3D Universe"
          >
            <SystemsCore
              deviceType={devicePreset}
              reducedMotion={effectiveReducedMotion}
              wireframeVisible={wireframeVisible}
              enableSynapses={enableSynapses}
            />
          </EnvironmentCanvas>
        </div>
      </Card>

      {/* Interactive Controls & Telemetry Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-7">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-base">Environment Controls & Stress Testing</CardTitle>
              <CardDescription>
                Test dynamic geometry scaling, synaptic data pulses, and accessibility fallbacks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Presets Switcher */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-neutral-muted uppercase tracking-wider">
                  Target Geometry Density & Complexity:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={devicePreset === "desktop" ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => setDevicePreset("desktop")}
                  >
                    Desktop (High)
                  </Button>
                  <Button
                    variant={devicePreset === "tablet" ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => setDevicePreset("tablet")}
                  >
                    Tablet (Balanced)
                  </Button>
                  <Button
                    variant={devicePreset === "mobile" ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => setDevicePreset("mobile")}
                  >
                    Mobile (Optimized)
                  </Button>
                </div>
              </div>

              {/* Feature Toggles */}
              <div className="space-y-2 pt-2 border-t border-void-border/60">
                <span className="font-mono text-xs text-neutral-muted uppercase tracking-wider">
                  Architectural Layers:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={wireframeVisible ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setWireframeVisible(!wireframeVisible)}
                  >
                    {wireframeVisible ? "Hide Wireframe Shell" : "Show Wireframe Shell"}
                  </Button>
                  <Button
                    variant={enableSynapses ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setEnableSynapses(!enableSynapses)}
                  >
                    {enableSynapses ? "Disable Synaptic Pulses" : "Enable Synaptic Pulses"}
                  </Button>
                  <Button
                    variant={manualReducedMotion ? "burgundy" : "outline"}
                    size="sm"
                    onClick={() => setManualReducedMotion(!manualReducedMotion)}
                  >
                    {manualReducedMotion ? "Resume Motion" : "Test Reduced Motion"}
                  </Button>
                  <Button
                    variant={simulateFallback ? "burgundy" : "secondary"}
                    size="sm"
                    onClick={() => setSimulateFallback(!simulateFallback)}
                  >
                    {simulateFallback ? "Restore Hardware WebGL" : "Simulate WebGL Fail"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Telemetry Column */}
        <div className="lg:col-span-5">
          <Card variant="default">
            <CardHeader>
              <CardTitle className="text-base">Systems Telemetry</CardTitle>
              <CardDescription>
                Live hardware, resource usage, and scene parameters.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-void-border bg-void-elevated/50">
                <span className="text-neutral-muted">WebGL Status:</span>
                <span className={webglSupported && !simulateFallback ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                  {webglSupported && !simulateFallback ? "Hardware Accelerated" : "Fallback Mode"}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-void-border bg-void-elevated/50">
                <span className="text-neutral-muted">Lattice Nodes:</span>
                <span className="text-neutral-light">{activePreset.nodeCount} Distributed Nodes</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-void-border bg-void-elevated/50">
                <span className="text-neutral-muted">Vector Synapses:</span>
                <span className="text-neutral-light">{enableSynapses ? `${activePreset.maxSynapses} Pathways` : "Disabled"}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-void-border bg-void-elevated/50">
                <span className="text-neutral-muted">Coordinate Particles:</span>
                <span className="text-neutral-light">{activePreset.particleCount} Deep Space Points</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-void-border bg-void-elevated/50">
                <span className="text-neutral-muted">DPR Cap:</span>
                <span className="text-neutral-light">Max {activePreset.dprMax}x</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-void-border bg-void-elevated/50">
                <span className="text-neutral-muted">Pointer Parallax:</span>
                <span className="text-neutral-light">
                  {effectiveReducedMotion ? "Locked (Stationary)" : activePreset.enablePointerParallax ? "Damped Track [Active]" : "Ambient Breath Mode"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
