"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  Database,
  Server,
  Sparkles,
  CheckCircle2,
  Trophy,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ImageModal } from "@/components/ui/ImageModal";
import { ProjectDetailModal, ProjectDetailData } from "@/components/ui/ProjectDetailModal";
import { RevoraArchitectureModal } from "@/components/modals/RevoraArchitectureModal";
import { PROJECTS_CONFIG, ProjectLinkConfig } from "@/config/projects";

const REVORA_VIEWS = [
  {
    id: "landing",
    label: "01. Platform Interface",
    src: "/assets/Projects/Revora_LandingPage.png",
    alt: "Revora Landing Page & Repository Connector Interface",
    caption: "Production interface for authenticated GitHub repository connection and AST ingestion.",
  },
  {
    id: "dashboard",
    label: "02. Knowledge Dashboard",
    src: "/assets/Projects/Revora2.png",
    alt: "Revora Repository Knowledge Synchronization Dashboard",
    caption: "Dashboard tracking repository sync state, file hierarchies, and vector indexing health.",
  },
  {
    id: "search",
    label: "03. Semantic Search",
    src: "/assets/Projects/Revora3.png",
    alt: "Revora Codebase Semantic Search and Reasoning View",
    caption: "AST-indexed semantic query interface answering contextual code questions.",
  },
];

