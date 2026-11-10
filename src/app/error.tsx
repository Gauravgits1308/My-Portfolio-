"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error captured:", error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center justify-center py-24 sm:py-32">
      <Container size="sm" className="text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-crimson-primary/40 bg-void-charcoal shadow-crimson-glow">
          <span className="font-mono text-3xl font-bold text-crimson-glow">ERR</span>
          <div className="absolute -inset-1 rounded-2xl bg-crimson-primary/20 blur-xl -z-10" />
        </div>

        <Heading level={1} variant="editorial" accentDot className="mb-4 text-3xl sm:text-4xl">
          System Interruption
        </Heading>

        <Text variant="muted" size="base" className="mx-auto mb-4 max-w-md">
          An unexpected anomaly occurred during state execution.
        </Text>

        {error.message && (
          <p className="mx-auto mb-8 max-w-md rounded-lg border border-void-border bg-void-elevated p-3 font-mono text-xs text-crimson-glow/90 break-words">
            {error.message}
          </p>
        )}

        <div className="flex items-center justify-center gap-4">
          <Button variant="primary" size="md" onClick={() => reset()}>
            Reinitialize System
          </Button>
          <Button variant="secondary" size="md" onClick={() => window.location.reload()}>
            Reload Space
          </Button>
        </div>
      </Container>
    </div>
  );
}
