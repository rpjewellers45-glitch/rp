import Link from "next/link";
import { footerExplore } from "@/data/navigation";
import { shop } from "@/data/shop";
import { L, LocaleText } from "@/components/i18n/LocaleText";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

export function Footer() {
  return (
    <footer className="bg-maroon-900 text-ivory">
      <Container className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="type-brand mt-5 text-ivory">{shop.name}</p>
          <p className="mt-3 max-w-xs text-sm font-normal leading-relaxed text-ivory/70">
            <L text={shop.tagline} />
          </p>
        </div>
        <div>
          <h2 className="type-eyebrow text-gold-300">
            <LocaleText k="footer.explore" />
          </h2>
          <ul className="mt-5 space-y-3">
            {footerExplore.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-normal text-ivory/75 transition-colors duration-300 hover:text-gold-300">
                  <LocaleText k={link.key} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="type-eyebrow text-gold-300">
            <LocaleText k="footer.visit" />
          </h2>
          <p className="mt-5 text-sm font-normal leading-relaxed text-ivory/75">
            <L text={shop.address.branch} />
            <br />
            <L text={shop.address.line1} />
            <br />
            <L text={shop.address.line2} />
            <br />
            <L text={shop.address.city} />, <L text={shop.address.state} />
          </p>
        </div>
        <div>
          <h2 className="type-eyebrow text-gold-300">
            <LocaleText k="footer.contact" />
          </h2>
          <ul className="mt-5 space-y-3 text-sm font-normal text-ivory/75">
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
              {shop.proprietor.name} ({shop.proprietor.knownAs}), <L text={shop.proprietor.role} />
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <OrnamentDivider tone="dark" className="mx-auto" />
        <div className="flex flex-col gap-4 py-10 text-sm font-normal text-ivory/65 md:flex-row md:items-end md:justify-between">
          <p>
            © {shop.name}. <L text={shop.sinceLabel} />.
          </p>
          <p className="max-w-xl text-xs leading-relaxed md:text-right">
            <L text={shop.policyNote} />
          </p>
        </div>
      </Container>
    </footer>
  );
}
