import type { CollectionIcon } from "@/data/collections";
import { cn } from "@/lib/utils";
import { Crown, Diamond, Gem } from "lucide-react";

type IconProps = { className?: string };

export function DiamondMotif({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={cn("h-2.5 w-2.5", className)} aria-hidden="true">
      <path d="M8 1.2 L14.8 8 L8 14.8 L1.2 8 Z" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function PayalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M8 18c7 9 25 9 32 0" />
      <path d="M14 20c.4 6 1.2 10 1.4 14M24 21v13M34 20c-.4 6-1.2 10-1.4 14" />
      <circle cx="15.4" cy="36" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24" cy="36" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="32.6" cy="36" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function JhumkaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M24 6v6" />
      <circle cx="24" cy="15" r="3" />
      <path d="M16 20c2 2 14 2 16 0" />
      <path d="M17 21c1 10 3 16 7 18 4-2 6-8 7-18" />
      <path d="M20 38h8" />
    </svg>
  );
}

export function BangleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <ellipse cx="20" cy="24" rx="10" ry="13" />
      <ellipse cx="28" cy="24" rx="10" ry="13" />
    </svg>
  );
}

export function TikkaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M10 10h28" />
      <path d="M24 10v10" />
      <path d="M24 20l7 6-7 12-7-12z" />
      <circle cx="24" cy="30" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="24" cy="28" r="10" />
      <path d="M20 18l4-8 4 8" />
      <circle cx="24" cy="16" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NecklaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M8 14c6 6 26 6 32 0" />
      <path d="M14 18c3 10 5 16 10 20 5-4 7-10 10-20" />
      <circle cx="24" cy="38" r="2.2" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.35-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.13-.28.28-.12.54.16.26.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.18 1.35.27.13.43.11.59-.07.16-.17.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.44.2.51.31.06.11.06.65-.18 1.33z" />
    </svg>
  );
}

export function Mandala({ className }: IconProps) {
  const spokes = Array.from({ length: 12 }, (_, index) => {
    const angle = (index * Math.PI) / 6;
    return {
      x: 100 + Math.cos(angle) * 90,
      y: 100 + Math.sin(angle) * 90,
    };
  });

  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="100" cy="100" r="96" strokeWidth="0.4" />
      <circle cx="100" cy="100" r="74" strokeWidth="0.35" />
      <circle cx="100" cy="100" r="50" strokeWidth="0.35" />
      <circle cx="100" cy="100" r="24" strokeWidth="0.4" />
      {spokes.map((spoke) => (
        <line key={`${spoke.x}-${spoke.y}`} x1="100" y1="100" x2={spoke.x} y2={spoke.y} strokeWidth="0.3" />
      ))}
      <path d="M100 46l6 12 12 6-12 6-6 12-6-12-12-6 12-6z" strokeWidth="0.45" />
      <circle cx="100" cy="100" r="3.5" className="fill-emerald-900 stroke-none" />
    </svg>
  );
}

export function CollectionGlyph({ name, className }: { name: CollectionIcon; className?: string }) {
  const cls = cn("h-7 w-7", className);
  switch (name) {
    case "payal":
      return <PayalIcon className={cls} />;
    case "gem":
      return <Gem className={cls} strokeWidth={1.25} />;
    case "diamond":
      return <Diamond className={cls} strokeWidth={1.25} />;
    case "bridal":
      return <Crown className={cls} strokeWidth={1.25} />;
    case "earring":
      return <JhumkaIcon className={cls} />;
    case "bangle":
      return <BangleIcon className={cls} />;
    case "tikka":
      return <TikkaIcon className={cls} />;
    case "ring":
      return <RingIcon className={cls} />;
    default:
      return <NecklaceIcon className={cls} />;
  }
}
