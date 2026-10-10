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
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  gem?: boolean;
  id?: string;
  className?: string;
}) {
  const light = tone === "light";

  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl text-left", className)}>
      <p className={cn("type-eyebrow", light ? "text-gold-600" : "text-gold-300")}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "type-section mt-4",
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
        <p
          className={cn(
            "type-body mt-5 max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-maroon-800/90" : "text-ivory/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
