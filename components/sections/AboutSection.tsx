import Link from "next/link";
import { aboutCopy, stats } from "@/data/copy";
import { shop } from "@/data/shop";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OwnerPortrait } from "@/components/sections/OwnerPortrait";

export function AboutSection({ variant = "home" }: { variant?: "home" | "page" }) {
  const heading = variant === "home" ? aboutCopy.homeTitle : aboutCopy.pageTitle;

  return (
    <section
      id={variant === "home" ? "about" : undefined}
      aria-labelledby="about-heading"
      className="relative bg-ivory py-24 md:py-32"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <FadeIn>
            <OwnerPortrait />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              id="about-heading"
              align="left"
              gem
              eyebrow={<LocaleText k="about.eyebrow" />}
              title={<L text={heading} />}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-maroon-800/95">
              {aboutCopy.paragraphs.map((paragraph) => (
                <p key={paragraph.en}>
                  <L text={paragraph} />
                </p>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <article className="border border-gold-500/40 bg-cream/80 p-6">
                <p className="type-quote text-maroon-900">
                  “<L text={aboutCopy.ownerQuote} />”
                </p>
                <p className="mt-4 text-sm text-maroon-800">
                  <span className="font-medium text-maroon-900">
                    {shop.proprietor.name} ({shop.proprietor.knownAs})
                  </span>
                  <span className="mt-1 block type-eyebrow text-maroon-800">
                    <L text={shop.proprietor.role} />
                  </span>
                </p>
              </article>
              <article className="flex items-center gap-4 border border-gold-500/40 px-5 py-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-500/60 font-serif text-xl text-gold-600"
                >
                  N
                </span>
                <div>
                  <p className="font-serif text-xl text-maroon-900">{shop.ambassador.name}</p>
                  <p className="type-eyebrow text-maroon-800">
                    <L text={shop.ambassador.role} />
                  </p>
                  <p className="mt-1 text-sm text-maroon-800/90">
                    <L text={aboutCopy.ambassadorNote} />
                  </p>
                </div>
              </article>
            </div>
            {variant === "home" ? (
              <Link href="/about" className="mt-6 inline-block type-button text-maroon-800 underline-offset-4 hover:underline">
                <LocaleText k="about.read" />
              </Link>
            ) : null}
          </FadeIn>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label.en} className="border border-gold-500/35 px-4 py-6 text-center">
              <dt className="type-eyebrow text-maroon-700">
                <L text={stat.label} />
              </dt>
              <dd className="mt-2 font-serif text-3xl text-maroon-900">
                <L text={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
