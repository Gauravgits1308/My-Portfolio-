"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THREE_PALETTE } from "../constants";

interface PolyhedralNucleusProps {
  reducedMotion?: boolean;
  wireframeVisible?: boolean;
  scale?: number;
}

export function PolyhedralNucleus({
  reducedMotion = false,
  wireframeVisible = true,
  scale = 1,
}: PolyhedralNucleusProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (reducedMotion) return;

    // Smooth architectural rotations at differing rates and axes
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.18;
      coreRef.current.rotation.x += delta * 0.08;
    }
    if (outerCageRef.current) {
      outerCageRef.current.rotation.y -= delta * 0.12;
      outerCageRef.current.rotation.z += delta * 0.14;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.22;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.16;
    }
  });

  return (
    <group scale={scale}>
      {/* 1. Inner Crystalline Polyhedral Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.25, 0]} />
        <meshStandardMaterial
          color={THREE_PALETTE.charcoalElevated}
          emissive={THREE_PALETTE.burgundyVivid}
          emissiveIntensity={0.85}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* 2. Outer Architectural Wireframe Cage */}
      {wireframeVisible && (
        <mesh ref={outerCageRef}>
          <icosahedronGeometry args={[1.75, 1]} />
          <meshBasicMaterial
            color={THREE_PALETTE.crimsonPrimary}
            wireframe
            transparent
            opacity={0.55}
          />
        </mesh>
      )}

      {/* 3. Gyroscopic Orbital Coordinate Ring 1 */}
      <group ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.1, 0.02, 12, 64]} />
          <meshBasicMaterial
            color={THREE_PALETTE.crimsonGlow}
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>

      {/* 4. Gyroscopic Orbital Coordinate Ring 2 */}
      <group ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.42, 0.016, 12, 64]} />
          <meshBasicMaterial
            color={THREE_PALETTE.white}
            transparent
            opacity={0.38}
          />
        </mesh>
      </group>
    </group>
  );
}
