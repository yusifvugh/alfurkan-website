import * as React from "react";

/** نجوم السماء: [x, y, نصف القطر, شفافية البداية, تأخير الوميض] */
const STARS: Array<[number, number, number, number, number]> = [
  [120, 80, 2.2, 0.9, 0],
  [260, 60, 1.4, 0.7, 1.2],
  [340, 140, 1.8, 0.8, 0.6],
  [430, 55, 1.2, 0.6, 2.1],
  [520, 110, 2, 0.85, 0.3],
  [610, 70, 1.3, 0.65, 1.7],
  [700, 150, 1.6, 0.75, 0.9],
  [760, 50, 1.2, 0.6, 2.6],
  [960, 90, 1.7, 0.8, 1.4],
  [1040, 190, 1.3, 0.65, 0.2],
  [1120, 70, 1.9, 0.8, 1.9],
  [1160, 250, 1.3, 0.7, 0.8],
  [180, 220, 1.4, 0.7, 2.3],
  [580, 210, 1.5, 0.75, 1.1],
  [880, 280, 1.2, 0.6, 0.4],
];

/**
 * مشهد «كثبان ليلية» — مرسوم بالكامل بـ SVG (لا صور نقطية)
 * سماء صحراوية متدرجة، هلال متوهج، نجوم تلمع، وثلاث طبقات كثبان
 */
export function DunesScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* سماء الليل الصحراوي */}
        <linearGradient id="dune-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A3419" />
          <stop offset="50%" stopColor="#35230F" />
          <stop offset="100%" stopColor="#241708" />
        </linearGradient>
        {/* توهج القمر */}
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B54A" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#E8B54A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E8B54A" stopOpacity="0" />
        </radialGradient>
        {/* طبقات الكثبان */}
        <linearGradient id="dune-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5C3F1C" />
          <stop offset="100%" stopColor="#4A3115" />
        </linearGradient>
        <linearGradient id="dune-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#452E11" />
          <stop offset="100%" stopColor="#36230D" />
        </linearGradient>
        <linearGradient id="dune-3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#31200B" />
          <stop offset="100%" stopColor="#241708" />
        </linearGradient>
        {/* قناع الهلال: دائرة كاملة ناقص دائرة مزاحة */}
        <mask id="dune-moon">
          <rect width="1200" height="620" fill="black" />
          <circle cx="872" cy="150" r="52" fill="white" />
          <circle cx="898" cy="126" r="47" fill="black" />
        </mask>
      </defs>

      {/* السماء */}
      <rect width="1200" height="620" fill="url(#dune-sky)" />

      {/* النجوم */}
      {STARS.map(([x, y, r, o, d], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="#E8B54A"
          opacity={o}
          className="animate-twinkle"
          style={{ animationDelay: `${d}s` }}
        />
      ))}

      {/* نجمة ثمانية زخرفية في السماء */}
      <g transform="translate(232,110)" stroke="#D4A94E" strokeWidth="2" fill="none" opacity="0.5">
        <rect x="-13" y="-13" width="26" height="26" />
        <rect x="-13" y="-13" width="26" height="26" transform="rotate(45)" />
      </g>
      <g transform="translate(1070,120)" stroke="#D4A94E" strokeWidth="1.6" fill="none" opacity="0.35">
        <rect x="-9" y="-9" width="18" height="18" />
        <rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" />
      </g>

      {/* القمر وتوهجه */}
      <circle cx="872" cy="150" r="150" fill="url(#moon-glow)" />
      <rect width="1200" height="620" fill="#F5D98B" mask="url(#dune-moon)" />

      {/* الكثبان الثلاثة */}
      <path
        d="M0 402 C 170 352, 350 362, 540 396 C 720 428, 900 372, 1200 406 L1200 620 L0 620 Z"
        fill="url(#dune-1)"
      />
      <path
        d="M0 472 C 220 430, 460 452, 700 482 C 900 508, 1060 462, 1200 492 L1200 620 L0 620 Z"
        fill="url(#dune-2)"
      />
      <path
        d="M0 548 C 300 506, 620 532, 900 558 C 1010 568, 1110 558, 1200 570 L1200 620 L0 620 Z"
        fill="url(#dune-3)"
      />

      {/* لمسات الضوء الذهبية على قمم الكثبان */}
      <path
        d="M0 402 C 170 352, 350 362, 540 396"
        fill="none"
        stroke="#B8862B"
        strokeOpacity="0.4"
        strokeWidth="2.5"
      />
      <path
        d="M0 472 C 220 430, 460 452, 700 482"
        fill="none"
        stroke="#B8862B"
        strokeOpacity="0.26"
        strokeWidth="2"
      />
      <path
        d="M0 548 C 300 506, 620 532, 900 558"
        fill="none"
        stroke="#B8862B"
        strokeOpacity="0.18"
        strokeWidth="2"
      />
    </svg>
  );
}
