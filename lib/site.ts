const productionOrigin = "https://www.rpjewelleries.in";

const configured =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production" ? productionOrigin : "http://localhost:3000");

/** Canonical origin for [rpjewelleries.in](https://www.rpjewelleries.in/). Override with NEXT_PUBLIC_SITE_URL if needed. */
export const siteUrl = configured.replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

if (process.env.NODE_ENV === "production" && siteUrl.includes("localhost")) {
  console.warn(
    "NEXT_PUBLIC_SITE_URL is unset, so canonical links, the sitemap, and structured data still point at localhost.",
  );
}
