"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { PlanScreen, PlayerScreen, SurahListScreen } from "@/components/phone/screens";
import { SectionHeading } from "./section-heading";
import { STATS } from "@/lib/app-data";
import { toArabicDigits } from "@/lib/arabic";

const SHOTS = [
  {
    key: "index",
    label: "فهرس المصحف",
    hint: `تصفّح ${toArabicDigits(STATS.surahs)} سورة مع بحث فوري وتصنيف مكي/مدني`,
    screen: <SurahListScreen />,
  },
  {
    key: "player",
    label: "مشغّل التلاوة",
    hint: `استمع إلى ${toArabicDigits(STATS.reciters)} قارئاً مع تتبّع الآية أثناء التلاوة`,
    screen: <PlayerScreen />,
  },
  {
    key: "plan",
    label: "خطة الحفظ",
    hint: "ورد يومي مخصّص مع متابعة تقدّمك أسبوعاً بأسبوع",
    screen: <PlanScreen />,
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="جولة في التطبيق"
          title={
            <>
              واجهة <span className="text-gold-gradient">صحراوية دافئة</span> تحبها العين
            </>
          }
          description="صمّمنا كل شاشة بعناية: ألوان رملية مريحة، وخط أميري للمصحف، وتفاصيل مذهّبة تُشعرك بهدوء الصحراء."
        />

        {/* شريط أفقي قابل للتمرير على الجوال */}
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-4 sm:justify-center lg:mx-0 lg:px-0">
          {SHOTS.map((shot, i) => (
            <motion.figure
              key={shot.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex w-[280px] shrink-0 snap-center flex-col items-center lg:w-auto"
            >
              <PhoneFrame
                label={`لقطة شاشة: ${shot.label} — ${shot.hint}`}
                className={i === 1 ? "lg:-translate-y-6" : ""}
              >
                {shot.screen}
              </PhoneFrame>
              <figcaption className="mt-6 text-center">
                <p className="text-lg font-bold text-foreground">{shot.label}</p>
                <p className="mt-1 max-w-[260px] text-sm leading-7 text-muted-foreground">{shot.hint}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* مؤشر تمرير للجوال */}
        <p className="mt-2 text-center text-xs font-medium text-muted-foreground sm:hidden">
          ← اسحب لاستعراض الشاشات →
        </p>
      </div>
    </section>
  );
}
