import type { ReactNode } from "react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { cn } from "@/lib/utils";

export function OrnateFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -right-3 left-4 top-6 rounded-t-[11rem] border border-gold-500/50"
      />
      <div className="relative overflow-hidden rounded-t-[11rem] rounded-b-md border border-gold-400/90 bg-maroon-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 z-10 rounded-t-[10rem] border border-gold-300/30"
        />
        <CornerBrackets className="border-gold-300" />
        {children}
      </div>
    </div>
  );
}
