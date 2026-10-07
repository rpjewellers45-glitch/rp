import type { Feature } from "@/data/features";
import { BadgeCheck, Crown, Gem, Landmark, Percent, Scale, type LucideIcon } from "lucide-react";

const icons: Record<Feature["icon"], LucideIcon> = {
  hallmark: BadgeCheck,
  percent: Percent,
  wedding: Crown,
  years: Landmark,
  gems: Gem,
  pricing: Scale,
};

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = icons[feature.icon];

  return (
    <article className="lift h-full border border-gold-500/35 bg-ivory px-6 py-7">
      <div className="flex h-12 w-12 items-center justify-center border border-gold-500/50 text-gold-600">
        <Icon className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-serif text-2xl text-maroon-900">{feature.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-maroon-800/90">{feature.text}</p>
    </article>
  );
}
