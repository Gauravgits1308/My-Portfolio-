import React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "lead";
  variant?: "body" | "muted" | "white" | "dim" | "mono";
}

const sizeStyles = {
  xs: "text-xs leading-relaxed",
  sm: "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  lead: "text-lg sm:text-xl leading-relaxed font-light",
};

const variantStyles = {
  body: "text-neutral-body",
  muted: "text-neutral-muted",
  white: "text-neutral-white",
  dim: "text-neutral-dark",
  mono: "font-mono text-neutral-muted tracking-tight",
};

export function Text({
  as: Tag = "p",
  size = "base",
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
