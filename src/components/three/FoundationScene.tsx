"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FoundationScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <>
      {/* Lighting tailored to crimson/burgundy atmosphere */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFFFFF" />
      <pointLight position={[-4, -4, -2]} intensity={2} color="#E11D48" distance={10} />
      <pointLight position={[3, 3, 2]} intensity={1.5} color="#6B0D1E" distance={8} />

      {/* Central geometric node */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#0B0C0E"
          emissive="#2B050B"
          roughness={0.2}
          metalness={0.85}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe outer shell */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#E11D48"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </>
  );
}
