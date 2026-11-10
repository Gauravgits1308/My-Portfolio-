import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  variant?: "display" | "editorial" | "eyebrow" | "section";
  accentDot?: boolean;
}

const levelStyles: Record<number, string> = {
  1: "text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-white",
  2: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-white",
  3: "text-xl sm:text-2xl font-semibold tracking-tight text-neutral-white",
  4: "text-lg sm:text-xl font-semibold tracking-normal text-neutral-white",
  5: "text-base font-semibold text-neutral-white",
  6: "text-sm font-semibold uppercase tracking-wider text-neutral-muted",
};

export function Heading({
  level = 2,
  as,
  variant = "editorial",
  accentDot = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = (as || `h${level}`) as React.ElementType;

  if (variant === "eyebrow") {
    return (
      <div className={cn("inline-flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-crimson-glow", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-crimson-primary flex-shrink-0" aria-hidden="true" />
        <span>{children}</span>
      </div>
    );
  }

  return (
    <Tag
      className={cn(
        "font-display font-medium",
        levelStyles[level],
        variant === "display" && "tracking-tighter",
        className
      )}
      {...props}
    >
      {children}
      {accentDot && (
        <span className="text-crimson-primary ml-1 inline-block select-none font-sans" aria-hidden="true">
          .
        </span>
      )}
    </Tag>
  );
}
