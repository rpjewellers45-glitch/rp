"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import type { GalleryItem } from "@/data/gallery";

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
      aria-label={current.title}
      tabIndex={-1}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-maroon-900/92 p-4 outline-none"
      onClick={onClose}
      onKeyDown={onTab}
    >
      <p className="sr-only">Use the left and right arrow keys to change photographs. Escape closes the viewer.</p>
      <button
        type="button"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-gold-400 text-gold-300"
        onClick={onClose}
        aria-label="Close gallery"
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
        aria-label="Previous photograph"
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
        aria-label="Next photograph"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <figure className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <div className="relative h-[68vh] w-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <figcaption className="mt-4 text-center">
          <p className="font-serif text-2xl text-ivory">{current.title}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-gold-300">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
