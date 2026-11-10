"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THREE_PALETTE } from "../constants";

export interface NodePoint {
  id: number;
  position: [number, number, number];
  basePosition: [number, number, number];
  size: number;
  phase: number;
  speed: number;
}

interface LatticeNodesProps {
  nodes?: NodePoint[];
  nodeCount?: number;
  reducedMotion?: boolean;
}

export function generateLatticeNodePositions(count: number): NodePoint[] {
  const nodes: NodePoint[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    // Spherical Fibonacci distribution
    const theta = 2 * Math.PI * i / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    
    // Controlled variable radial distance between 2.8 and 4.8
    const r = 2.8 + (i % 5) * 0.45;
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    nodes.push({
      id: i,
      position: [x, y, z],
      basePosition: [x, y, z],
      size: 0.16 + (i % 3) * 0.05,
      phase: (i * 0.7) % (Math.PI * 2),
      speed: 0.6 + (i % 4) * 0.2,
    });
  }

  return nodes;
}

export function LatticeNodes({
  nodes: externalNodes,
  nodeCount = 20,
  reducedMotion = false,
}: LatticeNodesProps) {
  const nodes = useMemo(() => {
    if (externalNodes && externalNodes.length > 0) return externalNodes;
    return generateLatticeNodePositions(nodeCount);
  }, [externalNodes, nodeCount]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    if (groupRef.current) {
      // Gentle overall network precession
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <group key={node.id} position={node.position}>
          {/* Diamond Node Geometry */}
          <mesh>
            <octahedronGeometry args={[node.size, 0]} />
            <meshStandardMaterial
              color={node.id % 3 === 0 ? THREE_PALETTE.crimsonPrimary : THREE_PALETTE.charcoalElevated}
              emissive={node.id % 3 === 0 ? THREE_PALETTE.crimsonDeep : THREE_PALETTE.charcoal}
              emissiveIntensity={0.7}
              roughness={0.25}
              metalness={0.75}
            />
          </mesh>

          {/* Focal core point beacon */}
          <mesh>
            <sphereGeometry args={[node.size * 0.42, 8, 8]} />
            <meshBasicMaterial
              color={node.id % 2 === 0 ? THREE_PALETTE.crimsonGlow : THREE_PALETTE.white}
              transparent
              opacity={0.95}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
