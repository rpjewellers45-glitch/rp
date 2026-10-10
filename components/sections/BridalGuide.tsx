import { checklist, guideSteps } from "@/data/guide";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { Pattern } from "@/components/ui/Pattern";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BridalGuide() {
  return (
    <section id="guide" aria-labelledby="guide-heading" className="relative bg-ivory py-24 md:py-32">
      <Pattern />
      <Container className="relative">
        <FadeIn>
        <SectionHeading
          id="guide-heading"
          eyebrow={<LocaleText k="guide.eyebrow" />}
          title={<LocaleText k="guide.title" />}
          description={<LocaleText k="guide.description" />}
        />
        </FadeIn>
        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {guideSteps.map((step, index) => (
            <li key={step.title.en} className="h-full">
              <FadeIn delay={index * 0.08} className="h-full border border-gold-500/35 bg-cream/70 p-6">
              <p className="type-index text-gold-600">0{index + 1}</p>
              <h3 className="type-title mt-2 text-maroon-900">
                <L text={step.title} />
              </h3>
              <p className="type-small mt-3 text-maroon-800/95">
                <L text={step.text} />
              </p>
              </FadeIn>
            </li>
          ))}
        </ol>
        <FadeIn>
        <div className="mt-8 border border-gold-500/50 bg-maroon-900 px-6 py-8 text-ivory md:px-10">
          <h3 className="type-title">
            <LocaleText k="guide.carry" />
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-ivory/85">
                <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 bg-gold-400" />
                <L text={item} />
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}
