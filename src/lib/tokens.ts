/**
 * Centralized Design Tokens for Gaurav Gupta Portfolio
 * Creative Direction: Deep Black, Refined Charcoal, Rich Crimson, Dark Burgundy, Soft White
 */

export const TOKENS = {
  colors: {
    void: {
      DEFAULT: "#050507",
      charcoal: "#0B0C0E",
      elevated: "#121316",
      subtle: "#181A20",
      border: "#23252E",
      borderBright: "#343744",
    },
    crimson: {
      glow: "#FF2E5B",
      primary: "#E11D48",
      deep: "#BE123C",
      dark: "#881337",
    },
    burgundy: {
      vivid: "#6B0D1E",
      deep: "#3D0811",
      void: "#1A0307",
    },
    neutral: {
      white: "#F4F4F6",
      light: "#E1E2E8",
      body: "#D1D2D9",
      muted: "#8E8F99",
      dark: "#52535F",
      dim: "#2A2C35",
    },
  },
  zIndex: {
    behind: -1,
    base: 0,
    surface: 10,
    elevated: 20,
    sticky: 30,
    navigation: 40,
    modal: 50,
    toast: 60,
    commandPalette: 70,
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
} as const;

export const SITE_METADATA = {
  title: "Gaurav Gupta — Software Development Engineer & Creative Technologist",
  description:
    "Engineering high-performance systems, robust web architectures, and immersive interactive digital experiences.",
  author: "Gaurav Gupta",
  role: "Software Development Engineer",
  locale: "en_US",
  themeColor: "#050507",
} as const;
