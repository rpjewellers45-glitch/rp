import { features } from "@/data/features";
import { LocaleText } from "@/components/i18n/LocaleText";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-heading" className="bg-cream py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            id="why-heading"
            eyebrow={<LocaleText k="why.eyebrow" />}
            title={<LocaleText k="why.title" />}
            description={<LocaleText k="why.description" />}
          />
        </FadeIn>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.icon} delay={index * 0.07} className="h-full">
              <FeatureCard feature={feature} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
