"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { LocaleText } from "@/components/i18n/LocaleText";
import { Logo } from "@/components/ui/Logo";

const STORAGE_KEY = "rp-preloader-seen";

function remember() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private mode */
  }
}

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useLayoutEffect(() => {
    const motionOff = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (motionOff || seen) {
      setVisible(false);
      setMounted(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!mounted) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        remember();
        setMounted(false);
      }}
    >
      {visible ? (
        <motion.div
          key="splash"
          className="preloader fixed inset-0 z-[80] flex items-center justify-center bg-maroon-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center px-6 text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
              <Logo size="splash" eager className="mx-auto" />
            </motion.div>
            <motion.span
              aria-hidden="true"
              className="mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold-300 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            />
            <p className="mt-3 type-eyebrow text-gold-300">
              <LocaleText k="trust.since" />
            </p>
          </div>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="absolute bottom-8 type-eyebrow text-gold-300 underline-offset-4 hover:underline"
          >
            <LocaleText k="preloader.skip" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
