export type FeatureIconName = "hallmark" | "percent" | "wedding" | "years" | "gems" | "pricing";

export type Feature = {
  icon: FeatureIconName;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    icon: "hallmark",
    title: "Hallmarked gold",
    text: "Wedding pieces in 916 HUID and 750 HUID gold, so the hallmark is something you can check.",
  },
  {
    icon: "percent",
    title: "7.9% making charges",
    text: "A making charge we state at the start, on wedding jewellery. No hunting for the figure at the end.",
  },
  {
    icon: "wedding",
    title: "Wedding jewellery only",
    text: "Bridal sets, payal, and the ornaments of the ceremony. This shop is built around the wedding.",
  },
  {
    icon: "years",
    title: "Since 1998",
    text: "More than twenty-five years at Main Bazar, Dalsinghsarai, with families who come back for the next wedding.",
  },
  {
    icon: "gems",
    title: "Gems and diamonds",
    text: "Coloured stones and diamond pieces sit with the traditional gold, chosen for the same bridal set.",
  },
  {
    icon: "pricing",
    title: "A clear bill",
    text: "Weight, rate, and making charge explained before you decide. The price should be easy to follow.",
  },
];
