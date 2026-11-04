"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";
import { APP, STATS } from "@/lib/app-data";

/** أسئلة شائعة بإجابات مطابقة لحالة التطبيق الحقيقية */
const FAQS = [
  {
    q: "هل التطبيق مجاني بالكامل؟",
    a: "نعم، الفُرقان مجاني بالكامل وبلا إعلانات. المشروع مفتوح المصدر برخصة MIT، وقراءة المصحف والتلاوات والتفاسير والترجمات متاحة دون أي مقابل.",
  },
  {
    q: "هل يعمل التطبيق دون اتصال بالإنترنت؟",
    a: "نعم، بعد التحميل الأول. تحتاج مرة واحدة إلى اتصال بالإنترنت لتنزيل صفحات المصحف والتلاوات والتفاسير التي تختارها، ثم يمكنك القراءة والاستماع في أي مكان دون اتصال — من الإعدادات ← المحتوى دون اتصال.",
  },
  {
    q: "من أين أحمّل التطبيق؟ وهل هو متوفر على Google Play؟",
    a: `التطبيق حالياً في مرحلة بيتا تجريبية، ولا يوجد له إصدار على Google Play. يمكنك تحميل ملف APK من صفحة الإصدارات الرسمية على GitHub: github.com/yusifvugh/al-furkan/releases — الإصدار الحالي ${APP.version}.`,
  },
  {
    q: "هل التطبيق متاح لأجهزة الآيفون (iOS)؟",
    a: "لا، التطبيق يستهدف أندرويد حالياً بوصفه المنصة الأساسية، ولهذا تتوفّر ميزات أصلية خاصة به مثل ويدجتات الشاشة الرئيسية وخدمات التنبيه. لا يوجد موعد معلن لنسخة iOS.",
  },
  {
    q: "ما معنى أنّ التطبيق «نسخة تجريبية»؟",
    a: "طُوّر التطبيق بمجهود مطوّر واحد وفي وقت محدود، لذلك قد توجد أخطاء وظيفية أو اختلافات بصرية أو أجزاء غير مكتملة. الهدف من النسخة مشاركة التطوير والاستفادة من ملاحظات المستخدمين، لا الادعاء بأن كل شيء اكتمل.",
  },
  {
    q: "كيف تُحفظ ملاحظاتي وبياناتي؟",
    a: "لا يطلب التطبيق إنشاء حساب. تُحفظ ملاحظاتك ووسومك ومجموعاتك وتنزيلاتك محلياً على جهازك، ولا تُرفع ملاحظات الآيات إلى أي خدمة سحابية. يمكنك مراجعة سياسة الخصوصية الكاملة من داخل التطبيق ومن المستودع.",
  },
  {
    q: "كيف أساهم في المشروع أو أبلّغ عن مشكلة؟",
    a: "أعظم دعم هو الدعاء ثم مشاركة التطبيق. ويمكنك المساهمة تقنياً عبر فتح بلاغ أو اقتراح في صفحة Issues على GitHub، أو المساعدة في مراجعة المحتوى والترجمات — فالمشروع مفتوح للجميع.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="لديك سؤال؟"
          title={
            <>
              الأسئلة <span className="text-gold-gradient">الشائعة</span>
            </>
          }
          description={`إجابات صريحة عن أكثر ما يسأل عنه المستخدمون — التطبيق بطبيعته نسخة تجريبية بلا حساب وبلا إعلانات، ويضم ${STATS.quranPages} صفحة مصحف و${STATS.reciters} قارئاً.`}
        />

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-warm scroll-mt-28 rounded-2xl border-none px-6 shadow-sm first:rounded-t-2xl last:rounded-b-2xl last:border-b"
            >
              <AccordionTrigger className="py-5 text-start text-base font-bold text-foreground hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-8 text-secondary-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
