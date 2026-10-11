"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import type { GalleryItem } from "@/data/gallery";
import { L } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const controlClass =
  "pointer-events-auto flex h-11 w-11 items-center justify-center border border-gold-400 bg-maroon-900 text-gold-200 shadow-[0_10px_28px_rgba(0,0,0,0.45)] transition-[color,background-color,border-color] duration-300 hover:border-gold-300 hover:bg-gold-400 hover:text-maroon-900 md:h-12 md:w-12";

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
      className="fixed inset-0 z-[90] bg-maroon-900 outline-none"
      onClick={onClose}
      onKeyDown={onTab}
    >
      <p className="sr-only">{t("gallery.help")}</p>
      <div className="pointer-events-none relative z-10 grid h-full grid-rows-[auto_minmax(0,1fr)_auto]">
        <div className="flex items-center justify-between px-4 pt-4 md:px-6 md:pt-5">
          <p className="type-eyebrow text-gold-300">
            {index + 1} / {items.length}
          </p>
          <button
            type="button"
            className={controlClass}
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label={t("gallery.close")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative min-h-0">
          <button
            type="button"
            className={cn(controlClass, "absolute left-3 top-1/2 z-20 -translate-y-1/2 md:left-6")}
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
            className={cn(controlClass, "absolute right-3 top-1/2 z-20 -translate-y-1/2 md:right-6")}
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label={t("gallery.next")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            className="pointer-events-auto absolute inset-y-2 left-16 right-16 sm:inset-y-4 sm:left-24 sm:right-24"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <img
                key={current.id}
                src={current.src}
                alt={current.alt[locale]}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <figcaption
          className="pointer-events-auto px-6 pb-6 pt-3 text-center md:pb-8"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="type-title text-ivory">
            <L text={current.title} />
          </p>
        </figcaption>
      </div>
    </div>
  );
}
