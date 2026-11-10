"use client";

import React, { useEffect } from "react";
import {
  X,
  GitBranch,
  Layers,
  Database,
  Cpu,
  Server,
  Sparkles,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Code2,
  Workflow,
  Search,
  MessageSquare,
  FileCode,
  Box,
  Binary,
  ArrowUpDown,
  HardDrive,
  Network,
} from "lucide-react";

interface RevoraArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RevoraArchitectureModal({ isOpen, onClose }: RevoraArchitectureModalProps) {
  // Close on Escape key and lock body scroll cleanly
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="revora-arch-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-void-black/95 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container with strict stacking above any navbar */}
      <div
        className="relative w-full max-w-6xl my-auto rounded-2xl border border-crimson-primary/40 bg-void-charcoal/95 shadow-2xl shadow-crimson-primary/10 overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header with Elevated Stacking */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-4 border-b border-void-border/70 bg-void-elevated/95 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-crimson-primary/15 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="revora-arch-title" className="font-display text-base sm:text-xl font-bold text-neutral-white">
                  Revora — System Architecture &amp; Engineering Blueprint
                </h2>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/30">
                  Continuous Technical Blueprint
                </span>
              </div>
              <p className="font-mono text-xs text-neutral-muted">
                Asynchronous AST Parsing • BullMQ Workers • PostgreSQL &amp; pgvector • Grounded LLM Reasoning
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-void-border hover:border-crimson-primary/50 bg-void-charcoal text-neutral-muted hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-glow"
            aria-label="Close Architecture Modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Single Vertically Scrollable Content Panel */}
        <div className="p-5 sm:p-8 lg:p-10 overflow-y-auto space-y-16 scroll-smooth">
          
          {/* SECTION 1: HIGH-LEVEL ARCHITECTURAL OVERVIEW */}
          <section className="space-y-4 border-b border-void-border/40 pb-10">
            <div className="flex items-center gap-2 text-crimson-glow font-mono text-xs uppercase tracking-wider">
              <Network className="h-4 w-4" />
              <span>Section 01 // Architectural Thesis</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-white">
              Why Understanding Large Codebases Demands Asynchronous AST Ingestion
            </h3>
            <p className="font-light text-sm sm:text-base text-neutral-light leading-relaxed max-w-4xl">
              Traditional vector Q&amp;A pipelines slice source files by arbitrary line or character counts. In production codebases, this chops function definitions, interface boundaries, and class methods in half, severely degrading semantic context. 
              Revora decouples heavy repository extraction through an asynchronous worker queue, parses source files into Tree-sitter Abstract Syntax Trees (ASTs) to preserve functional integrity, and persists high-dimensional embeddings alongside relational metadata in PostgreSQL via <code className="text-crimson-glow bg-void-black px-1.5 py-0.5 rounded border border-void-border text-xs">pgvector</code>.
            </p>
          </section>

          {/* SECTION 2: REPOSITORY INGESTION FLOW (VISUAL CONNECTED FLOWCHART) */}
          <section className="space-y-6 border-b border-void-border/40 pb-12">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono text-xs text-crimson-glow uppercase tracking-wider block">
                  Section 02 // Pipeline Architecture
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                  Repository Ingestion &amp; Asynchronous Worker Pipeline
                </h3>
              </div>
              <span className="font-mono text-[11px] text-neutral-muted px-3 py-1 rounded-full bg-void-elevated border border-void-border">
                Directional Pipeline Flow
              </span>
            </div>

            <p className="font-light text-xs sm:text-sm text-neutral-light max-w-3xl leading-relaxed">
              Step-by-step visual workflow demonstrating how a remote GitHub repository is authenticated, queued, extracted, parsed into syntax trees, and stored in vector memory.
            </p>

