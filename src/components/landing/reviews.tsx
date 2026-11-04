"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FlaskConical,
  Info,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";

type Point = { icon: LucideIcon; title: string; text: string };

/** حقائق حقيقية عن المشروع (من README و docs/ui_ux_audit.md) */
const POINTS: Point[] = [
  {
    icon: FlaskConical,
    title: "أكثر من ٣٠٠ اختباراً آلياً",
    text: "يخضع التطبيق لمجموعة اختبارات آلية (Unit/Widget) ولأداة التحليل الثابت Flutter Analyze التي تمرّ حالياً بلا أي تحذير.",
  },
  {
    icon: Code2,
    title: "مفتوح المصدر برخصة MIT",
    text: "الكود المصدري كامل ومتاح على GitHub؛ يمكنك الاطلاع عليه والمساهمة فيه أو الإبلاغ عن أي مشكلة تواجهك.",
  },
  {
    icon: UserRound,
    title: "طُوّر بواسطة مطوّر واحد",
    text: "بُني الفُرقان بمجهود فردي وفي وقت محدود؛ نشارك العمل بشفافية كاملة مع المستخدمين بدل الادعاء بالكمال.",
  },
  {
    icon: ShieldCheck,
    title: "بياناتك تبقى على جهازك",
    text: "لا يطلب التطبيق إنشاء حساب؛ ملاحظاتك ووسومك ومجموعاتك وتنزيلاتك تُحفظ محلياً على جهازك.",
  },
  {
    icon: Sparkles,
    title: "بلا إعلانات إطلاقاً",
    text: "لا يتضمّن التطبيق أي حزمة إعلانات؛ تجربة قراءة نقية بلا مقاطعات ولا جدران دفع.",
  },
  {
    icon: Info,
    title: "نسخة بيتا تجريبية",
    text: "هذا إصدار تجريبي وليس إصداراً نهائياً؛ قد توجد أخطاء وظيفية أو أجزاء غير مكتملة نعمل على تحسينها.",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 bg-gradient-to-b from-transparent via-secondary/50 to-transparent py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="شفافية وجودة"
          title={
            <>
              لماذا <span className="text-gold-gradient">تثق</span> بتطبيق الفُرقان؟
            </>
          }
          description="لا نعرض لك أرقاماً منمّقة أو تقييمات مختلقة — هذه حقائق قابلة للتحقّق من داخل التطبيق ومستودعه المفتوح."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point, i) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card-warm rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 text-primary ring-1 ring-accent/30">
                <point.icon className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-base font-bold text-foreground">{point.title}</h3>
              <p className="text-sm leading-7 text-secondary-foreground">{point.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
