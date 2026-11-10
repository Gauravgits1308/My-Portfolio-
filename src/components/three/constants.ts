/**
 * Design Token Hex Codes & Parameters for Three.js Environment
 * Deep Black, Refined Charcoal, Rich Crimson, Dark Burgundy, Soft White
 */

export const THREE_PALETTE = {
  void: "#050507",
  charcoal: "#0B0C0E",
  charcoalElevated: "#121316",
  charcoalBorder: "#23252E",
  crimsonPrimary: "#E11D48",
  crimsonGlow: "#FF2E5B",
  crimsonDeep: "#BE123C",
  burgundyVivid: "#6B0D1E",
  burgundyDeep: "#3D0811",
  burgundyVoid: "#1A0307",
  white: "#F4F4F6",
  muted: "#8E8F99",
  dark: "#52535F",
} as const;

export interface PerformancePreset {
  nodeCount: number;
  maxSynapses: number;
  particleCount: number;
  dprMax: number;
  enablePointerParallax: boolean;
}

export const PERFORMANCE_PRESETS: Record<"desktop" | "tablet" | "mobile", PerformancePreset> = {
  desktop: {
    nodeCount: 20,
    maxSynapses: 36,
    particleCount: 160,
    dprMax: 2,
    enablePointerParallax: true,
  },
  tablet: {
    nodeCount: 14,
    maxSynapses: 22,
    particleCount: 90,
    dprMax: 1.5,
    enablePointerParallax: true,
  },
  mobile: {
    nodeCount: 10,
    maxSynapses: 14,
    particleCount: 50,
    dprMax: 1.25,
    enablePointerParallax: false,
  },
};
