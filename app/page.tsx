import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { shop } from "@/data/shop";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";

const WhyUs = dynamic(() => import("@/components/sections/WhyUs").then((mod) => mod.WhyUs));
const OfferBanner = dynamic(() => import("@/components/sections/OfferBanner").then((mod) => mod.OfferBanner));
const LiveRates = dynamic(() => import("@/components/sections/LiveRates").then((mod) => mod.LiveRates));
const BridalGuide = dynamic(() => import("@/components/sections/BridalGuide").then((mod) => mod.BridalGuide));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then((mod) => mod.AboutSection));
const Gallery = dynamic(() => import("@/components/sections/Gallery").then((mod) => mod.Gallery));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials));
const Faq = dynamic(() => import("@/components/sections/Faq").then((mod) => mod.Faq));
const VisitUs = dynamic(() => import("@/components/sections/VisitUs").then((mod) => mod.VisitUs));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

export const metadata: Metadata = {
  title: {
    absolute: "R.P Jewellers & Sons | Wedding Jewellery in Dalsinghsarai",
  },
  description: shop.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "R.P Jewellers & Sons | Wedding Jewellery in Dalsinghsarai",
    description: shop.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <LiveRates />
      <TrustStrip />
      <FeaturedCollections />
      <WhyUs />
      <OfferBanner />
      <BridalGuide />
      <AboutSection />
      <Gallery />
      <Testimonials />
      <Faq />
      <VisitUs />
      <Contact />
    </main>
  );
}
