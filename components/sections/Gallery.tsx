"use client";

import { useCallback, useState } from "react";
import { gallery } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { Pattern } from "@/components/ui/Pattern";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const ratioClass = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
} as const;

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((current) => (current === null ? current : (current - 1 + gallery.length) % gallery.length));
  }, []);
  const next = useCallback(() => {
    setIndex((current) => (current === null ? current : (current + 1) % gallery.length));
  }, []);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="relative bg-maroon-900 py-20 text-ivory md:py-28">
      <Pattern />
      <Container className="relative">
        <SectionHeading
          id="gallery-heading"
          tone="dark"
          eyebrow="Gallery"
          title="Photographs from the shop"
          description="Bridal sets and necklaces from R.P Jewellers & Sons. Select a photograph to view it larger."
        />
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, itemIndex) => (
            <div key={item.id} className="mb-4 break-inside-avoid">
              <button
                type="button"
                className="group relative block w-full overflow-hidden border border-gold-500/40 text-left"
                aria-label={`View ${item.title}: ${item.alt}`}
                onClick={() => setIndex(itemIndex)}
              >
                <span className={cn("relative block w-full", ratioClass[item.ratio])}>
                  <SafeImage src={item.src} alt="" sizes="(max-width: 640px) 100vw, 33vw" className="zoom-img object-cover" />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-900/85 to-transparent px-4 pb-4 pt-12">
                  <span className="font-serif text-xl text-ivory">{item.title}</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </Container>
      {index !== null ? (
        <Lightbox items={gallery} index={index} onClose={close} onPrev={prev} onNext={next} />
      ) : null}
    </section>
  );
}
