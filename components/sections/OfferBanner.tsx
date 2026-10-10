"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { MessageKey } from "@/data/i18n";
import { shop } from "@/data/shop";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Pattern } from "@/components/ui/Pattern";
import { whatsappUrl } from "@/lib/links";

const figures: Array<{ value: number; decimals: number; suffix: string; label: MessageKey }> = [
  { value: shop.makingCharge, decimals: 1, suffix: "%", label: "offer.making" },
  { value: 916, decimals: 0, suffix: "", label: "offer.k22" },
  { value: 750, decimals: 0, suffix: "", label: "offer.k18" },
  { value: shop.since, decimals: 0, suffix: "", label: "offer.established" },
];

export function OfferBanner() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-maroon-800 py-24 text-ivory md:py-32" aria-labelledby="offer-heading">
      <Pattern drift />
      <Container className="relative">
        <FadeIn>
        <div className="border border-gold-400/70 px-6 py-12 md:px-12 md:py-16">
          <p className="text-center type-eyebrow text-gold-300">
            <LocaleText k="offer.eyebrow" />
          </p>
          <h2 id="offer-heading" className="mx-auto mt-4 max-w-3xl text-center type-section">
            <LocaleText k="offer.title" />
          </h2>
          <p className="type-body mx-auto mt-5 max-w-2xl text-center text-ivory/80">
            <LocaleText k="offer.text" />
          </p>
          <p className="mt-3 text-center type-eyebrow text-gold-300/80">
            <LocaleText k="offer.terms" />
          </p>
          <p className="mt-3 text-center type-eyebrow text-gold-300">
            <L text={shop.weddingOnly} />
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {figures.map((figure) => (
              <li key={figure.label + figure.value} className="text-center">
                <p className="type-figure">
                  <CountUp
                    value={figure.value}
                    decimals={figure.decimals}
                    suffix={figure.suffix}
                    className="text-gold-gradient"
                  />
                </p>
                <p className="mt-2 type-eyebrow text-gold-300">
                  <LocaleText k={figure.label} />
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GoldButton href={shop.phoneHref}>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <LocaleText k="offer.call" />
            </GoldButton>
            <GoldButton href={whatsappUrl(t("wa.enquire"))} variant="outline">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <LocaleText k="bar.whatsapp" />
            </GoldButton>
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}
