/**
 * SAMPLE CONTENT — replace these three reviews with real customer words
 * before the site goes live. They exist only so the carousel has a layout.
 * Do not present them as verified testimonials in advertising.
 */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote:
      "We came for a bridal set and were given time. The hallmark and the making charge were explained before we chose, which is what a wedding purchase needs.",
    author: "A mother",
    detail: "Sample review · Dalsinghsarai",
  },
  {
    id: "sample-2",
    quote:
      "It helped that the shop keeps to wedding jewellery. We compared sets without being moved on to things we had not come for, and the bill was easy to read.",
    author: "A groom’s family",
    detail: "Sample review · Dalsinghsarai",
  },
  {
    id: "sample-3",
    quote:
      "The necklace and the payal were chosen as one set. It felt like a shop that still knows what a wedding in this town asks a bride to wear.",
    author: "A bride’s sister",
    detail: "Sample review · Dalsinghsarai",
  },
];
