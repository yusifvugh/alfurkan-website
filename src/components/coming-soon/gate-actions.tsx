"use client";

import * as React from "react";
import { CalendarPlus, Check, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

/**
 * أزرار بوابة «قريباً»: إضافة موعد الإطلاق إلى التقويم، ومشاركة رابط الموقع.
 */
export function GateActions() {
  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    const url = "https://alfurkan-beta.vercel.app";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: "الفُرقان",
          text: "موقع تطبيق الفُرقان — يُفتح قريباً، وتنزل النسخة التجريبية يوم الجمعة.",
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "تم نسخ رابط الموقع", description: url });
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // إلغاء المستخدم لنافذة المشاركة ليس خطأً
      if (error instanceof DOMException && error.name === "AbortError") return;
      toast({
        title: "تعذّرت المشاركة",
        description: "يمكنك نسخ الرابط يدوياً من شريط العنوان.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      <a
        href="/api/calendar"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:bg-primary/90"
      >
        <CalendarPlus className="h-4 w-4" aria-hidden="true" />
        أضف الموعد للتقويم
      </a>

      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Share2 className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "تم النسخ" : "شارك الموقع"}
      </button>
    </div>
  );
}
