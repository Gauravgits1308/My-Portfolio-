"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Layout,
  Server,
  Database,
  Sparkles,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";

interface TechItem {
  name: string;
  symbol: string;
  color: string;
  logoSrc?: string;
  projectNote: string;
  projects: string[];
}

interface TechCluster {
  id: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  domainSummary: string;
  items: TechItem[];
}

const TECH_CLUSTERS: TechCluster[] = [
  {
    id: "languages",
    category: "Programming Languages",
    icon: Code2,
    tag: "CORE SYNTAX",
    domainSummary: "Strictly typed codebases and algorithmic problem solving",
    items: [
      { name: "C++", symbol: "C++", color: "#00599C", logoSrc: "/assets/Tech Logos/cpp.webp", projectNote: "Competitive programming & graph algorithms", projects: ["competitive"] },
      { name: "Java", symbol: "JV", color: "#ED8B00", logoSrc: "/assets/Tech Logos/java.webp", projectNote: "Object-oriented design patterns & concurrency", projects: ["fundamentals"] },
      { name: "Python", symbol: "PY", color: "#3776AB", logoSrc: "/assets/Tech Logos/python.webp", projectNote: "AI scripts, semantic data pipelines & automation", projects: ["ai"] },
      { name: "JavaScript", symbol: "JS", color: "#F7DF1E", logoSrc: "/assets/Tech Logos/Javascript.webp", projectNote: "Dynamic client scripting in Cafe Cloud & Voter List", projects: ["cafecloud", "voterlist"] },
      { name: "TypeScript", symbol: "TS", color: "#3178C6", logoSrc: "/assets/Tech Logos/typescript.webp", projectNote: "Strict static typing in Revora & Developer Portfolio", projects: ["revora", "portfolio"] },
      { name: "SQL", symbol: "SQL", color: "#003B57", logoSrc: "/assets/Tech Logos/sql.webp", projectNote: "ACID transactions & relational schema indexing", projects: ["revora", "voterlist", "cafecloud"] },
    ],
  },
  {
    id: "frontend",
    category: "Frontend Development",
    icon: Layout,
    tag: "CLIENT INTERFACES",
    domainSummary: "Accessible, reactive UI architecture and 3D spatial scenes",
    items: [
      { name: "React", symbol: "RCT", color: "#61DAFB", logoSrc: "/assets/Tech Logos/react.webp", projectNote: "Component hierarchies in Cafe Cloud & Voter List", projects: ["cafecloud", "voterlist"] },
      { name: "Next.js", symbol: "NXT", color: "#FFFFFF", logoSrc: "/assets/Tech Logos/nextjs.webp", projectNote: "App Router SSR & API routing for Revora & Portfolio", projects: ["revora", "portfolio"] },
      { name: "HTML", symbol: "H5", color: "#E34F26", logoSrc: "/assets/Tech Logos/html.webp", projectNote: "Semantic document structuring & WAI-ARIA standards", projects: ["portfolio", "cafecloud"] },
      { name: "CSS", symbol: "C3", color: "#1572B6", logoSrc: "/assets/Tech Logos/css.webp", projectNote: "Fluid typography, CSS grids & keyframe choreography", projects: ["portfolio", "cafecloud"] },
      { name: "Tailwind CSS", symbol: "TW", color: "#38BDF8", logoSrc: "/assets/Tech Logos/tailwind.webp", projectNote: "Design token system for Revora, Cafe Cloud & Portfolio", projects: ["revora", "cafecloud", "portfolio"] },
    ],
  },
  {
    id: "backend",
    category: "Backend Development",
    icon: Server,
    tag: "DISTRIBUTED LOGIC",
    domainSummary: "High-throughput asynchronous servers and message queues",
    items: [
      { name: "Node.js", symbol: "ND", color: "#339933", logoSrc: "/assets/Tech Logos/node.webp", projectNote: "Runtime engine powering Revora, Cafe Cloud & Voter List", projects: ["revora", "cafecloud", "voterlist"] },
      { name: "Express.js", symbol: "EX", color: "#9E9E9E", logoSrc: "/assets/Tech Logos/express.webp", projectNote: "REST service routing for Cafe Cloud & Voter List", projects: ["cafecloud", "voterlist"] },
      { name: "REST APIs", symbol: "RST", color: "#E11D48", logoSrc: "/assets/Tech Logos/restAPI.webp", projectNote: "Production endpoints engineered at Orasis Infotech", projects: ["orasis", "cafecloud", "voterlist"] },
      { name: "Prisma", symbol: "PRS", color: "#2D3748", logoSrc: "/assets/Tech Logos/prisma.webp", projectNote: "Type-safe ORM managing Revora's PostgreSQL schema", projects: ["revora"] },
      { name: "BullMQ", symbol: "BMQ", color: "#FF2E5B", logoSrc: "/assets/Tech Logos/bullmq.webp", projectNote: "Asynchronous worker queues powering Revora's ingestion", projects: ["revora"] },
    ],
  },
  {
    id: "databases",
    category: "Databases & Infrastructure",
    icon: Database,
    tag: "PERSISTENCE & DEVOPS",
    domainSummary: "Relational integrity, vector storage, and memory caching",
    items: [
      { name: "PostgreSQL", symbol: "PG", color: "#336791", logoSrc: "/assets/Tech Logos/postgres.webp", projectNote: "Relational records & pgvector embeddings in Revora", projects: ["revora"] },
      { name: "MySQL", symbol: "MY", color: "#4479A1", logoSrc: "/assets/Tech Logos/mysql.webp", projectNote: "ACID census database in Voter List Management System", projects: ["voterlist"] },
      { name: "MongoDB", symbol: "MG", color: "#47A248", logoSrc: "/assets/Tech Logos/mongodb.webp", projectNote: "Document store for dynamic payload collections", projects: ["general"] },
      { name: "Redis", symbol: "RDS", color: "#DC382D", logoSrc: "/assets/Tech Logos/redis.webp", projectNote: "In-memory queue broker for BullMQ workers in Revora", projects: ["revora"] },
      { name: "Docker", symbol: "DCK", color: "#2496ED", logoSrc: "/assets/Tech Logos/docker.webp", projectNote: "Reproducible container environments & dev orchestration", projects: ["general"] },
    ],
  },
  {
    id: "ai",
    category: "AI & Intelligent Systems",
    icon: Sparkles,
    tag: "SEMANTIC REASONING",
    domainSummary: "Retrieval-augmented grounding and dense vector pipelines",
    items: [
      { name: "RAG", symbol: "RAG", color: "#FF2E5B", projectNote: "Retrieval-Augmented Generation core in Revora", projects: ["revora"] },
      { name: "LLM Integration", symbol: "LLM", color: "#A855F7", projectNote: "Context-constrained prompt engineering & citations", projects: ["revora"] },
      { name: "Semantic Search", symbol: "VEC", color: "#38BDF8", projectNote: "Cosine distance vector similarity over AST chunks", projects: ["revora"] },
      { name: "Prompt Engineering", symbol: "PRM", color: "#F59E0B", projectNote: "Structured context framing for hallucination mitigation", projects: ["revora"] },
    ],
  },
  {
    id: "fundamentals",
    category: "Engineering Fundamentals",
    icon: Cpu,
    tag: "ALGORITHMIC RIGOR",
    domainSummary: "Core computer science principles and scalable system design",
    items: [
      { name: "Data Structures & Algorithms", symbol: "DSA", color: "#E11D48", projectNote: "400+ problems solved across CodeChef & platforms", projects: ["competitive"] },
      { name: "OOP", symbol: "OOP", color: "#10B981", projectNote: "Encapsulation, inheritance, polymorphism & design patterns", projects: ["fundamentals"] },
      { name: "DBMS", symbol: "DB", color: "#3B82F6", projectNote: "Indexing, query optimization, normalization & transactions", projects: ["fundamentals"] },
      { name: "Operating Systems", symbol: "OS", color: "#8B5CF6", projectNote: "Process synchronization, memory management & concurrency", projects: ["fundamentals"] },
      { name: "System Design", symbol: "SYS", color: "#EC4899", projectNote: "Architectural decoupling, load distribution & caching", projects: ["revora"] },
    ],
  },
];

