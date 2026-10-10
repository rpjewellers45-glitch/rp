import { NextResponse } from "next/server";
import { bullionRevalidateSeconds, getBullionQuote } from "@/lib/bullion";

export async function GET() {
  try {
    const quote = await getBullionQuote();
    return NextResponse.json(quote, {
      headers: {
        "Cache-Control": `public, s-maxage=${bullionRevalidateSeconds}, stale-while-revalidate=3600`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "unavailable" },
      {
        status: 503,
        headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
      },
    );
  }
}
