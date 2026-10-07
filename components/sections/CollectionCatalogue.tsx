"use client";

import { useEffect, useState } from "react";
import { collectionGroups, collections, type CollectionGroup } from "@/data/collections";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function CollectionCatalogue() {
  const [filter, setFilter] = useState<(typeof collectionGroups)[number]>("All");

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => window.clearTimeout(timer);
  }, []);

  const items =
    filter === "All" ? collections : collections.filter((item) => item.group === (filter as CollectionGroup));

  return (
    <section className="bg-ivory py-16 md:py-24" aria-labelledby="catalogue-heading">
      <Container>
        <h2 id="catalogue-heading" className="sr-only">
          All collections
        </h2>
        <div role="toolbar" aria-label="Filter collections" className="flex flex-wrap justify-center gap-2">
          {collectionGroups.map((group) => (
            <button
              key={group}
              type="button"
              aria-pressed={filter === group}
              onClick={() => setFilter(group)}
              className={cn(
                "min-h-11 border px-4 text-[11px] uppercase tracking-[0.2em]",
                filter === group
                  ? "border-maroon-800 bg-maroon-800 text-ivory"
                  : "border-gold-600/50 bg-transparent text-maroon-800 hover:border-gold-600",
              )}
            >
              {group}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.slug} id={item.slug} className="scroll-mt-32">
              <CollectionCard collection={item} linked={false} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
