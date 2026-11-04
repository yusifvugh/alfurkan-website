"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Languages,
  LayoutGrid,
  Mic2,
  ScrollText,
  Type,
  Volume2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  ATHAN_VOICES,
  FONTS,
  STATS,
  TAFSIRS,
  TOP_RECITERS,
  TRANSLATION_LANGUAGES,
  WIDGETS,
} from "@/lib/app-data";

type Group = {
  icon: LucideIcon;
  count: string;
  title: string;
  items: readonly string[];
  note: string;
};

/** موارد المحتوى الحقيقية المتضمّنة في التطبيق */
const GROUPS: Group[] = [
  {
    icon: ScrollText,
    count: "١١",
    title: "تفسيراً عربياً معتمداً",
    items: TAFSIRS,
    note: `بالإضافة إلى ${STATS.tafsirSources - TAFSIRS.length} إصدارات مترجمة من التفسير`,
  },
  {
    icon: Mic2,
    count: "٣٤",
    title: "قارئاً للتلاوة",
    items: TOP_RECITERS,
    note: `بجانب ${STATS.surahReciters} قارئاً للسور الكاملة`,
  },
  {
    icon: Languages,
    count: "١٨",
    title: "لغة ترجمة",
    items: TRANSLATION_LANGUAGES,
    note: "مع إمكانية التنقل بين الترجمات أثناء القراءة",
  },
  {
    icon: Volume2,
    count: "٧",
    title: "أصوات أذان",
    items: ATHAN_VOICES,
    note: "مع دعم التنبيه المسبق للصلاة حتى ٣٠ دقيقة",
  },
  {
    icon: LayoutGrid,
    count: "٥",
    title: "ويدجتات للشاشة الرئيسية",
    items: WIDGETS.map((w) => w.label),
    note: "ويدجتات أصلية (Kotlin) بمعاينة وإعدادات لكل نوع",
  },
  {
    icon: Type,
    count: "١٠",
    title: "خطوط عربية مضمّنة",
    items: FONTS,
    note: "منها خطوط مصحف المدينة و«أميري قرآن» و«عثماني حفص»",
  },
];

export function Comparison() {
  return (
    <section
      id="content"
      className="relative scroll-mt-24 bg-gradient-to-b from-transparent via-secondary/40 to-transparent py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="محتوى حقيقي لا وعود"
          title={
            <>
              ما ستجده فعلياً <span className="text-gold-gradient">داخل الفُرقان</span>
            </>
          }
          description="كل ما يلي مأخوذ من قوائم المحتوى الفعلية داخل التطبيق — تفاسير وترجمات وقرّاء وأصوات وخطوط حقيقية ومتوثّقة المصدر."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card-warm flex flex-col rounded-3xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 text-primary ring-1 ring-accent/30">
                  <group.icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl font-bold text-primary">{group.count}</span>
                  <span className="text-xs font-semibold text-muted-foreground">{group.title}</span>
                </div>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card/70 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-t border-border/60 pt-3 text-[11px] leading-6 text-muted-foreground">
                {group.note}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          محتوى القراء والتفاسير والترجمات قابل للتنزيل من داخل التطبيق، وبعض المواد المصدرية لا
          يزال توثيق ترخيصها قيد المراجعة (راجع سجل الأصول في المستودع).
        </p>
      </div>
    </section>
  );
}
