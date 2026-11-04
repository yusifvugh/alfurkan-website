"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { RELEASE_AT } from "@/lib/release";
import { toArabicDigits } from "@/lib/arabic";

const UNITS = [
  { key: "days", label: "يوم" },
  { key: "hours", label: "ساعة" },
  { key: "minutes", label: "دقيقة" },
  { key: "seconds", label: "ثانية" },
] as const;

type UnitKey = (typeof UNITS)[number]["key"];

interface Remaining extends Record<UnitKey, number> {
  done: boolean;
}

function computeRemaining(): Remaining {
  const diff = RELEASE_AT.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    done: false,
  };
}

/**
 * العدّاد التنازلي لموعد فتح الموقع.
 * القيم تُحسب على العميل فقط (حتى لا يحدث اختلاف Hydration)، ثم تُحدّث كل ثانية.
 */
export function ComingSoonCountdown() {
  const router = useRouter();
  const [remaining, setRemaining] = React.useState<Remaining | null>(null);

  React.useEffect(() => {
    const tick = () => setRemaining(computeRemaining());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  // عند انتهاء العدّاد يُحدَّث الجلب من السيرفر ليُفتح الموقع تلقائياً
  React.useEffect(() => {
    if (remaining?.done) router.refresh();
  }, [remaining?.done, router]);

  return (
    <div dir="ltr" className="grid grid-cols-4 gap-2.5 sm:gap-4">
      {UNITS.map((unit) => {
        const text = remaining
          ? toArabicDigits(remaining[unit.key].toString().padStart(2, "0"))
          : "٠٠";
        return (
          <div
            key={unit.key}
            className="relative overflow-hidden rounded-2xl border border-border bg-paper px-1.5 py-3.5 text-center shadow-warm sm:px-3 sm:py-5"
          >
            <span
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              aria-hidden="true"
            />
            <span className="block text-2xl font-bold leading-none tabular-nums text-primary sm:text-4xl">
              {text}
            </span>
            <span className="mt-1.5 block text-[11px] font-medium text-muted-foreground sm:mt-2 sm:text-xs">
              {unit.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
