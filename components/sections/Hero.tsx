"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { shop } from "@/data/shop";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { GoldButton } from "@/components/ui/GoldButton";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { SafeImage } from "@/components/ui/SafeImage";

export function Hero() {
  const reduce = useReducedMotion();
  const { locale, t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-12%"]);

  return (
    <section ref={sectionRef} id="home" className="relative bg-ivory pt-[4.75rem] text-maroon-900 md:pt-[5.25rem]">
        <div
          className={
            reduce
              ? "relative aspect-[3/4] max-h-[62vh] w-full overflow-hidden bg-maroon-900 md:aspect-auto md:h-[48vw] md:max-h-[520px] md:min-h-[220px]"
              : "sticky top-[4.75rem] z-0 aspect-[3/4] max-h-[62vh] w-full overflow-hidden bg-maroon-900 md:top-[5.25rem] md:aspect-auto md:h-[48vw] md:max-h-[520px] md:min-h-[220px]"
          }
        >
          <motion.div
            className={
              reduce
                ? "absolute inset-0"
                : "absolute inset-0 max-md:!transform-none md:inset-x-0 md:top-[-18%] md:h-[140%]"
            }
            style={{ y }}
          >
            <motion.div
              className="absolute inset-0 max-md:!transform-none"
              initial={reduce ? false : { scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 md:hidden">
                <SafeImage
                  src="/images/hero-mobile-front.jpg"
                  alt={t("hero.photo")}
                  sizes="100vw"
                  priority
                  className="object-cover object-[center_38%]"
                />
              </div>
              <div className="absolute inset-0 hidden md:block">
                <SafeImage
                  src="/images/hero-shop-banner.jpg"
                  alt={t("hero.photo")}
                  sizes="100vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border border-gold-300/35 md:hidden"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ivory md:h-36"
          />
        </div>

      <div className="relative z-10 bg-ivory">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-5 text-center md:pb-32 md:pt-8">
        <motion.p
          className="type-kicker text-maroon-800"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("hero.hindi")}
        </motion.p>
        <motion.h1
          className="type-hero mt-5 text-maroon-900"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          {t("hero.before")} <span className="italic text-gold-600">{t("hero.accent")}</span> {t("hero.after")}
        </motion.h1>
        <OrnamentDivider className="mx-auto mt-6" />
        <motion.p
          className="type-body mt-6 max-w-lg text-maroon-800/90"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.p
          className="type-eyebrow mt-3 text-maroon-700"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.34 }}
        >
          {shop.weddingOnly[locale]}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
        >
          <GoldButton href="/collections" tone="onLight">
            {t("hero.primary")}
          </GoldButton>
          <GoldButton href="/#visit" variant="outline" tone="onLight">
            {t("hero.secondary")}
          </GoldButton>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
