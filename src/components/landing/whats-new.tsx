"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Construction, Github, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { APP, LINKS, STATS } from "@/lib/app-data";

/** ما يتضمّنه الإصدار التجريبي الحالي — مأخوذ من README */
const SHIPPED = [
  "قراءة المصحف والتنقل بالفهرس بين السور والأجزاء والأحزاب والأرباع، مع الملاحظات والوسوم والمجموعات.",
  `تلاوات ${STATS.reciters} قارئاً مع مشغل مصغّر وتشغيل في الخلفية وتتبّع الآية وتنزيل السور.`,
  `التفاسير (${STATS.tafsirSources} مصدراً) والترجمات (${STATS.translationLanguages} لغة) من داخل تجربة القراءة.`,
  "مواقيت الصلاة والقبلة، ومكتبة أذكار كاملة، وخطط ختمة مع متابعة الورد والتقدّم.",
  `٥ ويدجتات أصلية للشاشة الرئيسية وتنبيهات الأذان وآية اليوم وأذكار الصباح والمساء.`,
];

/** ما زال قيد العمل أو التحقق — تصريح صريح من README */
const PENDING = [
  "نسخة iOS: المشروع موجود لكن يلزم التحقق من الميزات الأصلية قبل النشر.",
  "توثيق تراخيص بعض الأصول والمحتوى الخارجي لا يزال غير محسوم.",
  "التطبيق قيد التحسين المستمر بناءً على ملاحظات المستخدمين، وقد توجد أجزاء غير مكتملة.",
];

export function WhatsNew() {
  return (
    <section id="whats-new" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="حالة التطوير"
          title={
            <>
              الإصدار الحالي <span className="text-gold-gradient">وما زال قيد العمل</span>
            </>
          }
          description="بدل سجل تحديثات مُفبرك، هذه حالة المشروع الفعلية بإيجابياتها ونواقصها — بوضوح كامل."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* الإصدار الحالي */}
          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card-warm rounded-3xl p-6 sm:p-7"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 text-primary ring-1 ring-accent/30">
                <Rocket className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-foreground" dir="ltr">
                  {APP.version}
                </h3>
                <span className="text-xs text-muted-foreground">الإصدار التجريبي العام المتاح</span>
              </div>
              <span className="ms-auto rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground">
                الحالي
              </span>
            </div>

            <ul className="space-y-2.5">
              {SHIPPED.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  <span className="text-sm leading-7 text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* قيد العمل */}
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-warm rounded-3xl p-6 sm:p-7"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 text-primary ring-1 ring-accent/30">
                <Construction className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-foreground">قيد العمل</h3>
                <span className="text-xs text-muted-foreground">نقاط معلنة بشفافية</span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {PENDING.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-muted-foreground" />
                  <span className="text-sm leading-7 text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs leading-6 text-secondary-foreground">
              التطبيق نسخة <strong className="font-bold text-primary">بيتا تجريبية</strong> وليست
              إصداراً نهائياً رسمياً — نشاركها للاستفادة من ملاحظاتكم.
            </p>
          </motion.article>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={LINKS.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            <Github className="h-4 w-4" />
            أحدث الإصدارات على GitHub
          </a>
          <a
            href={LINKS.issues}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-6 py-3 text-sm font-bold text-primary transition-all hover:border-accent"
          >
            أبلغ عن مشكلة
          </a>
        </div>
      </div>
    </section>
  );
}
