import { shop } from "@/data/shop";
import { mapsSearchUrl } from "@/lib/links";
import { absoluteUrl, siteUrl } from "@/lib/site";

const storeId = `${siteUrl}/#store`;
const websiteId = `${siteUrl}/#website`;

export function JsonLdScript({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JewelryStore",
        "@id": storeId,
        name: shop.name,
        url: siteUrl,
        image: absoluteUrl("/images/logo.png"),
        logo: absoluteUrl("/images/logo.png"),
        description: shop.description,
        telephone: shop.phoneHref.replace("tel:", ""),
        email: shop.email,
        foundingDate: String(shop.since),
        hasMap: mapsSearchUrl(),
        address: {
          "@type": "PostalAddress",
          streetAddress: `${shop.address.line1.en}, ${shop.address.line2.en}`,
          addressLocality: shop.address.city.en,
          addressRegion: shop.address.state.en,
          addressCountry: "IN",
        },
        founder: {
          "@type": "Person",
          name: shop.proprietor.name,
          alternateName: shop.proprietor.knownAs,
        },
        areaServed: [
          { "@type": "City", name: "Dalsinghsarai" },
          { "@type": "AdministrativeArea", name: "Samastipur" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: shop.phoneHref.replace("tel:", ""),
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: shop.name,
        description: shop.description,
        inLanguage: "en-IN",
        publisher: { "@id": storeId },
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; path: string }> }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}
