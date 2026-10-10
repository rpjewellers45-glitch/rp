import type { Feature } from "@/data/features";
import { L } from "@/components/i18n/LocaleText";
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
    <article className="lift h-full border border-gold-500/35 bg-ivory px-6 py-7 transition-colors duration-500 hover:border-gold-500">
      <div className="flex h-12 w-12 items-center justify-center border border-gold-500/50 text-gold-600">
        <Icon className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
      </div>
      <h3 className="mt-5 type-product text-maroon-900">
        <L text={feature.title} />
      </h3>
      <p className="type-small mt-3 text-maroon-800/90">
        <L text={feature.text} />
      </p>
    </article>
  );
}
