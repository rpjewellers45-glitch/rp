"use client";

import { BadgeCheck, CalendarDays, Percent, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MessageKey } from "@/data/i18n";
import { LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";

const items: Array<{ icon: LucideIcon; label: MessageKey; note?: MessageKey }> = [
  { icon: BadgeCheck, label: "trust.916" },
  { icon: BadgeCheck, label: "trust.750" },
  { icon: ShieldCheck, label: "trust.bis", note: "trust.confirm" },
  { icon: Percent, label: "trust.making" },
  { icon: CalendarDays, label: "trust.since" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" {...(hidden ? { "aria-hidden": true } : {})}>
      {items.map((item) => (
        <li key={`${item.label}-${hidden ? "copy" : "main"}`} className="flex items-center gap-3 px-8 py-4">
          <item.icon className="h-4 w-4 text-gold-600" strokeWidth={1.25} aria-hidden="true" />
          <span className="whitespace-nowrap type-button text-maroon-800">
            <LocaleText k={item.label} />
          </span>
          {item.note ? (
            <span className="whitespace-nowrap type-eyebrow text-maroon-700/80">
              <LocaleText k={item.note} />
            </span>
          ) : null}
          <span aria-hidden="true" className="ml-6 h-1.5 w-1.5 rotate-45 border border-gold-600" />
        </li>
      ))}
    </ul>
  );
}

export function TrustStrip() {
  const { t } = useI18n();
  return (
    <section className="marquee-wrap overflow-hidden border-y border-gold-500/40 bg-cream" aria-label={t("trust.label")}>
      <div className="marquee-track flex w-max animate-marquee">
        <Row />
        <div className="motion-reduce:hidden">
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
