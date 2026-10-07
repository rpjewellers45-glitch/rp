import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClosingCta, PageBanner } from "@/components/sections/PageBanner";
import { aboutPromises } from "@/data/copy";
import { shop } from "@/data/shop";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import { whatsappUrl } from "@/lib/links";

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
        crumb="Our story"
        eyebrow="Since 1998"
        title="Our Story"
        description="A wedding jewellery shop in Main Bazar, Dalsinghsarai — hallmarked gold, a stated making charge, and families who return for the next wedding."
      />
      <AboutSection variant="page" />
      <section className="bg-cream py-20 md:py-24" aria-labelledby="promises-heading">
        <Container>
          <h2 id="promises-heading" className="text-center font-serif text-4xl text-maroon-900 md:text-5xl">
            What you can expect
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutPromises.map((item) => (
              <article key={item.title} className="border border-gold-500/35 bg-ivory p-6">
                <h3 className="font-serif text-2xl text-maroon-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-maroon-800/90">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ClosingCta title="Visit the shop, or ask us what is in the wedding collection.">
        <GoldButton href={shop.phoneHref}>Call {shop.phoneDisplay}</GoldButton>
        <GoldButton href={whatsappUrl()} variant="outline">
          WhatsApp
        </GoldButton>
      </ClosingCta>
    </main>
  );
}
