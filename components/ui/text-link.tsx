import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ArrowType = "right" | "external" | "down" | "none";

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  arrow?: ArrowType;
  mono?: boolean;
}

export function TextLink({
  href,
  arrow = "none",
  mono = false,
  className,
  children,
  target,
  rel,
  ...props
}: TextLinkProps) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    target === "_blank";

  const resolvedTarget = target || (isExternal ? "_blank" : undefined);
  const resolvedRel =
    rel || (isExternal ? "noopener noreferrer" : undefined);

  const arrowIcons = {
    right: (
      <svg
        className="w-3.5 h-3.5 shrink-0 transition-transform duration-fast group-hover:translate-x-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    external: (
      <svg
        className="w-3.5 h-3.5 shrink-0 transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    ),
    down: (
      <svg
        className="w-3.5 h-3.5 shrink-0 transition-transform duration-fast group-hover:translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    ),
    none: null,
  }[arrow];

  return (
    <Link
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      className={cn(
        "group inline-flex items-center gap-1.5 text-secondary hover:text-accent underline underline-offset-4 decoration-border-subtle hover:decoration-accent transition-colors duration-fast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-xs",
        mono ? "font-mono text-mono-body" : "font-sans",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {arrowIcons}
    </Link>
  );
}
