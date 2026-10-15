const REVALIDATE_SECONDS = 600;
const TANISHQ_URL = "https://www.tanishq.co.in/gold-rate.html?lang=en_IN";
const MIA_URL = "https://www.miabytanishq.com/en/gold-rate-today";

export type BullionQuote = {
  gold24kPer10g: number;
  gold22kPer10g: number;
  gold18kPer10g: number;
  goldUpdatedAt: string;
};

export type TanishqBoard = {
  perGram: number;
  per10: number;
  date: string;
};

export type MiaBoard = {
  gold18kPer10g: number;
  gold22kPer10g: number;
  gold24kPer10g: number;
};

let remembered: BullionQuote | null = null;

function plain(input: string) {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&#8377;|&rupee;/g, "₹")
    .replace(/\s+/g, " ");
}

function amount(raw: string) {
  const value = Number(raw.replace(/,/g, ""));
  if (!Number.isInteger(value) || value <= 0) throw new Error("Bad gold amount");
  return value;
}

/** Tanishq's 22K board: the 1g rate, the 10g rate, and the dated history row. */
export function parseTanishqGold(text: string): TanishqBoard {
  const body = plain(text);
  const one = body.match(/(?:^|\s)1 G\s*\|?\s*₹\s*([\d,]+)/);
  const ten = body.match(/(?:^|\s)10 G\s*\|?\s*₹\s*([\d,]+)/);
  const history = body.match(/Gold Rate History[\s\S]{0,800}?(\d{2}-\d{2}-\d{4})\s*\|?\s*₹\s*([\d,]+)/);
  if (!one || !ten || !history) throw new Error("Tanishq rate table was not found");

  const perGram = amount(one[1]);
  const per10 = amount(ten[1]);
  const historyPerGram = amount(history[2]);
  if (Math.abs(per10 - perGram * 10) > 20) throw new Error("Tanishq 10g rate does not match the 1g rate");
  if (historyPerGram !== perGram) throw new Error("Tanishq history does not match the 22K rate");
  if (perGram < 3000 || perGram > 50000) throw new Error("Tanishq 22K rate is outside a plausible range");

  return { perGram, per10, date: history[1] };
}

/** Mia by Tanishq publishes the same day's 18K, 22K and 24K rates for 10 grams. */
export function parseMiaGold(text: string): MiaBoard {
  const body = plain(text);
  const read = (karat: "18K" | "22K" | "24K") => {
    const match = body.match(new RegExp(`${karat} Gold Rate\\s*\\(10 Gram\\)\\s*₹\\s*([\\d,]+)`, "i"));
    if (!match) throw new Error(`Mia ${karat} rate was not found`);
    return amount(match[1]);
  };
  return {
    gold18kPer10g: read("18K"),
    gold22kPer10g: read("22K"),
    gold24kPer10g: read("24K"),
  };
}

function istDay(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
    .format(date)
    .replaceAll("/", "-");
}

function recentRateDay(date: string) {
  const today = istDay();
  const yesterday = istDay(new Date(Date.now() - 24 * 60 * 60 * 1000));
  return date === today || date === yesterday;
}

function stamp(ddmmyyyy: string) {
  const [day, month, year] = ddmmyyyy.split("-");
  return `${year}-${month}-${day}T06:00:00+05:30`;
}

/**
 * Keep a rate only when Tanishq's own 22K table agrees with itself
 * and with the 18K / 22K / 24K board on Mia by Tanishq.
 */
export function verifiedGoldQuote(tanishq: TanishqBoard, mia: MiaBoard): BullionQuote {
  if (!recentRateDay(tanishq.date)) throw new Error("Tanishq rate is not from today or yesterday");

  const gold22kPer10g = tanishq.perGram * 10;
  const gold18kPer10g = Math.round((tanishq.perGram * 18) / 22) * 10;
  const gold24kPer10g = Math.round((tanishq.perGram * 24) / 22) * 10;

  if (Math.abs(mia.gold22kPer10g - gold22kPer10g) > 20) {
    throw new Error("Tanishq 22K rate does not match Mia by Tanishq");
  }
  if (Math.abs(mia.gold18kPer10g - gold18kPer10g) > 50) {
    throw new Error("18K rate does not match the Tanishq 22K rate");
  }
  if (Math.abs(mia.gold24kPer10g - gold24kPer10g) > 50) {
    throw new Error("24K rate does not match the Tanishq 22K rate");
  }

  return {
    gold22kPer10g: mia.gold22kPer10g,
    gold18kPer10g: mia.gold18kPer10g,
    gold24kPer10g: mia.gold24kPer10g,
    goldUpdatedAt: stamp(tanishq.date),
  };
}

async function readPage(url: string) {
  const headers = {
    "User-Agent": "Mozilla/5.0",
    Accept: "text/html, text/plain, */*",
  };
  try {
    const direct = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(8000),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (direct.ok) return direct.text();
  } catch {
    // The shop sites often refuse a plain server request. The reader below is the fallback.
  }

  const proxy = await fetch(`https://r.jina.ai/${url}`, {
    headers,
    signal: AbortSignal.timeout(20000),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!proxy.ok) throw new Error("Gold rate page failed");
  return proxy.text();
}

async function readBullionQuote(): Promise<BullionQuote> {
  const [tanishqPage, miaPage] = await Promise.all([readPage(TANISHQ_URL), readPage(MIA_URL)]);
  return verifiedGoldQuote(parseTanishqGold(tanishqPage), parseMiaGold(miaPage));
}

/**
 * Indian retail gold rate, checked against Tanishq before it is shown.
 * The result is cached for 10 minutes, then every visitor reads that same result.
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

export const bullionRevalidateSeconds = REVALIDATE_SECONDS;
