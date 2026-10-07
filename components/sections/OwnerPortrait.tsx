"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { shop } from "@/data/shop";
import { OrnateFrame } from "@/components/ui/OrnateFrame";
import { SafeImage } from "@/components/ui/SafeImage";

export function OwnerPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-7%", "7%"]);

  return (
    <figure>
      <OrnateFrame>
        <div ref={ref} className="relative aspect-[3/4] overflow-hidden">
          <motion.div className="absolute -inset-y-[8%] inset-x-0" style={{ y }}>
            <SafeImage
              src={shop.proprietor.image}
              alt={shop.proprietor.imageAlt}
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-top"
              fallback={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-maroon-800 to-maroon-900">
                  <span className="font-serif text-6xl text-gold-300">AK</span>
                </div>
              }
            />
          </motion.div>
        </div>
      </OrnateFrame>
      <figcaption className="mt-4 text-center font-serif text-lg text-maroon-900">
        {shop.proprietor.name} ({shop.proprietor.knownAs})
        <span className="mt-1 block text-[11px] uppercase tracking-[0.24em] text-maroon-700">{shop.proprietor.role}</span>
      </figcaption>
    </figure>
  );
}
