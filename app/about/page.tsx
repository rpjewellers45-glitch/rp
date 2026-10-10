import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClosingCta, PageBanner } from "@/components/sections/PageBanner";
import { timeline, values } from "@/data/about";
import { aboutPromises } from "@/data/copy";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { shop } from "@/data/shop";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { GoldButton } from "@/components/ui/GoldButton";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of R.P Jewellers & Sons, a wedding jewellery shop in Dalsinghsarai since 1998, led by proprietor Ashish Kumar (Gopu Ji).",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageBanner
        crumb=""
        eyebrow=""
        title={<LocaleText k="page.about.title" />}
        description={<LocaleText k="page.about.description" />}
      />
      <AboutSection variant="page" />
      <section className="bg-cream py-24 md:py-32" aria-labelledby="promises-heading">
        <Container>
          <FadeIn>
          <h2 id="promises-heading" className="text-center type-section text-maroon-900">
            <LocaleText k="about.expect" />
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutPromises.map((item) => (
              <article key={item.title.en} className="lift h-full border border-gold-500/35 bg-ivory p-6">
                <h3 className="type-title text-maroon-900">
                  <L text={item.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-maroon-800/90">
                  <L text={item.text} />
                </p>
              </article>
            ))}
          </div>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-ivory py-24 md:py-32" aria-labelledby="timeline-heading">
        <Container>
          <FadeIn>
          <h2 id="timeline-heading" className="text-center type-section text-maroon-900">
            <LocaleText k="about.timeline" />
          </h2>
          <ol className="mx-auto mt-12 max-w-3xl border-l border-gold-500/60 pl-6">
            {timeline.map((item) => (
              <li key={item.year.en} className="relative pb-10">
                <span aria-hidden="true" className="absolute -left-[1.65rem] top-1 h-3 w-3 bg-gold-500" />
                <p className="type-eyebrow text-gold-600">
                  <L text={item.year} />
                </p>
                <h3 className="type-title mt-2 text-maroon-900">
                  <L text={item.title} />
                </h3>
                <p className="mt-2 leading-relaxed text-maroon-800">
                  <L text={item.text} />
                </p>
              </li>
            ))}
          </ol>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-cream py-24 md:py-32" aria-labelledby="values-heading">
        <Container>
          <FadeIn>
          <h2 id="values-heading" className="text-center type-section text-maroon-900">
            <LocaleText k="about.values" />
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <article key={item.title.en} className="lift h-full border border-gold-500/35 bg-ivory p-6">
                <h3 className="type-title text-maroon-900">
                  <L text={item.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-maroon-800/90">
                  <L text={item.text} />
                </p>
              </article>
            ))}
          </div>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-maroon-900 py-24 text-ivory md:py-32" aria-labelledby="ambassador-heading">
        <FadeIn>
        <Container className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <span
            aria-hidden="true"
            className="flex h-28 w-28 items-center justify-center border border-gold-400 font-serif text-5xl text-gold-300"
          >
            N
          </span>
          <div>
            <p className="type-eyebrow text-gold-300">
              <L text={shop.ambassador.role} />
            </p>
            <h2 id="ambassador-heading" className="mt-4 type-section">
              {shop.ambassador.name}
            </h2>
            <p className="type-body mt-4 max-w-xl text-ivory/80">
              <LocaleText k="about.ambassador" />
            </p>
          </div>
        </Container>
        </FadeIn>
      </section>
      <ClosingCta title={<LocaleText k="about.cta" />}>
        <GoldButton href={shop.phoneHref}>
          <LocaleText k="cta.call" /> {shop.phoneDisplay}
        </GoldButton>
        <EnquiryButton>
          <LocaleText k="bar.whatsapp" />
        </EnquiryButton>
      </ClosingCta>
    </main>
  );
}
