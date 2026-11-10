import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24 sm:py-32">
      <Container size="sm" className="text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-void-border bg-void-charcoal shadow-crimson-glow-sm">
          <span className="font-mono text-4xl font-bold text-crimson-glow">404</span>
          <div className="absolute -inset-1 rounded-2xl bg-crimson-primary/20 blur-xl -z-10" />
        </div>

        <Heading level={1} variant="editorial" accentDot className="mb-4 text-3xl sm:text-4xl">
          Coordinate Not Found
        </Heading>

        <Text variant="muted" size="base" className="mx-auto mb-8 max-w-md">
          The requested coordinate or document does not exist in this digital space.
        </Text>

        <Link href="/">
          <Button variant="primary" size="md">
            Return to Foundation
          </Button>
        </Link>
      </Container>
    </div>
  );
}
