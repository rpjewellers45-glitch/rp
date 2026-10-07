"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { shop } from "@/data/shop";
import { GoldButton } from "@/components/ui/GoldButton";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "border-b border-gold-500/80 bg-maroon-900/92 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:h-24 md:px-8">
        <Link href="/#home" className="flex shrink-0 items-center gap-3" aria-label="R.P Jewellers & Sons, home">
          <Logo priority />
          <span className="hidden leading-none xl:block">
            <span className="block font-serif text-[1.7rem] text-ivory">R.P Jewellers</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-gold-300">& Sons</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.18em] text-ivory/90 transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <GoldButton href={shop.phoneHref}>
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call Now
          </GoldButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-gold-400/70 text-gold-300 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[60] bg-maroon-900/55 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              className="fixed inset-y-0 right-0 z-[61] flex w-[min(100%,22rem)] flex-col bg-maroon-900 px-6 py-6 text-ivory lg:hidden"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center border border-gold-400/70 text-gold-300"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-10 flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-gold-500/25">
                    <Link
                      href={link.href}
                      className="block py-4 font-serif text-3xl text-ivory"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <GoldButton href={shop.phoneHref} className="w-full" onClick={() => setOpen(false)}>
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  Call Now
                </GoldButton>
                <p className="mt-4 text-center text-sm text-gold-300">{shop.phoneDisplay}</p>
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
