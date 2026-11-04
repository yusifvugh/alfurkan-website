import { Header } from "@/components/landing/header";
import { ReadingProgress } from "@/components/landing/reading-progress";
import { Hero } from "@/components/landing/hero";
import { BasmalaDivider } from "@/components/landing/basmala-divider";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { AyahOfDay } from "@/components/landing/ayah-of-day";
import { Screenshots } from "@/components/landing/screenshots";
import { KhatmCalculator } from "@/components/landing/khatm-calculator";
import { Reviews } from "@/components/landing/reviews";
import { DownloadCta } from "@/components/landing/download-cta";
import { WhatsNew } from "@/components/landing/whats-new";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { ComingSoonGate } from "@/components/coming-soon/coming-soon-gate";
import { isReleased } from "@/lib/release";

/**
 * البوابة تُقيَّم من جهة السيرفر عند كل طلب، حتى ما يُرسل محتوى الموقع
 * للمتصفح إطلاقاً قبل الموعد، ويُفتح تلقائياً بمجرد حلول موعد الإطلاق.
 */
export const dynamic = "force-dynamic";

export default function Home() {
  if (!isReleased()) {
    return <ComingSoonGate />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <BasmalaDivider className="pb-4" />
        <Features />
        <Comparison />
        <AyahOfDay />
        <Screenshots />
        <KhatmCalculator />
        <Reviews />
        <DownloadCta />
        <WhatsNew />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
