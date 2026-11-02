import React from "react";
import { cn } from "@/lib/utils";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingVariant =
  | "display"
  | "headline"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  variant?: HeadingVariant;
  kicker?: string;
  divider?: boolean;
}

export function Heading({
  as: Component = "h2",
  variant,
  kicker,
  divider = false,
  className,
  children,
  ...props
}: HeadingProps) {
  // If variant is not explicitly provided, map default variant to HTML heading level
  const resolvedVariant: HeadingVariant =
    variant ||
    (Component === "h1"
      ? "h1"
      : Component === "h2"
      ? "h2"
      : Component === "h3"
      ? "h3"
      : "h4");

  const variantClasses = {
    display: "font-sans text-display font-bold tracking-tight text-primary",
    headline: "font-sans text-headline font-semibold tracking-tight text-primary",
    h1: "font-sans text-h1 font-semibold tracking-tight text-primary",
    h2: "font-sans text-h2 font-medium tracking-tight text-primary",
    h3: "font-sans text-h3 font-medium tracking-tight text-primary",
    h4: "font-sans text-h4 font-medium tracking-tight text-primary",
  }[resolvedVariant];

  const content = (
    <Component className={cn(variantClasses, className)} {...props}>
      {children}
    </Component>
  );

  if (!kicker && !divider) {
    return content;
  }

  return (
    <div className="flex flex-col gap-space-2 w-full">
      {kicker && (
        <span className="font-mono text-mono-header text-accent uppercase tracking-wider select-none">
          {kicker.startsWith("//") ? kicker : `// ${kicker}`}
        </span>
      )}
      {content}
      {divider && <hr className="border-0 border-b border-subtle mt-space-3 w-full" />}
    </div>
  );
}
