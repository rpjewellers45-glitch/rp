import type { Metadata } from "next";
import { CollectionCatalogue } from "@/components/sections/CollectionCatalogue";
import { ClosingCta, PageBanner } from "@/components/sections/PageBanner";
import { GoldButton } from "@/components/ui/GoldButton";
import { shop } from "@/data/shop";
import { whatsappUrl } from "@/lib/links";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Wedding gold, bridal sets, CB Payel, Sukh Payel, gems, diamonds, necklaces, jhumkas, bangles, maang tikka and rings at R.P Jewellers & Sons, Dalsinghsarai.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <main id="main">
      <PageBanner
        crumb="Collections"
        eyebrow="Wedding jewellery only"
        title="The collection"
        description="Gold for the wedding day. Categories still waiting on a shop photograph are marked, so nothing here pretends to be a picture we do not have."
      />
      <CollectionCatalogue />
      <ClosingCta title="Tell us the piece you are looking for. We will say what is in the shop.">
        <GoldButton href="/#contact">Write to us</GoldButton>
        <GoldButton href={whatsappUrl()} variant="outline">
          WhatsApp {shop.phoneDisplay}
        </GoldButton>
      </ClosingCta>
    </main>
  );
}