            {/* Connected Vertical Flowchart with Directional Connectors */}
            <div className="relative max-w-3xl mx-auto py-4 space-y-0">
              {[
                {
                  id: "step-1",
                  title: "GitHub Repository",
                  tag: "EXTERNAL SOURCE",
                  desc: "Developer links a remote GitHub repository containing multi-file application source trees.",
                  icon: GitBranch,
                  accent: "border-void-border",
                },
                {
                  id: "step-2",
                  title: "Repository Selection & Clerk Authentication",
                  tag: "SECURITY TIER",
                  desc: "User session is validated via Clerk OAuth; repository permissions and branch heads are retrieved.",
                  icon: ShieldCheck,
                  accent: "border-void-border",
                },
                {
                  id: "step-3",
                  title: "Backend API (Node.js / Express)",
                  tag: "API ORCHESTRATION",
                  desc: "Receives ingestion request, writes initial repository record to PostgreSQL, and registers job payload.",
                  icon: Server,
                  accent: "border-void-border",
                },
                {
                  id: "step-4",
                  title: "BullMQ Job Queue ↔ Redis Cache (Asynchronous Worker Tier)",
                  tag: "ASYNC ENGINE",
                  desc: "Immediate 202 Accepted response. Decoupled worker process handles repository ingestion in the background with Redis task caching and exponential backoff.",
                  icon: Workflow,
                  accent: "border-amber-500/50 bg-amber-500/5",
                  isWorkerBranch: true,
                },
                {
                  id: "step-5",
                  title: "Repository Extraction",
                  tag: "EXTRACTION",
                  desc: "Worker clones archive into isolated disk memory and unpacks file directory structures.",
                  icon: HardDrive,
                  accent: "border-void-border",
                },
                {
                  id: "step-6",
                  title: "File Filtering & Noise Reduction",
                  tag: "PRE-PROCESSING",
                  desc: "Strips lockfiles (package-lock.json), build directories (.next, dist, node_modules), media binaries, and files exceeding size bounds.",
                  icon: Box,
                  accent: "border-void-border",
                },
                {
                  id: "step-7",
                  title: "AST Parsing (Tree-sitter Syntax Trees)",
                  tag: "SYNTAX PARSING",
                  desc: "Source files are parsed into Abstract Syntax Trees to locate complete functions, classes, and exported interfaces rather than arbitrary lines.",
                  icon: Code2,
                  accent: "border-crimson-primary/60 bg-crimson-primary/5",
                },
                {
                  id: "step-8",
                  title: "Intelligent Deterministic Chunking",
                  tag: "CHUNK ENGINE",
                  desc: "Slices code along syntax scopes, preserving leading docstrings, type annotations, and import headers for self-contained context.",
                  icon: FileCode,
                  accent: "border-void-border",
                },
                {
                  id: "step-9",
                  title: "Embedding Generation",
                  tag: "VECTOR TRANSFORM",
                  desc: "Converts each code chunk into a high-dimensional dense vector representing the semantic and algorithmic intent.",
                  icon: Binary,
                  accent: "border-void-border",
                },
                {
                  id: "step-10",
                  title: "PostgreSQL & pgvector Storage",
                  tag: "UNIFIED PERSISTENCE",
                  desc: "Embeddings stored via pgvector HNSW indexing alongside relational file paths, line ranges, and commit references. Repository marked 'Indexed'.",
                  icon: Database,
                  accent: "border-emerald-500/60 bg-emerald-500/5",
                },
              ].map((step, idx, arr) => (
                <div key={step.id} className="relative flex flex-col items-center">
                  {/* Flowchart Node Card */}
                  <div
                    className={`w-full p-4 sm:p-5 rounded-2xl border bg-void-charcoal/60 backdrop-blur-sm transition-all hover:border-crimson-primary/60 shadow-lg ${step.accent}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-crimson-primary/10 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow shrink-0">
                          <step.icon className="h-4 w-4" />
                        </div>
                        <h4 className="font-display text-sm sm:text-base font-bold text-neutral-white">
                          {idx + 1}. {step.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-void-elevated text-neutral-muted border border-void-border w-fit">
                        {step.tag}
                      </span>
                    </div>

                    <p className="font-light text-xs sm:text-sm text-neutral-light leading-relaxed pl-0 sm:pl-11">
                      {step.desc}
                    </p>

                    {/* Worker Interactivity Badge */}
                    {step.isWorkerBranch && (
                      <div className="mt-3 ml-0 sm:ml-11 p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-between text-[11px] font-mono text-amber-300">
                        <span>Background Job Isolation</span>
                        <span className="flex items-center gap-1">
                          <span>Fault-Tolerant &amp; Non-Blocking</span>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Directional Connector Arrow (Unless Last Element) */}
                  {idx < arr.length - 1 && (
                    <div className="flex flex-col items-center my-1.5" aria-hidden="true">
                      <div className="w-[2px] h-6 bg-gradient-to-b from-crimson-primary to-crimson-glow" />
                      <ArrowDown className="h-4 w-4 text-crimson-glow -mt-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: DEVELOPER QUERY LIFECYCLE (VISUAL RETRIEVAL & REASONING FLOW) */}
          <section className="space-y-6 border-b border-void-border/40 pb-12">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono text-xs text-crimson-glow uppercase tracking-wider block">
                  Section 03 // Query &amp; Reasoning Flow
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                  Ask Revora — Developer Query Lifecycle
                </h3>
              </div>
              <span className="font-mono text-[11px] text-neutral-muted px-3 py-1 rounded-full bg-void-elevated border border-void-border">
                Grounded Reasoning Pipeline
              </span>
            </div>

            <p className="font-light text-xs sm:text-sm text-neutral-light max-w-3xl leading-relaxed">
              Demonstrates how a developer&apos;s natural-language inquiry travels from the browser client, through vector similarity retrieval, to context synthesis without hallucination.
            </p>

            <div className="relative max-w-3xl mx-auto py-4 space-y-0">
              {[
                {
                  id: "q-1",
                  title: "Developer Question",
                  sub: "Natural Language Prompt",
                  desc: "User asks an architectural question: 'How is authentication enforced on repository webhook routes?'",
                  icon: MessageSquare,
                },
                {
                  id: "q-2",
                  title: "Next.js Frontend & Client State",
                  sub: "Client Validation",
                  desc: "Sanitizes user input and forwards the query with repository ID context to the backend.",
                  icon: Box,
                },
                {
                  id: "q-3",
                  title: "Express API Controller",
                  sub: "Session & Route Authorization",
                  desc: "Verifies Clerk authentication session and delegates query processing to the retrieval service.",
                  icon: Server,
                },
                {
                  id: "q-4",
                  title: "Query Embedding Generation",
                  sub: "Vector Space Projection",
                  desc: "Transforms the question string into a dense query vector sharing the same dimensional space as the code chunks.",
                  icon: Binary,
                },
                {
                  id: "q-5",
                  title: "Semantic Retrieval (pgvector Cosine Search)",
                  sub: "Sub-linear HNSW Lookups",
                  desc: "Executes cosine distance search in PostgreSQL: `ORDER BY embedding <=> query_vector LIMIT 8` constrained to the target repository.",
                  icon: Database,
                },
                {
                  id: "q-6",
                  title: "Relevant Code Chunks & AST Assembly",
                  sub: "Ground Truth Context",
                  desc: "Pulls the top-k code snippets with exact file paths, function headers, and line ranges into an augmented context block.",
                  icon: FileCode,
                },
                {
                  id: "q-7",
                  title: "LLM Context Framing & Reasoning",
                  sub: "Grounding Engine",
                  desc: "Instructs language model to answer strictly based on the injected AST snippets, preventing speculative hallucinations.",
                  icon: Sparkles,
                },
                {
                  id: "q-8",
                  title: "Contextual Answer Generation",
                  sub: "Synthesized Output",
                  desc: "Produces clear technical explanation with line-level file citations and verified code references.",
                  icon: CheckCircle2,
                },
                {
                  id: "q-9",
                  title: "Frontend Response & Citation Rendering",
                  sub: "Developer UI",
                  desc: "Renders the streaming markdown explanation, syntax-highlighted code blocks, and clickable file breadcrumbs in Next.js.",
                  icon: Layers,
                },
              ].map((q, idx, arr) => (
                <div key={q.id} className="relative flex flex-col items-center">
                  <div className="w-full p-4 sm:p-5 rounded-2xl border border-void-border/70 bg-void-charcoal/60 backdrop-blur-sm transition-all hover:border-crimson-primary/60 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1.5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-crimson-primary/10 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow shrink-0">
                          <q.icon className="h-4 w-4" />
                        </div>
                        <h4 className="font-display text-sm sm:text-base font-bold text-neutral-white">
                          {idx + 1}. {q.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] text-crimson-glow">
                        {q.sub}
                      </span>
                    </div>

                    <p className="font-light text-xs sm:text-sm text-neutral-light leading-relaxed pl-0 sm:pl-11">
                      {q.desc}
                    </p>
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="flex flex-col items-center my-1.5" aria-hidden="true">
                      <div className="w-[2px] h-6 bg-gradient-to-b from-crimson-primary to-crimson-glow" />
                      <ArrowDown className="h-4 w-4 text-crimson-glow -mt-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: DATABASE RELATIONSHIPS & DATA FLOW (VISUAL INFOGRAPHIC) */}
          <section className="space-y-6 border-b border-void-border/40 pb-12">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono text-xs text-crimson-glow uppercase tracking-wider block">
                  Section 04 // Relational Data Schema &amp; Vector Topology
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                  Database Relationships &amp; Knowledge Graph Data Flow
                </h3>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Verified Prisma Relational Schema
              </span>
            </div>

            <p className="font-light text-xs sm:text-sm text-neutral-light max-w-3xl leading-relaxed">
              Visualizing how repositories, source files, AST code chunks, and vector embeddings interconnect in PostgreSQL with relational integrity and vector similarity.
            </p>

            {/* Relational Data-Flow Architecture Infographic */}
            <div className="p-6 rounded-2xl border border-void-border/80 bg-void-black/40 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Entity 1: Repository */}
                <div className="p-4 rounded-xl border border-void-border bg-void-charcoal/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-crimson-glow uppercase">TABLE 01</span>
                    <span className="font-mono text-[10px] text-neutral-muted">Root Entity</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-white flex items-center gap-1.5">
                    <GitBranch className="h-4 w-4 text-crimson-glow" />
                    <span>Repository</span>
                  </h4>
                  <ul className="space-y-1 font-mono text-[11px] text-neutral-muted pt-1">
                    <li className="text-neutral-light">id (UUID, PK)</li>
                    <li>name (String)</li>
                    <li>githubUrl (String)</li>
                    <li>syncStatus (Enum)</li>
                  </ul>
                </div>

                {/* Connector 1: 1 to N */}
                <div className="hidden md:flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-[10px] text-crimson-glow font-bold pb-1">1 : N</span>
                  <div className="w-full h-[2px] bg-gradient-to-r from-crimson-primary to-crimson-glow" />
                  <span className="font-mono text-[9px] text-neutral-muted pt-1">contains files</span>
                </div>

                {/* Entity 2: Source File */}
                <div className="p-4 rounded-xl border border-void-border bg-void-charcoal/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-crimson-glow uppercase">TABLE 02</span>
                    <span className="font-mono text-[10px] text-neutral-muted">File Hierarchy</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-white flex items-center gap-1.5">
                    <FileCode className="h-4 w-4 text-crimson-glow" />
                    <span>SourceFile</span>
                  </h4>
                  <ul className="space-y-1 font-mono text-[11px] text-neutral-muted pt-1">
                    <li className="text-neutral-light">id (UUID, PK)</li>
                    <li>repositoryId (FK)</li>
                    <li>filePath (String)</li>
                    <li>extension (String)</li>
                  </ul>
                </div>

                {/* Connector 2: 1 to N */}
                <div className="hidden md:flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-[10px] text-crimson-glow font-bold pb-1">1 : N</span>
                  <div className="w-full h-[2px] bg-gradient-to-r from-crimson-primary to-crimson-glow" />
                  <span className="font-mono text-[9px] text-neutral-muted pt-1">parsed into chunks</span>
                </div>
              </div>

              {/* Second Row: Chunks and Embeddings */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center pt-2">
                {/* Spacer for MD */}
                <div className="hidden md:block" />

                {/* Entity 3: Code Chunk */}
                <div className="p-4 rounded-xl border border-void-border bg-void-charcoal/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-crimson-glow uppercase">TABLE 03</span>
                    <span className="font-mono text-[10px] text-neutral-muted">AST Node</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-white flex items-center gap-1.5">
                    <Code2 className="h-4 w-4 text-crimson-glow" />
                    <span>CodeChunk</span>
                  </h4>
                  <ul className="space-y-1 font-mono text-[11px] text-neutral-muted pt-1">
                    <li className="text-neutral-light">id (UUID, PK)</li>
                    <li>fileId (FK)</li>
                    <li>startLine / endLine</li>
                    <li>astType (Fn/Class)</li>
                  </ul>
                </div>

                {/* Connector 3: 1 to 1 */}
                <div className="hidden md:flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-[10px] text-crimson-glow font-bold pb-1">1 : 1</span>
                  <div className="w-full h-[2px] bg-gradient-to-r from-crimson-primary to-crimson-glow" />
                  <span className="font-mono text-[9px] text-neutral-muted pt-1">vector projection</span>
                </div>

                {/* Entity 4: pgvector Embedding */}
                <div className="p-4 rounded-xl border border-crimson-primary/50 bg-crimson-primary/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-crimson-glow uppercase">EXTENSION</span>
                    <span className="font-mono text-[10px] text-emerald-400">pgvector Index</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-white flex items-center gap-1.5">
                    <Database className="h-4 w-4 text-crimson-glow" />
                    <span>ChunkEmbedding</span>
                  </h4>
                  <ul className="space-y-1 font-mono text-[11px] text-neutral-muted pt-1">
                    <li className="text-neutral-light">chunkId (FK, Unique)</li>
                    <li className="text-crimson-glow font-semibold">vector (1536-dim)</li>
                    <li>indexType: HNSW</li>
                    <li>distance: Cosine (&lt;=&gt;)</li>
                  </ul>
                </div>
              </div>

              {/* Data Flow Directional Summary Card */}
              <div className="p-4 rounded-xl border border-void-border/70 bg-void-charcoal/60 space-y-2">
                <span className="font-mono text-[10px] text-crimson-glow uppercase tracking-wider block">
                  Data Flow Narrative
                </span>
                <p className="font-light text-xs text-neutral-light leading-relaxed">
                  1. A single <strong>Repository</strong> record holds many <strong>SourceFiles</strong> (1:N).<br />
                  2. Each file is parsed into one or more functional <strong>CodeChunks</strong> according to its AST boundaries (1:N).<br />
                  3. Each code chunk maps to exactly one <strong>Vector Embedding</strong> in pgvector (1:1).<br />
                  4. Natural-language user questions are compared against stored chunk embeddings via cosine similarity distance (<code className="text-crimson-glow">&lt;=&gt;</code>) to retrieve the exact source file line ranges without loss of relational integrity.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: ENGINEERING CHALLENGES & SOLUTIONS (CONNECTED VISUAL PAIRS) */}
          <section className="space-y-6 border-b border-void-border/40 pb-12">
            <div>
              <span className="font-mono text-xs text-crimson-glow uppercase tracking-wider block">
                Section 05 // Engineering Decisions
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                Engineering Challenges &amp; Implemented Solutions
              </h3>
            </div>

            <p className="font-light text-xs sm:text-sm text-neutral-light max-w-3xl leading-relaxed">
              Concrete architectural trade-offs resolved during the implementation of Revora&apos;s codebase intelligence engine.
            </p>

            <div className="space-y-4">
              {[
                {
                  id: "c-1",
                  challenge: "Large Repository Context Slicing",
                  challengeDetail: "Traditional character or line chunking arbitrarily divides functions, syntax scopes, and class definitions, severing functional context across chunk boundaries.",
                  solution: "AST-Aware Syntax Chunking",
                  solutionDetail: "Deconstructs source files into Tree-sitter syntax trees. Chunk boundaries align with function headers, classes, and exported interfaces to keep semantic units intact.",
                },
                {
                  id: "c-2",
                  challenge: "Long-Running Repository Ingestion Timeouts",
                  challengeDetail: "Extracting dozens of repository files and generating vector embeddings synchronously triggers HTTP timeouts and locks web server threads.",
                  solution: "Asynchronous BullMQ Jobs with Redis",
                  solutionDetail: "API issues immediate 202 Accepted status. Ingestion executes as decoupled background jobs in Redis with deterministic exponential backoff retries.",
                },
                {
                  id: "c-3",
                  challenge: "Finding Relevant Code Beyond Exact Keywords",
                  challengeDetail: "Keyword grep fails when developers search conceptual questions ('Where are invoices created?') rather than memorized variable identifiers.",
                  solution: "pgvector Semantic Cosine Retrieval",
                  solutionDetail: "Embeddings capture algorithmic meaning. Queries match conceptually related code blocks even when vocabulary differs completely from source names.",
                },
                {
                  id: "c-4",
                  challenge: "Persistent Repository Knowledge & Dual Writes",
                  challengeDetail: "Maintaining separate external vector databases introduces distributed transaction inconsistencies and synchronization failure modes.",
                  solution: "Unified PostgreSQL with pgvector",
                  solutionDetail: "A single relational PostgreSQL database manages commits, files, chunk records, and 1536-dim vector embeddings in atomic ACID transactions.",
                },
                {
                  id: "c-5",
                  challenge: "Processing Visibility During Heavy Ingestion",
                  challengeDetail: "Developers awaiting large repository synchronization receive no feedback on whether parsing has stalled or failed.",
                  solution: "Background Job Status Reporting",
                  solutionDetail: "BullMQ worker progress updates database stage flags ('Cloning' → 'Parsing' → 'Embedding' → 'Indexed') for real-time client polling.",
                },
              ].map((item, idx) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl border border-void-border/70 bg-void-charcoal/50 grid grid-cols-1 md:grid-cols-12 gap-4 items-center shadow-lg"
                >
                  <div className="md:col-span-5 space-y-1.5">
                    <span className="font-mono text-[9px] text-crimson-glow uppercase tracking-wider block">
                      {"//"} CHALLENGE 0{idx + 1}
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-neutral-white">
                      {item.challenge}
                    </h4>
                    <p className="font-light text-xs text-neutral-muted leading-relaxed">
                      {item.challengeDetail}
                    </p>
                  </div>

                  <div className="hidden md:flex md:col-span-1 justify-center text-crimson-glow">
                    <ArrowRight className="h-5 w-5" />
                  </div>

                  <div className="md:col-span-6 space-y-1.5 bg-void-elevated/80 p-4 rounded-xl border border-void-border-bright/50">
                    <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider block font-semibold">
                      ARCHITECTURAL SOLUTION
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-neutral-white">
                      {item.solution}
                    </h4>
                    <p className="font-light text-xs text-neutral-light leading-relaxed">
                      {item.solutionDetail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: IMPLEMENTED SCOPE VS FUTURE ROADMAP */}
          <section className="space-y-6 pb-6">
            <div>
              <span className="font-mono text-xs text-crimson-glow uppercase tracking-wider block">
                Section 06 // Production Boundaries
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-white">
                Implemented Scope vs. Explicit Future Enhancements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 sm:p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <h4 className="font-display text-sm font-bold text-neutral-white uppercase tracking-wider">
                    Verified Implemented Features
                  </h4>
                </div>
                <ul className="space-y-2 font-mono text-xs text-neutral-light font-light pl-6 list-disc leading-relaxed">
                  <li>Clerk OAuth GitHub repository permission delegation</li>
                  <li>Asynchronous BullMQ background worker queue with Redis</li>
                  <li>AST Tree-sitter code chunking honoring syntax boundaries</li>
                  <li>PostgreSQL unified storage with pgvector cosine distance indexing</li>
                  <li>Context-grounded prompt engineering with strict line citations</li>
                </ul>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-void-border bg-void-elevated/40 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-neutral-muted" />
                  <h4 className="font-display text-sm font-bold text-neutral-muted uppercase tracking-wider">
                    Explicit Future Roadmap (Not Claimed as Done)
                  </h4>
                </div>
                <ul className="space-y-2 font-mono text-xs text-neutral-muted font-light pl-6 list-disc leading-relaxed">
                  <li>Hybrid lexical + dense search (BM25 sparse tokens + vector cosine distance)</li>
                  <li>Cross-encoder re-ranking stage prior to prompt injection</li>
                  <li>Multi-repository call graph dependency resolution</li>
                  <li>Incremental indexing triggered automatically on GitHub pull requests</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer with Dismiss Trigger */}
        <div className="sticky bottom-0 z-30 px-6 py-4 border-t border-void-border/70 bg-void-elevated/95 backdrop-blur-xl flex items-center justify-between">
          <span className="font-mono text-[10px] text-neutral-muted hidden sm:inline-block">
            Revora Architecture Specification • Production-Aligned Engineering Blueprint
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold transition-colors"
          >
            Close Blueprint Panel
          </button>
        </div>
      </div>
    </div>
  );
}
