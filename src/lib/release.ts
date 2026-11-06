/**
 * موعد فتح الموقع ونزول التطبيق بالنسخة التجريبية (بيتا).
 *
 * مضبوط على توقيت القاهرة (UTC+2). لتغيير الموعد عدّل `RELEASE_AT` و`RELEASE_LABEL` هنا فقط.
 */
export const RELEASE_AT = new Date("2026-11-013T12:00:00+02:00");

/** الموعد بصيغة عربية للعرض */
export const RELEASE_LABEL = "الجمعة 13 نوفمبر ٢٠٢٦ — ١٢:٠٠ ظهراً";

/** هل حان موعد فتح الموقع؟ */
export function isReleased(now: Date = new Date()): boolean {
  return now.getTime() >= RELEASE_AT.getTime();
}
