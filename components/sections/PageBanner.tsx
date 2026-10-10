"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { LocaleText } from "@/components/i18n/LocaleText";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { Pattern } from "@/components/ui/Pattern";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageBanner({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  crumb: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-maroon-900 pb-20 pt-36 text-ivory md:pb-24 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#7A1424_0%,#3E0A12_55%,#2A070C_100%)]" />
      <Pattern drift />
      <Container className="relative">
        {crumb ? (
          <p className="type-eyebrow text-gold-300">
            <Link href="/" className="hover:text-ivory">
              <LocaleText k="nav.home" />
            </Link>
            <span aria-hidden="true"> · </span>
            {crumb}
          </p>
        ) : null}
        {eyebrow ? <p className="mt-6 type-eyebrow text-gold-300">{eyebrow}</p> : null}
        <motion.h1
          className="mt-4 max-w-3xl type-section"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="type-body mt-6 max-w-2xl text-ivory/75"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease }}
        >
          {description}
        </motion.p>
      </Container>
    </header>
  );
}

export function ClosingCta({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="bg-maroon-900 py-24 text-ivory md:py-32">
      <FadeIn>
        <Container className="flex flex-col items-start justify-between gap-8 border border-gold-400/35 px-6 py-12 md:flex-row md:items-center md:px-12">
        <h2 className="type-section max-w-xl">{title}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">{children}</div>
        </Container>
      </FadeIn>
    </section>
  );
}
