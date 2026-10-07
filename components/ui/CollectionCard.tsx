import Link from "next/link";
import type { Collection } from "@/data/collections";
import { CollectionGlyph } from "@/components/ui/Motifs";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArrowUpRight } from "lucide-react";

export function CollectionCard({ collection, linked = true }: { collection: Collection; linked?: boolean }) {
  const media = (
    <div className="border border-gold-500/45 p-1.5 transition-colors duration-300 group-hover:border-gold-500">
      <div className="relative aspect-[4/5] overflow-hidden bg-maroon-900">
        {collection.image ? (
          <SafeImage
            src={collection.image}
            alt={collection.imageAlt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="zoom-img object-cover"
          />
        ) : (
          <PlaceholderArt icon={collection.icon} />
        )}
        <span
          aria-hidden="true"
          className="sweep pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
    </div>
  );

  const copy = (
    <div className="px-1 pt-4 text-center">
      <p className="text-[10px] uppercase tracking-[0.28em] text-maroon-700">{collection.group}</p>
      <h3 className="mt-2 font-serif text-[1.7rem] leading-tight text-maroon-900">{collection.name}</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-maroon-800/85">{collection.summary}</p>
      {linked ? (
        <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-maroon-800">
          View
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
    <Link href={`/collections#${collection.slug}`} className="lift group block h-full">
      {media}
      {copy}
    </Link>
  );
}
