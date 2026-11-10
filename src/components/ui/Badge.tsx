import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "crimson" | "burgundy" | "outline" | "subtle";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-void-elevated text-neutral-light border border-void-border",
  crimson:
    "bg-crimson-dark/20 text-crimson-glow border border-crimson-primary/40",
  burgundy:
    "bg-burgundy-deep/40 text-neutral-white border border-burgundy-vivid/50",
  outline:
    "bg-transparent text-neutral-muted border border-void-border",
  subtle:
    "bg-void-subtle text-neutral-muted border border-transparent",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2 py-0.5 gap-1.5",
  md: "text-xs px-2.5 py-1 gap-2",
};

export function Badge({
  className,
  variant = "default",
  size = "sm",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono uppercase tracking-wider rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "crimson"
              ? "bg-crimson-glow animate-pulse"
              : "bg-neutral-muted"
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
