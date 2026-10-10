"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import type { GalleryItem } from "@/data/gallery";
import { L } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { locale, t } = useI18n();
  const current = items[index];

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose, onNext, onPrev]);

  const onTab = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"),
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!current) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.title[locale]}
      tabIndex={-1}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-maroon-900/92 p-4 outline-none"
      onClick={onClose}
      onKeyDown={onTab}
    >
      <p className="sr-only">{t("gallery.help")}</p>
      <button
        type="button"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-gold-400 text-gold-300"
        onClick={onClose}
        aria-label={t("gallery.close")}
      >
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold-400 text-gold-300 md:left-6"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label={t("gallery.prev")}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold-400 text-gold-300 md:right-6"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label={t("gallery.next")}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <figure className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <div className="relative h-[68vh] w-full">
          <Image
            src={current.src}
            alt={current.alt[locale]}
            fill
            sizes="100vw"
            quality={75}
            loading="eager"
            className="object-contain"
          />
        </div>
        <figcaption className="mt-4 text-center">
          <p className="type-title text-ivory">
            <L text={current.title} />
          </p>
          <p className="mt-1 type-eyebrow text-gold-300">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
