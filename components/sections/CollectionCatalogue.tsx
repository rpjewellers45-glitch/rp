"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { MessageKey } from "@/data/i18n";
import { productCategories, productsIn, type Product, type ProductCategory } from "@/data/products";
import { LocaleText } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Reveal";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

const loadModal = () => import("@/components/ui/ProductModal").then((mod) => mod.ProductModal);
const ProductModal = dynamic(loadModal, { ssr: false });

function isCategory(value: string | null): value is ProductCategory {
  return productCategories.some((item) => item === value);
}

export function CollectionCatalogue({ initialCategory = "All" }: { initialCategory?: string }) {
  const [filter, setFilter] = useState<ProductCategory>(isCategory(initialCategory) ? initialCategory : "All");
  const [active, setActive] = useState<Product | null>(null);
  const { locale, t } = useI18n();
  const items = useMemo(() => productsIn(filter), [filter]);

  return (
    <section className="bg-ivory pb-24 pt-8 md:pb-32" aria-labelledby="catalogue-heading">
      <Container>
        <h2 id="catalogue-heading" className="sr-only">
          <LocaleText k="products.title" />
        </h2>
        <div role="toolbar" aria-label={t("cat.filter")} className="flex flex-wrap justify-center gap-2">
          {productCategories.map((group) => (
            <button
              key={group}
              type="button"
              aria-pressed={filter === group}
              onClick={() => setFilter(group)}
              className={cn(
                "min-h-11 border px-4 type-eyebrow",
                filter === group
                  ? "border-maroon-800 bg-maroon-800 text-ivory"
                  : "border-gold-600/50 bg-transparent text-maroon-800 hover:border-gold-600",
              )}
            >
              {t(`cat.${group}` as MessageKey)}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="type-title mx-auto mt-14 max-w-xl text-center text-maroon-900">{t("products.empty")}</p>
        ) : (
          <div
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            onMouseEnter={() => void loadModal()}
            onFocus={() => void loadModal()}
          >
            {items.map((item, index) => (
              <FadeIn key={item.id} delay={Math.min(index, 8) * 0.05} className="h-full">
              <article id={item.id} className="lift h-full scroll-mt-32">
                <button
                  type="button"
                  className="group block w-full text-left"
                  onClick={() => setActive(item)}
                  aria-label={`${t("products.view")}: ${item.name[locale]}`}
                >
                  <div className="border border-gold-500/50 p-1.5 transition-colors duration-300 group-hover:border-gold-500">
                    <div className="relative aspect-[4/5] overflow-hidden bg-maroon-900">
                      <SafeImage
                        src={item.image}
                        alt={item.alt[locale]}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="zoom-img object-cover"
                      />
                      <CornerBrackets />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(42,7,12,0.38)_100%)]"
                      />
                      <span
                        aria-hidden="true"
                        className="sweep pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-center type-eyebrow text-maroon-700">
                    {t(`cat.${item.category}` as MessageKey)}
                  </p>
                  <h3 className="mt-2 text-center type-product text-maroon-900">{item.name[locale]}</h3>
                </button>
              </article>
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
      {active ? <ProductModal product={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
