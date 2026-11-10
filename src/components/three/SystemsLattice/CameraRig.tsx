"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CameraRigProps {
  children?: React.ReactNode;
  reducedMotion?: boolean;
  enableParallax?: boolean;
  maxPanX?: number;
  maxPanY?: number;
  baseDistance?: number;
}

export function CameraRig({
  children,
  reducedMotion = false,
  enableParallax = true,
  maxPanX = 0.55,
  maxPanY = 0.35,
  baseDistance = 6.0,
}: CameraRigProps) {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Responsive distance framing: pull camera back on narrower aspect ratios
    // so all 6 core components (nucleus, wireframe cage, both rings, nodes, synapses, pulses)
    // remain completely in view on mobile and tablet without horizontal clipping
    const responsiveDistance = state.size.width < 640 ? 7.6 : state.size.width < 1024 ? 6.7 : baseDistance;
    const targetZ = -(responsiveDistance - 6.0);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 2.5, delta);

    if (reducedMotion) {
      groupRef.current.position.x = 0;
      groupRef.current.position.y = 0;
      groupRef.current.rotation.set(0, 0, 0);
      return;
    }

    timeRef.current += delta;
    const t = timeRef.current;
    const breathX = Math.sin(t * 0.3) * 0.08;
    const breathY = Math.cos(t * 0.25) * 0.06;
    const breathRotY = Math.sin(t * 0.2) * 0.04;
    const breathRotX = Math.cos(t * 0.18) * 0.03;

    if (enableParallax) {
      // Smooth parallax on scene group using normalized pointer coordinates + subtle ambient breath
      const targetRotY = state.pointer.x * maxPanX * 0.35 + breathRotY;
      const targetRotX = -state.pointer.y * maxPanY * 0.3 + breathRotX;
      const targetPosX = state.pointer.x * maxPanX * 0.45 + breathX;
      const targetPosY = state.pointer.y * maxPanY * 0.45 + breathY;

      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 2.5, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 2.5, delta);
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetPosX, 2.5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetPosY, 2.5, delta);
    } else {
      // Ambient breath mode when pointer tracking is disabled
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, breathRotY, 1.5, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, breathRotX, 1.5, delta);
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, breathX, 1.5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, breathY, 1.5, delta);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}
