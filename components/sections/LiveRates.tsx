"use client";

import { useEffect, useState } from "react";
import type { BullionQuote } from "@/lib/bullion";
import { LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/links";

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatWhen(iso: string, locale: "en" | "hi") {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", {
    dateStyle: "medium",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export function LiveRates() {
  const { locale, t } = useI18n();
  const [quote, setQuote] = useState<BullionQuote | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let ignore = false;
    let timer = 0;

    const load = async () => {
      try {
        const response = await fetch("/api/rates");
        if (!response.ok) throw new Error("unavailable");
        const data = (await response.json()) as BullionQuote;
        if (!ignore) {
          setQuote(data);
          setFailed(false);
        }
      } catch {
        if (!ignore) setFailed(true);
      }
    };

    const start = () => {
      void load();
      timer = window.setInterval(load, 10 * 60 * 1000);
    };

    start();
    return () => {
      ignore = true;
      window.clearInterval(timer);
    };
  }, []);

  const cards = quote
    ? [
        { label: "22K · 916", unit: t("gold.per10"), value: quote.gold22kPer10g },
        { label: "18K · 750", unit: t("gold.per10"), value: quote.gold18kPer10g },
        { label: "24K", unit: t("gold.per10"), value: quote.gold24kPer10g },
      ]
    : [];

  return (
    <section id="rates" aria-labelledby="rates-heading" className="bg-ivory pb-16 pt-8 text-maroon-900 md:pb-24 md:pt-10">
      <Container>
        <FadeIn>
        <SectionHeading
          id="rates-heading"
          eyebrow={<LocaleText k="rates.eyebrow" />}
          title={<LocaleText k="gold.label" />}
          description={<LocaleText k="gold.body" />}
        />
        </FadeIn>
        {failed && !quote ? (
          <p role="status" className="mt-10 text-center text-maroon-800">
            {t("gold.unavailable")}
          </p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {(cards.length ? cards : [0, 1, 2]).map((card, index) => (
              <li key={typeof card === "number" ? card : card.label}>
                <FadeIn delay={index * 0.08} className="h-full border border-gold-500/40 bg-cream/60 px-4 py-6 text-center">
                {typeof card === "number" ? (
                  <p className="type-price text-maroon-800/40" aria-hidden="true">
                    —
                  </p>
                ) : (
                  <>
                    <p className="type-eyebrow text-maroon-700">{card.label}</p>
                    <p className="type-price mt-3 text-maroon-900">{rupee.format(card.value)}</p>
                    <p className="mt-2 type-eyebrow text-gold-600">{card.unit}</p>
                  </>
                )}
                </FadeIn>
              </li>
            ))}
          </ul>
        )}
        {quote ? (
          <p className="mt-6 text-center text-sm text-maroon-700">
            {t("gold.updated")} {formatWhen(quote.goldUpdatedAt, locale)}
          </p>
        ) : null}
        <div className="mt-8 text-center">
          <GoldButton
            href={whatsappUrl(t("wa.rate"))}
            tone="onLight"
          >
            <LocaleText k="gold.action" />
          </GoldButton>
        </div>
      </Container>
    </section>
  );
}
