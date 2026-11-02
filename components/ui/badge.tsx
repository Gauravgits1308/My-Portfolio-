import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "accent"
  | "outline"
  | "success"
  | "warning";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-surface-subtle text-secondary border-subtle",
    accent: "bg-accent-muted text-accent border-border-accent",
    outline: "bg-transparent text-tertiary border-subtle",
    success: "bg-emerald-500/10 text-status-success border-emerald-500/20",
    warning: "bg-amber-500/10 text-status-warning border-amber-500/20",
  }[variant];

  const dotClasses = {
    default: "bg-secondary",
    accent: "bg-accent",
    outline: "bg-tertiary",
    success: "bg-status-success animate-pulse",
    warning: "bg-status-warning",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs border font-mono text-mono-micro tracking-wide select-none",
        variantClasses,
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotClasses)}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
