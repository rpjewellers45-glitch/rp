import type { MessageKey } from "@/data/i18n";

export type NavLink = { href: string; key: MessageKey };
export type NavGroup = { key: MessageKey; children: NavLink[] };
export type NavEntry = NavLink | NavGroup;

export function isNavGroup(item: NavEntry): item is NavGroup {
  return "children" in item;
}

export const navLinks: NavEntry[] = [
  { href: "/#home", key: "nav.home" },
  { key: "nav.rpjewels", children: [{ href: "/wedding", key: "nav.wedding" }] },
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
