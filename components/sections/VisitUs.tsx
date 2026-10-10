"use client";

import { Clock, MapPin, Navigation } from "lucide-react";
import { shop } from "@/data/shop";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SafeImage } from "@/components/ui/SafeImage";
import { mapsEmbedUrl, mapsSearchUrl } from "@/lib/links";

export function VisitUs() {
  const { t } = useI18n();
  return (
    <section id="visit" aria-labelledby="visit-heading" className="bg-cream py-24 md:py-32">
      <Container>
        <FadeIn>
        <SectionHeading
          id="visit-heading"
          eyebrow={<LocaleText k="visit.eyebrow" />}
          title={<LocaleText k="visit.title" />}
          description={<LocaleText k="visit.description" />}
        />
        </FadeIn>
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <FadeIn className="h-full">
          <article className="flex h-full flex-col border border-gold-500/40 bg-ivory p-7 md:p-9">
            <p className="type-eyebrow text-maroon-800">
              <L text={shop.address.branch} />
            </p>
            <h3 className="type-brand mt-3 text-maroon-900">{shop.name}</h3>
            <p className="mt-5 flex gap-3 text-maroon-800">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <span>
                <L text={shop.address.line1} />
                <br />
                <L text={shop.address.line2} />
                <br />
                <L text={shop.address.city} />, <L text={shop.address.state} />
              </span>
            </p>
            <div className="mt-6 border-t border-gold-500/30 pt-6">
              <p className="flex items-center gap-2 type-eyebrow text-maroon-700">
                <Clock className="h-4 w-4 text-gold-600" aria-hidden="true" />
                <LocaleText k="visit.hours" />
              </p>
              <ul className="mt-3 space-y-2">
                {shop.hours.map((slot) => (
                  <li key={slot.day.en} className="flex justify-between gap-4 text-sm text-maroon-800">
                    <span>
                      <L text={slot.day} />
                    </span>
                    <span>
                      <L text={slot.time} />
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-maroon-800/80">
                <L text={shop.hoursNote} />
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GoldButton href={mapsSearchUrl()} tone="onLight">
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                <LocaleText k="visit.directions" />
              </GoldButton>
              <GoldButton href={shop.phoneHref} variant="outline" tone="onLight">
                <LocaleText k="visit.call" />
              </GoldButton>
            </div>
          </article>
          </FadeIn>
          <FadeIn delay={0.12} className="h-full">
          <div className="group flex h-full flex-col gap-4">
            <div className="relative aspect-[16/9] overflow-hidden border border-gold-500/40 bg-maroon-900">
              <SafeImage
                src="/images/shop-front.jpg"
                alt={t("visit.photo")}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="zoom-img object-cover"
              />
              <CornerBrackets />
            </div>
            <div className="min-h-[280px] border border-gold-500/40 bg-ivory p-2">
              <iframe
                title={t("visit.map")}
                src={mapsEmbedUrl()}
                className="h-full min-h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
