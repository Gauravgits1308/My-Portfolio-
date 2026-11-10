"use client";

import React, { useMemo } from "react";
import { PolyhedralNucleus } from "./PolyhedralNucleus";
import { LatticeNodes, generateLatticeNodePositions } from "./LatticeNodes";
import { VectorSynapses } from "./VectorSynapses";
import { CoordinateField } from "./CoordinateField";
import { CameraRig } from "./CameraRig";
import { THREE_PALETTE, PERFORMANCE_PRESETS, type PerformancePreset } from "../constants";

export interface SystemsCoreProps {
  deviceType?: "desktop" | "tablet" | "mobile";
  reducedMotion?: boolean;
  wireframeVisible?: boolean;
  enableSynapses?: boolean;
  customPreset?: Partial<PerformancePreset>;
}

export function SystemsCore({
  deviceType = "desktop",
  reducedMotion = false,
  wireframeVisible = true,
  enableSynapses = true,
  customPreset,
}: SystemsCoreProps) {
  const basePreset = PERFORMANCE_PRESETS[deviceType];
  const preset: PerformancePreset = { ...basePreset, ...customPreset };

  const nodes = useMemo(
    () => generateLatticeNodePositions(preset.nodeCount),
    [preset.nodeCount]
  );

  return (
    <>
      {/* 1. Cinematic Restrained Lighting System */}
      <ambientLight intensity={0.35} color={THREE_PALETTE.white} />
      
      {/* Primary Key Directional Light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.1}
        color={THREE_PALETTE.white}
      />

      {/* Crimson Focal Rim Light */}
      <pointLight
        position={[-4.5, -3.5, 3]}
        intensity={2.4}
        color={THREE_PALETTE.crimsonPrimary}
        distance={14}
        decay={2}
      />

      {/* Deep Burgundy Atmospheric Fill Light */}
      <pointLight
        position={[4, 4.5, -2.5]}
        intensity={1.8}
        color={THREE_PALETTE.burgundyVivid}
        distance={12}
        decay={2}
      />

      {/* 2-6. Interactive Systems Monolith & Parallax Lattice */}
      <CameraRig
        reducedMotion={reducedMotion}
        enableParallax={preset.enablePointerParallax}
        baseDistance={deviceType === "mobile" ? 7.2 : 6.0}
      >
        {/* Polyhedral Core */}
        <PolyhedralNucleus
          reducedMotion={reducedMotion}
          wireframeVisible={wireframeVisible}
          scale={deviceType === "mobile" ? 0.85 : 1}
        />

        {/* Distributed Architecture Lattice Nodes */}
        <LatticeNodes
          nodes={nodes}
          reducedMotion={reducedMotion}
        />

        {/* Vector Synapses & Traveling Data Pulses */}
        {enableSynapses && nodes.length > 0 && (
          <VectorSynapses
            nodes={nodes}
            maxConnections={preset.maxSynapses}
            reducedMotion={reducedMotion}
          />
        )}

        {/* Deep Atmospheric Coordinate Particle Field */}
        <CoordinateField
          count={preset.particleCount}
          reducedMotion={reducedMotion}
        />
      </CameraRig>
    </>
  );
}
