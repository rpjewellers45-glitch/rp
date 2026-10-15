"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { dictionary, type MessageKey } from "@/data/i18n";
import { weddingGroups, weddingPieces, type WeddingGroup, type WeddingPiece } from "@/data/wedding";
import type { GalleryItem } from "@/data/gallery";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SafeImage } from "@/components/ui/SafeImage";
import { c } from "@/lib/copy";
import { cn } from "@/lib/utils";

const loadLightbox = () => import("@/components/ui/Lightbox").then((mod) => mod.Lightbox);
const Lightbox = dynamic(loadLightbox, { ssr: false });

function pieceNumber(piece: WeddingPiece) {
  return Number(piece.id.slice(-3));
}

function asGalleryItem(piece: WeddingPiece): GalleryItem {
  const key = `wedding.${piece.group}` as MessageKey;
  const label = { en: dictionary.en[key], hi: dictionary.hi[key] };
  const number = pieceNumber(piece);
  return {
    id: piece.id,
    src: piece.src,
    ratio: "square",
    title: c(`${label.en} ${number}`, `${label.hi} ${number}`),
    alt: c(
      `${label.en}, photograph ${number}, from the R.P Jewellers & Sons wedding photographs`,
      `आर.पी. ज्वेलर्स एंड सन्स की शादी की तस्वीर, ${label.hi}, नंबर ${number}`,
    ),
  };
}

export function WeddingCatalogue() {
  const { locale, t } = useI18n();
  const [group, setGroup] = useState<WeddingGroup>("all");
  const [index, setIndex] = useState<number | null>(null);
  const visible = useMemo(
    () => (group === "all" ? weddingPieces : weddingPieces.filter((piece) => piece.group === group)),
    [group],
  );
  const lightboxItems = useMemo(() => visible.map(asGalleryItem), [visible]);

  return (
    <section className="bg-ivory pb-24 pt-10 md:pb-32" aria-labelledby="wedding-heading">
      <Container>
        <h2 id="wedding-heading" className="sr-only">
          {t("page.wedding.title")}
        </h2>
        <div role="toolbar" aria-label={t("wedding.filter")} className="flex flex-wrap justify-center gap-2">
          {weddingGroups.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={group === item}
              onClick={() => {
                setGroup(item);
                setIndex(null);
              }}
              className={cn(
                "min-h-11 border px-4 type-eyebrow",
                group === item
                  ? "border-maroon-800 bg-maroon-800 text-ivory"
                  : "border-gold-600/50 bg-transparent text-maroon-800 hover:border-gold-600",
              )}
            >
              {t(`wedding.${item}` as MessageKey)}
            </button>
          ))}
        </div>
        <div
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
          onMouseEnter={() => void loadLightbox()}
          onFocus={() => void loadLightbox()}
        >
          {visible.map((piece, pieceIndex) => (
            <button
              key={piece.id}
              id={piece.id}
              type="button"
              className="group relative block overflow-hidden border border-gold-500/40 text-left"
              aria-label={`${t("wedding.view")}: ${t(`wedding.${piece.group}` as MessageKey)} ${pieceNumber(piece)}`}
              onClick={() => setIndex(pieceIndex)}
            >
              <span className="relative block aspect-square w-full bg-cream">
                <SafeImage
                  src={piece.src}
                  alt={asGalleryItem(piece).alt[locale]}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-contain"
                />
                <CornerBrackets />
              </span>
            </button>
          ))}
        </div>
      </Container>
      {index !== null ? (
        <Lightbox
          items={lightboxItems}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={() => setIndex((current) => (current === null ? current : (current - 1 + lightboxItems.length) % lightboxItems.length))}
          onNext={() => setIndex((current) => (current === null ? current : (current + 1) % lightboxItems.length))}
        />
      ) : null}
    </section>
  );
}
