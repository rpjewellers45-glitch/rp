"use client";

import Link from "next/link";
import type { Collection, CollectionGroup } from "@/data/collections";
import type { MessageKey } from "@/data/i18n";
import { L } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { CollectionGlyph } from "@/components/ui/Motifs";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArrowUpRight } from "lucide-react";

const hrefFor = (slug: string) => {
  const map: Record<string, string> = {
    "bridal-sets": "/collections?category=Antique%20haar",
    "wedding-gold": "/wedding",
    necklaces: "/wedding",
    jhumka: "/collections?category=Jhumka",
    bangles: "/wedding",
    "maang-tikka": "/collections?category=Maang%20tikka",
    rings: "/collections?category=Ladies%20ring",
  };
  return map[slug] ?? "/collections";
};

const groupKey: Record<CollectionGroup, MessageKey> = {
  Wedding: "group.wedding",
  Anklets: "group.anklets",
  "Gems & Diamond": "group.gems",
  Ornaments: "group.ornaments",
};

export function CollectionCard({ collection, linked = true }: { collection: Collection; linked?: boolean }) {
  const { locale, t } = useI18n();
  const media = (
    <div className="border border-gold-500/45 p-1.5 transition-colors duration-300 group-hover:border-gold-500">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <SafeImage
            src={collection.image}
            alt={collection.imageAlt[locale]}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="zoom-img object-contain"
          />
          <CornerBrackets />
        <span
          aria-hidden="true"
          className="sweep pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
    </div>
  );

  const copy = (
    <div className="px-1 pt-4 text-center">
      <p className="type-eyebrow text-maroon-700">{t(groupKey[collection.group])}</p>
      <h3 className="mt-2 type-product text-maroon-900">
        <L text={collection.name} />
      </h3>
      <p className="type-small mx-auto mt-2 max-w-xs text-maroon-800/85">
        <L text={collection.summary} />
      </p>
      {linked ? (
        <span className="mt-4 inline-flex items-center gap-2 type-eyebrow text-maroon-800">
          {t("card.view")}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      ) : (
        <span className="mt-4 inline-flex items-center justify-center text-gold-600" aria-hidden="true">
          <CollectionGlyph name={collection.icon} className="h-4 w-4" />
        </span>
      )}
    </div>
  );

  if (!linked) {
    return (
      <article className="lift group h-full">
        {media}
        {copy}
      </article>
    );
  }

  return (
    <Link href={hrefFor(collection.slug)} className="lift group block h-full">
      {media}
      {copy}
    </Link>
  );
}
