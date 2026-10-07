import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  tone?: "onDark" | "onLight";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

export function GoldButton({
  children,
  href,
  variant = "solid",
  tone = "onDark",
  className,
  type = "button",
  onClick,
  ariaLabel,
}: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
    variant === "solid" &&
      "relative overflow-hidden bg-[linear-gradient(120deg,#A8842F_0%,#E6CB8A_42%,#D4AF37_68%,#A8842F_100%)] text-maroon-900 hover:brightness-105",
    variant === "outline" && tone === "onDark" && "border border-gold-400 text-gold-300 hover:bg-gold-400/10",
    variant === "outline" && tone === "onLight" && "border border-gold-600 text-maroon-900 hover:bg-gold-400/15",
    className,
  );

  const content = (
    <>
      {variant === "solid" ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent motion-safe:animate-shimmer"
        />
      ) : null}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    const native = href.startsWith("tel:") || href.startsWith("mailto:") || external;
    if (native) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
