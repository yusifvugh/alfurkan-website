"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AudioLines,
  BadgeCheck,
  BookOpen,
  Headphones,
  ShieldCheck,
  Smartphone,
  Target,
  ScrollText,
} from "lucide-react";
import { PhoneFrame } from "@/components/phone/phone-frame";
import {
  MushafScreen,
  PlanScreen,
  PlayerScreen,
  SurahListScreen,
} from "@/components/phone/screens";
import { DownloadApkButton, SourceCodeButton } from "./download-buttons";
import { CountUp } from "./count-up";
import { cn } from "@/lib/utils";
import { STATS } from "@/lib/app-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/** إحصاءات حقيقية مستخرجة من مصادر التطبيق */
const HERO_STATS = [
  { to: STATS.quranPages, label: "صفحة بالرسم العثماني" },
  { to: STATS.reciters, label: "قارئاً للتلاوة" },
  { to: STATS.tafsirSources, label: "مصدر تفسير معتمد" },
  { to: STATS.translationLanguages, label: "لغة ترجمة" },
];

/** شاشات المعاينة التفاعلية في الهيرو */
const SCREENS = [
  { id: "mushaf", label: "المصحف", icon: BookOpen, node: <MushafScreen /> },
  { id: "index", label: "الفهرس", icon: ScrollText, node: <SurahListScreen /> },
  { id: "player", label: "التلاوة", icon: Headphones, node: <PlayerScreen /> },
  { id: "plan", label: "الحفظ", icon: Target, node: <PlanScreen /> },
];

export function Hero() {
  const [active, setActive] = React.useState(0);
  const [auto, setAuto] = React.useState(true);

  // تبديل تلقائي للشاشات حتى يتفاعل الزائر بنفسه
  React.useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((a) => (a + 1) % SCREENS.length), 4500);
    return () => clearInterval(t);
  }, [auto]);

  const select = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  return (
    <section id="top" className="relative overflow-hidden">
      {/* خلفية مزخرفة */}
      <div
        aria-hidden
        className="pattern-stars pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)] dark:opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 start-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-20">
        {/* النص التعريفي */}
        <div className="text-center lg:text-start">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm"
          >
            <Smartphone className="h-3.5 w-3.5" />
            نسخة تجريبية (بيتا) · متوفر حصرياً لأندرويد
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl font-bold leading-[1.25] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            القرآن الكريم
            <span className="text-gold-gradient block pb-1">بين يديك أينما كنت</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mt-5 max-w-xl text-base leading-8 text-secondary-foreground sm:text-lg sm:leading-9 lg:mx-0"
          >
            تطبيق <strong className="font-bold text-primary">الفُرقان</strong> يجمع لك المصحف
            الشريف كاملاً بالرسم العثماني، وتلاوات لأكثر من ٣٠ قارئاً مع تتبّع الآية، و«١١»
            تفسيراً عربياً معتمداً، وخطة ختمة وحفظ ذكية — ويعمل{" "}
            <strong className="font-bold text-primary">دون إنترنت</strong> بعد التحميل الأول.
          </motion.p>

          {/* أزرار التحميل */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <DownloadApkButton />
            <SourceCodeButton />
          </motion.div>

          {/* الثقة */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-secondary-foreground lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-accent" aria-hidden />
              <strong className="font-bold">مجاني بالكامل</strong>
              <span className="text-muted-foreground">وبلا إعلانات</span>
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
              <strong className="font-bold">مفتوح المصدر</strong>
              <span className="text-muted-foreground">برخصة MIT</span>
            </span>
          </motion.div>
        </div>

        {/* معاينة الهاتف التفاعلية */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto flex flex-col items-center"
        >
          {/* توهج خلف الهاتف */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[240px] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
          />
          <div className="animate-float-soft relative">
            <PhoneFrame
              label={`معاينة تفاعلية لتطبيق الفرقان — ${SCREENS[active].label}`}
              className="rotate-2"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -28, scale: 0.985 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 28, scale: 0.985 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col"
                >
                  {SCREENS[active].node}
                </motion.div>
              </AnimatePresence>
            </PhoneFrame>
          </div>

          {/* تبويبات تبديل الشاشات */}
          <div className="card-warm relative z-10 -mt-5 flex items-center gap-1 rounded-full p-1.5 shadow-warm">
            {SCREENS.map((screen, i) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => select(i)}
                aria-pressed={active === i}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[11px] font-bold transition-all sm:px-3.5 sm:text-xs",
                  active === i
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "text-primary hover:bg-accent/15"
                )}
              >
                <screen.icon className="h-3.5 w-3.5" />
                {screen.label}
              </button>
            ))}
          </div>

          {/* بطاقة عائمة: عدد الصفحات */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="card-warm absolute -start-4 top-16 hidden items-center gap-3 rounded-2xl p-3.5 sm:flex lg:-start-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-foreground">٦٠٤ صفحات</span>
              <span className="text-[11px] text-muted-foreground">بالرسم العثماني</span>
            </span>
          </motion.div>

          {/* بطاقة عائمة: تتبع الآية */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="card-warm absolute -end-3 bottom-24 hidden items-center gap-3 rounded-2xl p-3.5 sm:flex lg:-end-8"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <AudioLines className="h-5 w-5" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent ring-2 ring-card" />
              </span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-foreground">تتبّع الآية</span>
              <span className="text-[11px] text-muted-foreground">مُفعّل أثناء التلاوة</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* شريط الأرقام المتحركة */}
      <div className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <dl className="card-warm grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-8 sm:grid-cols-4 sm:px-10">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
              <dt className="order-2 text-xs font-medium text-muted-foreground">{stat.label}</dt>
              <dd className="order-1 text-2xl font-bold text-primary sm:text-3xl">
                <CountUp to={stat.to} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
