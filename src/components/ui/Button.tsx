import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "burgundy";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-crimson-primary hover:bg-crimson-deep text-neutral-white shadow-crimson-glow-sm hover:shadow-crimson-glow border border-crimson-glow/30 active:scale-[0.98]",
  secondary:
    "bg-void-elevated hover:bg-void-subtle text-neutral-white border border-void-border hover:border-void-border-bright active:scale-[0.98]",
  outline:
    "bg-transparent hover:bg-void-elevated text-neutral-white border border-void-border hover:border-crimson-primary/60 active:scale-[0.98]",
  ghost:
    "bg-transparent hover:bg-void-elevated text-neutral-muted hover:text-neutral-white active:scale-[0.98]",
  burgundy:
    "bg-gradient-to-r from-burgundy-vivid to-burgundy-deep hover:from-crimson-deep hover:to-burgundy-vivid text-neutral-white border border-crimson-primary/20 shadow-burgundy-glow active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs tracking-wide font-medium rounded-md gap-1.5",
  md: "h-10 px-4 text-sm tracking-wide font-medium rounded-lg gap-2",
  lg: "h-12 px-6 text-base tracking-wide font-medium rounded-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-primary focus-visible:ring-offset-2 focus-visible:ring-offset-void",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
