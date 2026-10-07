"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

export function SafeImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallback?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <>
        {fallback ?? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7A1424,#3E0A12_70%)]" />
        )}
      </>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
