import { shop } from "@/data/shop";

export function whatsappUrl(message: string = shop.whatsappMessage) {
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsSearchUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address.full)}`;
}

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(shop.address.full)}&hl=en&z=16&output=embed`;
}
