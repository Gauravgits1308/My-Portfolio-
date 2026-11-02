import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        canvas: "var(--bg-canvas)",
        surface: {
          DEFAULT: "var(--bg-surface)",
          elevated: "var(--bg-surface-elevated)",
          subtle: "var(--bg-surface-subtle)",
        },
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        inverse: "var(--text-inverse)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          muted: "var(--accent-muted)",
          glow: "var(--accent-glow)",
        },
        border: {
          subtle: "var(--border-subtle)",
          medium: "var(--border-medium)",
          strong: "var(--border-strong)",
          accent: "var(--border-accent)",
        },
        status: {
          success: "var(--color-success)",
          warning: "var(--color-warning)",
          error: "var(--color-error)",
          info: "var(--color-info)",
        },
      },
      borderColor: {
        DEFAULT: "var(--border-subtle)",
        subtle: "var(--border-subtle)",
        medium: "var(--border-medium)",
        strong: "var(--border-strong)",
        accent: "var(--border-accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        display: [
          "4.25rem",
          { lineHeight: "1.08", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        headline: [
          "3.00rem",
          { lineHeight: "1.15", letterSpacing: "-0.030em", fontWeight: "600" },
        ],
        h1: [
          "2.25rem",
          { lineHeight: "1.20", letterSpacing: "-0.025em", fontWeight: "600" },
        ],
        h2: [
          "1.75rem",
          { lineHeight: "1.28", letterSpacing: "-0.020em", fontWeight: "500" },
        ],
        h3: [
          "1.25rem",
          { lineHeight: "1.38", letterSpacing: "-0.015em", fontWeight: "500" },
        ],
        h4: [
          "1.125rem",
          { lineHeight: "1.45", letterSpacing: "-0.010em", fontWeight: "500" },
        ],
        "body-large": [
          "1.125rem",
          { lineHeight: "1.65", letterSpacing: "0.000em", fontWeight: "400" },
        ],
        body: [
          "1.000rem",
          { lineHeight: "1.65", letterSpacing: "0.000em", fontWeight: "400" },
        ],
        "body-small": [
          "0.875rem",
          { lineHeight: "1.55", letterSpacing: "+0.005em", fontWeight: "400" },
        ],
        caption: [
          "0.750rem",
          { lineHeight: "1.40", letterSpacing: "+0.015em", fontWeight: "500" },
        ],
        "mono-header": [
          "0.875rem",
          { lineHeight: "1.40", letterSpacing: "+0.040em", fontWeight: "500" },
        ],
        "mono-body": [
          "0.875rem",
          { lineHeight: "1.50", letterSpacing: "0.000em", fontWeight: "400" },
        ],
        "mono-micro": [
          "0.750rem",
          { lineHeight: "1.35", letterSpacing: "+0.030em", fontWeight: "500" },
        ],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        modal: "var(--shadow-modal)",
      },
      transitionTimingFunction: {
        editorial: "var(--ease-editorial)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        medium: "var(--duration-medium)",
        slow: "var(--duration-slow)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-6": "24px",
        "space-8": "32px",
        "space-12": "48px",
        "space-16": "64px",
        "space-24": "96px",
        "space-32": "128px",
      },
    },
  },
  plugins: [],
};

export default config;
