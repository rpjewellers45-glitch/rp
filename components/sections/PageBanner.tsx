import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Pattern } from "@/components/ui/Pattern";

export function PageBanner({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
}) {
  return (
    <header className="relative overflow-hidden bg-maroon-900 pb-16 pt-32 text-ivory md:pb-20 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#7A1424_0%,#3E0A12_55%,#2A070C_100%)]" />
      <Pattern />
      <Container className="relative">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
          <Link href="/" className="hover:text-ivory">
            Home
          </Link>
          <span aria-hidden="true"> · </span>
          {crumb}
        </p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-gold-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">{description}</p>
      </Container>
    </header>
  );
}

export function ClosingCta({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-maroon-900 py-16 text-ivory">
      <Container className="flex flex-col items-start justify-between gap-6 border border-gold-400/40 px-6 py-10 md:flex-row md:items-center md:px-10">
        <h2 className="max-w-xl font-serif text-3xl md:text-4xl">{title}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">{children}</div>
      </Container>
    </section>
  );
}
