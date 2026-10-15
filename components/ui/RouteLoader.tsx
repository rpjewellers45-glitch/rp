"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PageLoader } from "@/components/ui/PageLoader";

function destination(href: string) {
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  return `${url.pathname}${url.search}`;
}

export function RouteLoader() {
  const pathname = usePathname();
  const [pending, setPending] = useState<string | null>(null);

  useEffect(() => {
    if (!pending) return;
    if (`${window.location.pathname}${window.location.search}` === pending) {
      setPending(null);
      return;
    }
    const watch = window.setInterval(() => {
      if (`${window.location.pathname}${window.location.search}` === pending) setPending(null);
    }, 80);
    const giveUp = window.setTimeout(() => setPending(null), 20000);
    return () => {
      window.clearInterval(watch);
      window.clearTimeout(giveUp);
    };
  }, [pending, pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const next = destination(href);
      if (!next) return;
      const here = `${window.location.pathname}${window.location.search}`;
      if (next === here) return;
      setPending(next);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!pending) return null;
  return <PageLoader />;
}
