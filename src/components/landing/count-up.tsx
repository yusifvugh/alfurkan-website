"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";
import { formatArabicNumber, toArabicDigits } from "@/lib/arabic";

/**
 * رقم يعد تصاعدياً عند ظهوره للزائر — بالأرقام العربية الشرقية
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const formatted =
    decimals > 0
      ? toArabicDigits(value.toFixed(decimals)).replace(".", "٫")
      : formatArabicNumber(Math.round(value));

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
