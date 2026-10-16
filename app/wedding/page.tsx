import type { Metadata } from "next";
import { ClosingCta, PageBanner } from "@/components/sections/PageBanner";
import { WeddingCatalogue } from "@/components/sections/WeddingCatalogue";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { GoldButton } from "@/components/ui/GoldButton";
import { LocaleText } from "@/components/i18n/LocaleText";
import { shop } from "@/data/shop";

const description =
  "Chokers, long haars and gold bangles from R.P Jewellers & Sons, a wedding jewellery shop in Dalsinghsarai, Bihar.";

export const metadata: Metadata = {
  title: "Wedding Catalogue",
  description,
  alternates: { canonical: "/wedding" },
  openGraph: {
    title: "Wedding Catalogue | R.P Jewellers & Sons",
    description,
    url: "/wedding",
  },
};

export default function WeddingPage() {
  return (
    <main id="main">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Wedding Catalogue", path: "/wedding" },
        ]}
      />
      <PageBanner
        crumb={<LocaleText k="nav.wedding" />}
        eyebrow=""
        title={<LocaleText k="page.wedding.title" />}
        description={<LocaleText k="page.wedding.description" />}
      />
      <WeddingCatalogue />
      <ClosingCta title={<LocaleText k="page.wedding.cta" />}>
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
