import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
  eager = false,
  size = "nav",
}: {
  className?: string;
  priority?: boolean;
  eager?: boolean;
  size?: "nav" | "splash";
}) {
  return (
    <span
      className={cn(
        "relative block shrink-0",
        size === "splash" ? "h-28 w-28 md:h-32 md:w-32" : "h-16 w-[4.4rem] md:h-20 md:w-[5.4rem]",
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="R.P Jewellers & Sons, since 1998"
        fill
        sizes={size === "splash" ? "128px" : "88px"}
        priority={priority}
        loading={priority ? undefined : eager ? "eager" : "lazy"}
        className="object-contain object-left"
      />
    </span>
  );
}
