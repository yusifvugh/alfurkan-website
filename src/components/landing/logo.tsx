import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * شعار «الفُرقان» — أيقونة التطبيق الرسمية
 * (منسوخة من مشروع التطبيق: assets/app_icon.png)
 */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/app-icon.png"
      alt=""
      aria-hidden
      width={192}
      height={192}
      className={cn("select-none rounded-[22%]", className)}
    />
  );
}
