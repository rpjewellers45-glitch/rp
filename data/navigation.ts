import type { MessageKey } from "@/data/i18n";

export const navLinks: Array<{ href: string; key: MessageKey }> = [
  { href: "/#home", key: "nav.home" },
  { href: "/wedding", key: "nav.wedding" },
  { href: "/collections", key: "nav.products" },
  { href: "/#guide", key: "nav.guide" },
  { href: "/about", key: "nav.about" },
  { href: "/#visit", key: "nav.visit" },
  { href: "/#contact", key: "nav.contact" },
];

export const footerExplore: Array<{ href: string; key: MessageKey }> = [
  { href: "/wedding", key: "nav.wedding" },
  { href: "/collections", key: "nav.products" },
  { href: "/#guide", key: "nav.guide" },
  { href: "/about", key: "nav.about" },
  { href: "/#faq", key: "faq.eyebrow" },
  { href: "/#gallery", key: "nav.gallery" },
  { href: "/#visit", key: "nav.visit" },
  { href: "/#contact", key: "nav.contact" },
];
