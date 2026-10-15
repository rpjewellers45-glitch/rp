const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const groups = [
  { folder: "chokar_and_harr_pages", group: "choker-haar" },
  { folder: "churi_pages", group: "churi" },
  { folder: "long harr", group: "long-haar" },
];

async function main() {
  const pieces = [];
  for (const group of groups) {
    const dir = path.join(root, "assets", group.folder);
    const files = fs
      .readdirSync(dir)
      .filter((name) => /\.jpe?g$/i.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const outDir = path.join(root, "public", "images", "wedding", group.group);
    fs.mkdirSync(outDir, { recursive: true });
    let n = 0;
    for (const file of files) {
      n += 1;
      const id = `${group.group}-${String(n).padStart(3, "0")}`;
      const destName = `${String(n).padStart(3, "0")}.jpg`;
      await sharp(path.join(dir, file))
        .rotate()
        .resize(1400, 1400, { fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(path.join(outDir, destName));
      pieces.push({ id, group: group.group, src: `/images/wedding/${group.group}/${destName}` });
      if (n % 25 === 0) console.log(group.group, n);
    }
    console.log(group.group, n);
  }

  const lines = pieces.map((piece) => `  { id: "${piece.id}", group: "${piece.group}", src: "${piece.src}" },`);
  const file = `export const weddingGroups = ["all", "choker-haar", "churi", "long-haar"] as const;

export type WeddingGroup = (typeof weddingGroups)[number];

export type WeddingPiece = {
  id: string;
  group: Exclude<WeddingGroup, "all">;
  src: string;
};

export const weddingPieces: WeddingPiece[] = [
${lines.join("\n")}
];
`;
  fs.writeFileSync(path.join(root, "data", "wedding.ts"), file);
  console.log("pieces", pieces.length);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
