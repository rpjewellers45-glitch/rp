"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { faq } from "@/data/faq";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<string | null>(faq[0]?.id ?? null);
  const reduce = useReducedMotion();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cream py-24 md:py-32">
      <Container className="max-w-3xl">
        <FadeIn>
        <SectionHeading
          id="faq-heading"
          eyebrow={<LocaleText k="faq.eyebrow" />}
          title={<LocaleText k="faq.title" />}
          description={<LocaleText k="faq.description" />}
        />
        </FadeIn>
        <div className="mt-12 border-t border-gold-500/40">
          {faq.map((item) => {
            const expanded = open === item.id;
            return (
              <div key={item.id} className="border-b border-gold-500/40">
                <h3>
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left type-product text-maroon-900"
                    aria-expanded={expanded}
                    aria-controls={`faq-${item.id}`}
                    onClick={() => setOpen(expanded ? null : item.id)}
                  >
                    <L text={item.question} />
                    <motion.span
                      aria-hidden="true"
                      className="text-gold-600"
                      animate={{ rotate: expanded ? 45 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.25 }}
                    >
                      +
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      id={`faq-${item.id}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pr-8 text-sm leading-relaxed text-maroon-800">
                        <L text={item.answer} />
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
