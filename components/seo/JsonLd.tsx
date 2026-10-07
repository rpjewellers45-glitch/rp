import { shop } from "@/data/shop";
import { siteUrl } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: shop.name,
    foundingDate: String(shop.since),
    description: shop.description,
    image: `${siteUrl}/images/logo.png`,
    telephone: "+919939575999",
    email: shop.email,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${shop.address.line1}, ${shop.address.line2}`,
      addressLocality: shop.address.city,
      addressRegion: shop.address.state,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: shop.proprietor.name,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
