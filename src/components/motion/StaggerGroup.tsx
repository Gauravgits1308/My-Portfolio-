"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { createStaggerContainer, STAGGERS } from "./transitions";
import { cn } from "@/lib/utils";

export interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  className?: string;
}

export function StaggerGroup({
  children,
  staggerDelay = STAGGERS.normal,
  delayChildren = 0,
  once = true,
  className,
  ...props
}: StaggerGroupProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = createStaggerContainer(staggerDelay, delayChildren);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
