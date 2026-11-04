"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Flame, MoonStar } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { SectionHeading } from "./section-heading";
import { useToast } from "@/hooks/use-toast";
import { toArabicDigits } from "@/lib/arabic";
import { STATS } from "@/lib/app-data";
import { cn } from "@/lib/utils";

const QUICK_PLANS = [30, 45, 60, 90];
/** عدد صفحات مصحف المدينة (مطابق لثابت التطبيق quranPageCount) */
const TOTAL_PAGES = STATS.quranPages;

/** تقدير وقت القراءة: الصفحة الواحدة ≈ دقيقتان ونصف في المتوسط */
const MINUTES_PER_PAGE = 2.5;

function getWirdSuggestion(pages: number): string {
  if (pages <= 7) return "ورد خفيف موزع: بعضه بعد الفجر وبعضه بعد المغرب";
  if (pages <= 12) return "ورد متصل واحد بعد صلاة الفجر";
  if (pages <= 21) return "وردان متوازنان: بعد الفجر وبعد العصر";
  return "قراءة موزعة على اليوم — صفحات بعد كل صلاة";
}

export function KhatmCalculator() {
  const [days, setDays] = React.useState(60);
  const [finished, setFinished] = React.useState(false);
  const { toast } = useToast();

  const pages = Math.ceil(TOTAL_PAGES / days);
  const minutes = Math.round(pages * MINUTES_PER_PAGE);
  const ringPct = pages / TOTAL_PAGES;
  const wird = getWirdSuggestion(pages);

  const finishDate = React.useMemo(
    () =>
      new Date(Date.now() + days * 86_400_000).toLocaleDateString("ar-EG", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    [days]
  );

  // الحساب يعمل محلياً داخل المتصفح — لا يُرسل أي شيء إلى خادم
  const handleStart = () => {
    setFinished(true);
    toast({
      title: "تقبّل الله منك! 🌙",
      description: `خطتك: ${toArabicDigits(pages)} صفحة يومياً — ${wird}.`,
    });
  };

  // هندسة حلقة التقدم
  const R = 52;
  const C = 2 * Math.PI * R;

  return (
    <section
      id="khatm"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-transparent via-secondary/40 to-transparent py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pattern-stars pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="خطة مخصصة لك"
          title={
            <>
              احسب <span className="text-gold-gradient">ختمتك</span> للمصحف الشريف
            </>
          }
          description="حرّك المؤشر واختر المدة التي تناسبك — وسنحسب لك الورد اليومي وتاريخ الختمة بإذن الله."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* لوحة التحكم */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card-warm flex flex-col rounded-3xl p-6 sm:p-8"
          >
            <label htmlFor="khatm-days" className="text-sm font-bold text-foreground">
              في كم يوماً تحب أن تختم؟
            </label>

            {/* العدد الكبير */}
            <p className="mt-4 text-center text-5xl font-bold text-primary">
              {toArabicDigits(days)}
              <span className="ms-2 text-lg font-semibold text-muted-foreground">يوماً</span>
            </p>

            <Slider
              id="khatm-days"
              value={[days]}
              onValueChange={(v) => setDays(v[0])}
              min={10}
              max={STATS.khatmaMaxDays}
              step={5}
              className="mt-6"
              aria-label="عدد أيام الختمة"
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-muted-foreground">
              <span>١٠ أيام</span>
              <span>{toArabicDigits(STATS.khatmaMaxDays)} يوماً</span>
            </div>

            {/* خطط سريعة */}
            <p className="mt-7 text-sm font-bold text-foreground">أو اختر خطة جاهزة:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK_PLANS.map((plan) => (
                <button
                  key={plan}
                  type="button"
                  onClick={() => setDays(plan)}
                  aria-pressed={days === plan}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold transition-all",
                    days === plan
                      ? "border-primary bg-primary text-primary-foreground shadow-warm"
                      : "border-border bg-card text-primary hover:border-accent"
                  )}
                >
                  {toArabicDigits(plan)} يوماً
                </button>
              ))}
            </div>

            {/* معادلة بسيطة */}
            <p className="mt-auto pt-7 text-center text-xs leading-6 text-muted-foreground">
              {toArabicDigits(TOTAL_PAGES)} صفحة ÷ {toArabicDigits(days)} يوماً ={" "}
              <strong className="font-bold text-primary">{toArabicDigits(pages)} صفحة يومياً</strong>
            </p>
          </motion.div>

          {/* بطاقة النتائج — بلون الهوية الداكن الثابت */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#8A5A1F] via-[#7A4E18] to-[#5A3D14] p-6 text-[#FAF0D8] shadow-warm-lg sm:p-8"
          >
            <div
              aria-hidden
              className="pattern-stars pointer-events-none absolute inset-0 opacity-20"
            />

            <div className="relative flex items-center gap-6">
              {/* حلقة التقدم */}
              <div className="relative shrink-0">
                <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90 sm:h-32 sm:w-32">
                  <circle
                    cx="60"
                    cy="60"
                    r={R}
                    fill="none"
                    stroke="rgba(250,240,216,0.18)"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={R}
                    fill="none"
                    stroke="#E8B54A"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={C}
                    strokeDashoffset={C * (1 - ringPct)}
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold leading-none">
                    {toArabicDigits(pages)}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold text-[#FAF0D8]/75">
                    صفحة يومياً
                  </span>
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-3">
                <p className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 shrink-0 text-[#E8B54A]" />
                  <span className="leading-6 text-[#FAF0D8]/90">
                    ≈ {toArabicDigits(minutes)} دقيقة قراءة يومياً
                  </span>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 shrink-0 text-[#E8B54A]" />
                  <span className="leading-6 text-[#FAF0D8]/90">تُختم بإذن الله: {finishDate}</span>
                </p>
              </div>
            </div>

            {/* الورد المقترح */}
            <div className="relative mt-6 flex items-start gap-3 rounded-2xl border border-[#FAF0D8]/15 bg-[#241a0c]/40 p-4">
              <MoonStar className="mt-0.5 h-5 w-5 shrink-0 text-[#E8B54A]" />
              <p className="text-sm leading-7 text-[#FAF0D8]/90">
                <strong className="font-bold text-[#E8B54A]">الورد المقترح: </strong>
                {wird}
              </p>
            </div>

            {/* زر البدء */}
            <div className="relative mt-auto flex flex-col items-center gap-3 pt-7">
              <button
                type="button"
                onClick={handleStart}
                disabled={finished}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all sm:w-auto",
                  finished
                    ? "bg-[#FAF0D8]/20 text-[#FAF0D8]"
                    : "bg-[#B8862B] text-[#FFFAF0] shadow-gold hover:-translate-y-0.5 hover:bg-[#D4A94E]"
                )}
              >
                <Flame className="h-4 w-4" />
                {finished ? "تم اعتماد خطتك — بالتوفيق!" : "اعتمد هذه الخطة إن شاء الله"}
              </button>

              <p className="text-xs leading-6 text-[#FAF0D8]/75">
                الحساب يجري في متصفحك مباشرة — دون تسجيل أو إرسال بيانات.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