const PROJECT_DETAILS: Record<string, ProjectDetailData> = {
  revora: {
    id: "revora",
    title: "Revora — AI Codebase Intelligence",
    subtitle: "Converts large-scale GitHub repositories into queryable semantic knowledge graphs.",
    category: "FLAGSHIP AI & DISTRIBUTED SYSTEMS",
    imageSrc: "/assets/Projects/Revora_LandingPage.png",
    imageAlt: "Revora Platform Interface",
    overview:
      "Understanding large codebases with thousands of files is difficult because traditional line-based chunking slices functions and classes arbitrarily, severing architectural context. Revora solves this by extracting GitHub repositories, parsing source code into Abstract Syntax Trees (ASTs), generating semantic embeddings for discrete functions and modules, storing them in PostgreSQL with pgvector, and reasoning over them with language models.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "pgvector", "LLM Embeddings"],
    githubUrl: "https://github.com/Gauravgits1308",
    technicalHighlights: [
      { label: "Core Processing", value: "AST Chunking Pipeline" },
      { label: "Worker Queue", value: "BullMQ / Redis Async" },
      { label: "Database Layer", value: "PostgreSQL & pgvector" },
    ],
    implementedCapabilities: [
      {
        title: "AST-Based Code Chunking",
        description: "Parses source files into syntax trees to preserve functions, classes, and logic blocks intact.",
      },
      {
        title: "Background Asynchronous Workers",
        description: "Uses BullMQ and Redis to process repository ingestion and embedding generation without blocking web requests.",
      },
      {
        title: "Relational Health Dashboard",
        description: "Tracks repository sync status, file trees, and indexing state via PostgreSQL and Prisma ORM.",
      },
      {
        title: "Semantic Vector Search & Q&A",
        description: "Enables natural-language questions over code context utilizing cosine vector similarity search combined with LLM reasoning.",
      },
    ],
    plannedRoadmap: [
      {
        title: "Hybrid Search (BM25 + Dense Vectors)",
        description: "Combining exact keyword token matching with semantic vector retrieval for specialized identifiers.",
      },
      {
        title: "Cross-Repository Dependency Graphs",
        description: "Visualizing architectural linkages and function calls spanning multiple decoupled services.",
      },
      {
        title: "Automated Webhook PR Sync",
        description: "Incremental re-indexing triggered automatically on GitHub pull requests and commit pushes.",
      },
      {
        title: "Re-Ranking Model Pipeline",
        description: "Secondary re-ranking stage prior to LLM context synthesis to optimize token utilization.",
      },
    ],
  },
  cafecloud: {
    id: "cafecloud",
    title: "Cafe Cloud — Restaurant Ordering & Operations Platform",
    subtitle: "Cloud-based food service ordering, kitchen dispatch, and inventory management.",
    category: "FULL-STACK CLOUD PLATFORM",
    imageSrc: "/assets/Projects/cafecloud.png",
    imageAlt: "Cafe Cloud Operations Dashboard",
    overview:
      "A complete food service ordering and kitchen workflow platform built to streamline menu synchronization, order dispatch workflows, table billing, and dining inventory tracking.",
    stack: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "RESTful APIs"],
    githubUrl: "https://github.com/Gauravgits1308",
    technicalHighlights: [
      { label: "Order Flow", value: "Real-Time Dispatch" },
      { label: "Database", value: "Relational Schemas" },
      { label: "Architecture", value: "Decoupled REST API" },
    ],
    implementedCapabilities: [
      {
        title: "Role-Based Ordering Channels",
        description: "Enables customer self-ordering, cashier terminal billing, and administrative menu catalog updates.",
      },
      {
        title: "Live Kitchen Dispatch Queues",
        description: "Synchronizes orders across prep stations to coordinate cooking workflows without lost tickets.",
      },
      {
        title: "Automated Billing & Receipts",
        description: "Generates itemized digital receipts with integrated tax calculations and daily ledger summaries.",
      },
      {
        title: "Inventory Depletion Tracking",
        description: "Deducts stock balances proportionally on dish fulfillment to provide restock alerts.",
      },
    ],
    plannedRoadmap: [
      {
        title: "Payment Gateway Webhooks",
        description: "Direct reconciliation with automated refund handling via payment provider callbacks.",
      },
      {
        title: "Predictive Demand Analytics",
        description: "Heuristic forecast of inventory demand based on historical peak dining windows.",
      },
    ],
  },
  voterlist: {
    id: "voterlist",
    title: "Voter List Management System",
    subtitle: "Civic voter database management, electoral record search, and verification tooling.",
    category: "ENTERPRISE DATA SYSTEM",
    imageSrc: "/assets/Projects/voter list.png",
    imageAlt: "Voter List Management System Administrative Interface",
    overview:
      "A data management platform engineered for regional electoral committees to maintain verified voting registries, search multi-field demographic census records, and audit polling data integrity.",
    stack: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS", "RESTful APIs"],
    githubUrl: "https://github.com/Gauravgits1308",
    technicalHighlights: [
      { label: "Data Integrity", value: "ACID Transactions" },
      { label: "Query Engine", value: "Indexed SQL Search" },
      { label: "Recognition", value: "Hackathon Finalist" },
    ],
    implementedCapabilities: [
      {
        title: "Multi-Parameter Citizen Search",
        description: "Instant lookups across electoral rolls by voter ID, national identity, residential ward, or family unit.",
      },
      {
        title: "Audit Logs & Transaction Tracking",
        description: "Maintains immutable records of voter registry additions, transfers, and corrections.",
      },
      {
        title: "Polling Station Allocation",
        description: "Assigns registered citizens to designated voting booths based on spatial boundaries.",
      },
      {
        title: "Electoral Roll Export Utility",
        description: "Generates formatted regulatory polling rosters ready for official administrative printing.",
      },
    ],
    plannedRoadmap: [
      {
        title: "Biometric Verification Integration",
        description: "Hardware token matching for on-site physical polling validation.",
      },
      {
        title: "Distributed Read Replicas",
        description: "Optimizing read throughput during election-day census surge lookups.",
      },
    ],
  },
  portfolio: {
    id: "portfolio",
    title: "Personal Developer Portfolio Website",
    subtitle: "High-performance portfolio with Three.js spatial core and editorial design.",
    category: "CREATIVE ENGINEERING & WEB SYSTEMS",
    imageSrc: "/assets/Projects/Portfolio.png",
    imageAlt: "Personal Developer Portfolio Website Preview",
    overview:
      "A meticulously designed developer portfolio crafted with Next.js App Router, TypeScript, and Three.js. Showcases distributed systems, technical projects, and systems architecture with dark crimson aesthetics, reduced-motion accessibility, and interactive 3D spatial scenes.",
    stack: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Gauravgits1308",
    technicalHighlights: [
      { label: "Frontend Core", value: "Next.js App Router" },
      { label: "Spatial Graphics", value: "Three.js Lattice" },
      { label: "Styling System", value: "Tailwind CSS" },
    ],
    implementedCapabilities: [
      {
        title: "Three.js Polyhedral Lattice",
        description: "Real-time interactive 3D spatial scene with low-power pause when scrolled out of viewport.",
      },
      {
        title: "Accessible Motion Controls",
        description: "Zero layout shift with full media prefers-reduced-motion fallback compatibility.",
      },
      {
        title: "Architectural Deep-Dives",
        description: "Custom SVG diagrammatic workflows and structured technical decision breakdowns.",
      },
      {
        title: "Validated Contact Integration",
        description: "Client-side validation with reliable native mailto draft generation.",
      },
    ],
    plannedRoadmap: [
      {
        title: "Interactive WebGL Shaders",
        description: "Custom GLSL noise uniforms reflecting ambient mouse gestures.",
      },
      {
        title: "Full Case-Study Blog Engine",
        description: "MDX-powered technical writing engine for engineering deep dives.",
      },
    ],
  },
};

