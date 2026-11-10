"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InteractivePlayground } from "@/components/three/InteractivePlayground";

export default function DevThreePlaygroundPage() {
  return (
    <div className="py-12 sm:py-16 space-y-10">
      <Container size="lg">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Heading level={6} variant="eyebrow">
                DEVELOPMENT TEST HARNESS • NOT FOR PUBLIC PORTFOLIO
              </Heading>
              <Heading level={1} variant="editorial" accentDot>
                Three.js Environment Playground
              </Heading>
              <Text size="sm" variant="muted" className="mt-1">
                Isolated testbench for stress-testing geometry scaling, simulating WebGL loss, and verifying reduced-motion modes.
              </Text>
            </div>

            <Link href="/">
              <Button variant="outline" size="sm">
                ← Return to Portfolio
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Badge variant="burgundy" dot size="sm">Dev Route: /dev/three-playground</Badge>
            <Badge variant="default" size="sm">Testing Harness</Badge>
          </div>
        </div>
      </Container>

      <Container size="lg">
        <InteractivePlayground />
      </Container>
    </div>
  );
}
