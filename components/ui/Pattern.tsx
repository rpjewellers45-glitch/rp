import { cn } from "@/lib/utils";

export function Pattern({ className, drift = false }: { className?: string; drift?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 opacity-[0.07]", drift && "animate-jali", className)}
      style={{ backgroundImage: "url(/images/jali.svg)", backgroundSize: "190px 190px" }}
    />
  );
}
