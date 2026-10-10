"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** SAMPLE CONTENT — the reviews rendered here are placeholders. See data/testimonials.ts. */
export function Testimonials() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const active = testimonials[index];

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [paused, reduce, index]);

  return (
    <section className="bg-ivory py-24 md:py-32" aria-labelledby="stories-heading" aria-roledescription="carousel">
      <Container>
        <FadeIn>
        <SectionHeading
          id="stories-heading"
          eyebrow={<LocaleText k="stories.eyebrow" />}
          title={<LocaleText k="stories.title" />}
          description={<LocaleText k="stories.description" />}
        />
        </FadeIn>
        <div
          className="relative mx-auto mt-12 max-w-3xl border border-gold-500/40 bg-cream/50 px-6 py-12 md:px-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
        >
          <span aria-hidden="true" className="pointer-events-none absolute left-6 top-4 font-serif text-7xl text-gold-500/30">
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <p className="type-quote text-maroon-900">
                <L text={active.quote} />
              </p>
              <footer className="mt-8">
                <p className="font-serif text-xl text-maroon-900">
                  <L text={active.author} />
                </p>
                <p className="mt-1 type-eyebrow text-maroon-800">
                  <L text={active.detail} />
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`${t("stories.show")} ${itemIndex + 1}`}
                  aria-current={itemIndex === index}
                  onClick={() => setIndex(itemIndex)}
                  className={itemIndex === index ? "h-2 w-6 bg-gold-600" : "h-2 w-2 bg-gold-600/35"}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-gold-600 text-maroon-900"
                aria-label={t("stories.prev")}
                onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-gold-600 text-maroon-900"
                aria-label={t("stories.next")}
                onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
