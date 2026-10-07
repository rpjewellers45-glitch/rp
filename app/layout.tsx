import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";
import { Navbar } from "@/components/sections/Navbar";
import { Preloader } from "@/components/sections/Preloader";
import { JsonLd } from "@/components/seo/JsonLd";
import { shop } from "@/data/shop";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
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
    "hallmark gold",
    "bridal set",
    "Bihar jeweller",
  ],
  openGraph: {
    title: "R.P Jewellers & Sons | Wedding Jewellery since 1998",
    description: shop.description,
    locale: "en_IN",
    type: "website",
    siteName: shop.name,
    images: [{ url: "/images/logo.png", alt: "R.P Jewellers & Sons logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "R.P Jewellers & Sons",
    description: shop.description,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${jost.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
        <JsonLd />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
