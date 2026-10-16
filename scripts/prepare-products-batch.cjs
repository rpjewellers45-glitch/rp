const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");

/** @type {Array<{ folder: string; slug: string; category: string; labelEn: string; labelHi: string; descEn: string; descHi: string; altEn: string; altHi: string }>} */
const groups = [
  {
    folder: "antique_harr_pages",
    slug: "antique-haar",
    category: "Antique haar",
    labelEn: "Antique haar",
    labelHi: "पुरानी शैली का हार",
    descEn: "Antique-style gold haar from the shop’s wedding collection in Dalsinghsarai.",
    descHi: "दलसिंहसराय की दुकान का पुरानी शैली का सोने का हार।",
    altEn: "Antique-style gold haar from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स का पुरानी शैली का सोने का हार",
  },
  {
    folder: "brijbali_pages",
    slug: "brijbali",
    category: "Brijbali",
    labelEn: "Brijbali",
    labelHi: "ब्रिजबाली",
    descEn: "Gold brijbali for the wedding, from R.P Jewellers & Sons.",
    descHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की ब्रिजबाली।",
    altEn: "Gold brijbali from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की ब्रिजबाली",
  },
  {
    folder: "chain_pages",
    slug: "chain",
    category: "Chain",
    labelEn: "Gold chain",
    labelHi: "सोने की चेन",
    descEn: "Gold chain from the shop in Main Bazar, Dalsinghsarai.",
    descHi: "मेन बाजार, दलसिंहसराय की दुकान की सोने की चेन।",
    altEn: "Gold chain from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की चेन",
  },
  {
    folder: "earings_pages",
    slug: "earring",
    category: "Earring",
    labelEn: "Earring",
    labelHi: "झुमका",
    descEn: "Gold earrings for the bridal set, from the counter in Dalsinghsarai.",
    descHi: "दलसिंहसराय की दुकान के सोने के झुमके, दुल्हन के सेट के लिए।",
    altEn: "Gold earrings from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स के सोने के झुमके",
  },
  {
    folder: "g_bracelet_pages",
    slug: "gold-bracelet",
    category: "Bracelet",
    labelEn: "Gold bracelet",
    labelHi: "सोने की कंगन",
    descEn: "Gold bracelet from R.P Jewellers & Sons.",
    descHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की कंगन।",
    altEn: "Gold bracelet from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की कंगन",
  },
  {
    folder: "G_ring_pages",
    slug: "gold-ring",
    category: "Gents ring",
    labelEn: "Gold ring",
    labelHi: "सोने की अंगूठी",
    descEn: "A gold ring in hallmarked gold, chosen with the bridal set.",
    descHi: "हॉलमार्क सोने की अंगूठी, दुल्हन के सेट के साथ।",
    altEn: "Gold ring from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की अंगूठी",
  },
  {
    folder: "jhumka_pages",
    slug: "jhumka",
    category: "Jhumka",
    labelEn: "Jhumka",
    labelHi: "झुमका",
    descEn: "Gold jhumka from the wedding jewellery counter in Dalsinghsarai.",
    descHi: "दलसिंहसराय की दुकान का सोने का झुमका।",
    altEn: "Gold jhumka from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स का सोने का झुमका",
  },
  {
    folder: "L_ring_pages",
    slug: "ladies-ring",
    category: "Ladies ring",
    labelEn: "Gold ring",
    labelHi: "सोने की अंगूठी",
    descEn: "A gold ring in hallmarked gold, chosen with the bridal set.",
    descHi: "हॉलमार्क सोने की अंगूठी, दुल्हन के सेट के साथ।",
    altEn: "Gold ring from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स की सोने की अंगूठी",
  },
  {
    folder: "mangalsutra_2_E_pages",
    slug: "mangalsutra-set",
    category: "Mangalsutra set",
    labelEn: "Mangalsutra set",
    labelHi: "मंगलसूत्र सेट",
    descEn: "Mangalsutra with matching earrings, from R.P Jewellers & Sons.",
    descHi: "झुमकों के साथ मंगलसूत्र, आर.पी. ज्वेलर्स एंड सन्स से।",
    altEn: "Mangalsutra set from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स का मंगलसूत्र सेट",
  },
  {
    folder: "mangalsutra_pages",
    slug: "mangalsutra",
    category: "Mangalsutra",
    labelEn: "Mangalsutra",
    labelHi: "मंगलसूत्र",
    descEn: "Gold mangalsutra from the shop in Dalsinghsarai.",
    descHi: "दलसिंहसराय की दुकान का सोने का मंगलसूत्र।",
    altEn: "Gold mangalsutra from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स का सोने का मंगलसूत्र",
  },
  {
    folder: "Pola_e_pages",
    slug: "pola-earring",
    category: "Pola",
    labelEn: "Pola earring",
    labelHi: "पोला झुमका",
    descEn: "Pola-style gold earrings from R.P Jewellers & Sons.",
    descHi: "आर.पी. ज्वेलर्स एंड सन्स के पोला स्टाइल के सोने के झुमके।",
    altEn: "Pola-style gold earrings from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स के पोला झुमके",
  },
  {
    folder: "small_earings_pages",
    slug: "stud-earring",
    category: "Small earring",
    labelEn: "Stud earring",
    labelHi: "छोटा झुमका",
    descEn: "Small gold earrings from the shop counter in Dalsinghsarai.",
    descHi: "दलसिंहसराय की दुकान के छोटे सोने के झुमके।",
    altEn: "Small gold earrings from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स के छोटे सोने के झुमके",
  },
  {
    folder: "tika_pages",
    slug: "maang-tikka",
    category: "Maang tikka",
    labelEn: "Maang tikka",
    labelHi: "माथे का टीका",
    descEn: "Gold maang tikka for the bride, worn with the wedding set.",
    descHi: "दुल्हन के लिए सोने का माथे का टीका, शादी के सेट के साथ।",
    altEn: "Gold maang tikka from R.P Jewellers & Sons",
    altHi: "आर.पी. ज्वेलर्स एंड सन्स का सोने का माथे का टीका",
  },
];

