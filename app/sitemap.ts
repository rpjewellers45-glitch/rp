import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-15");
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/wedding"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/collections"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
