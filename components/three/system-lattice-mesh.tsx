"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "@/components/theme-provider";

interface SystemLatticeMeshProps {
  interactive?: boolean;
}

export function SystemLatticeMesh({ interactive = true }: SystemLatticeMeshProps) {
  const { resolvedTheme } = useTheme();
  const groupRef = useRef<THREE.Group>(null);

  // Mesh resolution: 24x24 segments = 625 vertices (lightweight & well below 1,200 limit)
  const segments = 24;
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(6.5, 6.5, segments, segments);
  }, []);

  // Store initial resting vertex positions for zero-allocation wave calculations
  const initialPositions = useMemo(() => {
    return new Float32Array(geometry.attributes.position.array);
  }, [geometry]);

  // Theme-calibrated colors adhering strictly to Section 11 of DESIGN_SYSTEM.md
  const isDark = resolvedTheme === "dark";
  const wireframeColor = useMemo(
    () => (isDark ? new THREE.Color("#F4F5F7") : new THREE.Color("#0F141C")),
    [isDark]
  );
  const nodeColor = useMemo(
    () => (isDark ? new THREE.Color("#65E6CF") : new THREE.Color("#0B7C68")),
    [isDark]
  );

  const wireframeOpacity = isDark ? 0.12 : 0.09;
  const nodeOpacity = isDark ? 0.65 : 0.50;

  // Single in-place frame update with zero runtime object allocations
  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime() * 0.45;
    const posAttr = geometry.attributes.position;
    const count = posAttr.count;

    // Gentle pointer influence with heavy damping
    const mouseX = interactive ? pointer.x * 0.15 : 0;
    const mouseY = interactive ? pointer.y * 0.15 : 0;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const x = initialPositions[idx];
      const y = initialPositions[idx + 1];

      // Sinusoidal mathematical wave equation
      const wave =
        Math.sin(x * 0.85 + time + mouseX) *
        Math.cos(y * 0.85 + time + mouseY) *
        0.24;

      posAttr.setZ(i, wave);
    }

    posAttr.needsUpdate = true;

    // Subtle gentle overall rotation
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.04;
    }
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 3.4, 0, Math.PI / 7]}>
      {/* Structural Wireframe Grid Lines */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          wireframe
          color={wireframeColor}
          transparent
          opacity={wireframeOpacity}
          depthWrite={false}
        />
      </mesh>

      {/* Sparse System Nodes at Vertex Intersections */}
      <points geometry={geometry}>
        <pointsMaterial
          size={0.07}
          color={nodeColor}
          transparent
          opacity={nodeOpacity}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
