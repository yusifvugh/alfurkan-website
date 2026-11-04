import * as React from "react";
import { cn } from "@/lib/utils";

/** عنوان موحّد لأقسام الصفحة */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card/70 px-4 py-1.5 text-xs font-bold text-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-secondary-foreground">{description}</p>
      )}
    </div>
  );
}
