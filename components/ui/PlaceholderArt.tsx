import type { CollectionIcon } from "@/data/collections";
import { CollectionGlyph } from "@/components/ui/Motifs";
import { Pattern } from "@/components/ui/Pattern";

export function PlaceholderArt({ icon }: { icon: CollectionIcon }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-maroon-800 via-[#4A0C16] to-maroon-900 text-gold-300">
      <Pattern />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/55">
        <CollectionGlyph name={icon} />
      </div>
      <p className="relative mt-4 px-6 text-center type-eyebrow">Photograph to follow</p>
    </div>
  );
}
