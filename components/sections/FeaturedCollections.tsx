import { featuredCollections } from "@/data/collections";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import { Pattern } from "@/components/ui/Pattern";

export function FeaturedCollections() {
  return (
    <section id="collections" aria-labelledby="collections-heading" className="relative bg-ivory py-20 md:py-28">
      <Pattern />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            id="collections-heading"
            eyebrow="Collections"
            title="Chosen for the wedding"
            description="Bridal sets, payal, gems and diamond — the ornaments we keep for a wedding day. Pieces without a photograph yet are marked, and will be added from the shop."
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
            View all collections
          </GoldButton>
        </div>
      </Container>
    </section>
  );
}
