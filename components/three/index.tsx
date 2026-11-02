"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loaded Three.js Atmospheric Lattice.
 * Evaluates dynamically on client side without blocking initial SSR or LCP.
 */
export const AtmosphericLattice = dynamic(
  () =>
    import("./atmospheric-lattice").then((mod) => mod.AtmosphericLattice),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-muted)_0%,transparent_70%)] opacity-40"
      />
    ),
  }
);
