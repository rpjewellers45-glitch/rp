import { Clock, MapPin, Navigation } from "lucide-react";
import { shop } from "@/data/shop";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mapsEmbedUrl, mapsSearchUrl } from "@/lib/links";

export function VisitUs() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          id="visit-heading"
          eyebrow="Visit us"
          title="The Dalsinghsarai branch"
          description="Come to the shop in Main Bazar. Call ahead until published hours are confirmed."
        />
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <article className="flex flex-col border border-gold-500/40 bg-ivory p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.28em] text-maroon-800">{shop.address.branch}</p>
            <h3 className="mt-3 font-serif text-3xl text-maroon-900">{shop.name}</h3>
            <p className="mt-5 flex gap-3 text-maroon-800">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <span>
                {shop.address.line1}
                <br />
                {shop.address.line2}
                <br />
                {shop.address.city}, {shop.address.state}
              </span>
            </p>
            <div className="mt-6 border-t border-gold-500/30 pt-6">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-maroon-700">
                <Clock className="h-4 w-4 text-gold-600" aria-hidden="true" />
                Working hours
              </p>
              <ul className="mt-3 space-y-2">
                {shop.hours.map((slot) => (
                  <li key={slot.day} className="flex justify-between gap-4 text-sm text-maroon-800">
                    <span>{slot.day}</span>
                    <span>{slot.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-maroon-800/80">{shop.hoursNote}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GoldButton href={mapsSearchUrl()} tone="onLight">
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                Get Directions
              </GoldButton>
              <GoldButton href={shop.phoneHref} variant="outline" tone="onLight">
                Call before you visit
              </GoldButton>
            </div>
          </article>
          <div className="min-h-[320px] border border-gold-500/40 bg-ivory p-2">
            <iframe
              title="Map showing R.P Jewellers & Sons, Main Bazar, Dalsinghsarai"
              src={mapsEmbedUrl()}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
