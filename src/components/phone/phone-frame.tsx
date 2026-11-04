import * as React from "react";
import { cn } from "@/lib/utils";
import { BatteryFull, Signal, Wifi } from "lucide-react";

/**
 * إطار هاتف أندرويد واقعي (بأسلوب Material You)
 * يُستخدم داخل الهيرو وقسم اللقطات لعرض شاشات تطبيق الفرقان
 */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  /** وصف الشاشة للقارئ الشاشة (وصولية) */
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      dir="rtl"
      className={cn(
        "relative w-[280px] shrink-0 select-none rounded-[2.6rem] bg-[#241a0c] p-[9px] shadow-warm-lg ring-1 ring-[#241a0c]/50",
        className
      )}
    >
      {/* الكاميرا الأمامية */}
      <div className="absolute left-1/2 top-[20px] z-20 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-[#3d2c15] ring-2 ring-[#150e05]/70">
        <span className="h-1 w-1 rounded-full bg-[#5a431f]" />
      </div>
      {/* الشاشة */}
      <div className="relative flex h-[560px] w-full flex-col overflow-hidden rounded-[2.05rem] bg-[#F3E3C0]">
        {children}
      </div>
    </div>
  );
}

/** شريط الحالة العلوي (وقت + إشارة + بطارية) */
export function StatusBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 pb-1 pt-3.5 text-[10px] font-semibold tracking-wide text-[#2B1F10]/80",
        className
      )}
    >
      <span>٩:٤١</span>
      <div className="flex items-center gap-1.5 text-[#2B1F10]/70">
        <Signal className="h-3 w-3" strokeWidth={2.5} />
        <Wifi className="h-3 w-3" strokeWidth={2.5} />
        <BatteryFull className="h-3.5 w-3.5" strokeWidth={2.5} />
      </div>
    </div>
  );
}

/** شريط الإيماءات السفلي في أندرويد */
export function GestureBar() {
  return (
    <div className="mt-auto flex h-5 items-center justify-center">
      <div className="h-[4px] w-24 rounded-full bg-[#2B1F10]/25" />
    </div>
  );
}

/** رقم الآية داخل نجمة ثمانية (طراز المصاحف) */
export function AyahBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative mx-1 inline-flex h-[1.15rem] w-[1.15rem] shrink-0 select-none items-center justify-center align-middle">
      <svg viewBox="0 0 40 40" className="absolute h-[1.15rem] w-[1.15rem]" aria-hidden>
        <rect
          x="11"
          y="11"
          width="18"
          height="18"
          fill="none"
          stroke="#B8862B"
          strokeWidth="1.6"
        />
        <rect
          x="11"
          y="11"
          width="18"
          height="18"
          fill="none"
          stroke="#B8862B"
          strokeWidth="1.6"
          transform="rotate(45 20 20)"
        />
        <circle cx="20" cy="20" r="8.4" fill="#B8862B" />
      </svg>
      <span className="relative z-10 text-[8px] font-bold leading-none text-[#FAF0D8]">
        {children}
      </span>
    </span>
  );
}
