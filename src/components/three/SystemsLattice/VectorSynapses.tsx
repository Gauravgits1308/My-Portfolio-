"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THREE_PALETTE } from "../constants";
import type { NodePoint } from "./LatticeNodes";

interface VectorSynapsesProps {
  nodes: NodePoint[];
  maxConnections?: number;
  connectionThreshold?: number;
  reducedMotion?: boolean;
}

interface SynapseConnection {
  start: THREE.Vector3;
  end: THREE.Vector3;
  length: number;
}

export function VectorSynapses({
  nodes,
  maxConnections = 36,
  connectionThreshold = 2.6,
  reducedMotion = false,
}: VectorSynapsesProps) {
  // 1. Calculate static synaptic pathways between proximate nodes
  const { connections, linePositions } = useMemo(() => {
    const list: SynapseConnection[] = [];
    const positions: number[] = [];

    for (let i = 0; i < nodes.length; i++) {
      const p1 = new THREE.Vector3(...nodes[i].position);

      for (let j = i + 1; j < nodes.length; j++) {
        if (list.length >= maxConnections) break;

        const p2 = new THREE.Vector3(...nodes[j].position);
        const dist = p1.distanceTo(p2);

        if (dist <= connectionThreshold && dist > 0.5) {
          list.push({ start: p1, end: p2, length: dist });
          positions.push(p1.x, p1.y, p1.z);
          positions.push(p2.x, p2.y, p2.z);
        }
      }
      if (list.length >= maxConnections) break;
    }

    return {
      connections: list,
      linePositions: new Float32Array(positions),
    };
  }, [nodes, maxConnections, connectionThreshold]);

  // 2. Data pulse packets traveling along synapses
  const pulseCount = Math.min(connections.length, 12);
  const pulsesRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Track progress of each pulse [0..1]
  const pulseProgress = useRef<number[]>(
    Array.from({ length: pulseCount }, (_, i) => i / pulseCount)
  );

  useFrame((_state, delta) => {
    if (!pulsesRef.current || connections.length === 0) return;

    for (let i = 0; i < pulseCount; i++) {
      if (!reducedMotion) {
        pulseProgress.current[i] = (pulseProgress.current[i] + delta * 0.4) % 1;
      }
      const conn = connections[i % connections.length];
      const t = pulseProgress.current[i];

      // Linear interpolation between start and end nodes
      dummy.position.lerpVectors(conn.start, conn.end, t);
      dummy.scale.setScalar(0.08);
      dummy.updateMatrix();

      pulsesRef.current.setMatrixAt(i, dummy.matrix);
    }

    pulsesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Structural Synaptic Vector Wireframe */}
      {linePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={THREE_PALETTE.crimsonPrimary}
            transparent
            opacity={0.42}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}

      {/* Traveling Data Pulses Instanced Mesh */}
      {pulseCount > 0 && (
        <instancedMesh
          ref={pulsesRef}
          args={[undefined, undefined, pulseCount]}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial
            color={THREE_PALETTE.crimsonGlow}
            transparent
            opacity={0.95}
          />
        </instancedMesh>
      )}
    </group>
  );
}
