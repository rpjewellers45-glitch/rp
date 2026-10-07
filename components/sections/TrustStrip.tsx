import { BadgeCheck, CalendarDays, Percent, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: Array<{ icon: LucideIcon; label: string; note?: string }> = [
  { icon: BadgeCheck, label: "916 HUID Hallmark" },
  { icon: BadgeCheck, label: "750 HUID Hallmark" },
  { icon: ShieldCheck, label: "BIS Hallmark", note: "To confirm" },
  { icon: Percent, label: "7.9% Making Charges" },
  { icon: CalendarDays, label: "Since 1998" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center" {...(hidden ? { "aria-hidden": true } : {})}>
      {items.map((item) => (
        <li key={`${item.label}-${hidden ? "copy" : "main"}`} className="flex items-center gap-3 px-8 py-4">
          <item.icon className="h-4 w-4 text-gold-600" strokeWidth={1.25} aria-hidden="true" />
          <span className="whitespace-nowrap text-[12px] uppercase tracking-[0.2em] text-maroon-800">{item.label}</span>
          {item.note ? (
            <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-maroon-700/80">{item.note}</span>
          ) : null}
          <span aria-hidden="true" className="ml-6 h-1.5 w-1.5 rotate-45 border border-gold-600" />
        </li>
      ))}
    </ul>
  );
}

export function TrustStrip() {
  return (
    <section className="marquee-wrap overflow-hidden border-y border-gold-500/40 bg-cream" aria-label="Hallmark and offer">
      <div className="marquee-track flex w-max motion-safe:animate-marquee">
        <Row />
        <div className="motion-reduce:hidden">
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
