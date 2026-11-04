"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/** يكتشف اكتمال الـ hydration دون setState داخل effect (يتفادى تعارض SSR) */
const emptySubscribe = () => () => {};
function useMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/** زر تبديل الوضع الليلي/النهاري لبوابة «قريباً» */
export function GateThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "التبديل إلى الوضع النهاري" : "التبديل إلى الوضع الليلي"}
      title={isDark ? "الوضع النهاري" : "الوضع الليلي"}
      className="absolute left-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-warm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
