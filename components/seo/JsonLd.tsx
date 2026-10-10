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
      streetAddress: `${shop.address.line1.en}, ${shop.address.line2.en}`,
      addressLocality: shop.address.city.en,
      addressRegion: shop.address.state.en,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: shop.proprietor.name,
    },
    // TODO: Replace with confirmed hours, for example "Mo-Su 10:00-20:30", once the owner publishes them.
    openingHoursSpecification: shop.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      description: `${slot.day.en}: ${slot.time.en}. ${shop.hoursNote.en}`,
    })),
    areaServed: ["Dalsinghsarai", "Samastipur"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
