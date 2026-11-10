"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ImageModal } from "@/components/ui/ImageModal";

const LEADERSHIP_ROLES = [
  {
    role: "Club Coordinator",
    organization: "Fit India Club — IIIT Kota",
    period: "Aug 2024 – Aug 2027",
    description: "Led a cross-functional student body of 50+ members organizing campus fitness initiatives and community sports events, actively engaging 400+ participants.",
    logo: "/assets/Logos/Fit India Club.webp",
  },
  {
    role: "Event Manager",
    organization: "GFG Campus Body — IIIT Kota",
    period: "Aug 2025 – Aug 2026",
    description: "Managed end-to-end logistics, venue infrastructure, and participant workflows for a premier collegiate hackathon with 500+ attendees.",
    logo: "/assets/Logos/GeeksforGeeks.jpeg",
  },
  {
    role: "Photography Lead",
    organization: "Neon Cinematics — IIIT Kota",
    period: "Aug 2024 – Aug 2025",
    description: "Directed collegiate media team covering flagship technical symposia and cultural events, shaping visual brand identity and digital media production.",
    logo: "/assets/Logos/Neon Cinematics.jpeg",
  },
];

export function ExperienceSection() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-void-border/30">
      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-16">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 03. CAREER &amp; RESPONSIBILITY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Experience &amp; Leadership
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Production Engineering &amp; Campus Impact
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Production Engineering Internship Timeline Entry */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-14 border-b border-void-border/40">
              {/* Left Column: Date & Organization Details */}
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crimson-primary/40 bg-crimson-primary/10 text-crimson-glow font-mono text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary" />
                  <span>SDE INTERNSHIP • COMPLETED</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-white">
                    Orasis Infotech Pvt. Ltd.
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-muted mt-1">
                    <MapPin className="h-3 w-3 text-crimson-primary" />
                    <span>Noida, Uttar Pradesh</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-light">
                  <Calendar className="h-3.5 w-3.5 text-crimson-glow" />
                  <span>May 2026 – Jul 2026</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setCertModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-void-border bg-void-charcoal/60 hover:bg-void-elevated text-neutral-light hover:text-white font-mono text-xs transition-colors"
                  >
                    <Award className="h-3.5 w-3.5 text-crimson-glow" />
                    <span>View Certificate</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Right Column: Role & Impact */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h4 className="font-display text-2xl font-bold text-neutral-white">
                    Software Development Engineer (SDE) Intern
                  </h4>
                  <p className="font-mono text-xs text-crimson-glow mt-1">
                    Savvy HRMS Enterprise Platform · Node.js &amp; RESTful APIs
                  </p>
                </div>

                <ul className="space-y-3 font-light text-neutral-light text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary mt-2.5 shrink-0" />
                    <span>
                      Built backend feature modules for <strong className="text-neutral-white font-medium">Savvy HRMS</strong>, an enterprise HR management platform, optimizing payroll calculation algorithms and core HRM workflow states.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary mt-2.5 shrink-0" />
                    <span>
                      Engineered and optimized RESTful APIs for new business requirements, reducing database query retrieval latency by <strong className="text-crimson-glow font-medium">20%</strong> across critical endpoints.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary mt-2.5 shrink-0" />
                    <span>
                      Resolved <strong className="text-neutral-white font-medium">25+ critical bug tickets</strong> in an Agile development team, shipping production patches and database query optimizations to production releases.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-neutral-muted">
                  <span className="px-2.5 py-1 rounded-md border border-void-border/50 bg-void-charcoal/30 text-neutral-light">Node.js</span>
                  <span className="px-2.5 py-1 rounded-md border border-void-border/50 bg-void-charcoal/30 text-neutral-light">REST APIs</span>
                  <span className="px-2.5 py-1 rounded-md border border-void-border/50 bg-void-charcoal/30 text-neutral-light">Savvy HRMS</span>
                  <span className="px-2.5 py-1 rounded-md border border-void-border/50 bg-void-charcoal/30 text-neutral-light">Database Latency -20%</span>
                  <span className="px-2.5 py-1 rounded-md border border-void-border/50 bg-void-charcoal/30 text-neutral-light">Agile Sprints</span>
                </div>
              </div>
            </div>

            {/* 2. Position Of Responsibility */}
            <div className="pt-8 border-t border-void-border/40 space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6">
                <div>
                  <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                    {"//"} CAMPUS INITIATIVES &amp; GOVERNANCE
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                    Position Of Responsibility
                  </h3>
                </div>
                <p className="font-mono text-xs text-neutral-muted sm:text-right">
                  Institutional Leadership • Community Operations
                </p>
              </div>

              <div className="space-y-6">
                {LEADERSHIP_ROLES.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start pb-6 border-b border-void-border/20 last:border-0"
                  >
                    {/* Period (3 Cols) */}
                    <div className="lg:col-span-3 font-mono text-xs text-neutral-muted">
                      <span>{item.period}</span>
                    </div>

                    {/* Role & Org (4 Cols) */}
                    <div className="lg:col-span-4 space-y-1">
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-lg overflow-hidden border border-void-border bg-void-charcoal shrink-0">
                          <Image
                            src={item.logo}
                            alt={item.organization}
                            fill
                            unoptimized
                            className="object-contain p-0.5"
                          />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-bold text-neutral-white">
                            {item.role}
                          </h4>
                          <p className="font-mono text-xs text-crimson-glow">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description (5 Cols) */}
                    <div className="lg:col-span-5">
                      <p className="font-light text-sm text-neutral-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Certificate Preview Modal */}
        <ImageModal
          isOpen={certModalOpen}
          onClose={() => setCertModalOpen(false)}
          imageSrc="/assets/Resume and Certificates/Completion Certifiacte .jpg"
          imageAlt="Orasis Infotech SDE Internship Completion Certificate"
          title="SDE Internship Completion Certificate"
          subtitle="Orasis Infotech Pvt. Ltd. • May 2026 – Jul 2026"
        />
      </Container>
    </section>
  );
}
