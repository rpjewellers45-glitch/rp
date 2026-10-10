import { c, type Copy } from "@/lib/copy";

export type GalleryRatio = "tall" | "square";

export type GalleryItem = {
  id: string;
  src: string;
  title: Copy;
  alt: Copy;
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
    title: c("Crescent bridal set", "चाँद वाला दुल्हन सेट"),
    alt: c(
      "Gold bridal necklace with a broad crescent pendant, maroon enamel, and matching jhumkas",
      "चौड़ा चाँद वाला लॉकेट, मैरून मीना और झुमकों वाला दुल्हन का हार",
    ),
    ratio: "square",
  },
  {
    id: "bridal-paisley",
    src: "/images/gallery/bridal-02.jpg",
    title: c("Paisley bridal set", "अमरी वाला दुल्हन सेट"),
    alt: c(
      "Gold necklace and earrings with layered paisley work and red stones",
      "अमरी के काम और लाल नगीनों वाला सोने का हार और झुमके",
    ),
    ratio: "tall",
  },
  {
    id: "leaf-choker",
    src: "/images/gallery/choker-01.jpg",
    title: c("Leaf choker", "पत्ती का चोकर"),
    alt: c(
      "Close-fitting gold choker with a leaf pattern and jhumka earrings",
      "पत्ती के पैटर्न और झुमकों वाला गले से सटा सोने का चोकर",
    ),
    ratio: "tall",
  },
  {
    id: "fringe-haar",
    src: "/images/gallery/bridal-03.jpg",
    title: c("Fringe haar", "झालरदार हार"),
    alt: c("Gold haar with a fine fringe and matching earrings", "बारीक झालर और मिलते झुमकों वाला सोने का हार"),
    ratio: "square",
  },
  {
    id: "stone-set",
    src: "/images/gallery/bridal-04.jpg",
    title: c("Stone and enamel set", "मीना वाला सेट"),
    alt: c(
      "Gold bridal necklace with red stones, maroon enamel, and a long fringe",
      "लाल नगीने, मैरून मीना और लंबी झालर वाला दुल्हन का हार",
    ),
    ratio: "tall",
  },
  {
    id: "floral-set",
    src: "/images/gallery/floral-01.jpg",
    title: c("Floral set", "फूलों वाला सेट"),
    alt: c("Gold necklace and earrings formed as small flowers", "छोटे फूलों के आकार का सोने का हार और झुमके"),
    ratio: "tall",
  },
  {
    id: "coin-haar",
    src: "/images/gallery/necklace-03.jpg",
    title: c("Coin haar", "सिक्कों का हार"),
    alt: c("Gold coin necklace with a small pendant and matching earrings", "सिक्कों का सोने का हार, छोटे लॉकेट और झुमके साथ"),
    ratio: "square",
  },
  {
    id: "oval-haar",
    src: "/images/gallery/necklace-01.jpg",
    title: c("Oval-link haar", "गोल कड़ियों का हार"),
    alt: c("Light gold haar of textured oval links with a pendant", "हल्का सोने का हार, गोल कड़ियाँ और एक लॉकेट"),
    ratio: "tall",
  },
  {
    id: "tiered-set",
    src: "/images/gallery/necklace-04.jpg",
    title: c("Tiered necklace", "कई लाइन का हार"),
    alt: c("Gold necklace with a tiered pendant and matching earrings", "कई लाइन वाला सोने का हार, लॉकेट और झुमके"),
    ratio: "square",
  },
  {
    id: "linked-haar",
    src: "/images/gallery/necklace-02.jpg",
    title: c("Linked haar", "दोहरी लाइन का हार"),
    alt: c("Two-row gold chain with a teardrop pendant and matching earrings", "दो लाइन की सोने की चेन, बूँद जैसा लॉकेट और झुमके"),
    ratio: "tall",
  },
  {
    id: "festive-display",
    src: "/images/gallery/festive-01.jpg",
    title: c("Festive display", "चूड़ी और झुमके"),
    alt: c(
      "Festive arrangement of gold bangles and earrings with the R.P Jewellers & Sons mark",
      "दुकान के नाम के साथ सोने की चूड़ियाँ और झुमके",
    ),
    ratio: "tall",
  },
];
