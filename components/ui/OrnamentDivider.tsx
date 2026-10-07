"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DiamondMotif } from "@/components/ui/Motifs";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function OrnamentDivider({
  tone = "light",
  gem = false,
  className,
}: {
  tone?: "light" | "dark";
  gem?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const gold = tone === "dark" ? "text-gold-300" : "text-gold-600";
  const line =
    tone === "dark"
      ? "bg-gradient-to-r from-transparent to-gold-300"
      : "bg-gradient-to-r from-transparent to-gold-600";
  const lineRight =
    tone === "dark"
      ? "bg-gradient-to-r from-gold-300 to-transparent"
      : "bg-gradient-to-r from-gold-600 to-transparent";

  return (
    <div className={cn("mt-5 flex w-full max-w-xs items-center gap-3", className)} aria-hidden="true">
      <motion.span
        className={cn("h-px flex-1 origin-right", line)}
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease }}
      />
      <span className={cn("relative", gold)}>
        <DiamondMotif />
        {gem ? <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-900" /> : null}
      </span>
      <motion.span
        className={cn("h-px flex-1 origin-left", lineRight)}
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease }}
      />
    </div>
  );
}
