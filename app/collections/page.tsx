import type { Metadata } from "next";
import { CollectionCatalogue } from "@/components/sections/CollectionCatalogue";
import { ClosingCta, PageBanner } from "@/components/sections/PageBanner";
import { BreadcrumbJsonLd, JsonLdScript } from "@/components/seo/JsonLd";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { GoldButton } from "@/components/ui/GoldButton";
import { LocaleText } from "@/components/i18n/LocaleText";
import { products } from "@/data/products";
import { shop } from "@/data/shop";
import { absoluteUrl } from "@/lib/site";

const catalogueDescription =
  "Bridal sets, necklaces, earrings, bangles and rings in hallmarked 916 and 750 gold at R.P Jewellers & Sons, a jewellery shop in Dalsinghsarai, Bihar.";

export function generateMetadata({ searchParams }: { searchParams?: { category?: string } }): Metadata {
  const filtered = Boolean(searchParams?.category && searchParams.category !== "All");
  return {
    title: "Wedding Jewellery",
    description: catalogueDescription,
    alternates: { canonical: "/collections" },
    robots: filtered ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: "Wedding Jewellery | R.P Jewellers & Sons",
      description: catalogueDescription,
      url: "/collections",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "R.P Jewellers & Sons, wedding jewellery in Dalsinghsarai since 1998",
        },
      ],
    },
  };
}

export default function CollectionsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category ?? "All";
  const catalogue = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wedding jewellery at R.P Jewellers & Sons",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name.en,
      url: absoluteUrl(`/collections#${product.id}`),
    })),
  };

  return (
    <main id="main">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Wedding Jewellery", path: "/collections" },
        ]}
      />
      {category === "All" ? <JsonLdScript data={catalogue} /> : null}
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
        <h2 id="catalogue-heading" className="mt-4 type-section text-maroon-900">
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
