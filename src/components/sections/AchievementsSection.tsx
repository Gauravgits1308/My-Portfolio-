"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Award,
  ExternalLink,
  CheckCircle2,
  Code2,
  Building2,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ImageModal } from "@/components/ui/ImageModal";

interface HonorItem {
  id: string;
  title: string;
  badge: string;
  institution: string;
  logoSrc?: string;
  description: string;
  metrics?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerTag: string;
  logoSrc?: string;
  certificateImage: string;
  description: string;
  status: string;
}

const HONORS: HonorItem[] = [
  {
    id: "odoo-adani",
    title: "ODOO × Adani National-Level Hackathon",
    badge: "National Finalist",
    institution: "Adani University",
    description: "Selected as a national finalist among competitive collegiate engineering teams for rapid software prototyping and civic technology engineering.",
    metrics: "Top Tier National Finalist",
    icon: Trophy,
  },
  {
    id: "hack-the-chain",
    title: "Hack the Chain 2.0 Hackathon",
    badge: "Collegiate Finalist",
    institution: "IIIT Kota",
    logoSrc: "/assets/Logos/IIIT Kota Logo.webp",
    description: "Reached collegiate finals for engineering decentralized institutional record transparency and data verification prototypes.",
    metrics: "Finalist Team",
    icon: Flame,
  },
  {
    id: "codechef",
    title: "CodeChef 2-Star Rated Programmer",
    badge: "2-Star Competitive",
    institution: "CodeChef",
    description: "Active competitive programming track demonstrating algorithmic rigor, complexity analysis, and strict execution constraints.",
    metrics: "2-Star Rank",
    icon: Code2,
  },
  {
    id: "dsa-problems",
    title: "400+ Algorithmic Problems Solved",
    badge: "Verified Problem Solver",
    institution: "Competitive Platforms & Coding Portals",
    description: "Consistent problem solver focused on graph algorithms, dynamic programming, tree traversals, and time/space optimization.",
    metrics: "400+ Solved",
    icon: ShieldCheck,
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "aws-q-dev",
    title: "Software Development with Amazon Q Developer",
    issuer: "Amazon Web Services (AWS)",
    issuerTag: "AWS Verified",
    certificateImage: "/assets/Resume and Certificates/Amazon Q Dev.jpeg",
    description: "Applied generative AI-assisted workflows with Amazon Q Developer to accelerate code generation, optimize software modules, and run security scans.",
    status: "Verified Credential",
  },
  {
    id: "deloitte",
    title: "Data Analyst Job Simulation",
    issuer: "Deloitte (Forage)",
    issuerTag: "Deloitte Verified",
    certificateImage: "/assets/Resume and Certificates/Deloitte.jpeg",
    description: "Analyzed complex corporate datasets utilizing forensic technology and dashboard visualization to surface actionable insights and audit trails.",
    status: "Simulation Completed",
  },
  {
    id: "orasis-internship",
    title: "SDE Internship Completion Certificate",
    issuer: "Orasis Infotech Pvt. Ltd.",
    issuerTag: "May 2026 – Jul 2026",
    logoSrc: "/assets/Logos/Orasis.jpeg",
    certificateImage: "/assets/Resume and Certificates/Orasis_Completion_Certificate.jpg",
    description: "Production software engineering internship on Savvy HRMS, developing RESTful APIs and optimizing database latencies by 20%.",
    status: "Internship Certificate",
  },
];