export function ProjectsSection() {
  const [selectedRevoraView, setSelectedRevoraView] = useState<number>(0);
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetailData | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string; caption?: string } | null>(null);
  const [showArchModal, setShowArchModal] = useState<boolean>(false);
  const [placeholderToast, setPlaceholderToast] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent, link: ProjectLinkConfig) => {
    if (link.isPlaceholder || !link.url) {
      e.preventDefault();
      setPlaceholderToast(link.placeholderMessage || `${link.label} link is in private staging.`);
      setTimeout(() => setPlaceholderToast(null), 3800);
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-void-border/30 scroll-mt-16 relative">
      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-16">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 01. SELECTED WORKS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Project Showcase
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Architectural Case Studies, Distributed Systems &amp; Web Platforms
            </p>
          </div>

          {/* Placeholder Notification Toast */}
          {placeholderToast && (
            <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl border border-crimson-primary/40 bg-void-charcoal/95 text-neutral-white shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
              <Info className="h-4 w-4 text-crimson-glow shrink-0" />
              <p className="font-mono text-xs text-neutral-light">{placeholderToast}</p>
            </div>
          )}

          {/* CATEGORY 1: FEATURED PROJECTS */}
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-crimson-primary/30">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-crimson-glow animate-pulse" />
                  <span className="font-mono text-[10px] text-crimson-glow uppercase tracking-widest font-semibold">
                    TIER 01 • PRIMARY ARCHITECTURAL BUILDS
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-white">
                  Featured Projects
                </h3>
              </div>
              <p className="font-mono text-xs text-neutral-muted sm:text-right">
                Flagship AI, Distributed Backends &amp; Production Systems
              </p>
            </div>

            {/* PROJECT 1: REVORA (FLAGSHIP PROJECT) */}
            <div className="rounded-2xl border border-void-border/70 bg-void-charcoal/30 overflow-hidden shadow-2xl hover:border-crimson-primary/30 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Project Metadata & Description */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] tracking-wider text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/30 uppercase font-semibold">
                        FLAGSHIP AI &amp; DISTRIBUTED SYSTEMS
                      </span>
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] text-neutral-muted bg-void-elevated border border-void-border">
                        Production Implementation
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-4xl font-bold text-neutral-white">
                      Revora — AI-Powered Codebase Intelligence
                    </h3>

                    <p className="font-light text-sm sm:text-base text-neutral-light leading-relaxed">
                      Converts large-scale GitHub repositories into queryable semantic knowledge graphs. 
                      Extracts repositories, parses source code into Abstract Syntax Trees (ASTs), executes deterministic chunking, 
                      and stores vector embeddings in PostgreSQL with pgvector for grounded LLM reasoning.
                    </p>

                    {/* Verified Technical Highlights */}
                    <div className="grid grid-cols-3 gap-2 py-2">
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">PARSING</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          AST Tree-sitter
                        </span>
                      </div>
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">WORKER QUEUE</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          BullMQ + Redis
                        </span>
                      </div>
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">PERSISTENCE</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          Postgres / pgvector
                        </span>
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {PROJECTS_CONFIG.revora.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md border border-void-border bg-void-elevated font-mono text-xs text-neutral-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Revora Action Strip */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-void-border/40">
                    {/* Dedicated Architecture Trigger */}
                    <button
                      onClick={() => setShowArchModal(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-crimson-primary/20 hover:translate-y-[-1px]"
                    >
                      <Cpu className="h-4 w-4" />
                      <span>Architecture Blueprint</span>
                    </button>

                    <button
                      onClick={() => setActiveModalProject(PROJECT_DETAILS.revora)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-void-border-bright bg-void-elevated hover:bg-void-border text-neutral-white font-mono text-xs font-medium transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5 text-crimson-glow" />
                    </button>

                    {/* Live Demo Button (Clearly marked private preview) */}
                    <button
                      type="button"
                      onClick={(e) => handleLinkClick(e, PROJECTS_CONFIG.revora.links.liveDemo)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-void-border bg-void-charcoal hover:border-crimson-primary/40 text-neutral-light hover:text-white font-mono text-xs transition-colors cursor-pointer"
                      title={PROJECTS_CONFIG.revora.links.liveDemo.placeholderMessage}
                    >
                      <span>Live Demo</span>
                      <span className="text-[10px] text-neutral-muted font-normal">(Preview)</span>
                    </button>

                    {/* GitHub Button */}
                    <a
                      href={PROJECTS_CONFIG.revora.links.github.url || "https://github.com/Gauravgits1308"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-void-border bg-void-charcoal hover:border-neutral-muted text-neutral-light hover:text-white font-mono text-xs transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5 text-neutral-muted" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right: Balanced 16:9 Image Preview & Tab Switcher */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-void-black/40 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-void-border/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-neutral-muted uppercase tracking-wider">
                        Production Views
                      </span>
                      <span className="font-mono text-[10px] text-crimson-glow">
                        Click Preview to Enlarge
                      </span>
                    </div>

                    {/* Controlled 16:9 Container */}
                    <div
                      onClick={() =>
                        setLightboxImage({
                          src: REVORA_VIEWS[selectedRevoraView].src,
                          alt: REVORA_VIEWS[selectedRevoraView].alt,
                          title: REVORA_VIEWS[selectedRevoraView].label,
                          caption: REVORA_VIEWS[selectedRevoraView].caption,
                        })
                      }
                      className="relative aspect-video rounded-xl overflow-hidden border border-void-border/80 bg-void-charcoal/80 cursor-zoom-in group shadow-lg"
                    >
                      <Image
                        src={REVORA_VIEWS[selectedRevoraView].src}
                        alt={REVORA_VIEWS[selectedRevoraView].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-void-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-lg bg-void-black/80 border border-void-border text-neutral-white font-mono text-xs">
                          Enlarge Interface
                        </span>
                      </div>
                    </div>

                    <p className="font-mono text-xs text-neutral-muted leading-relaxed">
                      {REVORA_VIEWS[selectedRevoraView].caption}
                    </p>
                  </div>

                  {/* Switcher Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    {REVORA_VIEWS.map((v, idx) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedRevoraView(idx)}
                        className={`px-2 py-2 rounded-lg font-mono text-[11px] text-center transition-colors truncate border ${
                          selectedRevoraView === idx
                            ? "bg-crimson-primary/20 border-crimson-primary/60 text-crimson-glow font-medium"
                            : "bg-void-elevated/60 border-void-border text-neutral-muted hover:text-white"
                        }`}
                      >
                        {v.label.split(". ")[1]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION DIVIDER: ADDITIONAL ENGINEERING BUILDS (IMMEDIATELY ABOVE CAFE CLOUD) */}
            <div className="relative py-10 sm:py-12 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-void-border/80" />
              </div>
              <div className="relative px-5 py-2 rounded-full border border-void-border-bright bg-void-elevated/95 backdrop-blur-md flex items-center gap-2.5 text-neutral-muted font-mono text-xs shadow-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary" />
                <span className="tracking-wider uppercase text-[11px] text-neutral-light font-medium">
                  ADDITIONAL ENGINEERING BUILDS
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary" />
              </div>
            </div>

            {/* PROJECT 2: CAFE CLOUD */}
            <div className="rounded-2xl border border-void-border/70 bg-void-charcoal/30 overflow-hidden shadow-2xl hover:border-crimson-primary/30 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] tracking-wider text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/30 uppercase font-semibold">
                        FULL-STACK CLOUD PLATFORM
                      </span>
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] text-neutral-muted bg-void-elevated border border-void-border">
                        Commercial Solution
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-white">
                      Cafe Cloud — Restaurant Ordering &amp; Operations
                    </h3>

                    <p className="font-light text-sm text-neutral-light leading-relaxed">
                      A complete food service ordering and kitchen workflow platform built to streamline menu synchronization, order dispatch workflows, table billing, and dining inventory tracking.
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-2">
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">ORDERS</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          Real-Time Dispatch
                        </span>
                      </div>
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">DATABASE</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          PostgreSQL Relational
                        </span>
                      </div>
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">BACKEND</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          Node.js / Express REST
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {PROJECTS_CONFIG.cafecloud.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md border border-void-border bg-void-elevated font-mono text-xs text-neutral-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-void-border/40">
                    <button
                      onClick={() => setActiveModalProject(PROJECT_DETAILS.cafecloud)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-crimson-primary/20 hover:translate-y-[-1px]"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    {/* Live Demo Button (Clearly marked staging) */}
                    <button
                      type="button"
                      onClick={(e) => handleLinkClick(e, PROJECTS_CONFIG.cafecloud.links.liveDemo)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-void-border bg-void-charcoal hover:border-crimson-primary/40 text-neutral-light hover:text-white font-mono text-xs transition-colors cursor-pointer"
                      title={PROJECTS_CONFIG.cafecloud.links.liveDemo.placeholderMessage}
                    >
                      <span>Live Demo</span>
                      <span className="text-[10px] text-neutral-muted font-normal">(Staging)</span>
                    </button>

                    <a
                      href={PROJECTS_CONFIG.cafecloud.links.github.url || "https://github.com/Gauravgits1308"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-void-border bg-void-charcoal hover:border-neutral-muted text-neutral-light hover:text-white font-mono text-xs transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5 text-neutral-muted" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 bg-void-black/40 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-void-border/50">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/assets/Projects/cafecloud.png",
                        alt: "Cafe Cloud Operations Dashboard",
                        title: "Cafe Cloud",
                        caption: "Cloud-based food service ordering, kitchen dispatch, and inventory management.",
                      })
                    }
                    className="relative aspect-video rounded-xl overflow-hidden border border-void-border/80 bg-void-charcoal/80 cursor-zoom-in group shadow-lg"
                  >
                    <Image
                      src="/assets/Projects/cafecloud.png"
                      alt="Cafe Cloud Operations Dashboard"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-void-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-void-black/80 border border-void-border text-neutral-white font-mono text-xs">
                        Enlarge Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 3: VOTER LIST MANAGEMENT SYSTEM */}
            <div className="rounded-2xl border border-void-border/70 bg-void-charcoal/30 overflow-hidden shadow-2xl hover:border-crimson-primary/30 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] tracking-wider text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/30 uppercase font-semibold">
                        ENTERPRISE DATA SYSTEM
                      </span>
                      {/* Contextual Hackathon Label */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/30">
                        <Trophy className="h-3 w-3" />
                        <span>Odoo × Adani National Hackathon Finalist Project</span>
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-white">
                      Voter List Management System
                    </h3>

                    <p className="font-light text-sm text-neutral-light leading-relaxed">
                      A data management platform engineered for regional electoral committees to maintain verified voting registries, search multi-field demographic census records, and audit polling data integrity.
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-2">
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">TRANSACTIONS</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          ACID Compliant
                        </span>
                      </div>
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">SEARCH</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          Indexed SQL
                        </span>
                      </div>
                      <div className="p-3 rounded-lg border border-void-border/60 bg-void-elevated/40">
                        <span className="font-mono text-[10px] text-neutral-muted block">SECURITY</span>
                        <span className="font-mono text-xs font-semibold text-neutral-white block truncate">
                          Role-Based Audit
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {PROJECTS_CONFIG.voterlist.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md border border-void-border bg-void-elevated font-mono text-xs text-neutral-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-void-border/40">
                    <button
                      onClick={() => setActiveModalProject(PROJECT_DETAILS.voterlist)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-crimson-primary/20 hover:translate-y-[-1px]"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    {/* Live Demo Button (Clearly marked restricted credentials) */}
                    <button
                      type="button"
                      onClick={(e) => handleLinkClick(e, PROJECTS_CONFIG.voterlist.links.liveDemo)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-void-border bg-void-charcoal hover:border-crimson-primary/40 text-neutral-light hover:text-white font-mono text-xs transition-colors cursor-pointer"
                      title={PROJECTS_CONFIG.voterlist.links.liveDemo.placeholderMessage}
                    >
                      <span>Live Demo</span>
                      <span className="text-[10px] text-neutral-muted font-normal">(Restricted)</span>
                    </button>

                    <a
                      href={PROJECTS_CONFIG.voterlist.links.github.url || "https://github.com/Gauravgits1308"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-void-border bg-void-charcoal hover:border-neutral-muted text-neutral-light hover:text-white font-mono text-xs transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5 text-neutral-muted" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 bg-void-black/40 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-void-border/50">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/assets/Projects/voter list.png",
                        alt: "Voter List Management System Administrative Interface",
                        title: "Voter List Management System",
                        caption: "Civic voter database management, electoral record search, and verification tooling.",
                      })
                    }
                    className="relative aspect-video rounded-xl overflow-hidden border border-void-border/80 bg-void-charcoal/80 cursor-zoom-in group shadow-lg"
                  >
                    <Image
                      src="/assets/Projects/voter list.png"
                      alt="Voter List Management System Administrative Interface"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-void-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-void-black/80 border border-void-border text-neutral-white font-mono text-xs">
                        Enlarge Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: OTHER PROJECTS */}
          <div className="space-y-6 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-void-border/50">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-neutral-muted uppercase tracking-widest block font-medium">
                  TIER 02 // SINGLE-PURPOSE APPLICATIONS
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                  Other Projects
                </h3>
              </div>
              <p className="font-mono text-xs text-neutral-muted sm:text-right">
                Focused Applications &amp; Production Tools
              </p>
            </div>

            {/* Compact Card with Consistent 16:9 Image Treatment */}
            <div className="rounded-2xl border border-void-border/60 bg-void-charcoal/20 overflow-hidden shadow-xl hover:border-void-border-bright transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Left: Compact 16:9 Image Preview */}
                <div className="md:col-span-5 p-5 sm:p-6 bg-void-black/30 flex flex-col justify-center border-b md:border-b-0 md:border-r border-void-border/50">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: PROJECTS_CONFIG.portfolio.imageSrc,
                        alt: PROJECTS_CONFIG.portfolio.imageAlt,
                        title: PROJECTS_CONFIG.portfolio.title,
                        caption: PROJECTS_CONFIG.portfolio.summary,
                      })
                    }
                    className="relative aspect-video rounded-xl overflow-hidden border border-void-border/80 bg-void-charcoal/80 cursor-zoom-in group shadow-md"
                  >
                    <Image
                      src={PROJECTS_CONFIG.portfolio.imageSrc}
                      alt={PROJECTS_CONFIG.portfolio.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-void-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-void-black/80 border border-void-border text-neutral-white font-mono text-xs">
                        Enlarge Preview
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Project Title, Description, Tech Labels, and Live/GitHub Actions */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/20 uppercase font-semibold">
                        {PROJECTS_CONFIG.portfolio.category}
                      </span>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] text-neutral-muted bg-void-elevated border border-void-border">
                        Live System
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                      {PROJECTS_CONFIG.portfolio.title}
                    </h4>

                    <p className="font-light text-xs sm:text-sm text-neutral-light leading-relaxed">
                      {PROJECTS_CONFIG.portfolio.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {PROJECTS_CONFIG.portfolio.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded border border-void-border bg-void-elevated font-mono text-[11px] text-neutral-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-void-border/40">
                    <button
                      onClick={() => setActiveModalProject(PROJECT_DETAILS.portfolio)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold transition-all shadow-md shadow-crimson-primary/20"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    {/* Live Site Button (Clearly marked active current system) */}
                    <button
                      type="button"
                      onClick={(e) => handleLinkClick(e, PROJECTS_CONFIG.portfolio.links.liveDemo)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-void-border bg-void-elevated hover:bg-void-border text-neutral-white font-mono text-xs transition-colors cursor-pointer"
                      title={PROJECTS_CONFIG.portfolio.links.liveDemo.placeholderMessage}
                    >
                      <span>Live Site</span>
                      <span className="text-[10px] text-neutral-muted font-normal">(Active)</span>
                    </button>

                    <a
                      href={PROJECTS_CONFIG.portfolio.links.github.url || "https://github.com/Gauravgits1308"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-void-border bg-void-elevated hover:bg-void-border text-neutral-light hover:text-white font-mono text-xs transition-colors"
                    >
                      <Code2 className="h-3 w-3 text-neutral-muted" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Dedicated Revora Architecture Modal (Opens only on click) */}
        {showArchModal && (
          <RevoraArchitectureModal
            isOpen={showArchModal}
            onClose={() => setShowArchModal(false)}
          />
        )}

        {/* General Project Detail Modal */}
        {activeModalProject && (
          <ProjectDetailModal
            isOpen={!!activeModalProject}
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

        {/* Global Lightbox for Screenshots */}
        {lightboxImage && (
          <ImageModal
            imageSrc={lightboxImage.src}
            imageAlt={lightboxImage.alt}
            title={lightboxImage.title}
            subtitle={lightboxImage.caption}
            isOpen={!!lightboxImage}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </Container>
    </section>
  );
}