const ECOSYSTEM_FILTERS = [
  { id: "all", label: "Entire Toolkit" },
  { id: "revora", label: "Revora Core Stack" },
  { id: "cafecloud", label: "Cafe Cloud Stack" },
  { id: "voterlist", label: "Voter List Stack" },
  { id: "competitive", label: "Algorithmic Focus" },
];

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const isTechHighlighted = (tech: TechItem) => {
    if (activeFilter === "all") return true;
    return tech.projects.includes(activeFilter);
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-void-border/30 scroll-mt-16 relative">
      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-12">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 04. ENGINEERING TOOLKIT
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Technical Capabilities
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Languages, Distributed Frameworks &amp; Systems Architecture
            </p>
          </div>

          {/* Interactive Project-Link Ecosystem Filters */}
          <div className="flex flex-wrap items-center gap-2 pb-8">
            <span className="font-mono text-xs text-neutral-muted mr-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-crimson-glow" />
              <span>Project Ecosystem:</span>
            </span>
            {ECOSYSTEM_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                  activeFilter === f.id
                    ? "bg-crimson-primary text-white font-semibold shadow-md shadow-crimson-primary/20"
                    : "border border-void-border bg-void-elevated/70 text-neutral-muted hover:text-white hover:border-void-border-bright"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* 6 Technology Clusters in a Visual Ecosystem Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_CLUSTERS.map((cluster) => {
              const ClusterIcon = cluster.icon;
              return (
                <div
                  key={cluster.id}
                  className="rounded-2xl border border-void-border/60 bg-void-charcoal/20 p-6 flex flex-col justify-between hover:border-crimson-primary/30 transition-all shadow-lg hover:shadow-crimson-primary/5 group"
                >
                  <div className="space-y-4">
                    {/* Cluster Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-void-border/40">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-crimson-primary/10 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow">
                          <ClusterIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-bold text-neutral-white">
                            {cluster.category}
                          </h3>
                          <span className="font-mono text-[9px] text-neutral-muted block">
                            {cluster.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="font-light text-xs text-neutral-muted leading-relaxed">
                      {cluster.domainSummary}
                    </p>

                    {/* Interactive Technology Constellation Tiles with Authentic Logos */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {cluster.items.map((tech) => {
                        const highlighted = isTechHighlighted(tech);
                        return (
                          <div
                            key={tech.name}
                            onMouseEnter={() => setHoveredTech(tech)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className={`group/item p-2.5 rounded-xl border transition-all cursor-default flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-crimson-primary/10 ${
                              highlighted
                                ? "border-void-border/70 bg-void-elevated/70 hover:border-crimson-primary/50 hover:bg-void-elevated"
                                : "border-void-border/30 bg-void-black/20 opacity-35"
                            }`}
                          >
                            {/* Technology Logo or Monogram Mark */}
                            {tech.logoSrc ? (
                              <div className="relative h-7 w-7 rounded-lg overflow-hidden bg-void-black/70 border border-void-border/70 p-1 flex items-center justify-center shrink-0 group-hover/item:border-crimson-primary/40 group-hover/item:scale-105 transition-all">
                                <Image
                                  src={tech.logoSrc}
                                  alt={tech.name}
                                  width={22}
                                  height={22}
                                  className="object-contain"
                                  unoptimized
                                />
                              </div>
                            ) : (
                              <span
                                className="h-7 w-7 rounded-lg font-mono text-[10px] font-bold flex items-center justify-center shrink-0 border group-hover/item:scale-105 transition-transform"
                                style={{
                                  backgroundColor: `${tech.color}15`,
                                  borderColor: `${tech.color}40`,
                                  color: tech.color === "#FFFFFF" ? "#E1E2E8" : tech.color,
                                }}
                              >
                                {tech.symbol}
                              </span>
                            )}

                            <span className="font-mono text-xs font-medium text-neutral-white truncate">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Linkage Note */}
                  <div className="pt-4 mt-4 border-t border-void-border/30 flex items-center justify-between text-[11px] font-mono text-neutral-muted">
                    <span>{cluster.items.length} Core Technologies</span>
                    <span className="text-crimson-glow flex items-center gap-1">
                      <span>Verified Stack</span>
                      <ArrowRight className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Technical Context Strip */}
          <div className="mt-8 p-4 rounded-xl border border-void-border/70 bg-void-charcoal/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-crimson-primary/10 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow shrink-0">
                <Terminal className="h-4 w-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-crimson-glow tracking-wider uppercase block">
                  {hoveredTech ? `Selected Technology: ${hoveredTech.name}` : "Architectural Integrity"}
                </span>
                <p className="font-light text-xs text-neutral-light">
                  {hoveredTech
                    ? hoveredTech.projectNote
                    : "No arbitrary percentage bars or artificial metrics. Every listed technology is anchored in concrete production codebases and competitive proofs."}
                </p>
              </div>
            </div>

            <div className="font-mono text-xs text-neutral-muted shrink-0 pl-1">
              {hoveredTech && (
                <span className="px-2.5 py-1 rounded-md bg-void-elevated border border-void-border text-neutral-white">
                  Active in {hoveredTech.projects.length} System{hoveredTech.projects.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
