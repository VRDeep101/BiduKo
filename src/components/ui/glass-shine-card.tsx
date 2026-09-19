"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlassShineCardProps {
  title: string;
  description: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
  accent?: "violet" | "fuchsia" | "indigo" | "purple";
}

export const GlassShineCard: React.FC<GlassShineCardProps> = ({
  title,
  description,
  eyebrow,
  children,
  className,
  accent = "violet",
}) => {
  return (
    <article className={cn("glass-shine-card", `glass-shine-card--${accent}`, className)}>
      <div className="glass-shine-card__shine" aria-hidden="true" />
      <div className="glass-shine-card__glow" aria-hidden="true" />
      <div className="glass-shine-card__graphic" aria-hidden="true">
        {children}
      </div>
      <div className="glass-shine-card__content">
        {eyebrow ? <span className="glass-shine-card__eyebrow">{eyebrow}</span> : null}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="glass-shine-card__edge" aria-hidden="true" />
    </article>
  );
};

export const SampleCard: React.FC = () => (
  <GlassShineCard
    title="Sample text"
    description="A glass surface with a moving shine, depth and soft atmospheric glow."
    eyebrow="Interactive card"
  />
);
