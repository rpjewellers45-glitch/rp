import { c, type Copy } from "@/lib/copy";

export const productCategories = [
  "All",
  "Bridal",
  "Diamond",
  "Gems",
  "Earrings",
  "Necklaces",
  "Bangles",
  "Rings",
] as const;

export type ProductCategory = (typeof productCategories)[number];
export type ProductGroup = Exclude<ProductCategory, "All">;

export type Product = {
  id: string;
  name: Copy;
  category: ProductGroup;
  description: Copy;
  image: string;
  alt: Copy;
};

/**
 * Every photograph the shop has supplied, with a clear file name.
 * Weights and stone types change at the counter — the copy does not quote a rate or a gram weight.
 */
export const products: Product[] = [
  {
    id: "crescent-bridal-set",
    name: c("Crescent bridal set", "चाँद वाला दुल्हन सेट"),
    category: "Bridal",
    description: c(
      "A broad gold bridal necklace with a crescent pendant, maroon enamel, and matching jhumkas. Made for the wedding day in Dalsinghsarai.",
      "चौड़ा सोने का हार, चाँद वाला लॉकेट, मैरून मीना और साथ के झुमके। दलसिंहसराय की शादी के लिए।",
    ),
    image: "/images/gallery/bridal-01.jpg",
    alt: c(
      "Gold bridal necklace with a crescent pendant, maroon enamel, and matching jhumkas",
      "चाँद वाला लॉकेट, मैरून मीना और झुमकों वाला दुल्हन का सोने का हार",
    ),
  },
  {
    id: "paisley-bridal-set",
    name: c("Paisley bridal set", "अमरी वाला दुल्हन सेट"),
    category: "Bridal",
    description: c(
      "Layered paisley work with red stones, necklace and earrings kept as one bridal set.",
      "अमरी का काम और लाल नगीने। हार और झुमके एक ही सेट में।",
    ),
    image: "/images/gallery/bridal-02.jpg",
    alt: c(
      "Gold necklace and earrings with layered paisley work and red stones",
      "अमरी के काम और लाल नगीनों वाला सोने का हार और झुमके",
    ),
  },
  {
    id: "fringe-haar",
    name: c("Fringe haar", "झालरदार हार"),
    category: "Bridal",
    description: c(
      "A gold haar with a fine fringe and matching earrings, photographed in the shop.",
      "झालरदार सोने का हार, साथ में झुमके। तस्वीर दुकान की है।",
    ),
    image: "/images/gallery/bridal-03.jpg",
    alt: c("Gold haar with a fine fringe and matching earrings", "बारीक झालर और मिलते झुमकों वाला सोने का हार"),
  },
  {
    id: "stone-enamel-set",
    name: c("Stone and enamel set", "मीना वाला सेट"),
    category: "Gems",
    description: c(
      "Gold bridal necklace with red stones, maroon enamel, and a long fringe. Coloured-stone jewellery for the wedding trousseau.",
      "लाल नगीने, मैरून मीना और लंबी झालर वाला दुल्हन का हार।",
    ),
    image: "/images/gallery/bridal-04.jpg",
    alt: c(
      "Gold bridal necklace with red stones, maroon enamel, and a long fringe",
      "लाल नगीने, मैरून मीना और लंबी झालर वाला दुल्हन का हार",
    ),
  },
  {
    id: "floral-set",
    name: c("Floral necklace and earrings", "फूलों वाला हार और झुमके"),
    category: "Earrings",
    description: c(
      "Small gold flowers form the necklace and the matching earrings. A lighter set for the ceremonies around the wedding.",
      "छोटे सोने के फूलों से हार और झुमके। शादी के आस-पास की रस्मों के लिए हल्का सेट।",
    ),
    image: "/images/gallery/floral-01.jpg",
    alt: c("Gold necklace and earrings formed as small flowers", "छोटे फूलों के आकार का सोने का हार और झुमके"),
  },
  {
    id: "leaf-choker",
    name: c("Leaf choker", "पत्ती का चोकर"),
    category: "Necklaces",
    description: c(
      "A close-fitting gold choker with a leaf pattern, shown with jhumka earrings.",
      "गले से सटा सोने का चोकर, पत्ती के काम का, झुमकों के साथ।",
    ),
    image: "/images/gallery/choker-01.jpg",
    alt: c(
      "Close-fitting gold choker with a leaf pattern and jhumka earrings",
      "पत्ती के पैटर्न और झुमकों वाला गले से सटा सोने का चोकर",
    ),
  },
  {
    id: "coin-haar",
    name: c("Coin haar", "सिक्कों का हार"),
    category: "Necklaces",
    description: c("A gold coin necklace with a small pendant and matching earrings.", "सिक्कों का सोने का हार, छोटा लॉकेट और झुमके साथ।"),
    image: "/images/gallery/necklace-03.jpg",
    alt: c("Gold coin necklace with a small pendant and matching earrings", "सिक्कों का सोने का हार, छोटे लॉकेट और झुमकों के साथ"),
  },
  {
    id: "oval-link-haar",
    name: c("Oval-link haar", "गोल कड़ियों का हार"),
    category: "Necklaces",
    description: c("A light gold haar of textured oval links with a pendant.", "हल्का सोने का हार, गोल कड़ियों का, एक लॉकेट के साथ।"),
    image: "/images/gallery/necklace-01.jpg",
    alt: c("Light gold haar of textured oval links with a pendant", "हल्का सोने का हार, गोल कड़ियों और लॉकेट के साथ"),
  },
  {
    id: "tiered-necklace",
    name: c("Tiered necklace", "कई लाइन का हार"),
    category: "Necklaces",
    description: c("A gold necklace with a tiered pendant and matching earrings.", "कई लाइन वाला सोने का हार, लॉकेट और झुमके साथ।"),
    image: "/images/gallery/necklace-04.jpg",
    alt: c("Gold necklace with a tiered pendant and matching earrings", "कई लाइन वाला सोने का हार, लॉकेट और झुमकों के साथ"),
  },
  {
    id: "linked-haar",
    name: c("Linked haar", "दोहरी लाइन का हार"),
    category: "Necklaces",
    description: c("A two-row gold chain with a teardrop pendant and matching earrings.", "दो लाइन की सोने की चेन, बूँद जैसा लॉकेट और झुमके।"),
    image: "/images/gallery/necklace-02.jpg",
    alt: c("Two-row gold chain with a teardrop pendant and matching earrings", "दो लाइन की सोने की चेन, बूँद जैसा लॉकेट और झुमके"),
  },
  {
    id: "heart-pendant",
    name: c("Heart pendant", "दिल का लॉकेट"),
    category: "Necklaces",
    description: c(
      "A heart-shaped gold pendant with floral engraving and a fringe, displayed on the shop’s velvet.",
      "दिल के आकार का सोने का लॉकेट, फूल खुदे हुए और नीचे झालर।",
    ),
    image: "/images/products/heart-pendant.jpg",
    alt: c("Heart-shaped gold pendant with floral engraving and a fringe", "फूल खुदे हुए, झालर वाला दिल का सोने का लॉकेट"),
  },
  {
    id: "peacock-pendant",
    name: c("Peacock pendant", "मोर का लॉकेट"),
    category: "Necklaces",
    description: c("A crescent gold pendant worked as a peacock, with a beaded rim.", "चाँद के आकार में मोर बना सोने का लॉकेट, किनारी मोती जैसी।"),
    image: "/images/products/peacock-pendant.jpg",
    alt: c("Crescent gold peacock pendant with a beaded rim", "किनारी वाली, चाँद के आकार में मोर का सोने का लॉकेट"),
  },
  {
    id: "festive-bangles",
    name: c("Festive bangles and earrings", "चूड़ियाँ और झुमके"),
    category: "Bangles",
    description: c(
      "A festive arrangement of gold bangles and earrings from the Dalsinghsarai shop.",
      "दुकान की सोने की चूड़ियाँ और झुमके, एक साथ सजाकर।",
    ),
    image: "/images/gallery/festive-01.jpg",
    alt: c("Festive arrangement of gold bangles and earrings", "सोने की चूड़ियों और झुमकों की सजावट"),
  },
  {
    id: "ring-solitaire",
    name: c("White-stone ring", "सफ़ेद पत्थर की अंगूठी"),
    category: "Diamond",
    description: c(
      "A gold ring with a white centre stone. Ask the shop to confirm the stone and the HUID mark before you decide.",
      "बीच में सफ़ेद पत्थर वाली सोने की अंगूठी। पत्थर और हॉलमार्क नंबर दुकान से पूछ लीजिए।",
    ),
    image: "/images/products/ring-solitaire.jpg",
    alt: c("Gold ring with a white centre stone, held in the shop", "दुकान में पकड़ी सफेद बीच वाले पत्थर की सोने की अंगूठी"),
  },
  {
    id: "ring-three-stone",
    name: c("Three-stone ring", "तीन पत्थर की अंगूठी"),
    category: "Diamond",
    description: c(
      "A gold band set with three white stones. The shop will tell you the stone and the hallmark when you enquire.",
      "तीन सफ़ेद पत्थरों वाली सोने की अंगूठी। पत्थर और हॉलमार्क दुकान बताएगी।",
    ),
    image: "/images/products/ring-three-stone.jpg",
    alt: c("Gold ring set with three white stones", "तीन सफेद पत्थरों वाली सोने की अंगूठी"),
  },
  {
    id: "ring-monogram",
    name: c("Monogram ring", "नाम वाली अंगूठी"),
    category: "Rings",
    description: c("A square gold ring with an engraved monogram face and grooved shoulders.", "चौकोर सोने की अंगूठी, ऊपर नाम खुदा हुआ।"),
    image: "/images/products/ring-monogram.jpg",
    alt: c("Square gold ring with an engraved monogram face", "नाम खुदी चौकोर सोने की अंगूठी"),
  },
  {
    id: "ring-star",
    name: c("Star ring", "सितारे वाली अंगूठी"),
    category: "Rings",
    description: c("A gold ring with a star cut into the face and a beaded border.", "सोने की अंगूठी, ऊपर सितारा कटा हुआ और किनारी मोती जैसी।"),
    image: "/images/products/ring-star.jpg",
    alt: c("Gold ring with a star motif and beaded border", "सितारे वाली सोने की अंगूठी, मोती जैसी किनारी के साथ"),
  },
  {
    id: "ring-leaf",
    name: c("Leaf ring", "पत्ती वाली अंगूठी"),
    category: "Rings",
    description: c("A gold ring with a small leaf on the face, finished with a beaded edge.", "सोने की अंगूठी, ऊपर छोटी पत्ती और मोती जैसी किनारी।"),
    image: "/images/products/ring-leaf.jpg",
    alt: c("Gold ring with a leaf motif and beaded edge", "पत्ती वाली सोने की अंगूठी, मोती जैसी किनारी के साथ"),
  },
  {
    id: "ring-openwork",
    name: c("Openwork ring", "जालीदार अंगूठी"),
    category: "Rings",
    description: c("A gold ring with an open geometric face.", "सोने की अंगूठी, ऊपर का हिस्सा कटा-कटा, जाली जैसा।"),
    image: "/images/products/ring-openwork.jpg",
    alt: c("Gold ring with an open geometric face", "ऊपर से कटी हुई, जाली जैसी सोने की अंगूठी"),
  },
  {
    id: "ring-flower",
    name: c("Flower ring", "फूल वाली अंगूठी"),
    category: "Rings",
    description: c("A compact gold ring with a flower cut into the face.", "छोटी सोने की अंगूठी, ऊपर फूल कटा हुआ।"),
    image: "/images/products/ring-flower.jpg",
    alt: c("Gold ring with a flower motif", "फूल वाली सोने की अंगूठी"),
  },
  {
    id: "ring-cross",
    name: c("Cross-cut ring", "कटी हुई चौकोर अंगूठी"),
    category: "Rings",
    description: c("A square gold ring with a cross of small cuts and a patterned border.", "चौकोर सोने की अंगूठी, ऊपर छोटा कटा निशान और किनारी पर काम।"),
    image: "/images/products/ring-cross.jpg",
    alt: c("Square gold ring with a cross-cut face", "ऊपर कटा निशान वाली चौकोर सोने की अंगूठी"),
  },
  {
    id: "ring-rope",
    name: c("Rope-pattern ring", "रस्सी जैसी अंगूठी"),
    category: "Rings",
    description: c("A broad gold ring with a rope line and a small flower at the shoulder.", "चौड़ी सोने की अंगूठी, रस्सी जैसी लाइन और किनारे पर छोटा फूल।"),
    image: "/images/products/ring-rope.jpg",
    alt: c("Broad gold ring with a rope pattern", "रस्सी जैसी लाइन वाली चौड़ी सोने की अंगूठी"),
  },
  {
    id: "ring-initial",
    name: c("Initial ring", "अक्षर वाली अंगूठी"),
    category: "Rings",
    description: c("A textured gold ring with an initial cut into a diamond-shaped panel.", "सोने की अंगूठी, हीरे जैसी जगह पर एक अक्षर कटा हुआ।"),
    image: "/images/products/ring-initial.jpg",
    alt: c("Textured gold ring with an initial on the face", "अक्षर कटी सोने की अंगूठी"),
  },
  {
    id: "ring-lattice",
    name: c("Lattice ring", "बारीक जाली वाली अंगूठी"),
    category: "Rings",
    description: c("A gold ring with a lattice of lines and dots across the face.", "सोने की अंगूठी, ऊपर बारीक लाइन और बिंदुओं का काम।"),
    image: "/images/products/ring-lattice.jpg",
    alt: c("Gold ring with a lattice pattern", "बारीक जाली वाली सोने की अंगूठी"),
  },
  {
    id: "ring-wave",
    name: c("Wave ring", "लहर वाली अंगूठी"),
    category: "Rings",
    description: c("A polished gold ring with a wave engraved along the shoulder.", "चमकीली सोने की अंगूठी, किनारे पर लहर खुदी हुई।"),
    image: "/images/products/ring-wave.jpg",
    alt: c("Gold ring with a wave engraving", "लहर खुदी सोने की अंगूठी"),
  },
  {
    id: "ring-grid",
    name: c("Grid ring", "बिंदुओं वाली अंगूठी"),
    category: "Rings",
    description: c("A flat gold ring covered in a fine grid of raised dots.", "सपाट सोने की अंगूठी, ऊपर छोटे-छोटे उभरे बिंदु।"),
    image: "/images/products/ring-grid.jpg",
    alt: c("Gold ring with a grid of raised dots", "उभरे बिंदुओं वाली सोने की अंगूठी"),
  },
  {
    id: "ring-pyramid",
    name: c("Pyramid ring", "उभरी हुई अंगूठी"),
    category: "Rings",
    description: c("A gold ring with a raised pyramid face and stepped sides.", "सोने की अंगूठी, बीच में उठा हुआ हिस्सा और किनारों पर सीढ़ियाँ।"),
    image: "/images/products/ring-pyramid.jpg",
    alt: c("Gold ring with a pyramid face", "बीच में उभरी सोने की अंगूठी"),
  },
  {
    id: "ring-chevron",
    name: c("Chevron ring", "कोण वाली अंगूठी"),
    category: "Rings",
    description: c("A gold ring with a chevron of lines and small circles on the face.", "सोने की अंगूठी, ऊपर कोण बनाती लाइनें और छोटे गोल।"),
    image: "/images/products/ring-chevron.jpg",
    alt: c("Gold ring with a chevron pattern", "कोण वाली लाइन की सोने की अंगूठी"),
  },
  {
    id: "ring-box",
    name: c("Shop ring box", "अंगूठियों का डिब्बा"),
    category: "Rings",
    description: c(
      "A tray of gold rings from the R.P Jewellers & Sons box. Ask for the piece you want and we will send the weight and hallmark on WhatsApp.",
      "दुकान के डिब्बे में सोने की अंगूठियाँ। जो चाहिए बता दें, वज़न और हॉलमार्क व्हाट्सएप पर भेज देंगे।",
    ),
    image: "/images/products/ring-box.jpg",
    alt: c("Open box of gold rings with the R.P Jewellers & Sons mark", "दुकान के नाम वाला, सोने की अंगूठियों का खुला डिब्बा"),
  },
];

export function productsIn(category: ProductCategory) {
  if (category === "All") return products;
  return products.filter((item) => item.category === category);
}
