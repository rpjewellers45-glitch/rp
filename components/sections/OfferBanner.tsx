import { MessageCircle, Phone } from "lucide-react";
import { offerCopy } from "@/data/copy";
import { shop } from "@/data/shop";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Pattern } from "@/components/ui/Pattern";
import { whatsappUrl } from "@/lib/links";

const figures = [
  { value: shop.makingCharge, decimals: 1, suffix: "%", label: "Making charge" },
  { value: 916, decimals: 0, suffix: "", label: "22k HUID" },
  { value: 750, decimals: 0, suffix: "", label: "18k HUID" },
  { value: shop.since, decimals: 0, suffix: "", label: "Established" },
];

export function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-maroon-800 py-20 text-ivory md:py-24" aria-labelledby="offer-heading">
      <Pattern />
      <Container className="relative">
        <div className="border border-gold-400/70 px-6 py-12 md:px-12 md:py-16">
          <p className="text-center text-[11px] uppercase tracking-[0.34em] text-gold-300">{offerCopy.eyebrow}</p>
          <h2 id="offer-heading" className="mx-auto mt-4 max-w-3xl text-center font-serif text-4xl leading-tight md:text-5xl">
            {offerCopy.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-ivory/80 md:text-lg">{offerCopy.text}</p>
          <p className="mt-3 text-center text-[11px] uppercase tracking-[0.28em] text-gold-300">{shop.weddingOnly}</p>
          <ul className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {figures.map((figure) => (
              <li key={figure.label + figure.value} className="text-center">
                <p className="font-accent text-4xl md:text-5xl">
                  <CountUp
                    value={figure.value}
                    decimals={figure.decimals}
                    suffix={figure.suffix}
                    className="text-gold-gradient"
                  />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-gold-300">{figure.label}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GoldButton href={shop.phoneHref}>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Call the shop
            </GoldButton>
            <GoldButton href={whatsappUrl()} variant="outline">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp
            </GoldButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
