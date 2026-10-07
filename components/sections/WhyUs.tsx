import { features } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-heading" className="bg-cream py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            id="why-heading"
            eyebrow="Why us"
            title="Why Choose R.P Jewellers"
            description="A wedding shop in Dalsinghsarai, working the way families expect: hallmarked gold, a stated making charge, and time."
          />
        </FadeIn>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.07} className="h-full">
              <FeatureCard feature={feature} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
