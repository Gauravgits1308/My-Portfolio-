import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { TextLink } from "@/components/ui/text-link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-fast">
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 layout-container py-space-12 space-y-space-12 focus:outline-none"
      >
        {/* Intro / Section Overview */}
        <section className="space-y-space-4">
          <Heading as="h1" variant="h1" kicker="PHASE 3.4 // UI FOUNDATION" divider>
            Component Architecture Showcase
          </Heading>
          <p className="text-body text-secondary max-w-prose">
            Restrained component foundation preview verifying the Engineered Editorial
            design tokens, typography scale, accessible interaction states, and dual-theme
            support.
          </p>
        </section>

        {/* 1. Button Variants */}
        <section className="space-y-space-6">
          <Heading as="h2" variant="h3" kicker="01. BUTTON PRIMITIVES">
            Button Variants & Interactive States
          </Heading>
          <div className="flex flex-wrap items-center gap-space-4 p-space-6 bg-surface border border-subtle rounded-md">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="ghost">Ghost Action</Button>
            <Button variant="outline-mono">{"// VERIFY STACK"}</Button>
            <Button
              variant="icon"
              aria-label="Example search action"
              title="Search"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Button>
            <Button variant="primary" disabled>
              Disabled State
            </Button>
          </div>
        </section>

        {/* 2. Badge & Tag System */}
        <section className="space-y-space-6">
          <Heading as="h2" variant="h3" kicker="02. METADATA & BADGE SYSTEM">
            Badges & Status Tags
          </Heading>
          <div className="flex flex-wrap items-center gap-space-3 p-space-6 bg-surface border border-subtle rounded-md">
            <Badge variant="default">TypeScript</Badge>
            <Badge variant="accent">Next.js 14</Badge>
            <Badge variant="outline">AST Parser</Badge>
            <Badge variant="success" dot>
              System Online
            </Badge>
            <Badge variant="warning" dot>
              Sync Active
            </Badge>
          </div>
        </section>

        {/* 3. Card Primitive */}
        <section className="space-y-space-6">
          <Heading as="h2" variant="h3" kicker="03. CARD CONTAINERS">
            Static & Interactive Surface Cards
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6">
            {/* Static Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="accent">FEATURED ENGINEERING</Badge>
                  <span className="font-mono text-mono-micro text-tertiary">2026</span>
                </div>
                <CardTitle>Static Surface Card</CardTitle>
                <CardDescription>
                  Level 1 base surface with hairline border and structured hierarchy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                A stable container with standard internal padding, clear typographic
                grouping, and seamless theme synchronization.
              </CardContent>
              <CardFooter>
                <TextLink href="#" arrow="right">
                  Inspect Specification
                </TextLink>
              </CardFooter>
            </Card>

            {/* Interactive Card */}
            <Card interactive>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="success" dot>
                    INTERACTIVE MODE
                  </Badge>
                  <span className="font-mono text-mono-micro text-accent">Active Hover</span>
                </div>
                <CardTitle>Interactive Hover Card</CardTitle>
                <CardDescription>
                  Level 2 elevated hover state with subtle lift and ambient shadow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Keyboard focusable with tabIndex, visible focus ring, and smooth
                editorial border luminance transition.
              </CardContent>
              <CardFooter>
                <TextLink href="/assets/My_resume.pdf" arrow="down">
                  Download Resume
                </TextLink>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* 4. Heading Hierarchy */}
        <section className="space-y-space-6">
          <Heading as="h2" variant="h3" kicker="04. TYPOGRAPHY SCALE">
            Editorial Heading Hierarchy
          </Heading>
          <div className="flex flex-col gap-space-4 p-space-6 bg-surface border border-subtle rounded-md">
            <Heading as="h2" variant="headline">
              Headline Display Scale
            </Heading>
            <Heading as="h3" variant="h1">
              Heading Level 1
            </Heading>
            <Heading as="h4" variant="h2">
              Heading Level 2
            </Heading>
            <Heading as="h5" variant="h3">
              Heading Level 3
            </Heading>
            <Heading as="h6" variant="h4">
              Heading Level 4
            </Heading>
          </div>
        </section>

        {/* 5. TextLink Navigation */}
        <section className="space-y-space-6">
          <Heading as="h2" variant="h3" kicker="05. HYPERLINK ANCHORS">
            TextLink Variants & Arrows
          </Heading>
          <div className="flex flex-wrap items-center gap-space-6 p-space-6 bg-surface border border-subtle rounded-md">
            <TextLink href="/">Standard Navigation Link</TextLink>
            <TextLink href="/" arrow="right">
              Internal Page Transition
            </TextLink>
            <TextLink href="https://github.com" arrow="external">
              External Documentation
            </TextLink>
            <TextLink href="/assets/My_resume.pdf" arrow="down">
              Download Verified PDF
            </TextLink>
            <TextLink href="/" mono>
              {"// MONO_SYSTEM_ANCHOR"}
            </TextLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
