"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { MessageKey } from "@/data/i18n";
import type { Product } from "@/data/products";
import { LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { GoldButton } from "@/components/ui/GoldButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { whatsappUrl } from "@/lib/links";

export function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const { locale, t } = useI18n();

  useEffect(() => {
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const message = `${t("wa.piece")} ${product.name[locale]} ${t("wa.pieceAt")}`;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <motion.button
        type="button"
        className="absolute inset-0 bg-maroon-900/75"
        aria-label={t("products.close")}
        onClick={onClose}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        className="relative z-10 grid max-h-[92svh] w-full max-w-3xl overflow-y-auto bg-ivory text-maroon-900 sm:grid-cols-[0.9fr_1.1fr]"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative min-h-72 bg-maroon-900">
          <SafeImage src={product.image} alt={product.alt[locale]} sizes="(max-width: 640px) 100vw, 420px" priority className="object-cover" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(42,7,12,0.45)_100%)]" />
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <p className="type-eyebrow text-maroon-700">{t(`cat.${product.category}` as MessageKey)}</p>
          <h2 id="product-title" className="type-title mt-3">
            {product.name[locale]}
          </h2>
          <p className="type-body mt-4 text-maroon-800">{product.description[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GoldButton href={whatsappUrl(message)} tone="onLight">
              <LocaleText k="products.enquire" />
            </GoldButton>
            <button
              ref={closeRef}
              type="button"
              className="min-h-11 border border-gold-600 px-6 type-button"
              onClick={onClose}
            >
              <LocaleText k="products.close" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
