"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  BookMarked,
  Compass,
  Headphones,
  LayoutGrid,
  ScrollText,
  Search,
  WifiOff,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { STATS } from "@/lib/app-data";

/** المزايا الحقيقية للتطبيق كما هي موثّقة في README */
const FEATURES = [
  {
    icon: BookOpen,
    title: "المصحف والقراءة",
    description:
      "المصحف كاملاً بـ٦٠٤ صفحات بالرسم العثماني، مع تنقّل بالفهرس بين السور والأجزاء والأحزاب والأرباع، وملاحظاتك ووسومك ومجموعاتك على الآيات.",
  },
  {
    icon: Headphones,
    title: "التلاوة والاستماع",
    description:
      "أكثر من ٣٠ قارئاً مع مشغّل مصغّر وتشغيل في الخلفية، وتتبّع الآية أثناء التلاوة، وتكرار المقاطع، وتنزيل السور للاستماع دون إنترنت.",
  },
  {
    icon: ScrollText,
    title: "التفاسير والترجمات",
    description:
      "١١ تفسيراً عربياً معتمداً (ابن كثير، الطبري، البغوي، السعدي…) وترجمات لـ١٨ لغة، تُفتح مباشرة من داخل تجربة القراءة.",
  },
  {
    icon: Search,
    title: "البحث والوصول",
    description:
      "ابحث في السور والآيات وانتقل إلى موضع محدد بسرعة، مع علامات مرجعية ملوّنة ومتابعة تلقائية لآخر موضع قراءة.",
  },
  {
    icon: WifiOff,
    title: "يعمل دون إنترنت",
    description:
      "حمّل المصحف والتلاوات والتفاسير مرة واحدة عبر الإنترنت، ثم اقرأ واستمع في أي مكان دون اتصال — مثالي للسفر.",
  },
  {
    icon: Compass,
    title: "مواقيت الصلاة والقبلة",
    description:
      "مواقيت الصلاة واتجاه القبلة، مع خيارات لموقع الحساب وطريقة حساب المواقيت التي تناسب مذهبك ومنطقتك.",
  },
  {
    icon: BookMarked,
    title: "الأذكار والختمة",
    description:
      "مكتبة أذكار كاملة مع تصفّح الفئات والبحث والعدّاد، وإنشاء خطط ختمة تصل إلى ٣٦٥ يوماً مع متابعة الورد والتقدّم.",
  },
  {
    icon: LayoutGrid,
    title: "ويدجتات وتنبيهات",
    description:
      "٥ ويدجتات للشاشة الرئيسية (آية اليوم، الأذكار، الختمة، التسبيح، مواقيت الصلاة)، وتنبيهات للأذان وآية اليوم وأذكار الصباح والمساء.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="لماذا الفُرقان؟"
          title={
            <>
              كل ما تحتاجه لرحلتك مع <span className="text-gold-gradient">كتاب الله</span>
            </>
          }
          description={`صمّمنا الفُرقان ليكون رفيقاً يومياً كاملاً: ${STATS.quranPages} صفحة للمصحف، و${STATS.reciters} قارئاً للتلاوة، وتفاسير وترجمات وأذكار ومواقيت الصلاة — في تطبيق واحد خفيف ومجاني.`}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="card-warm group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg"
            >
              {/* زخرفة خلفية خفيفة */}
              <div
                aria-hidden
                className="pattern-stars pointer-events-none absolute -end-6 -top-6 h-24 w-24 opacity-25 transition-opacity duration-300 group-hover:opacity-50"
              />
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 text-primary ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-7 text-secondary-foreground">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
