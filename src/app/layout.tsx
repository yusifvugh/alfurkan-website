import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Amiri_Quran } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { isReleased } from "@/lib/release";

/** الهوية الموحدة للفرقان: بلكس للعناوين والنصوص + أميري للمصحف */
const bodyFont = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const quranFont = Amiri_Quran({
  variable: "--font-quran-src",
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

/** رابط الموقع الأساسي لحلّ روابط المشاركة (يمكن تجاوزه عبر NEXT_PUBLIC_SITE_URL) */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfurkan-beta.vercel.app";

const ICONS: Metadata["icons"] = {
  icon: "/images/app-icon.png",
  apple: "/images/app-icon.png",
};

/** وصف مختصر لا يكشف تفاصيل التطبيق قبل موعد الإطلاق */
const GATE_TITLE = "الفُرقان";
const GATE_DESCRIPTION = "موقع تطبيق الفُرقان قيد التجهيز، وسيُفتح قريباً بإذن الله.";

/**
 * الوسوم (metadata) تتغيّر حسب حالة الإطلاق: قبل الموعد لا نكشف أي تفاصيل عن
 * التطبيق ونمنع فهرسة الصفحة، وبعد الموعد تُستخدم الوسوم الكاملة.
 */
export async function generateMetadata(): Promise<Metadata> {
  if (!isReleased()) {
    return {
      metadataBase: siteUrl ? new URL(siteUrl) : undefined,
      title: GATE_TITLE,
      description: GATE_DESCRIPTION,
      robots: { index: false, follow: false, nocache: true },
      icons: ICONS,
      openGraph: {
        title: GATE_TITLE,
        description: GATE_DESCRIPTION,
        siteName: "الفُرقان",
        type: "website",
        locale: "ar",
        ...(siteUrl ? { images: ["/images/app-icon.png"] } : {}),
      },
      twitter: {
        card: "summary",
        title: GATE_TITLE,
        description: GATE_DESCRIPTION,
      },
    };
  }

  return {
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    title: "الفُرقان (نسخة تجريبية)",
    description:
      "الفُرقان — رفيق قرآني لأندرويد: المصحف الكامل (٦٠٤ صفحات)، تلاوات لأكثر من ٣٠ قارئاً مع تتبّع الآية، ١١ تفسيراً و١٨ لغة ترجمة، خطة ختمة، ومواقيت صلاة، ويعمل دون إنترنت. مجاني ومفتوح المصدر برخصة MIT.",
    keywords: [
      "الفرقان",
      "القرآن الكريم",
      "تطبيق قرآن",
      "مصحف",
      "تلاوة",
      "تفسير",
      "ختمة القرآن",
      "أذكار",
      "مواقيت الصلاة",
      "أندرويد",
    ],
    authors: [{ name: "يوسف ماهيش", url: "https://github.com/yusifvugh" }],
    creator: "Yusuf Mahesh",
    publisher: "Yusuf Mahesh",
    icons: ICONS,
    robots: { index: true, follow: true },
    openGraph: {
      title: "الفُرقان | تطبيق القرآن الكريم لأندرويد",
      description:
        "المصحف الكامل والتلاوات والتفاسير ومواقيت الصلاة في تطبيق واحد — مجاني، بلا إعلانات، ويعمل دون إنترنت.",
      siteName: "الفُرقان",
      type: "website",
      locale: "ar",
      ...(siteUrl ? { images: ["/images/app-icon.png"] } : {}),
    },
    twitter: {
      card: "summary",
      title: "الفُرقان | تطبيق القرآن الكريم لأندرويد",
      description: "رفيق قرآني لأندرويد — قراءة واستماع وعبادة يومية، دون إنترنت.",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#8A5A1F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${quranFont.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
