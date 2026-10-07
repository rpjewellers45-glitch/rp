/**
 * Single source for shop facts. Import this everywhere — do not hard-code
 * the phone, address, or offer in components.
 *
 * TODO: Confirm with the owner before any public use.
 * The claim "30% less" is NOT verified and must not be shown on the site yet.
 * The claim "Brahmand certified" is NOT verified and must not be shown on the site yet.
 */

export const shop = {
  name: "R.P Jewellers & Sons",
  shortName: "R.P Jewellers",
  since: 1998,
  sinceLabel: "Since 1998",
  tagline: "Wedding jewellery for the families of Dalsinghsarai, since 1998.",
  description:
    "R.P Jewellers & Sons is a wedding jewellery shop in Dalsinghsarai, Bihar, since 1998. Hallmarked 916 and 750 HUID gold, with 7.9% making charges on wedding jewellery.",
  proprietor: {
    name: "Ashish Kumar",
    knownAs: "Gopu Ji",
    role: "Proprietor",
    image: "/images/owner.jpg",
    imageAlt: "Ashish Kumar (Gopu Ji), proprietor of R.P Jewellers & Sons, in the shop",
  },
  ambassador: {
    name: "Nandani Gupta",
    role: "Brand Ambassador",
  },
  phone: "9939575999",
  phoneDisplay: "+91 99395 75999",
  phoneHref: "tel:+919939575999",
  whatsapp: "919939575999",
  whatsappMessage:
    "Namaste, I would like to enquire about wedding jewellery at R.P Jewellers & Sons, Dalsinghsarai.",
  email: "ashishdss53@gmail.com",
  emailHref: "mailto:ashishdss53@gmail.com",
  address: {
    line1: "Sonna Patti, Mangle Sah Chowk",
    line2: "near Masjid Gali, Main Bazar",
    city: "Dalsinghsarai",
    state: "Bihar",
    branch: "Dalsinghsarai Branch",
    full: "Sonna Patti, Mangle Sah Chowk, near Masjid Gali, Main Bazar, Dalsinghsarai, Bihar",
  },
  makingCharge: 7.9,
  makingChargeLabel: "Only 7.9% making charges",
  weddingOnly: "Wedding jewellery only",
  hallmarks: ["916 HUID", "750 HUID"] as const,
  hours: [{ day: "Monday – Sunday", time: "To be confirmed" }] as const,
  hoursNote: "Shop hours are not published yet. Please call before you visit.",
  policyNote:
    "Hallmark and policy details will be confirmed with the shop and published here. Wedding jewellery is offered in 916 HUID and 750 HUID hallmark gold. BIS hallmark status is still to be confirmed.",
} as const;

export type Shop = typeof shop;
