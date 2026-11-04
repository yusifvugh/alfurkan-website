/** تحويل الأرقام اللاتينية إلى الأرقام العربية الشرقية (٠١٢٣…) */
export function toArabicDigits(input: number | string): string {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(input).replace(/[0-9]/g, (d) => map[Number(d)]);
}

/** تنسيق رقم مع فواصل الآلاف بالأرقام العربية (مثال: 124850 → ١٢٤٬٨٥٠) */
export function formatArabicNumber(n: number): string {
  const grouped = Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
  return toArabicDigits(grouped);
}
