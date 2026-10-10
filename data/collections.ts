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
    image: "/images/gallery/bridal-02.jpg",
    imageAlt: c(
      "Gold bridal necklace and earrings with layered paisley motifs and red stones",
      "अमरी के काम और लाल नगीने वाला दुल्हन का हार और झुमके",
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
    image: "/images/gallery/bridal-01.jpg",
    imageAlt: c(
      "Gold bridal necklace with a crescent pendant, maroon enamel and matching jhumkas",
      "चाँद वाले लॉकेट, मैरून मीना और साथ के झुमकों वाला दुल्हन का हार",
    ),
    icon: "necklace",
    featured: true,
    featuredOrder: 3,
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
    featured: true,
    featuredOrder: 5,
  },
  {
    slug: "diamond",
    name: c("Diamond Jewellery", "हीरे के गहने"),
    group: "Gems & Diamond",
    summary: c(
      "Gold rings set with white stones. The shop confirms the stone and the HUID mark at the counter.",
      "सफ़ेद पत्थर जड़ी सोने की अंगूठियाँ। पत्थर कौन सा है और हॉलमार्क नंबर क्या है, दुकान बताएगी।",
    ),
    image: "/images/products/ring-solitaire.jpg",
    imageAlt: c("Gold ring with a white centre stone, held in the shop", "दुकान में हाथ में सफ़ेद पत्थर वाली सोने की अंगूठी"),
    icon: "diamond",
    featured: true,
    featuredOrder: 6,
  },
  {
    slug: "necklaces",
    name: c("Necklaces & Chokers", "हार और चोकर"),
    group: "Ornaments",
    summary: c(
      "Close-fitting chokers and longer haar, for the wedding and the days around it.",
      "गले से सटा चोकर और लंबा हार, शादी और उसके आगे-पीछे के दिनों के लिए।",
    ),
    image: "/images/gallery/choker-01.jpg",
    imageAlt: c("Gold leaf-pattern choker with matching jhumka earrings", "पत्ती के काम वाला सोने का चोकर, साथ में झुमके"),
    icon: "necklace",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "jhumka",
    name: c("Jhumka & Earrings", "झुमके"),
    group: "Ornaments",
    summary: c("Jhumkas and matching earrings that finish a bridal set.", "झुमके, जो दुल्हन के सेट को पूरा करते हैं।"),
    image: "/images/gallery/floral-01.jpg",
    imageAlt: c("Gold floral necklace and earring set", "फूलों वाला सोने का हार और झुमके"),
    icon: "earring",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "bangles",
    name: c("Bangles & Kangan", "चूड़ी और कंगन"),
    group: "Ornaments",
    summary: c("Bangles and kangan for the bridal stack.", "दुल्हन के हाथ के लिए चूड़ी और कंगन।"),
    image: "/images/gallery/festive-01.jpg",
    imageAlt: c("Festive arrangement of gold bangles and earrings", "सोने की चूड़ियाँ और झुमके, सजाकर रखे हुए"),
    icon: "bangle",
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "rings",
    name: c("Rings", "अंगूठियाँ"),
    group: "Ornaments",
    summary: c(
      "Gold rings from the shop box, chosen alongside the bridal set.",
      "दुकान के डिब्बे की सोने की अंगूठियाँ, दुल्हन के सेट के साथ।",
    ),
    image: "/images/products/ring-box.jpg",
    imageAlt: c("Open box of gold rings with the R.P Jewellers & Sons mark", "खुला डिब्बा, सोने की अंगूठियाँ, दुकान के नाम के साथ"),
    icon: "ring",
    featured: false,
    featuredOrder: 0,
  },
];

export const featuredCollections = collections
  .filter((item) => item.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);
