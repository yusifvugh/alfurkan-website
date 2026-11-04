"use client";

import * as React from "react";
import {
  BookMarked,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Flame,
  Headphones,
  Pause,
  Play,
  Repeat,
  Search,
  Settings2,
  SkipBack,
  SkipForward,
  SlidersHorizontal,
  Trophy,
} from "lucide-react";
import { AyahBadge, GestureBar, StatusBar } from "./phone-frame";
import { toArabicDigits } from "@/lib/arabic";

/* ─────────────────────────────────────────────
   شاشة ١ — المصحف: سورة الفاتحة بخط أميري قرآن
   ───────────────────────────────────────────── */
const FATIHAH = [
  { n: "١", text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
  { n: "٢", text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" },
  { n: "٣", text: "الرَّحْمَٰنِ الرَّحِيمِ" },
  { n: "٤", text: "مَالِكِ يَوْمِ الدِّينِ" },
  { n: "٥", text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" },
  { n: "٦", text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" },
  {
    n: "٧",
    text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
  },
];

export function MushafScreen() {
  return (
    <>
      <StatusBar />
      {/* شريط التطبيق */}
      <div className="flex items-center justify-between px-4 pb-2">
        <ChevronRight className="h-4 w-4 text-[#8A5A1F]" strokeWidth={2.5} />
        <div className="text-center">
          <p className="text-[13px] font-bold text-[#2B1F10]">سورة الفاتحة</p>
          <p className="text-[9px] text-[#9C8355]">صفحة ١ · رواية حفص عن عاصم</p>
        </div>
        <div className="flex items-center gap-2 text-[#8A5A1F]">
          <Bookmark className="h-3.5 w-3.5" strokeWidth={2.5} />
          <Settings2 className="h-3.5 w-3.5" strokeWidth={2.5} />
        </div>
      </div>

      {/* صفحة المصحف بإطار مذهّب */}
      <div className="frame-mushaf mx-3 flex-1 overflow-hidden rounded-lg bg-[#FDF6E3] px-3 py-3">
        <p
          dir="rtl"
          className="font-quran mb-2 text-center text-[15px] leading-[1.9] text-[#8A5A1F]"
        >
          الفاتحة
        </p>
        <div className="h-px w-full bg-gradient-to-l from-transparent via-[#B8862B]/60 to-transparent" />
        <div className="space-y-[3px] pt-2">
          {FATIHAH.map((ayah) => (
            <p
              key={ayah.n}
              dir="rtl"
              className={
                ayah.n === "٥"
                  ? "font-quran rounded-md bg-[#B8862B]/20 px-1.5 py-0.5 text-center text-[13.5px] leading-[2.05] text-[#2B1F10] shadow-[inset_0_0_0_1px_rgba(184,134,43,0.35)]"
                  : "font-quran text-center text-[13.5px] leading-[2.05] text-[#2B1F10]"
              }
            >
              {ayah.text}
              <AyahBadge>{ayah.n}</AyahBadge>
            </p>
          ))}
        </div>
      </div>

      {/* مشغّل مصغّر */}
      <div className="mx-3 mb-1.5 mt-2 flex items-center gap-2.5 rounded-2xl border border-[#8A5A1F]/15 bg-[#FAF0D8] p-2.5 shadow-sm">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#B8862B] to-[#8A5A1F] text-[#FAF0D8]">
          <Play className="h-3.5 w-3.5 -mr-0.5" fill="currentColor" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[10.5px] font-semibold text-[#2B1F10]">
            مشاري راشد العفاسي
          </p>
          <div className="mt-1 flex items-center gap-1.5">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#8A5A1F]/15">
              <div className="h-full w-1/3 rounded-full bg-[#B8862B]" />
            </div>
            <span className="text-[7.5px] font-medium text-[#9C8355]">٣:٤١</span>
          </div>
        </div>
        <BookMarked className="h-3.5 w-3.5 shrink-0 text-[#9C8355]" />
      </div>
      <GestureBar />
    </>
  );
}

/* ─────────────────────────────────────────────
   شاشة ٢ — فهرس المصحف مع البحث والتصنيف
   ───────────────────────────────────────────── */
const SURAHS = [
  { n: "١", name: "الفاتحة", type: "مكية", verses: "٧ آيات", playing: true },
  { n: "٢", name: "البقرة", type: "مدنية", verses: "٢٨٦ آية", playing: false },
  { n: "٣", name: "آل عمران", type: "مدنية", verses: "٢٠٠ آية", playing: false },
  { n: "٤", name: "النساء", type: "مدنية", verses: "١٧٦ آية", playing: false },
  { n: "٥", name: "المائدة", type: "مدنية", verses: "١٢٠ آية", playing: false },
  { n: "٦", name: "الأنعام", type: "مكية", verses: "١٦٥ آية", playing: false },
  { n: "٧", name: "الأعراف", type: "مكية", verses: "٢٠٦ آيات", playing: false },
  { n: "٨", name: "الأنفال", type: "مدنية", verses: "٧٥ آية", playing: false },
];

function SurahStar({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
      <svg viewBox="0 0 40 40" className="absolute h-8 w-8" aria-hidden>
        <rect x="10" y="10" width="20" height="20" fill="none" stroke="#B8862B" strokeWidth="1.4" />
        <rect
          x="10"
          y="10"
          width="20"
          height="20"
          fill="none"
          stroke="#B8862B"
          strokeWidth="1.4"
          transform="rotate(45 20 20)"
        />
        <circle cx="20" cy="20" r="9.6" fill="#B8862B" />
      </svg>
      <span className="relative z-10 text-[9.5px] font-bold text-[#FAF0D8]">{children}</span>
    </span>
  );
}

export function SurahListScreen() {
  return (
    <>
      <StatusBar />
      <div className="flex items-center justify-between px-4 pb-2">
        <ChevronRight className="h-4 w-4 text-[#8A5A1F]" strokeWidth={2.5} />
        <p className="text-[13px] font-bold text-[#2B1F10]">فهرس المصحف</p>
        <SlidersHorizontal className="h-3.5 w-3.5 text-[#8A5A1F]" strokeWidth={2.5} />
      </div>

      {/* البحث */}
      <div className="mx-3.5 mb-2.5 flex items-center gap-2 rounded-xl border border-[#8A5A1F]/15 bg-[#FAF0D8] px-3 py-2">
        <Search className="h-3.5 w-3.5 text-[#9C8355]" />
        <span className="text-[10px] text-[#9C8355]">ابحث عن سورة أو آية…</span>
      </div>

      {/* التصنيفات */}
      <div className="mb-2 flex gap-1.5 px-3.5">
        <span className="rounded-full bg-[#8A5A1F] px-3 py-1 text-[9.5px] font-semibold text-[#FAF0D8]">
          الكل
        </span>
        <span className="rounded-full border border-[#8A5A1F]/25 bg-[#FAF0D8] px-3 py-1 text-[9.5px] font-medium text-[#8A5A1F]">
          المكية
        </span>
        <span className="rounded-full border border-[#8A5A1F]/25 bg-[#FAF0D8] px-3 py-1 text-[9.5px] font-medium text-[#8A5A1F]">
          المدنية
        </span>
      </div>

      {/* القائمة */}
      <div className="scrollbar-warm mx-3.5 flex-1 space-y-1.5 overflow-y-auto pb-2">
        {SURAHS.map((s) => (
          <div
            key={s.n}
            className={`flex items-center gap-2.5 rounded-xl border p-2 ${
              s.playing
                ? "border-[#B8862B]/50 bg-[#B8862B]/15"
                : "border-[#8A5A1F]/10 bg-[#FAF0D8]"
            }`}
          >
            <SurahStar>{s.n}</SurahStar>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-[#2B1F10]">{s.name}</p>
              <p className="text-[9px] text-[#9C8355]">
                {s.type} · {s.verses}
              </p>
            </div>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                s.playing ? "bg-[#8A5A1F] text-[#FAF0D8]" : "bg-[#8A5A1F]/10 text-[#8A5A1F]"
              }`}
            >
              {s.playing ? (
                <Pause className="h-3 w-3" fill="currentColor" />
              ) : (
                <Play className="h-3 w-3 -mr-px" fill="currentColor" />
              )}
            </span>
          </div>
        ))}
      </div>
      <GestureBar />
    </>
  );
}

/* ─────────────────────────────────────────────
   شاشة ٣ — مشغّل التلاوة مع تتبّع الآية
   ───────────────────────────────────────────── */
export function PlayerScreen() {
  return (
    <>
      <StatusBar />
      <div className="flex items-center justify-between px-4 pb-1">
        <ChevronDown className="h-4 w-4 text-[#8A5A1F]" strokeWidth={2.5} />
        <p className="text-[10.5px] font-medium text-[#9C8355]">تلاوة الآن</p>
        <Repeat className="h-3.5 w-3.5 text-[#8A5A1F]" strokeWidth={2.5} />
      </div>

      {/* القرّاء */}
      <div className="mx-auto mb-3 mt-3 flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#B8862B] to-[#8A5A1F] shadow-gold">
          <span className="absolute inset-1.5 rounded-full border border-[#FAF0D8]/50" />
          <Headphones className="h-9 w-9 text-[#FAF0D8]" />
        </div>
        <p className="mt-3 text-[14px] font-bold text-[#2B1F10]">مشاري راشد العفاسي</p>
        <p className="text-[9.5px] text-[#9C8355]">سورة البقرة · رواية حفص عن عاصم</p>
      </div>

      {/* الآية الحالية */}
      <div className="mx-4 rounded-xl border border-[#B8862B]/35 bg-[#B8862B]/12 px-3 py-2.5">
        <p dir="rtl" className="font-quran text-center text-[12.5px] leading-[2] text-[#2B1F10]">
          الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ
          <AyahBadge>٣</AyahBadge>
        </p>
        <p className="text-center text-[8px] font-medium text-[#9C8355]">
          تتبّع الآية مُفعّل أثناء التلاوة
        </p>
      </div>

      {/* شريط التقدم */}
      <div className="mx-5 mt-4">
        <div className="h-1.5 overflow-hidden rounded-full bg-[#8A5A1F]/15">
          <div className="h-full w-2/5 rounded-full bg-gradient-to-l from-[#B8862B] to-[#8A5A1F]" />
        </div>
        <div className="mt-1.5 flex justify-between text-[8.5px] font-medium text-[#9C8355]">
          <span>٤٨:١٢</span>
          <span>١٢:٣٤</span>
        </div>
      </div>

      {/* أزرار التحكم */}
      <div className="mt-2 flex items-center justify-center gap-6 px-4">
        <SkipBack className="h-5 w-5 text-[#8A5A1F]" fill="currentColor" />
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8A5A1F] text-[#FAF0D8] shadow-gold">
          <Pause className="h-6 w-6" fill="currentColor" />
        </span>
        <SkipForward className="h-5 w-5 text-[#8A5A1F]" fill="currentColor" />
      </div>

      {/* خيارات */}
      <div className="mb-1 mt-3 flex justify-center gap-2">
        <span className="rounded-full border border-[#8A5A1F]/20 bg-[#FAF0D8] px-3 py-1 text-[9px] font-semibold text-[#8A5A1F]">
          السرعة ١٫٠×
        </span>
        <span className="rounded-full border border-[#8A5A1F]/20 bg-[#FAF0D8] px-3 py-1 text-[9px] font-semibold text-[#8A5A1F]">
          تكرار الآية ٣
        </span>
      </div>
      <GestureBar />
    </>
  );
}

/* ─────────────────────────────────────────────
   شاشة ٤ — خطة الحفظ ومتابعة التقدّم
   ───────────────────────────────────────────── */
const WEEK = [
  { day: "س", value: 45 },
  { day: "ح", value: 70 },
  { day: "ن", value: 35 },
  { day: "ث", value: 85 },
  { day: "ر", value: 60 },
  { day: "خ", value: 95, today: true },
  { day: "ج", value: 20 },
];

const MEMORIZATION = [
  { name: "جزء عمّ", percent: 100, done: true },
  { name: "سورة الملك", percent: 80, done: false },
  { name: "سورة الكهف", percent: 45, done: false },
  { name: "سورة يس", percent: 20, done: false },
];

export function PlanScreen() {
  return (
    <>
      <StatusBar />
      <div className="flex items-center justify-between px-4 pb-2.5">
        <ChevronRight className="h-4 w-4 text-[#8A5A1F]" strokeWidth={2.5} />
        <p className="text-[13px] font-bold text-[#2B1F10]">خطة الحفظ</p>
        <Trophy className="h-4 w-4 text-[#B8862B]" strokeWidth={2.5} />
      </div>

      {/* بطاقة السلسلة اليومية */}
      <div className="mx-3.5 mb-2.5 flex items-center gap-3 rounded-2xl bg-gradient-to-l from-[#8A5A1F] to-[#6B4517] p-3.5 text-[#FAF0D8] shadow-warm">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8862B]/30">
          <Flame className="h-5 w-5 text-[#F5C86A]" />
        </span>
        <div className="flex-1">
          <p className="text-[13px] font-bold">١٢ يوماً متتالياً</p>
          <p className="text-[9px] text-[#FAF0D8]/70">ما شاء الله! استمر على هذا الوتيرة</p>
        </div>
      </div>

      {/* مخطط الأسبوع */}
      <div className="mx-3.5 mb-2.5 rounded-2xl border border-[#8A5A1F]/12 bg-[#FAF0D8] p-3">
        <p className="mb-2 text-[10px] font-semibold text-[#2B1F10]">ورد هذا الأسبوع</p>
        <div className="flex h-16 items-end justify-between gap-2" dir="rtl">
          {WEEK.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
              <div
                className={`w-full rounded-t-md ${
                  d.today
                    ? "bg-gradient-to-t from-[#8A5A1F] to-[#B8862B]"
                    : "bg-[#B8862B]/35"
                }`}
                style={{ height: `${d.value}%` }}
              />
              <span
                className={`text-[8px] font-semibold ${
                  d.today ? "text-[#8A5A1F]" : "text-[#9C8355]"
                }`}
              >
                {d.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* السور قيد الحفظ */}
      <div className="mx-3.5 flex-1 space-y-2 overflow-hidden">
        {MEMORIZATION.map((m) => (
          <div
            key={m.name}
            className="rounded-xl border border-[#8A5A1F]/10 bg-[#FAF0D8] px-3 py-2"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-[11px] font-bold text-[#2B1F10]">{m.name}</p>
              {m.done ? (
                <span className="flex items-center gap-1 text-[9px] font-bold text-[#8A5A1F]">
                  <CheckCircle2 className="h-3 w-3" />
                  اكتملت
                </span>
              ) : (
                <span className="text-[9px] font-semibold text-[#9C8355]">
                  {toArabicDigits(m.percent)}٪
                </span>
              )}
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#8A5A1F]/12">
              <div
                className={`h-full rounded-full ${
                  m.done
                    ? "bg-[#8A5A1F]"
                    : "bg-gradient-to-l from-[#B8862B] to-[#8A5A1F]"
                }`}
                style={{ width: `${m.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* زر المراجعة */}
      <div className="mx-3.5 mb-1.5 mt-2 rounded-xl bg-[#B8862B] py-2.5 text-center text-[11px] font-bold text-[#FFFAF0] shadow-gold">
        مراجعة اليوم · ٥ آيات جديدة
      </div>
      <GestureBar />
    </>
  );
}
