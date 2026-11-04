"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Code2, Download, Sparkles } from "lucide-react";
import { DownloadApkButton, SourceCodeButton } from "./download-buttons";
import { DunesScene } from "./dunes-scene";
import { Logo } from "./logo";
import { useToast } from "@/hooks/use-toast";
import { APP, LINKS } from "@/lib/app-data";

/** حقائق حقيقية عن التطبيق (من README و pubspec) */
const HIGHLIGHTS = [
  { icon: BadgeCheck, text: "مجاني بالكامل" },
  { icon: Sparkles, text: "بلا إعلانات مزعجة" },
  { icon: Code2, text: "مفتوح المصدر برخصة MIT" },
];

export function DownloadCta() {
  const { toast } = useToast();

  const handleDownloadClick = React.useCallback(() => {
    toast({
      title: "جزاك الله خيراً 🌙",
      description: "جارٍ فتح صفحة الإصدارات على GitHub لتحميل ملف APK…",
    });
  }, [toast]);

  return (
    <section id="download" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#241a0c] shadow-warm-lg"
        >
          {/* مشهد الكثبان الليلي — مرسوم بالكامل بـ SVG */}
          <DunesScene className="absolute inset-0 h-full w-full" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-[#241a0c]/70 via-[#241a0c]/35 to-[#241a0c]/85"
          />

          <div className="relative flex flex-col items-center px-6 py-16 text-center sm:px-12 lg:py-20">
            {/* شعار التطبيق المرسوم */}
            <span className="animate-pulse-gold mb-6 block rounded-[1.75rem] shadow-warm-lg ring-4 ring-[#B8862B]/40">
              <Logo className="h-24 w-24 rounded-[1.75rem]" />
            </span>

            <h2 className="max-w-2xl text-3xl font-bold leading-snug text-[#FAF0D8] sm:text-4xl">
              ابدأ رحلتك مع القرآن
              <span className="text-gold-gradient block pb-1">اليوم قبل الغد</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#FAF0D8]/80">
              حمّل الفُرقان مجاناً على هاتفك الأندرويد، واجعل وردك اليومي عادةً لا تنقطع — فخيركم
              من تعلّم القرآن وعلّمه.
            </p>

            {/* أزرار التحميل */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <DownloadApkButton onClick={handleDownloadClick} />
              <SourceCodeButton
                onClick={handleDownloadClick}
                className="border-[#FAF0D8]/25 bg-[#FAF0D8]/10 text-[#FAF0D8] hover:border-[#E8B54A] hover:bg-[#FAF0D8]/20"
              />
            </div>

            {/* شارة الإصدار الحقيقي */}
            <a
              href={LINKS.releases}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#B8862B]/40 bg-[#241a0c]/60 px-5 py-2.5 backdrop-blur-sm transition-colors hover:border-[#E8B54A]"
            >
              <Download className="h-4 w-4 text-[#E8B54A]" />
              <p className="text-sm font-semibold text-[#FAF0D8]/90">
                الإصدار{" "}
                <strong className="font-bold text-[#E8B54A]" dir="ltr">
                  {APP.version}
                </strong>{" "}
                — {APP.betaLabel}
              </p>
            </a>

            {/* مزايا سريعة */}
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2 text-sm font-medium text-[#FAF0D8]/75"
                >
                  <item.icon className="h-4 w-4 text-[#E8B54A]" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
