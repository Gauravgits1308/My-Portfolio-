import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#050507",
          charcoal: "#0B0C0E",
          elevated: "#121316",
          subtle: "#181A20",
          border: "#23252E",
          "border-bright": "#343744",
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
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        "crimson-glow": "0 0 40px -10px rgba(225, 29, 72, 0.35)",
        "crimson-glow-sm": "0 0 20px -5px rgba(225, 29, 72, 0.25)",
        "burgundy-glow": "0 0 60px -15px rgba(74, 14, 23, 0.4)",
        "surface-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "radial-crimson-subtle": "radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.12) 0%, rgba(5, 5, 7, 0) 70%)",
        "radial-burgundy-deep": "radial-gradient(circle at 100% 100%, rgba(61, 8, 17, 0.3) 0%, rgba(5, 5, 7, 0) 65%)",
        "grid-subtle": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "name-shimmer": "name-shimmer 7s ease-in-out infinite",
        "hero-sweep": "hero-sweep 8s ease-in-out infinite",
        "hero-light-sweep": "hero-light-sweep 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "accent-sweep": "accent-sweep 6s ease-in-out infinite",
        "accent-expand": "accent-expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
        "accent-pulse": "accent-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "name-shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "hero-sweep": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "hero-light-sweep": {
          "0%": { backgroundPosition: "200% 0", opacity: "0.8" },
          "100%": { backgroundPosition: "-50% 0", opacity: "1" },
        },
        "accent-sweep": {
          "0%, 100%": { transform: "scaleX(0.5) translateX(-10%)", opacity: "0.4" },
          "50%": { transform: "scaleX(1) translateX(0%)", opacity: "0.95" },
        },
        "accent-expand": {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        "accent-pulse": {
          "0%, 100%": { transform: "scaleX(0.7)", opacity: "0.5" },
          "50%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
