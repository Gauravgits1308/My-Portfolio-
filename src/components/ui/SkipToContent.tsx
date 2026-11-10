import React from "react";
import { cn } from "@/lib/utils";

export function SkipToContent({
  targetId = "main-content",
  className,
}: {
  targetId?: string;
  className?: string;
}) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50",
        "px-4 py-2 rounded-md font-mono text-xs tracking-wider uppercase font-semibold",
        "bg-crimson-primary text-neutral-white shadow-crimson-glow border border-crimson-glow",
        "transition-all duration-200 outline-none ring-2 ring-white",
        className
      )}
    >
      Skip to content
    </a>
  );
}
