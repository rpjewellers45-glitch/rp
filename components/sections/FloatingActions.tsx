"use client";

import { ArrowUp, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { shop } from "@/data/shop";
import { WhatsAppIcon } from "@/components/ui/Motifs";
import { whatsappUrl } from "@/lib/links";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buttonClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-gold-400 bg-maroon-800 text-gold-300 transition-colors hover:bg-gold-400 hover:text-maroon-900";

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a href={shop.phoneHref} className={`${buttonClass} md:hidden`} aria-label={`Call ${shop.name}`}>
          <Phone className="h-5 w-5" />
        </a>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={buttonClass} aria-label={`WhatsApp ${shop.name}`}>
          <WhatsAppIcon />
        </a>
      </div>
      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            aria-label="Back to top"
            className={`${buttonClass} fixed bottom-5 left-5 z-40`}
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
