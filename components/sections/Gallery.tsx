"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { gallery } from "@/data/gallery";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { Pattern } from "@/components/ui/Pattern";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const loadLightbox = () => import("@/components/ui/Lightbox").then((mod) => mod.Lightbox);
const Lightbox = dynamic(loadLightbox, { ssr: false });

const ratioClass = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
} as const;

export function Gallery() {
  const { locale, t } = useI18n();
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((current) => (current === null ? current : (current - 1 + gallery.length) % gallery.length));
  }, []);
  const next = useCallback(() => {
    setIndex((current) => (current === null ? current : (current + 1) % gallery.length));
  }, []);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="relative bg-maroon-900 py-24 text-ivory md:py-32">
      <Pattern drift />
      <Container className="relative">
        <FadeIn>
        <SectionHeading
          id="gallery-heading"
          tone="dark"
          eyebrow={<LocaleText k="gallery.eyebrow" />}
          title={<LocaleText k="gallery.title" />}
          description={<LocaleText k="gallery.description" />}
        />
        </FadeIn>
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3" onMouseEnter={() => void loadLightbox()} onFocus={() => void loadLightbox()}>
          {gallery.map((item, itemIndex) => (
            <FadeIn key={item.id} delay={Math.min(itemIndex, 6) * 0.06} className="mb-4 break-inside-avoid">
              <button
                type="button"
                className="group relative block w-full overflow-hidden border border-gold-500/40 text-left"
                aria-label={`${t("gallery.view")} ${item.title[locale]}: ${item.alt[locale]}`}
                onClick={() => setIndex(itemIndex)}
              >
                <span className={cn("relative block w-full", ratioClass[item.ratio])}>
                  <SafeImage src={item.src} alt={item.alt[locale]} sizes="(max-width: 640px) 100vw, 33vw" className="zoom-img object-cover" />
                  <CornerBrackets />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-900/85 to-transparent px-4 pb-4 pt-12">
                  <span className="font-serif text-xl text-ivory">
                    <L text={item.title} />
                  </span>
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </Container>
      {index !== null ? (
        <Lightbox items={gallery} index={index} onClose={close} onPrev={prev} onNext={next} />
      ) : null}
    </section>
  );
}
