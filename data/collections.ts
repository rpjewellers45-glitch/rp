import { c, type Copy } from "@/lib/copy";

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
  name: Copy;
  group: CollectionGroup;
  summary: Copy;
  /** Public image path. */
  image: string;
  imageAlt: Copy;
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
    name: c("Bridal Sets", "दुल्हन के सेट"),
    group: "Wedding",
    summary: c(
      "Necklace and earring sets chosen together for the bride, in hallmarked gold.",
      "हार और झुमके एक साथ, दुल्हन के लिए। हॉलमार्क सोना।",
    ),
    image: "/images/products/catalog/antique-haar/001.jpg",
    imageAlt: c(
      "Antique gold bridal necklace with red stones, a temple pendant, and matching earrings",
      "लाल नगीने और मंदिर वाले लॉकेट का दुल्हन हार, साथ में झुमके",
    ),
    icon: "bridal",
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: "wedding-gold",
    name: c("Wedding Gold Jewellery", "शादी का सोना"),
    group: "Wedding",
    summary: c(
      "Heavy bridal gold for the ceremony — the sets a wedding day in Bihar asks for.",
      "रस्म वाला भारी सोना — जैसा सेट बिहार की शादी में दुल्हन पहनती है।",
    ),
    image: "/images/wedding/choker-haar/001.jpg",
    imageAlt: c(
      "Gold choker haar with a fringe and maroon stones",
      "झालर और मैरून नगीनों वाला सोने का चोकर हार",
    ),
    icon: "necklace",
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: "gems",
    name: c("Gems Jewellery", "नगीने के गहने"),
    group: "Gems & Diamond",
    summary: c(
      "Gold set with coloured stones and enamel, in the bridal colours families ask for.",
      "रंगीन नगीने और मीना वाला सोना, उन रंगों में जो घर दुल्हन के लिए माँगता है।",
    ),
    image: "/images/gallery/bridal-04.jpg",
    imageAlt: c(
      "Gold bridal necklace with red stones, maroon enamel and a long fringe",
      "लाल नगीने, मैरून मीना और लंबी झालर वाला दुल्हन का हार",
    ),
    icon: "gem",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "diamond",
    name: c("Diamond Jewellery", "हीरे के गहने"),
    group: "Gems & Diamond",
    summary: c(
      "Gold rings set with white stones, chosen to sit with a bridal set.",
      "सफ़ेद पत्थर जड़ी सोने की अंगूठियाँ, दुल्हन के सेट के साथ।",
    ),
    image: "/images/products/ring-solitaire.jpg",
    imageAlt: c("Gold ring with a white centre stone, held in the shop", "दुकान में हाथ में सफ़ेद पत्थर वाली सोने की अंगूठी"),
    icon: "diamond",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "necklaces",
    name: c("Necklaces & Chokers", "हार और चोकर"),
    group: "Ornaments",
    summary: c(
      "Close-fitting chokers and longer haar, for the wedding and the days around it.",
      "गले से सटा चोकर और लंबा हार, शादी और उसके आगे-पीछे के दिनों के लिए।",
    ),
    image: "/images/wedding/long-haar/001.jpg",
    imageAlt: c("Long gold haar with a broad pendant", "चौड़े लॉकेट वाला लंबा सोने का हार"),
    icon: "necklace",
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: "jhumka",
    name: c("Jhumka & Earrings", "झुमके"),
    group: "Ornaments",
    summary: c("Jhumkas and matching earrings that finish a bridal set.", "झुमके, जो दुल्हन के सेट को पूरा करते हैं।"),
    image: "/images/products/catalog/jhumka/001.jpg",
    imageAlt: c("Pair of gold jhumkas", "सोने के झुमकों की जोड़ी"),
    icon: "earring",
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: "bangles",
    name: c("Bangles & Kangan", "चूड़ी और कंगन"),
    group: "Ornaments",
    summary: c("Bangles and kangan for the bridal stack.", "दुल्हन के हाथ के लिए चूड़ी और कंगन।"),
    image: "/images/wedding/churi/001.jpg",
    imageAlt: c("Pair of engraved gold bangles", "नक्काशी वाली सोने की चूड़ियों की जोड़ी"),
    icon: "bangle",
    featured: true,
    featuredOrder: 5,
  },
  {
    slug: "maang-tikka",
    name: c("Maang tikka", "माथे का टीका"),
    group: "Wedding",
    summary: c(
      "A gold maang tikka for the bride, worn with the wedding set.",
      "दुल्हन के लिए सोने का माथे का टीका, शादी के सेट के साथ।",
    ),
    image: "/images/products/catalog/maang-tikka/001.jpg",
    imageAlt: c("Gold maang tikka with a heart-shaped pendant", "दिल के आकार वाले लॉकेट का सोने का माथे का टीका"),
    icon: "tikka",
    featured: true,
    featuredOrder: 6,
  },
  {
    slug: "rings",
    name: c("Rings", "अंगूठियाँ"),
    group: "Ornaments",
    summary: c(
      "Gold rings from the shop, chosen alongside the bridal set.",
      "दुकान की सोने की अंगूठियाँ, दुल्हन के सेट के साथ।",
    ),
    image: "/images/products/catalog/ladies-ring/001.jpg",
    imageAlt: c("Gold ring from R.P Jewellers & Sons", "आर.पी. ज्वेलर्स एंड सन्स की सोने की अंगूठी"),
    icon: "ring",
    featured: false,
    featuredOrder: 0,
  },
];

export const featuredCollections = collections
  .filter((item) => item.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);
