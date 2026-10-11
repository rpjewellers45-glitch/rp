import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Devanagari, Tiro_Devanagari_Hindi } from "next/font/google";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { LocaleText } from "@/components/i18n/LocaleText";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";
import { Navbar } from "@/components/sections/Navbar";
import { Preloader } from "@/components/sections/Preloader";
import { RouteShine } from "@/components/ui/RouteShine";
import { JsonLd } from "@/components/seo/JsonLd";
import { shop } from "@/data/shop";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-devanagari",
  display: "swap",
  preload: false,
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-tiro",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#3E0A12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R.P Jewellers & Sons | Wedding Jewellery since 1998, Dalsinghsarai",
    template: "%s | R.P Jewellers & Sons",
  },
  description: shop.description,
  applicationName: shop.name,
  keywords: [
    "R.P Jewellers & Sons",
    "wedding jewellery",
    "Dalsinghsarai",
    "wedding jewellery in Dalsinghsarai",
    "gold jewellery Dalsinghsarai",
    "HUID hallmark jewellery",
    "bridal jewellery",
    "traditional jewellery",
    "hallmark gold",
    "bridal set",
  ],
  openGraph: {
    title: "R.P Jewellers & Sons | Wedding Jewellery since 1998",
    description: shop.description,
    locale: "en_IN",
    type: "website",
    siteName: shop.name,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "R.P Jewellers & Sons",
    description: shop.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en-IN" className={`${cormorant.variable} ${dmSans.variable} ${devanagari.variable} ${tiro.variable}`}>
      <body className="font-sans font-normal antialiased">
        <LanguageProvider>
          <a className="skip-link" href="#main">
            <LocaleText k="skip" />
          </a>
          <RouteShine />
          <Preloader />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </LanguageProvider>
        <JsonLd />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
