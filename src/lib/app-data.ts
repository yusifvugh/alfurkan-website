/**
 * البيانات الحقيقية لتطبيق «الفُرقان» — مستخرجة مباشرة من مشروع التطبيق (Flutter).
 *
 * المصادر:
 * - lib/core/constants/app_constants.dart         (الاسم، الإصدار، المطوّر، الروابط)
 * - README.md                                     (المزايا الحقيقية)
 * - pubspec.yaml                                  (الخطوط المحلية والتقنيات)
 * - lib/features/library/library_manifest.dart    (التفاسير والترجمات المعتمدة)
 * - packages/quran_library/.../readers_constants.dart (قوائم القراء)
 * - lib/features/prayer/athan_voices.dart         (أصوات الأذان)
 */

export const APP = {
  name: "الفُرقان",
  shortName: "الفرقان",
  /** الوصف الرسمي من README التطبيق */
  tagline: "رفيق قرآني للقراءة والاستماع والعبادة اليومية",
  /** الإصدار الفعلي من app_constants.dart */
  version: "1.0.0+1",
  versionLabel: "١٫٠٫٠",
  /** التطبيق نسخة بيتا تجريبية وليست إصداراً نهائياً (تصريح README) */
  isBeta: true,
  betaLabel: "نسخة تجريبية (بيتا)",
  packageId: "com.yusifvugh.alfurkan",
  platform: "أندرويد",
  license: "MIT",
  /** المطوّر منفرد وطوّر التطبيق في وقت محدود (تصريح README) */
  soloDeveloper: true,
} as const;

/** روابط المشروع الرسمية */
export const LINKS = {
  releases: "https://github.com/yusifvugh/al-furkan/releases/",
  github: "https://github.com/yusifvugh/al-furkan",
  issues: "https://github.com/yusifvugh/al-furkan/issues/new",
  contribute: "https://github.com/yusifvugh/al-furkan/blob/main/CONTRIBUTING.md",
  privacy: "https://github.com/yusifvugh/al-furkan/blob/main/docs/privacy-policy-ar.md",
  assets: "https://github.com/yusifvugh/al-furkan/blob/main/ASSET_ATTRIBUTION.md",
} as const;

/** المطوّر وروابطه الاجتماعية (من app_constants.dart) */
export const DEVELOPER = {
  nameEn: "Yusuf Mahesh",
  nameAr: "يوسف ماهيش",
  /** صورة محلية داخل المشروع (نسخة محفوظة من حساب جيت هب) */
  avatar: "/images/developer.jpg",
} as const;

export const SOCIALS = [
  { id: "x", label: "إكس (تويتر)", href: "https://x.com/yusifvugh" },
  { id: "github", label: "جيت هب", href: "https://github.com/yusifvugh" },
  { id: "linkedin", label: "لينكدإن", href: "https://www.linkedin.com/in/yusuf-mahesh/" },
  { id: "instagram", label: "إنستغرام", href: "https://www.instagram.com/yusifvugh/" },
  { id: "telegram", label: "تلغرام", href: "https://t.me/yusifvugh" },
  { id: "reddit", label: "ريديت", href: "https://www.reddit.com/user/yusifvugh/" },
  { id: "tiktok", label: "تيك توك", href: "https://www.tiktok.com/@yusifvugh" },
] as const;

/** إحصاءات حقيقية من مصادر التطبيق */
export const STATS = {
  /** عدد صفحات المصحف (app_constants.dart: quranPageCount) */
  quranPages: 604,
  /** عدد سور القرآن */
  surahs: 114,
  /** عدد قوائم قراء الآيات (readers_constants.dart: ayahReaderInfo) */
  reciters: 34,
  /** عدد قوائم قراء السور (readers_constants.dart: surahReaderInfo) */
  surahReciters: 21,
  /** مصادر التفسير المعتمدة (library_manifest.dart: approvedTafsirNames) */
  tafsirSources: 17,
  /** لغات الترجمة المعتمدة (library_manifest.dart: languageTranslationNames) */
  translationLanguages: 18,
  /** أصوات الأذان المتاحة (athan_voices.dart) */
  athanVoices: 7,
  /** ويدجتات الشاشة الرئيسية (README) */
  widgets: 5,
  /** الخطوط المحلية المضمّنة (pubspec.yaml) */
  fonts: 10,
  /** الحد الأقصى لأيام الختمة (app_constants.dart: khatmaMaxDays) */
  khatmaMaxDays: 365,
} as const;

/** ويدجتات أندرويد الأصلية (README) */
export const WIDGETS = [
  { label: "آية اليوم" },
  { label: "الأذكار" },
  { label: "الختمة" },
  { label: "التسبيح" },
  { label: "مواقيت الصلاة" },
] as const;

/** أصوات الأذان المتاحة (athan_voices.dart) */
export const ATHAN_VOICES = [
  "أذان مكة المكرمة",
  "ناصر القطامي",
  "محمد المنشاوي",
  "مشاري العفاسي",
  "ياسر الدوسري",
  "منصور الزهراني",
  "صوت النظام الافتراضي",
] as const;

/** أبرز القراء المتاحين (readers_constants.dart) */
export const TOP_RECITERS = [
  "عبد الباسط عبد الصمد",
  "محمد صديق المنشاوي",
  "محمود خليل الحصري",
  "أحمد بن علي العجمي",
  "ماهر المعيقلي",
  "سعود الشريم",
  "ياسر الدوسري",
  "ناصر القطامي",
  "مشاري راشد العفاسي",
  "مصطفى إسماعيل",
  "محمد الطبلاوي",
  "عبد الرحمن السديس",
] as const;

/** التفاسير العربية المعتمدة (library_manifest.dart) */
export const TAFSIRS = [
  "تفسير ابن كثير",
  "تفسير البغوي",
  "تفسير السعدي",
  "تفسير الطبري",
  "تفسير ابن أبي زمنين",
  "تفسير السمعاني",
  "أضواء البيان",
  "فتح القدير للشوكاني",
  "تفسير ابن الجوزي",
  "تفسير ابن القيم",
  "تفسير ابن أبي حاتم",
] as const;

/** لغات الترجمة المعتمدة (library_manifest.dart) */
export const TRANSLATION_LANGUAGES = [
  "الإنجليزية",
  "الفرنسية",
  "الألمانية",
  "التركية",
  "الأردية",
  "الفارسية",
  "الإندونيسية",
  "البنغالية",
  "الروسية",
  "الإسبانية",
  "الصينية",
  "الهوسا",
  "السواحيلية",
  "البوسنية",
  "الملايوية",
  "البيلاروسية",
  "الصومالية",
  "الكردية",
] as const;

/** الخطوط المحلية المضمّنة في التطبيق (pubspec.yaml + ASSET_ATTRIBUTION.md) */
export const FONTS = [
  "Cairo",
  "Tajawal",
  "Markazi Text",
  "Noto Kufi Arabic",
  "Reem Kufi",
  "Aref Ruqaa",
  "Lateef",
  "IBM Plex Sans Arabic",
  "Amiri Quran",
  "KFGQPC Hafs Uthmanic",
] as const;

/** الحزمة التقنية الفعلية للتطبيق (pubspec.yaml + README) */
export const TECH_STACK = [
  "Flutter",
  "Dart",
  "Riverpod",
  "just_audio + audio_service",
  "adhan + geolocator",
  "flutter_local_notifications",
  "home_widget (Kotlin)",
  "Supabase",
  "Firebase",
] as const;
