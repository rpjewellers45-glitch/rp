export type CollectionIcon =
  | "necklace"
  | "payal"
  | "gem"
  | "diamond"
  | "bridal"
  | "earring"
  | "bangle"
  | "tikka"
  | "ring";

export type CollectionGroup = "Wedding" | "Anklets" | "Gems & Diamond" | "Ornaments";

export type Collection = {
  slug: string;
  name: string;
  group: CollectionGroup;
  summary: string;
  /** Public image path. Null means a designed placeholder until a photograph is added. */
  image: string | null;
  imageAlt: string;
  icon: CollectionIcon;
  featured: boolean;
  featuredOrder: number;
};

export const collectionGroups: Array<CollectionGroup | "All"> = [
  "All",
  "Wedding",
  "Anklets",
  "Gems & Diamond",
  "Ornaments",
];

export const collections: Collection[] = [
  {
    slug: "bridal-sets",
    name: "Bridal Sets",
    group: "Wedding",
    summary: "Necklace and earring sets chosen together for the bride, in hallmarked gold.",
    image: "/images/gallery/bridal-02.jpg",
    imageAlt: "Gold bridal necklace and earrings with layered paisley motifs and red stones",
    icon: "bridal",
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: "cb-payel",
    name: "CB Payel",
    group: "Anklets",
    summary: "Traditional CB payal for the bridal walk. A shop photograph will be added here.",
    // TODO: Replace with a real CB Payel photograph from the shop.
    image: null,
    imageAlt: "",
    icon: "payal",
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: "wedding-gold",
    name: "Wedding Gold Jewellery",
    group: "Wedding",
    summary: "Heavy bridal gold for the ceremony — the sets a wedding day in Bihar asks for.",
    image: "/images/gallery/bridal-01.jpg",
    imageAlt: "Gold bridal necklace with a crescent pendant, maroon enamel and matching jhumkas",
    icon: "necklace",
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: "sukh-payel",
    name: "Sukh Payel",
    group: "Anklets",
    summary: "Sukh payal anklets, kept with the rest of the wedding ornaments.",
    // TODO: Replace with a real Sukh Payel photograph from the shop.
    image: null,
    imageAlt: "",
    icon: "payal",
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: "gems",
    name: "Gems Jewellery",
    group: "Gems & Diamond",
    summary: "Gold set with coloured stones and enamel, in the bridal colours families ask for.",
    image: "/images/gallery/bridal-04.jpg",
    imageAlt: "Gold bridal necklace with red stones, maroon enamel and a long fringe",
    icon: "gem",
    featured: true,
    featuredOrder: 5,
  },
  {
    slug: "diamond",
    name: "Diamond Jewellery",
    group: "Gems & Diamond",
    summary: "Diamond pieces for the wedding trousseau. Studio photographs will be added.",
    // TODO: Replace with real diamond jewellery photographs from the shop.
    image: null,
    imageAlt: "",
    icon: "diamond",
    featured: true,
    featuredOrder: 6,
  },
  {
    slug: "necklaces",
    name: "Necklaces & Chokers",
    group: "Ornaments",
    summary: "Close-fitting chokers and longer haar, for the wedding and the days around it.",
    image: "/images/gallery/choker-01.jpg",
    imageAlt: "Gold leaf-pattern choker with matching jhumka earrings",
    icon: "necklace",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "jhumka",
    name: "Jhumka & Earrings",
    group: "Ornaments",
    summary: "Jhumkas and matching earrings that finish a bridal set.",
    image: "/images/gallery/floral-01.jpg",
    imageAlt: "Gold floral necklace and earring set",
    icon: "earring",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "bangles",
    name: "Bangles & Kangan",
    group: "Ornaments",
    summary: "Bangles and kangan for the bridal stack. A photograph will be added from the shop.",
    // TODO: Replace with real bangle and kangan photographs.
    image: null,
    imageAlt: "",
    icon: "bangle",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "maang-tikka",
    name: "Maang Tikka",
    group: "Ornaments",
    summary: "Maang tikka to sit with the bridal set. A photograph will be added.",
    // TODO: Replace with a real maang tikka photograph.
    image: null,
    imageAlt: "",
    icon: "tikka",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "rings",
    name: "Rings",
    group: "Ornaments",
    summary: "Rings chosen alongside the bridal set. A photograph will be added.",
    // TODO: Replace with real ring photographs.
    image: null,
    imageAlt: "",
    icon: "ring",
    featured: false,
    featuredOrder: 0,
  },
];

export const featuredCollections = collections
  .filter((item) => item.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);