export function AchievementsSection() {
  const [selectedCert, setSelectedCert] = useState<{ src: string; title: string; issuer: string } | null>(null);

  return (
    <section id="achievements" className="py-20 sm:py-28 border-b border-void-border/30 scroll-mt-16 relative">
      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-16">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 05. RECOGNITIONS &amp; CREDENTIALS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Honors &amp; Certifications
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Hackathons, Algorithmic Tracks &amp; Industry Proofs
            </p>
          </div>

          <div className="space-y-16">
            {/* AREA 1: COMPETITIVE HONORS & HACKATHONS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-void-border/40">
                <div className="flex items-center gap-2.5">
                  <Trophy className="h-4 w-4 text-crimson-glow" />
                  <h3 className="font-display text-xl font-bold text-neutral-white">
                    Competitive Honors &amp; Algorithmic Highlights
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-muted">
                  Verified Competition Results
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HONORS.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.id}
                      className="p-5 sm:p-6 rounded-2xl border border-void-border/70 bg-void-charcoal/30 hover:border-crimson-primary/40 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            {h.logoSrc ? (
                              <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-void-border bg-void-elevated shrink-0">
                                <Image
                                  src={h.logoSrc}
                                  alt={h.institution}
                                  fill
                                  className="object-contain p-1"
                                />
                              </div>
                            ) : (
                              <div className="h-9 w-9 rounded-xl bg-crimson-primary/10 border border-crimson-primary/30 flex items-center justify-center text-crimson-glow shrink-0 group-hover:scale-105 transition-transform">
                                <Icon className="h-4 w-4" />
                              </div>
                            )}

                            <div>
                              <h4 className="font-display text-base font-bold text-neutral-white group-hover:text-neutral-light transition-colors">
                                {h.title}
                              </h4>
                              <span className="font-mono text-xs text-neutral-muted block">
                                {h.institution}
                              </span>
                            </div>
                          </div>

                          <span className="px-2.5 py-1 rounded-md font-mono text-[10px] text-crimson-glow bg-crimson-primary/10 border border-crimson-primary/30 shrink-0 font-semibold">
                            {h.badge}
                          </span>
                        </div>

                        <p className="font-light text-xs text-neutral-light leading-relaxed">
                          {h.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-void-border/40 flex items-center justify-between font-mono text-xs text-neutral-muted">
                        <span>Recognition</span>
                        <span className="text-neutral-white font-medium">{h.metrics}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AREA 2: VERIFIED INDUSTRY CERTIFICATIONS & PROOFS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-void-border/40">
                <div className="flex items-center gap-2.5">
                  <Award className="h-4 w-4 text-crimson-glow" />
                  <h3 className="font-display text-xl font-bold text-neutral-white">
                    Verified Industry Certifications &amp; Proofs
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-muted">
                  Interactive Preview Lightbox
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-2xl border border-void-border/70 bg-void-charcoal/30 overflow-hidden flex flex-col justify-between hover:border-crimson-primary/40 transition-all shadow-lg group"
                  >
                    <div>
                      {/* Compact Image Preview with Zoom Action */}
                      <div
                        onClick={() =>
                          setSelectedCert({
                            src: cert.certificateImage,
                            title: cert.title,
                            issuer: cert.issuer,
                          })
                        }
                        className="relative aspect-[16/10] bg-void-black/60 border-b border-void-border/70 cursor-zoom-in overflow-hidden"
                      >
                        <Image
                          src={cert.certificateImage}
                          alt={cert.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 360px"
                        />
                        <div className="absolute inset-0 bg-void-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-void-black/85 border border-void-border text-white font-mono text-xs">
                            <span>Preview Credential</span>
                            <ExternalLink className="h-3 w-3 text-crimson-glow" />
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] text-crimson-glow uppercase tracking-wider block">
                            {cert.issuerTag}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Verified</span>
                          </span>
                        </div>

                        <h4 className="font-display text-base font-bold text-neutral-white leading-snug group-hover:text-neutral-light transition-colors">
                          {cert.title}
                        </h4>

                        <p className="font-mono text-xs text-neutral-muted">
                          {cert.issuer}
                        </p>

                        <p className="font-light text-xs text-neutral-light leading-relaxed pt-1">
                          {cert.description}
                        </p>
                      </div>
                    </div>

                    {/* Preview Button */}
                    <div className="p-5 pt-0">
                      <button
                        onClick={() =>
                          setSelectedCert({
                            src: cert.certificateImage,
                            title: cert.title,
                            issuer: cert.issuer,
                          })
                        }
                        className="w-full py-2 px-3 rounded-xl border border-void-border bg-void-elevated/70 hover:bg-void-border hover:border-crimson-primary/40 text-neutral-white font-mono text-xs font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Inspect Certificate</span>
                        <ExternalLink className="h-3.5 w-3.5 text-crimson-glow" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Fullscreen Certificate Modal */}
        {selectedCert && (
          <ImageModal
            imageSrc={selectedCert.src}
            imageAlt={selectedCert.title}
            title={selectedCert.title}
            subtitle={`Verified Credential issued by ${selectedCert.issuer}`}
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </Container>
    </section>
  );
}
