import { featuredCollections } from "@/data/collections";
import { LocaleText } from "@/components/i18n/LocaleText";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import { Pattern } from "@/components/ui/Pattern";

export function FeaturedCollections() {
  return (
    <section id="collections" aria-labelledby="collections-heading" className="relative bg-ivory py-24 md:py-32">
      <Pattern />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            id="collections-heading"
            eyebrow={<LocaleText k="collections.eyebrow" />}
            title={<LocaleText k="collections.title" />}
            description={<LocaleText k="collections.description" />}
          />
        </FadeIn>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCollections.map((collection, index) => (
            <FadeIn key={collection.slug} delay={index * 0.08} className="h-full">
              <CollectionCard collection={collection} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <GoldButton href="/collections" tone="onLight" variant="outline">
            <LocaleText k="collections.all" />
          </GoldButton>
        </div>
      </Container>
    </section>
  );
}
