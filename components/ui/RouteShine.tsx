"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

export function RouteShine() {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.span
      key={pathname}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-px origin-left bg-gradient-to-r from-transparent via-gold-300 to-transparent"
      initial={{ scaleX: 0, opacity: 1 }}
      animate={{ scaleX: 1, opacity: 0 }}
      transition={{ duration: 1.05, ease, opacity: { delay: 0.45, duration: 0.5 } }}
    />
  );
}
