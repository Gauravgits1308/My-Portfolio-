"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function PortfolioHomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* 01. Hero Section: Personal Identity, Concise Purpose & Ambient Three.js Lattice */}
      <HeroSection />

      {/* 02. Featured Projects & Case Studies (Main Attraction: Revora, Cafe Cloud, Voter List, Portfolio) */}
      <ProjectsSection />

      {/* 03. Architectural Background & Personal Workspace */}
      <AboutSection />

      {/* 04. Career Experience & Campus Leadership Timeline */}
      <ExperienceSection />

      {/* 05. Technical Stack & Engineering Capabilities */}
      <SkillsSection />

      {/* 06. Recognitions, Hackathons & Verified Industry Certifications */}
      <AchievementsSection />

      {/* 07. Verified Single-Page Resume Callout */}
      <ResumeSection />

      {/* 08. Direct, Personal Communication & Contact */}
      <ContactSection />
    </div>
  );
}
