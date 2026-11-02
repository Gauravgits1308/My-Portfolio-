import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline-mono"
  | "icon";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  href?: string;
  download?: boolean | string;
  target?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leadingIcon,
      trailingIcon,
      disabled,
      href,
      download,
      target,
      children,
      ...props
    },
    ref
  ) => {
    // Sizing rules with a strict 44px minimum touch target for default (md)
    const sizeClasses =
      variant === "icon"
        ? {
            sm: "w-8 h-8 min-h-[32px] p-0 justify-center",
            md: "w-11 h-11 min-h-[44px] p-0 justify-center",
            lg: "w-12 h-12 min-h-[48px] p-0 justify-center",
          }[size]
        : {
            sm: "min-h-[36px] px-3 py-1.5 text-body-small",
            md: "min-h-[44px] px-4 py-2 text-body",
            lg: "min-h-[48px] px-6 py-2.5 text-body-large",
          }[size];

    const variantClasses = {
      primary:
        "bg-accent text-inverse font-semibold border border-transparent hover:bg-accent-hover hover:shadow-[0_0_16px_var(--accent-glow)] active:scale-[0.98]",
      secondary:
        "bg-surface text-primary border border-border-medium hover:border-border-accent hover:bg-surface-subtle active:scale-[0.98]",
      ghost:
        "bg-transparent text-secondary border border-transparent hover:text-primary hover:bg-surface-subtle active:scale-[0.98]",
      "outline-mono":
        "font-mono text-mono-micro tracking-wider uppercase text-accent border border-border-accent bg-transparent hover:bg-accent-muted active:scale-[0.98]",
      icon: "bg-surface text-secondary border border-subtle hover:text-primary hover:border-border-medium hover:bg-surface-subtle active:scale-[0.98]",
    }[variant];

    const commonClasses = cn(
      "inline-flex items-center justify-center gap-2 rounded-sm select-none transition-all duration-fast",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none disabled:active:scale-100 disabled:shadow-none",
      sizeClasses,
      variantClasses,
      className
    );

    const content = (
      <>
        {leadingIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {leadingIcon}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {trailingIcon}
          </span>
        )}
      </>
    );

    if (href) {
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        Boolean(download);

      if (isExternal || download) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            download={download}
            target={target || (href.startsWith("http") ? "_blank" : undefined)}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={commonClasses}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={commonClasses}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={commonClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
