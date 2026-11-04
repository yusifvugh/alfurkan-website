import { NextResponse } from "next/server";
import { FALLBACK_VERSE, VERSES, pickVerseOfTheDay, type Verse } from "@/lib/verses";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const wantRandom = searchParams.get("random") === "1";

    if (VERSES.length === 0) {
      return NextResponse.json({ verse: FALLBACK_VERSE, source: "fallback" });
    }

    const verse: Verse = wantRandom
      ? VERSES[Math.floor(Math.random() * VERSES.length)]
      : pickVerseOfTheDay(VERSES);

    return NextResponse.json({ verse, source: "static" });
  } catch (error) {
    console.error("خطأ في جلب آية اليوم:", error);
    return NextResponse.json({ verse: FALLBACK_VERSE, source: "fallback" }, { status: 200 });
  }
}
