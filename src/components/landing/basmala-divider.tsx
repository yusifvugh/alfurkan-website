import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * فاصل البسملة الزخرفي بين الأقسام — بخط أميري قرآن
 */
export function BasmalaDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("relative mx-auto flex w-full max-w-3xl items-center gap-4 px-6", className)}
    >
      {/* الخط الأيمن (قرب النص ذهبي، يخفت للخارج) */}
      <span className="h-px flex-1 bg-gradient-to-l from-accent/70 to-transparent" />
      <span className="h-1.5 w-1.5 rotate-45 bg-accent/70" />
      <p className="font-quran whitespace-nowrap text-xl text-primary sm:text-2xl">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>
      <span className="h-1.5 w-1.5 rotate-45 bg-accent/70" />
      {/* الخط الأيسر */}
      <span className="h-px flex-1 bg-gradient-to-r from-accent/70 to-transparent" />
    </div>
  );
}
