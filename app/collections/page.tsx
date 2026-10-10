import type { Metadata } from "next";
import { CollectionCatalogue } from "@/components/sections/CollectionCatalogue";
import { ClosingCta, PageBanner } from "@/components/sections/PageBanner";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { GoldButton } from "@/components/ui/GoldButton";
import { LocaleText } from "@/components/i18n/LocaleText";
import { shop } from "@/data/shop";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Bridal sets, CB payel, HUID hallmark jewellery, necklaces, bangles and rings at R.P Jewellers & Sons, wedding jewellery in Dalsinghsarai, Bihar.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category ?? "All";
  return (
    <main id="main">
      <PageBanner
        crumb=""
        eyebrow=""
        title={<LocaleText k="page.products.title" />}
        description={<LocaleText k="page.products.description" />}
      />
      <section className="bg-ivory pb-4 pt-20 text-center">
        <p className="type-eyebrow text-gold-600">
          <LocaleText k="products.eyebrow" />
        </p>
        <h2 className="mt-4 type-section text-maroon-900">
          <LocaleText k="products.title" />
        </h2>
      </section>
      <CollectionCatalogue key={category} initialCategory={category} />
      <ClosingCta title={<LocaleText k="page.products.cta" />}>
        <GoldButton href={shop.phoneHref}>
          <LocaleText k="cta.call" /> {shop.phoneDisplay}
        </GoldButton>
        <EnquiryButton>
          <LocaleText k="bar.whatsapp" /> {shop.phoneDisplay}
        </EnquiryButton>
      </ClosingCta>
    </main>
  );
}
