"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2, Quote, RefreshCw, Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";

interface Verse {
  id: number;
  text: string;
  surahName: string;
  ayahRef: string;
  benefit: string;
}

export function AyahOfDay() {
  const [verse, setVerse] = React.useState<Verse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchVerse = React.useCallback(async (random = false) => {
    if (random) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);
    try {
      const res = await fetch(`/api/ayah${random ? "?random=1" : ""}`, { cache: "no-store" });
      if (!res.ok) throw new Error("network");
      const data = (await res.json()) as { verse: Verse };
      // انتقال بصري لطيف عند تبديل الآية
      await new Promise((r) => setTimeout(r, random ? 250 : 0));
      setVerse(data.verse);
    } catch {
      setError("تعذّر جلب الآية، حاول مرة أخرى.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // الجلب الأولي عند التركيب: لا نستدعي setState بشكل متزامن داخل الـ effect
  // (حالة loading تبدأ true أصلاً)، ونحمي من التحديث بعد إزالة المكوّن.
  React.useEffect(() => {
    let active = true;

    (async () => {
      try {
        const res = await fetch("/api/ayah", { cache: "no-store" });
        if (!res.ok) throw new Error("network");
        const data = (await res.json()) as { verse: Verse };
        if (active) setVerse(data.verse);
      } catch {
        if (active) setError("تعذّر جلب الآية، حاول مرة أخرى.");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="ayah"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-secondary/60 via-muted/40 to-transparent py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pattern-stars pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="تدبّر يومي"
          title={
            <>
              آية <span className="text-gold-gradient">اليوم</span> من الفرقان
            </>
          }
          description="نختار لك كل يوم آية مع تدبّرٍ موجز — كما تظهر في الشاشة الرئيسية للتطبيق."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="frame-mushaf bg-paper relative rounded-3xl px-6 py-10 shadow-warm-lg sm:px-12"
        >
          <Quote
            aria-hidden
            className="absolute end-6 top-6 h-8 w-8 rotate-180 text-[#B8862B]/30"
          />

          {loading ? (
            <div className="flex flex-col items-center gap-4 py-8" aria-live="polite" aria-busy="true">
              <Loader2 className="h-8 w-8 animate-spin text-accent" />
              <p className="text-sm font-medium text-muted-foreground">جارٍ جلب آية اليوم…</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center" role="alert">
              <p className="text-sm font-medium text-destructive">{error}</p>
              <button
                type="button"
                onClick={() => fetchVerse()}
                className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                إعادة المحاولة
              </button>
            </div>
          ) : verse ? (
            <div className="text-center">
              {/* نص الآية */}
              <blockquote className="font-quran mx-auto max-w-2xl text-[1.55rem] leading-[2.4] text-foreground sm:text-3xl sm:leading-[2.3]" dir="rtl">
                {verse.text}
              </blockquote>

              {/* المرجع */}
              <figcaption className="mt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-1.5 text-sm font-bold text-primary-foreground">
                  سورة {verse.surahName}
                  <span className="h-1 w-1 rounded-full bg-primary-foreground/60" />
                  الآية {verse.ayahRef}
                </span>
              </figcaption>

              {/* التدبّر */}
              <div className="mx-auto mt-7 flex max-w-xl items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-start">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-7 text-secondary-foreground">
                  <strong className="font-bold text-primary">تدبّر: </strong>
                  {verse.benefit}
                </p>
              </div>
            </div>
          ) : null}

          {/* زر آية أخرى */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => fetchVerse(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-6 py-2.5 text-sm font-bold text-primary transition-all hover:border-accent hover:bg-secondary/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "جارٍ التبديل…" : "آية أخرى"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
