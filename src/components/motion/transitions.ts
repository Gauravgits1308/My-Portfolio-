import type { Variants, Transition } from "framer-motion";

/**
 * Editorial Animation & Motion Constants
 * Tailored for high-craft, cinematic, and responsive interface interactions.
 */

export const EASINGS = {
  editorial: [0.16, 1, 0.3, 1] as const, // Primary smooth deceleration
  smooth: [0.25, 0.1, 0.25, 1] as const,
  outExpo: [0.19, 1, 0.22, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
};

export const DURATIONS = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.45,
  slow: 0.75,
  atmospheric: 1.2,
};

export const STAGGERS = {
  tight: 0.04,
  normal: 0.08,
  relaxed: 0.12,
  generous: 0.2,
};

export const defaultTransition: Transition = {
  duration: DURATIONS.normal,
  ease: EASINGS.editorial,
};

/**
 * Common Reusable Variants
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATIONS.fast, ease: EASINGS.smooth },
  },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: DURATIONS.fast, ease: EASINGS.smooth },
  },
};

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: DURATIONS.fast, ease: EASINGS.smooth },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: DURATIONS.fast, ease: EASINGS.smooth },
  },
};

export const createStaggerContainer = (
  staggerDelay: number = STAGGERS.normal,
  delayChildren: number = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: staggerDelay / 2,
      staggerDirection: -1,
    },
  },
});
