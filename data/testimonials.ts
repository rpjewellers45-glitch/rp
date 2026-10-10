/**
 * SAMPLE CONTENT — replace these three reviews with real customer words
 * before the site goes live. They exist only so the carousel has a layout.
 * Do not present them as verified testimonials in advertising.
 */
import { c, type Copy } from "@/lib/copy";

export type Testimonial = {
  id: string;
  quote: Copy;
  author: Copy;
  detail: Copy;
};

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote: c(
      "We came for a bridal set and were given time. The hallmark and the making charge were explained before we chose, which is what a wedding purchase needs.",
      "दुल्हन का सेट लेने आए थे। जल्दी नहीं कराई। हॉलमार्क और मजदूरी चुनने से पहले बता दी, शादी की खरीद में यही चाहिए होता है।",
    ),
    author: c("A mother", "दुल्हन की माँ"),
    detail: c("Sample review · Dalsinghsarai", "नमूना · दलसिंहसराय"),
  },
  {
    id: "sample-2",
    quote: c(
      "It helped that the shop keeps to wedding jewellery. We compared sets without being moved on to things we had not come for, and the bill was easy to read.",
      "अच्छा लगा कि दुकान शादी के गहनों से आगे नहीं ले जाती। सेट देखे, जो नहीं लेना था उसकी बात नहीं हुई, और बिल पढ़ना आसान था।",
    ),
    author: c("A groom’s family", "दूल्हे वाले"),
    detail: c("Sample review · Dalsinghsarai", "नमूना · दलसिंहसराय"),
  },
  {
    id: "sample-3",
    quote: c(
      "The necklace and the payal were chosen as one set. It felt like a shop that still knows what a wedding in this town asks a bride to wear.",
      "हार और पायल एक साथ चुने। लगा जैसे दुकान जानती है कि इस शहर की शादी में दुल्हन क्या पहनती है।",
    ),
    author: c("A bride’s sister", "दुल्हन की बहन"),
    detail: c("Sample review · Dalsinghsarai", "नमूना · दलसिंहसराय"),
  },
];
