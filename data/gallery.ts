export type GalleryRatio = "tall" | "square";

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  alt: string;
  ratio: GalleryRatio;
};

/**
 * Shop photographs, resized for the web. Originals remain in /assets.
 * Supplier sheets with another seller’s watermark were left out on purpose.
 */
export const gallery: GalleryItem[] = [
  {
    id: "bridal-crescent",
    src: "/images/gallery/bridal-01.jpg",
    title: "Crescent bridal set",
    alt: "Gold bridal necklace with a broad crescent pendant, maroon enamel, and matching jhumkas",
    ratio: "square",
  },
  {
    id: "bridal-paisley",
    src: "/images/gallery/bridal-02.jpg",
    title: "Paisley bridal set",
    alt: "Gold necklace and earrings with layered paisley work and red stones",
    ratio: "tall",
  },
  {
    id: "leaf-choker",
    src: "/images/gallery/choker-01.jpg",
    title: "Leaf choker",
    alt: "Close-fitting gold choker with a leaf pattern and jhumka earrings",
    ratio: "tall",
  },
  {
    id: "fringe-haar",
    src: "/images/gallery/bridal-03.jpg",
    title: "Fringe haar",
    alt: "Gold haar with a fine fringe and matching earrings",
    ratio: "square",
  },
  {
    id: "stone-set",
    src: "/images/gallery/bridal-04.jpg",
    title: "Stone and enamel set",
    alt: "Gold bridal necklace with red stones, maroon enamel, and a long fringe",
    ratio: "tall",
  },
  {
    id: "floral-set",
    src: "/images/gallery/floral-01.jpg",
    title: "Floral set",
    alt: "Gold necklace and earrings formed as small flowers",
    ratio: "tall",
  },
  {
    id: "coin-haar",
    src: "/images/gallery/necklace-03.jpg",
    title: "Coin haar",
    alt: "Gold coin necklace with a small pendant and matching earrings",
    ratio: "square",
  },
  {
    id: "oval-haar",
    src: "/images/gallery/necklace-01.jpg",
    title: "Oval-link haar",
    alt: "Light gold haar of textured oval links with a pendant",
    ratio: "tall",
  },
  {
    id: "tiered-set",
    src: "/images/gallery/necklace-04.jpg",
    title: "Tiered necklace",
    alt: "Gold necklace with a tiered pendant and matching earrings",
    ratio: "square",
  },
  {
    id: "linked-haar",
    src: "/images/gallery/necklace-02.jpg",
    title: "Linked haar",
    alt: "Two-row gold chain with a teardrop pendant and matching earrings",
    ratio: "tall",
  },
  {
    id: "festive-display",
    src: "/images/gallery/festive-01.jpg",
    title: "Festive display",
    alt: "Festive arrangement of gold bangles and earrings with the R.P Jewellers & Sons mark",
    ratio: "tall",
  },
];
