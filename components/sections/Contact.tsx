"use client";

import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { shop } from "@/data/shop";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";
import { Pattern } from "@/components/ui/Pattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/Motifs";
import { whatsappUrl } from "@/lib/links";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-maroon-800 py-24 text-ivory md:py-32">
      <Pattern drift />
      <Container className="relative max-w-3xl">
        <FadeIn>
        <SectionHeading
          id="contact-heading"
          tone="dark"
          eyebrow={<LocaleText k="contact.eyebrow" />}
          title={<LocaleText k="contact.title" />}
          description={<LocaleText k="contact.description" />}
        />
        </FadeIn>
        <ul className="mx-auto mt-10 max-w-lg space-y-5">
          <li>
            <a href={shop.phoneHref} className="group flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
              <span>
                <span className="block type-eyebrow text-gold-300">
                  <LocaleText k="contact.phone" />
                </span>
                <span className="mt-1 block text-lg text-ivory group-hover:text-gold-300">{shop.phoneDisplay}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={shop.emailHref} className="group flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
              <span>
                <span className="block type-eyebrow text-gold-300">
                  <LocaleText k="contact.email" />
                </span>
                <span className="mt-1 block break-all text-lg text-ivory group-hover:text-gold-300">{shop.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={shop.instagramHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
              <Instagram className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
              <span>
                <span className="block type-eyebrow text-gold-300">
                  <LocaleText k="contact.instagram" />
                </span>
                <span className="mt-1 block text-lg text-ivory group-hover:text-gold-300">{shop.instagram}</span>
              </span>
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
            <span>
              <span className="block type-eyebrow text-gold-300">
                <LocaleText k="contact.shop" />
              </span>
              <span className="mt-1 block text-ivory/90">
                <L text={shop.address.line1} />, <L text={shop.address.line2} />, <L text={shop.address.city} />,{" "}
                <L text={shop.address.state} />
              </span>
            </span>
          </li>
        </ul>
        <div className="mt-8 flex justify-center">
          <GoldButton href={whatsappUrl(t("wa.enquire"))}>
            <WhatsAppIcon className="h-4 w-4" />
            <LocaleText k="contact.whatsapp" />
          </GoldButton>
        </div>
      </Container>
    </section>
  );
}
