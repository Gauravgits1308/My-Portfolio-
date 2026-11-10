/**
 * Central Project Configuration
 * 
 * Centralized registry of all project metadata, credentials, and external links.
 * Easily replace placeholder URLs with real deployment or repository URLs as they become available.
 */

export interface ProjectLinkConfig {
  url: string | null;
  isPlaceholder: boolean;
  label: string;
  placeholderMessage?: string;
}

export interface ProjectConfig {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tier: "featured" | "other";
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: string;
  summary: string;
  stack: string[];
  links: {
    liveDemo: ProjectLinkConfig;
    github: ProjectLinkConfig;
  };
  contextBadge?: {
    label: string;
    variant: "crimson" | "amber" | "neutral";
  };
}

export const PROJECTS_CONFIG: Record<string, ProjectConfig> = {
  revora: {
    id: "revora",
    title: "Revora — AI Codebase Intelligence",
    subtitle: "Converts large-scale GitHub repositories into queryable semantic knowledge graphs.",
    category: "FLAGSHIP AI & DISTRIBUTED SYSTEMS",
    tier: "featured",
    imageSrc: "/assets/Projects/Revora_LandingPage.png",
    imageAlt: "Revora Codebase Intelligence Platform Interface",
    aspectRatio: "16/9",
    summary:
      "Enterprise codebase comprehension platform that extracts GitHub repositories, parses source code into Abstract Syntax Trees (ASTs), executes deterministic semantic chunking, and persists vector embeddings in PostgreSQL with pgvector for grounded LLM reasoning.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma", "BullMQ", "Redis", "pgvector", "LLM Embeddings"],
    links: {
      // NOTE: Replace with production live deployment URL when public
      liveDemo: {
        url: null,
        isPlaceholder: true,
        label: "Live Demo",
        placeholderMessage: "Live production demo environment is currently in private preview.",
      },
      // NOTE: Replace with direct repository URL if open-sourced
      github: {
        url: "https://github.com/Gauravgits1308",
        isPlaceholder: false,
        label: "GitHub",
      },
    },
    contextBadge: {
      label: "Flagship Architectural Case Study",
      variant: "crimson",
    },
  },

  cafecloud: {
    id: "cafecloud",
    title: "Cafe Cloud — Restaurant Ordering Platform",
    subtitle: "Cloud-based food service ordering, kitchen dispatch, and inventory operations.",
    category: "FULL-STACK CLOUD PLATFORM",
    tier: "featured",
    imageSrc: "/assets/Projects/cafecloud.png",
    imageAlt: "Cafe Cloud Operations & Dining Dashboard",
    aspectRatio: "16/9",
    summary:
      "End-to-end restaurant management and ordering ecosystem featuring role-based ordering channels, real-time kitchen order ticketing, automated invoice generation, and synchronized stock tracking.",
    stack: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    links: {
      // NOTE: Replace with live demo URL when available
      liveDemo: {
        url: null,
        isPlaceholder: true,
        label: "Live Demo",
        placeholderMessage: "Live deployment demo is being migrated to staging.",
      },
      // NOTE: Replace with direct repository URL
      github: {
        url: "https://github.com/Gauravgits1308",
        isPlaceholder: false,
        label: "GitHub",
      },
    },
  },

  voterlist: {
    id: "voterlist",
    title: "Voter List Management System",
    subtitle: "Civic voter database management, electoral record search, and verification tooling.",
    category: "ENTERPRISE DATA SYSTEM",
    tier: "featured",
    imageSrc: "/assets/Projects/voter list.png",
    imageAlt: "Voter List Management System Administrative Interface",
    aspectRatio: "16/9",
    summary:
      "Scalable administrative data system engineered for regional electoral committees. Streamlines voter identity verification, fast multi-parameter census search, and relational integrity checking across large polling records.",
    stack: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS", "REST APIs"],
    links: {
      liveDemo: {
        url: null,
        isPlaceholder: true,
        label: "Live Demo",
        placeholderMessage: "Deployment requires authorized institutional election credentials.",
      },
      github: {
        url: "https://github.com/Gauravgits1308",
        isPlaceholder: false,
        label: "GitHub",
      },
    },
    contextBadge: {
      label: "Odoo × Adani National Hackathon Finalist Project",
      variant: "amber",
    },
  },

  portfolio: {
    id: "portfolio",
    title: "Personal Developer Portfolio Website",
    subtitle: "High-performance portfolio with Three.js spatial core and editorial design.",
    category: "CREATIVE ENGINEERING & WEB SYSTEMS",
    tier: "other",
    imageSrc: "/assets/Projects/Portfolio.png",
    imageAlt: "Personal Developer Portfolio Website Preview",
    aspectRatio: "16/9",
    summary:
      "Engineered with Next.js App Router, TypeScript, and Three.js. Implements responsive 3D lattice rendering, accessibility with reduced-motion compliance, and editorial typography.",
    stack: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
    links: {
      liveDemo: {
        url: "https://gauravgupta.dev",
        isPlaceholder: true,
        label: "Live Site",
        placeholderMessage: "You are currently viewing this portfolio system.",
      },
      github: {
        url: "https://github.com/Gauravgits1308",
        isPlaceholder: false,
        label: "GitHub",
      },
    },
    contextBadge: {
      label: "Active Production Codebase",
      variant: "neutral",
    },
  },
};

