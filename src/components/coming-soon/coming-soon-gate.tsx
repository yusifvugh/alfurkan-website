import { Logo } from "@/components/landing/logo";
import { SocialIcon } from "@/components/landing/social-icons";
import { ComingSoonCountdown } from "./countdown";
import { GateThemeToggle } from "./theme-toggle";
import { APP, DEVELOPER, SOCIALS } from "@/lib/app-data";

/**
 * بوابة «قريباً» — تُعرض من جهة السيرفر قبل موعد الإطلاق.
 *
 * مهم: المحتوى الفعلي للموقع لا يُبنى ولا يُرسل إلى المتصفح قبل الإطلاق،
 * فالغلق حقيقي على مستوى السيرفر وليس تغبيشاً بصرياً فقط.
 */
export function ComingSoonGate() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* زر تبديل الوضع الليلي/النهاري */}
      <GateThemeToggle />

      {/* توهج ذهبي ناعم من الأعلى */}
      <div
        className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-accent/12 to-transparent"
        aria-hidden="true"
      />
      {/* زخرفة هندسية إسلامية خفيفة */}
      <div className="pattern-stars absolute inset-0 opacity-[0.07]" aria-hidden="true" />

      {/* لوحة الغلق */}
      <section className="card-warm relative w-full max-w-2xl overflow-hidden rounded-[28px] px-6 py-10 text-center shadow-warm-lg sm:px-10 sm:py-12">
        {/* شعار التطبيق — التوهّج على الأيقونة نفسها */}
        <div className="flex justify-center">
          <Logo className="animate-pulse-gold h-32 w-32 sm:h-40 sm:w-40" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-muted-foreground sm:text-5xl">
          الفُرقان النسخة التجريبية
        </h1>

        {/* فاصل زخرفي */}
        <div className="my-6 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
          <span className="h-2 w-2 rotate-45 border border-accent/60" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
        </div>

        <p className="mx-auto max-w-lg text-base font-medium leading-8 text-foreground sm:text-lg">
          الموقع جاهز وسيُفتح بكامل محتواه تلقائياً في لحظة صدور التطبيق
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-secondary-foreground">
          وما يزال تطبيق الفُرقان في مرحلة التجهيز النهائي قُبيل صدوره على أندرويد بنسخته التجريبية الأولى
        </p>

        {/* العدّاد التنازلي */}
        <div className="mt-8">
          <ComingSoonCountdown />
        </div>

         {/* كارت المطوّر */}
        <div className="relative mt-9 overflow-hidden rounded-3xl border border-accent/25 bg-secondary/50 px-5 py-7 shadow-warm">
          <div className="pattern-stars absolute inset-0 opacity-[0.06]" aria-hidden="true" />
          <div className="relative flex flex-col items-center">
            <img
              src={DEVELOPER.avatar}
              alt=""
              aria-hidden="true"
              width={144}
              height={144}
              loading="lazy"
              className="animate-pulse-gold h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
            />

            <p className="mt-4 text-xs font-medium tracking-wide text-muted-foreground">
              المطور
            </p>
            <p className="text-gold-gradient mt-1 text-2xl font-bold">{DEVELOPER.nameAr}</p>
            <p
              dir="ltr"
              className="mt-1 text-xs font-medium tracking-wide text-muted-foreground"
            >
              {DEVELOPER.nameEn}
            </p>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-secondary-foreground">
              مطوّر تطبيق الفُرقان أرحّب بأي ملاحظة أو اقتراح
            </p>

            <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
              {SOCIALS.map((social) => {
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      <SocialIcon id={social.id} className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-sm font-medium text-secondary-foreground">
              احسن الله اليك لا تنسَ الدعاء بالمغفره ليوسف
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
