"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THREE_PALETTE } from "../constants";

interface CoordinateFieldProps {
  count?: number;
  reducedMotion?: boolean;
}

// Pure deterministic pseudo-random number generator for React 19 render purity
function createSeededRandom(initialSeed: number) {
  let s = initialSeed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function CoordinateField({
  count = 140,
  reducedMotion = false,
}: CoordinateFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const crimsonColor = new THREE.Color(THREE_PALETTE.crimsonPrimary);
    const whiteColor = new THREE.Color(THREE_PALETTE.white);
    const mutedColor = new THREE.Color(THREE_PALETTE.muted);

    // Seeded pure generator ensures deterministic output across all renders
    const rng = createSeededRandom(42);

    for (let i = 0; i < count; i++) {
      // Atmospheric distribution across deep spherical shell
      const radius = 4.0 + rng() * 8.0;
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // 20% crimson, 50% muted, 30% soft-white
      const rand = rng();
      const chosenColor = rand < 0.2 ? crimsonColor : rand < 0.7 ? mutedColor : whiteColor;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_state, delta) => {
    if (reducedMotion || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
