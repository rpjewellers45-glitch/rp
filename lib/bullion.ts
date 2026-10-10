const TROY_OUNCE_GRAMS = 31.1034768;
const REVALIDATE_SECONDS = 600;

export type BullionQuote = {
  gold24kPer10g: number;
  gold22kPer10g: number;
  gold18kPer10g: number;
  silverPerKg: number;
  usdInr: number;
  goldUpdatedAt: string;
  silverUpdatedAt: string;
  fxDate: string;
};

type Spot = { price: number; updatedAt: string };

async function readJson(url: string): Promise<unknown> {
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(8000),
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Rate source failed: ${response.status}`);
  return response.json();
}

function asSpot(value: unknown): Spot {
  if (!value || typeof value !== "object") throw new Error("Unexpected spot payload");
  const price = (value as { price?: unknown }).price;
  const updatedAt = (value as { updatedAt?: unknown }).updatedAt;
  if (typeof price !== "number" || !Number.isFinite(price) || price <= 0) throw new Error("Missing spot price");
  if (typeof updatedAt !== "string") throw new Error("Missing spot time");
  return { price, updatedAt };
}

function rupeesPerGram(usdPerOunce: number, usdInr: number) {
  return (usdPerOunce * usdInr) / TROY_OUNCE_GRAMS;
}

function rupees(value: number) {
  return Math.round(value);
}

let remembered: BullionQuote | null = null;

/**
 * Indicative rupee rates from the world spot price and the dollar.
 * The feeds are cached for 10 minutes, then every visitor reads that same result.
 */
export async function getBullionQuote(): Promise<BullionQuote> {
  try {
    const quote = await readBullionQuote();
    remembered = quote;
    return quote;
  } catch (error) {
    if (remembered) return remembered;
    throw error;
  }
}

async function readBullionQuote(): Promise<BullionQuote> {
  const [goldRaw, silverRaw, fxRaw] = await Promise.all([
    readJson("https://api.gold-api.com/price/XAU"),
    readJson("https://api.gold-api.com/price/XAG"),
    readJson("https://api.frankfurter.app/latest?from=USD&to=INR"),
  ]);

  const gold = asSpot(goldRaw);
  const silver = asSpot(silverRaw);
  const fx = fxRaw as { date?: unknown; rates?: { INR?: unknown } };
  const usdInr = fx.rates?.INR;
  if (typeof usdInr !== "number" || !Number.isFinite(usdInr) || usdInr <= 0) {
    throw new Error("Missing rupee rate");
  }
  if (typeof fx.date !== "string") throw new Error("Missing rupee date");

  const gold24kPerGram = rupeesPerGram(gold.price, usdInr);
  const silverPerGram = rupeesPerGram(silver.price, usdInr);

  return {
    gold24kPer10g: rupees(gold24kPerGram * 10),
    gold22kPer10g: rupees(gold24kPerGram * 0.916 * 10),
    gold18kPer10g: rupees(gold24kPerGram * 0.75 * 10),
    silverPerKg: rupees(silverPerGram * 1000),
    usdInr,
    goldUpdatedAt: gold.updatedAt,
    silverUpdatedAt: silver.updatedAt,
    fxDate: fx.date,
  };
}

export const bullionRevalidateSeconds = REVALIDATE_SECONDS;
