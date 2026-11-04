"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "#features", label: "المميزات" },
  { href: "#content", label: "المحتوى" },
  { href: "#screenshots", label: "جولة في التطبيق" },
  { href: "#ayah", label: "آية اليوم" },
  { href: "#khatm", label: "ختمتك" },
  { href: "#faq", label: "الأسئلة الشائعة" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const mobileNavRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // إغلاق قائمة الجوال بـ Escape + منع تمرير الخلفية + فخ تركيز (focus trap)
  React.useEffect(() => {
    if (!open) return;
    const nav = mobileNavRef.current;
    const focusables = nav
      ? Array.from(
          nav.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        )
      : [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    // نقل التركيز إلى أول رابط بعد رسم القائمة
    window.setTimeout(() => first?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 shadow-[0_4px_24px_-8px_rgba(20,12,4,0.18)] backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* الشعار */}
        <a href="#top" className="flex items-center gap-2.5" aria-label="الفرقان — الرئيسية">
          <span className="drop-shadow-warm">
            <Logo className="h-10 w-10" />
          </span>
          <span className="flex flex-col">
            <span className="text-xl font-bold leading-none text-foreground">الفرقان</span>
            <span className="mt-1 text-[10px] font-medium tracking-wide text-muted-foreground">
              رفيقك القرآني
            </span>
          </span>
        </a>

        {/* روابط سطح المكتب */}
        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* زر الوضع الليلي */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="تبديل بين الوضع الفاتح والليلي"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary transition-all hover:border-accent hover:text-accent"
          >
            <Sun className="hidden h-5 w-5 dark:block" />
            <MoonStar className="h-5 w-5 dark:hidden" />
          </button>

          <a
            href="#download"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:opacity-90 sm:inline-flex"
          >
            حمّله الآن
          </a>

          {/* زر القائمة للجوال */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال */}
      {open && (
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          aria-label="قائمة الجوال"
          className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground"
              >
                حمّل الفرقان الآن
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
