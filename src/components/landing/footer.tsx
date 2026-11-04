import { HeartHandshake } from "lucide-react";
import { SocialIcon } from "@/components/landing/social-icons";
import { Logo } from "./logo";
import { APP, LINKS, SOCIALS } from "@/lib/app-data";

const APP_LINKS = [
  { label: "المميزات", href: "#features" },
  { label: "المحتوى والموارد", href: "#content" },
  { label: "جولة في التطبيق", href: "#screenshots" },
  { label: "آية اليوم", href: "#ayah" },
  { label: "احسب ختمتك", href: "#khatm" },
  { label: "التحميل", href: "#download" },
];

const SUPPORT_LINKS = [
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "الشفافية والجودة", href: "#reviews" },
  { label: "حالة التطوير", href: "#whats-new" },
  { label: "سياسة الخصوصية", href: LINKS.privacy },
  { label: "الإبلاغ عن مشكلة", href: LINKS.issues },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* الهوية */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="drop-shadow-warm">
                <Logo className="h-12 w-12" />
              </span>
              <div>
                <p className="text-xl font-bold text-foreground">{APP.name}</p>
                <p className="text-xs font-medium text-muted-foreground">{APP.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-8 text-secondary-foreground">
              مشروع قرآني مجاني ومفتوح المصدر يهدف إلى تسهيل قراءة القرآن الكريم وتدبّره وحفظه لكل
              مسلم، بهوية عربية أصيلة وتجربة استخدام عصرية — ويستهدف أندرويد في مرحلته الحالية.
            </p>
            <p dir="rtl" className="font-quran mt-5 text-lg leading-loose text-primary">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>
          </div>

          {/* روابط */}
          <nav aria-label="روابط التطبيق" className="md:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">
              التطبيق
            </h3>
            <ul className="space-y-3">
              {APP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="روابط الدعم" className="md:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">
              الدعم والمشروع
            </h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-secondary-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* التواصل */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">
              تابعنا
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {SOCIALS.map((social) => {
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      <SocialIcon id={social.id} className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              المشروع مفتوح المصدر برخصة{" "}
              <span className="font-semibold text-primary">{APP.license}</span>
              <br />
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
                dir="ltr"
              >
                github.com/yusifvugh/al-furkan
              </a>
            </p>
          </div>
        </div>

        {/* تيمان الدعاء لصاحب العمل */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-accent/25 bg-card px-6 py-8 text-center shadow-warm">
          <div className="pattern-stars absolute inset-0 opacity-[0.06]" aria-hidden="true" />
          <div className="relative">
            <HeartHandshake
              className="mx-auto mb-3 h-8 w-8 text-accent"
              aria-hidden="true"
            />
            <p className="text-gold-gradient text-2xl font-bold sm:text-3xl" dir="rtl">
              يوسف ماهيش
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-secondary-foreground">
              إن نفعك هذا الموقع فادعُ الله لصاحبه بالمغفرة والرحمة — فالدعاء بظهر الغيب من
              أصدق الهدايا.
            </p>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-start">
          <p>
            © ٢٠٢٥ الفُرقان — صُنع بحبٍّ لخدمة كتاب الله
            <span
              className="mx-2 inline-block h-1 w-1 rounded-full bg-accent align-middle"
              aria-hidden="true"
            />
            يوسف ماهيش 🤍
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-accent"
            >
              <SocialIcon id="github" className="h-3.5 w-3.5" />
              الكود المصدري على جيت هب
            </a>
            <p className="flex items-center gap-1.5">
              {APP.platform}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              الإصدار <span dir="ltr">{APP.version}</span> (بيتا)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
