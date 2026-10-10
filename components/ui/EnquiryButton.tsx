"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { GoldButton } from "@/components/ui/GoldButton";
import { whatsappUrl } from "@/lib/links";

export function EnquiryButton({
  children,
  variant = "outline",
  tone = "onDark",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  tone?: "onDark" | "onLight";
}) {
  const { t } = useI18n();
  return (
    <GoldButton href={whatsappUrl(t("wa.enquire"))} variant={variant} tone={tone}>
      {children}
    </GoldButton>
  );
}
