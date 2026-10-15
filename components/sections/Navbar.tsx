"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { navLinks, isNavGroup } from "@/data/navigation";
import { shop } from "@/data/shop";
import { LanguageToggle } from "@/components/i18n/LocaleText";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { GoldButton } from "@/components/ui/GoldButton";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [jewelsOpen, setJewelsOpen] = useState(false);
  const blockOpen = useRef(false);
  const { t } = useI18n();

  const closeMenu = () => {
    blockOpen.current = true;
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.documentElement.style.scrollBehavior = "";
    setOpen(false);
    window.setTimeout(() => {
      blockOpen.current = false;
    }, 450);
  };

  const openMenu = () => {
    if (blockOpen.current) return;
    setOpen(true);
  };

  const onNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const url = new URL(href, window.location.href);
    const samePageHash = url.pathname === window.location.pathname && url.hash;
    if (samePageHash) event.preventDefault();
    closeMenu();
    if (!samePageHash) return;
    const id = decodeURIComponent(url.hash.slice(1));
    const root = document.documentElement;
    root.style.scrollBehavior = "auto";
    document.getElementById(id)?.scrollIntoView({ block: "start" });
    root.style.scrollBehavior = "";
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const previousScroll = root.style.scrollBehavior;
    const gutter = window.innerWidth - root.clientWidth;
    root.style.scrollBehavior = "auto";
    body.style.overflow = "hidden";
    if (gutter > 0) body.style.paddingRight = `${gutter}px`;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      root.style.scrollBehavior = previousScroll;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-gold-500/80 bg-maroon-900",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:h-24 md:px-8">
        <Link href="/#home" className="flex shrink-0 items-center gap-3" aria-label={t("nav.brand")}>
          <Logo eager />
          <span className="hidden leading-none xl:block">
            <span className="type-brand block text-ivory">R.P Jewellers</span>
            <span className="type-eyebrow mt-1 block text-gold-300">& Sons</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 xl:gap-5 lg:flex" aria-label={t("nav.primary")}>
          {navLinks.map((item) =>
            isNavGroup(item) ? (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setJewelsOpen(true)}
                onMouseLeave={() => setJewelsOpen(false)}
                onFocus={() => setJewelsOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setJewelsOpen(false);
                }}
              >
                <button
                  type="button"
                  className="type-nav nav-link text-ivory/90 transition-colors duration-300 hover:text-gold-300"
                  aria-expanded={jewelsOpen}
                  aria-haspopup="true"
                >
                  {t(item.key)}
                </button>
                <div className={cn("absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3", jewelsOpen ? "visible" : "invisible")}>
                  <div className="min-w-36 border border-gold-500/80 bg-maroon-900 px-1 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="type-nav block px-4 py-3 text-ivory/90 transition-colors duration-300 hover:text-gold-300"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="type-nav nav-link text-ivory/90 transition-colors duration-300 hover:text-gold-300"
              >
                {t(item.key)}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <div className="hidden xl:block">
            <GoldButton href={shop.phoneHref}>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {t("nav.call")}
            </GoldButton>
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-11 w-11 items-center justify-center border border-gold-400/70 text-gold-300 lg:hidden",
            open && "pointer-events-none",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={openMenu}
        >
          <span className="sr-only">{t("nav.menu")}</span>
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>

      {open ? (
            <nav
              id="mobile-menu"
              aria-label={t("nav.mobile")}
              className="fixed inset-0 z-[80] flex h-[100dvh] w-screen flex-col overflow-y-auto overscroll-none bg-maroon-900 px-6 py-6 text-ivory lg:hidden"
              style={{ backgroundColor: "#3E0A12" }}
            >
              <div className="flex items-center justify-between">
                <Logo eager />
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center border border-gold-400/70 text-gold-300"
                  onClick={closeMenu}
                >
                  <span className="sr-only">{t("nav.close")}</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-10 flex flex-col">
                {navLinks.map((item) =>
                  isNavGroup(item) ? (
                    <li key={item.key} className="border-b border-gold-500/25">
                      <p className="type-menu py-4 text-ivory">{t(item.key)}</p>
                      <ul className="mb-3 border-l border-gold-500/40 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="type-menu block py-2 text-gold-300 transition-colors duration-300 hover:text-ivory"
                              onClick={(event) => onNavigate(event, child.href)}
                            >
                              {t(child.key)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.href} className="border-b border-gold-500/25">
                      <Link
                        href={item.href}
                        className="type-menu block py-4 text-ivory transition-colors duration-300 hover:text-gold-300"
                        onClick={(event) => onNavigate(event, item.href)}
                      >
                        {t(item.key)}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-auto pt-8">
                <LanguageToggle className="mb-4" />
                <GoldButton href={shop.phoneHref} className="w-full" onClick={closeMenu}>
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("nav.call")}
                </GoldButton>
                <p className="mt-4 text-center text-sm text-gold-300">{shop.phoneDisplay}</p>
              </div>
            </nav>
      ) : null}
    </>
  );
}