function esc(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  const products = [];
  for (const group of groups) {
    const dir = path.join(root, "assets", group.folder);
    if (!fs.existsSync(dir)) {
      console.warn("skip missing", group.folder);
      continue;
    }
    const files = fs
      .readdirSync(dir)
      .filter((name) => /\.jpe?g$/i.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const outDir = path.join(root, "public", "images", "products", "catalog", group.slug);
    fs.mkdirSync(outDir, { recursive: true });
    let n = 0;
    for (const file of files) {
      n += 1;
      const id = `${group.slug}-${String(n).padStart(3, "0")}`;
      const destName = `${String(n).padStart(3, "0")}.jpg`;
      await sharp(path.join(dir, file))
        .rotate()
        .resize(1400, 1400, { fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(path.join(outDir, destName));
      products.push({ id, slug: group.slug, n });
      if (n % 25 === 0) console.log(group.slug, n);
    }
    console.log(group.slug, n);
  }

  const bySlug = Object.fromEntries(groups.map((g) => [g.slug, g]));
  const blocksFixed = products.map(({ id, slug, n }) => {
    const group = bySlug[slug];
    const imagePath = `/images/products/catalog/${slug}/${String(n).padStart(3, "0")}.jpg`;
    return `  {
    id: "${id}",
    name: c("${esc(group.labelEn)}", "${esc(group.labelHi)}"),
    category: "${group.category}" as ProductGroup,
    description: c(
      "${esc(group.descEn)}",
      "${esc(group.descHi)}",
    ),
    image: "${imagePath}",
    alt: c("${esc(group.altEn)}", "${esc(group.altHi)}"),
  },`;
  });

  const file = `import { c } from "@/lib/copy";
import type { ProductGroup } from "@/data/products";

/** Generated from assets by scripts/prepare-products-batch.cjs — do not edit by hand. */
export const catalogBatch = [
${blocksFixed.join("\n")}
];
`;
  fs.writeFileSync(path.join(root, "data", "products-catalog-batch.ts"), file);
  console.log("products", products.length);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
