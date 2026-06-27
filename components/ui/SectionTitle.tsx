import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-secondary mt-4 ${centered ? "mx-auto" : ""}`}></div>
    </div>
  );
}
