import type { ReactNode } from "react";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  gem = false,
  id,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  gem?: boolean;
  id?: string;
  className?: string;
}) {
  const light = tone === "light";

  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left", className)}>
      <p className={cn("text-[11px] font-medium uppercase tracking-[0.34em]", light ? "text-maroon-700" : "text-gold-300")}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-3 font-serif text-[2.35rem] leading-[1.12] sm:text-5xl",
          light ? "text-maroon-900" : "text-ivory",
        )}
      >
        {title}
      </h2>
      <OrnamentDivider
        tone={tone}
        gem={gem}
        className={align === "center" ? "mx-auto" : ""}
      />
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", light ? "text-maroon-800/90" : "text-ivory/80")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
