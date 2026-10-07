import Link from "next/link";
import { heroCopy } from "@/data/copy";
import { shop } from "@/data/shop";
import { GoldButton } from "@/components/ui/GoldButton";
import { Mandala } from "@/components/ui/Motifs";
import { OrnateFrame } from "@/components/ui/OrnateFrame";
import { Pattern } from "@/components/ui/Pattern";
import { SafeImage } from "@/components/ui/SafeImage";

const particles = [
  [12, 18, 0, 3],
  [22, 72, 1.2, 2],
  [78, 14, 0.4, 2],
  [88, 40, 1.8, 3],
  [68, 78, 0.8, 2],
  [34, 36, 2.1, 2],
  [52, 12, 1.4, 2],
  [84, 86, 0.2, 3],
  [8, 48, 1.6, 2],
  [60, 56, 2.4, 2],
  [42, 84, 0.6, 3],
  [93, 26, 1.1, 2],
] as const;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-maroon-900 text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#7A1424_0%,#3E0A12_46%,#2A070C_100%)]" />
      <Pattern />
      <Mandala className="pointer-events-none absolute -right-16 top-8 hidden h-[34rem] w-[34rem] text-gold-300 opacity-[0.08] lg:block" />
      {particles.map(([left, top, delay, size]) => (
        <span
          key={`${left}-${top}`}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-gold-300 motion-safe:animate-floaty"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-28 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-32">
        <div className="relative">
          <svg
            className="pointer-events-none absolute -left-4 top-0 hidden h-44 w-40 text-gold-400/50 lg:block"
            viewBox="0 0 120 150"
            fill="none"
            aria-hidden="true"
          >
            <path className="draw-path" d="M16 34c22 14 66 14 88 0" stroke="currentColor" strokeWidth="1" />
            <path className="draw-path" d="M30 40c8 30 12 52 30 74 18-22 22-44 30-74" stroke="currentColor" strokeWidth="1" />
            <circle className="draw-path" cx="60" cy="122" r="7" stroke="currentColor" strokeWidth="1" />
          </svg>
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold-300">{heroCopy.eyebrow}</p>
          <h1 className="mt-4 max-w-xl font-serif text-[2.7rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem]">
            {heroCopy.titleBefore}{" "}
            <span className="text-gold-gradient italic">{heroCopy.titleAccent}</span> {heroCopy.titleAfter}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg">{heroCopy.subtitle}</p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-gold-300/90">{shop.weddingOnly}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GoldButton href="/#collections">{heroCopy.primaryCta}</GoldButton>
            <GoldButton href="/#visit" variant="outline">
              {heroCopy.secondaryCta}
            </GoldButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <svg
            className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-gold-400/70 motion-safe:animate-spin-slow"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="1.4 2.2" />
          </svg>
          <OrnateFrame>
            <div className="relative aspect-[3/4]">
              <SafeImage
                src="/images/gallery/bridal-03.jpg"
                alt="Gold bridal haar with a fine fringe and matching earrings, from R.P Jewellers & Sons"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
                className="object-cover object-center"
              />
            </div>
          </OrnateFrame>
          <div className="absolute bottom-6 right-3 z-20 max-w-[11.5rem] border border-gold-300/80 bg-maroon-900/88 px-4 py-3 text-center backdrop-blur-sm sm:right-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold-300">Wedding gold</p>
            <p className="mt-1 font-serif text-xl leading-tight text-ivory">{shop.makingChargeLabel}</p>
          </div>
        </div>
      </div>

      <Link
        href="#collections"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-300"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <span className="block h-10 w-px origin-top bg-gradient-to-b from-gold-300 to-transparent motion-safe:animate-scroll-line" />
      </Link>
    </section>
  );
}
