import { c, type Copy } from "@/lib/copy";

export type FeatureIconName = "hallmark" | "percent" | "wedding" | "years" | "gems" | "pricing";

export type Feature = {
  icon: FeatureIconName;
  title: Copy;
  text: Copy;
};

export const features: Feature[] = [
  {
    icon: "hallmark",
    title: c("Hallmarked gold", "हॉलमार्क सोना"),
    text: c(
      "Wedding pieces in 916 HUID and 750 HUID gold, so the hallmark is something you can check.",
      "शादी के गहने 22 कैरेट और 18 कैरेट के हॉलमार्क सोने में। निशान आप खुद देख सकते हैं।",
    ),
  },
  {
    icon: "percent",
    title: c("7.9% making charges", "7.9% मजदूरी"),
    text: c(
      "A making charge we state at the start, on wedding jewellery. No hunting for the figure at the end.",
      "शादी के गहनों की मजदूरी शुरू में बता दी जाती है। आखिर में बिल में ढूँढनी नहीं पड़ती।",
    ),
  },
  {
    icon: "wedding",
    title: c("Wedding jewellery", "शादी के गहने"),
    text: c(
      "Bridal sets, payal, and the ornaments of the ceremony.",
      "दुल्हन का सेट, पायल, और रस्म के गहने।",
    ),
  },
  {
    icon: "years",
    title: c("Since 1998", "1998 से"),
    text: c(
      "More than twenty-five years at Main Bazar, Dalsinghsarai, with families who come back for the next wedding.",
      "मेन बाज़ार में पच्चीस साल से ऊपर। जो परिवार एक शादी पर आए, अगली शादी पर फिर आते हैं।",
    ),
  },
  {
    icon: "gems",
    title: c("Gems and diamonds", "नगीना और हीरा"),
    text: c(
      "Coloured stones and diamond pieces sit with the traditional gold, chosen for the same bridal set.",
      "रंगीन नगीने और हीरे के गहने भी उसी दुल्हन के सेट के साथ चुने जाते हैं।",
    ),
  },
  {
    icon: "pricing",
    title: c("A clear bill", "बिल साफ हो"),
    text: c(
      "Weight, rate, and making charge explained before you decide. The price should be easy to follow.",
      "वज़न, भाव और मजदूरी हाँ कहने से पहले समझा दी जाती है। हिसाब पढ़ने में अटकना नहीं चाहिए।",
    ),
  },
];
