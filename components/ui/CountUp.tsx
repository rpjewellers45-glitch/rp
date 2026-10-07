"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) setDisplay(value);
  }, [reduce, value]);

  useEffect(() => {
    if (!inView || reduce) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1300;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  const formatted = display.toFixed(decimals);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
