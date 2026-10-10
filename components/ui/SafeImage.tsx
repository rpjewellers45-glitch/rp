"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { jewelBlur } from "@/lib/blur";

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
  const frame = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(priority);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (priority) return;
    const node = frame.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { rootMargin: "720px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <span ref={frame} className="absolute inset-0 block">
      {failed ? (
        fallback ?? <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7A1424,#3E0A12_70%)]" />
      ) : null}
      {!failed && active ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          quality={priority ? 75 : 62}
          placeholder="blur"
          blurDataURL={jewelBlur}
          className={className}
          onError={() => setFailed(true)}
        />
      ) : null}
    </span>
  );
}
