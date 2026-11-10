import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  glow?: boolean;
}

export function Divider({ className, glow = false, ...props }: DividerProps) {
  return (
    <div className={cn("relative my-8 w-full flex items-center justify-center", className)}>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-void-border to-transparent" />
      {glow && (
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-crimson-primary shadow-crimson-glow"
          aria-hidden="true"
        />
      )}
      <hr className="sr-only" {...props} />
    </div>
  );
}
