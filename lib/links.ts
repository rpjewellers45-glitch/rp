import { shop } from "@/data/shop";

export function whatsappUrl(message: string = shop.whatsappMessage) {
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsSearchUrl() {
  const { latitude, longitude } = shop.geo;
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

export function mapsEmbedUrl() {
  const { latitude, longitude } = shop.geo;
  return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=17&output=embed`;
}
