"use client";

import { ArrowUp, MapPin, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { shop } from "@/data/shop";
import { LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { WhatsAppIcon } from "@/components/ui/Motifs";
import { mapsSearchUrl, whatsappUrl } from "@/lib/links";

export function FloatingActions() {
  const { t } = useI18n();
  const [showTop, setShowTop] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const message = t("wa.enquire");

  return (
    <>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gold-400/70 bg-maroon-900/96 text-gold-300 backdrop-blur-md md:hidden"
        aria-label={t("footer.contact")}
      >
        <a href={shop.phoneHref} className="flex min-h-14 flex-col items-center justify-center gap-1 type-eyebrow">
          <Phone className="h-4 w-4" aria-hidden="true" />
          <LocaleText k="bar.call" />
        </a>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-gold-400/30 type-eyebrow"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <LocaleText k="bar.whatsapp" />
        </a>
        <a
          href={mapsSearchUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 type-eyebrow"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <LocaleText k="bar.directions" />
        </a>
      </nav>

      <div className="fixed bottom-5 right-5 z-40 hidden md:block">
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400 bg-maroon-800 text-gold-300 transition-colors hover:bg-gold-400 hover:text-maroon-900"
          aria-label={`WhatsApp ${shop.name}`}
        >
          <WhatsAppIcon />
        </a>
      </div>

      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            aria-label={t("top")}
            className="fixed bottom-24 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400 bg-maroon-800 text-gold-300 md:bottom-5"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
