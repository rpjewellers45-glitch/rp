"use client";

import type { MessageKey } from "@/data/i18n";
import type { Copy } from "@/lib/copy";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function LocaleText({ k }: { k: MessageKey }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}

export function L({ text }: { text: Copy }) {
  const { locale } = useI18n();
  return <>{text[locale]}</>;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  return (
    <div className={`inline-flex border border-gold-400/70 ${className}`} role="group" aria-label={t("lang.label")}>
      <button
        type="button"
        aria-pressed={locale === "en"}
        className={`min-h-11 px-3 type-eyebrow ${locale === "en" ? "bg-gold-400 text-maroon-900" : "text-gold-300"}`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={locale === "hi"}
        className={`type-eyebrow min-h-11 px-3 normal-case ${locale === "hi" ? "bg-gold-400 text-maroon-900" : "text-gold-300"}`}
        onClick={() => setLocale("hi")}
      >
        हिंदी
      </button>
    </div>
  );
}
