import { Download, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/app-data";

/**
 * أزرار الحصول على التطبيق.
 * التطبيق نسخة تجريبية بيتا تُنشر عبر GitHub Releases (لا يوجد إصدار على Google Play).
 */

/** الزر الرئيسي: تحميل أحدث إصدار (APK) من GitHub Releases */
export function DownloadApkButton({
  href = LINKS.releases,
  className,
  onClick,
}: {
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تحميل أحدث إصدار من تطبيق الفُرقان عبر GitHub Releases"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl bg-[#241a0c] py-2.5 pe-6 ps-4 text-[#FAF0D8] shadow-warm-lg ring-1 ring-[#241a0c]/60 transition-all hover:-translate-y-0.5 hover:shadow-gold",
        className
      )}
    >
      <Github className="h-8 w-8 text-[#E8B54A] transition-transform duration-300 group-hover:scale-110" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-medium text-[#FAF0D8]/70">حمّل أحدث إصدار من</span>
        <span className="text-lg font-bold tracking-wide" dir="ltr">
          GitHub Releases
        </span>
      </span>
    </a>
  );
}

/** الزر الثانوي: استعراض الكود المصدري على GitHub */
export function SourceCodeButton({
  href = LINKS.github,
  className,
  onClick,
}: {
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="استعراض الكود المصدري للفُرقان على GitHub"
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border-2 border-primary/35 bg-card/70 px-6 py-3 text-sm font-bold text-primary backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-card",
        className
      )}
    >
      <Download className="h-4 w-4" />
      الكود المصدري
    </a>
  );
}
