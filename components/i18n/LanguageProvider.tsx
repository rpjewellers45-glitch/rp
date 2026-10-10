"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionary, type Locale, type MessageKey } from "@/data/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("rp-locale");
    if (saved === "hi" || saved === "en") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "hi" ? "hi" : "en-IN";
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem("rp-locale", locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => dictionary[locale][key],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n must be used within LanguageProvider");
  return value;
}
