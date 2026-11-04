import { RELEASE_AT, RELEASE_LABEL } from "@/lib/release";

export const dynamic = "force-dynamic";

/** تحويل تاريخ إلى صيغة ICS بتوقيت UTC: YYYYMMDDTHHMMSSZ */
function toIcsDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/**
 * توليد ملف تقويم (.ics) يحتوي موعد إطلاق التطبيق، حتى يضيفه المستخدم لتقويمه.
 * الموعد يُقرأ من `release.ts` فيبقى مصدراً واحداً للحقيقة.
 */
export function GET(request: Request) {
  const start = RELEASE_AT;
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const origin = new URL(request.url).origin;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AL-FURQAN//Release//AR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:alfurqan-release@${new URL(origin).host}`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    "SUMMARY:نزول تطبيق الفُرقان (نسخة تجريبية)",
    `DESCRIPTION:موعد فتح موقع الفُرقان ونزول التطبيق بنسخته التجريبية.\\n${RELEASE_LABEL}`,
    `URL:${origin}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT1H",
    "ACTION:DISPLAY",
    "DESCRIPTION:تذكير: موعد نزول تطبيق الفُرقان",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const body = `${lines.join("\r\n")}\r\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="alfurqan-release.ics"',
      "Cache-Control": "no-store",
    },
  });
}
