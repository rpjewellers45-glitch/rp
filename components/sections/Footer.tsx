import Link from "next/link";
import { footerExplore } from "@/data/navigation";
import { shop } from "@/data/shop";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

export function Footer() {
  return (
    <footer className="bg-maroon-900 text-ivory">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 font-serif text-2xl text-ivory">{shop.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/75">{shop.tagline}</p>
        </div>
        <div>
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">Explore</h2>
          <ul className="mt-4 space-y-2">
            {footerExplore.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ivory/80 hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">Visit</h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory/80">
            {shop.address.branch}
            <br />
            {shop.address.line1}
            <br />
            {shop.address.line2}
            <br />
            {shop.address.city}, {shop.address.state}
          </p>
        </div>
        <div>
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <a href={shop.phoneHref} className="hover:text-gold-300">
                {shop.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={shop.emailHref} className="break-all hover:text-gold-300">
                {shop.email}
              </a>
            </li>
            <li>
              {shop.proprietor.name} ({shop.proprietor.knownAs}), {shop.proprietor.role}
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <OrnamentDivider tone="dark" className="mx-auto" />
        <div className="flex flex-col gap-3 py-8 text-sm text-ivory/70 md:flex-row md:items-end md:justify-between">
          <p>© {shop.name}. {shop.sinceLabel}.</p>
          <p className="max-w-xl text-xs leading-relaxed md:text-right">{shop.policyNote}</p>
        </div>
      </Container>
    </footer>
  );
}
