import { AboutSection } from "@/components/sections/AboutSection";
import { Contact } from "@/components/sections/Contact";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { OfferBanner } from "@/components/sections/OfferBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { VisitUs } from "@/components/sections/VisitUs";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustStrip />
      <FeaturedCollections />
      <WhyUs />
      <OfferBanner />
      <AboutSection />
      <Gallery />
      <Testimonials />
      <VisitUs />
      <Contact />
    </main>
  );
}
