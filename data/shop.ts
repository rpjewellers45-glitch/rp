/**
 * Single source for shop facts. Import this everywhere — do not hard-code
 * the phone, address, or offer in components.
 *
 * TODO: Confirm with the owner before any public use.
 * The claim "30% less" is NOT verified and must not be shown on the site yet.
 * The claim "Brahmand certified" is NOT verified and must not be shown on the site yet.
 */

import { c } from "@/lib/copy";

export const shop = {
  name: "R.P Jewellers & Sons",
  shortName: "R.P Jewellers",
  since: 1998,
  sinceLabel: c("Since 1998", "1998 से"),
  tagline: c("Wedding jewellery for the families of Dalsinghsarai, since 1998.", "दलसिंहसराय के परिवारों की शादी के गहने, 1998 से।"),
  description:
    "Wedding jewellery in Dalsinghsarai since 1998. R.P Jewellers & Sons works in hallmarked 916 and 750 HUID gold for families across the Samastipur region, with 7.9% making charges on wedding jewellery.",
  proprietor: {
    name: "Ashish Kumar",
    knownAs: "Gopu Ji",
    role: c("Proprietor", "मालिक"),
    image: "/images/owner.jpg",
    imageAlt: c(
      "Ashish Kumar (Gopu Ji), proprietor of R.P Jewellers & Sons, in the shop",
      "दुकान में आशीष कुमार, गोपू जी",
    ),
  },
  ambassador: {
    name: "Nandani Gupta",
    role: c("Brand Ambassador", "ब्रांड एंबेसडर"),
  },
  phone: "9939575999",
  phoneDisplay: "+91 99395 75999",
  phoneHref: "tel:+919939575999",
  whatsapp: "919939575999",
  whatsappMessage:
    "Namaste, I would like to enquire about wedding jewellery at R.P Jewellers & Sons, Dalsinghsarai.",
  whatsappMessageHi:
    "नमस्ते, आर.पी. ज्वैलर्स एंड संस, दलसिंहसराय से शादी के गहनों के बारे में बात करनी है।",
  email: "ashishdss53@gmail.com",
  emailHref: "mailto:ashishdss53@gmail.com",
  instagram: "@r.pjewellersdss",
  instagramHref: "https://www.instagram.com/r.pjewellersdss/",
  geo: {
    latitude: 25.6669731,
    longitude: 85.8354187,
  },
  plusCode: "MR8P+Q5M",
  mapArea: c("Loknathpur, Dalsinghsarai", "लोकनाथपुर, दलसिंहसराय"),
  address: {
    line1: c("Sonna Patti, Mangle Sah Chowk", "सोना पट्टी, मंगले साह चौक"),
    line2: c("near Masjid Gali, Main Bazar", "मस्जिद गली के पास, मेन बाज़ार"),
    city: c("Dalsinghsarai", "दलसिंहसराय"),
    state: c("Bihar", "बिहार"),
    branch: c("Dalsinghsarai Branch", "दलसिंहसराय की दुकान"),
    full: "Sonna Patti, Mangle Sah Chowk, near Masjid Gali, Main Bazar, Dalsinghsarai, Bihar",
  },
  makingCharge: 7.9,
  makingChargeLabel: "Only 7.9% making charges",
  weddingOnly: c("Wedding jewellery only", "सिर्फ़ शादी के गहने"),
  hallmarks: ["916 HUID", "750 HUID"] as const,
  hours: [{ day: c("Monday – Sunday", "सोमवार से रविवार"), time: c("Open all week", "हफ़्ते भर खुला") }],
  hoursNote: c(
    "The counter in Main Bazar is open through the week. If you are coming for a bridal set, a call on the way keeps it ready.",
    "मेन बाज़ार की दुकान हफ़्ते भर खुली रहती है। दुल्हन का सेट देखने आ रहे हों तो रास्ते में एक कॉल कर दें, सेट तैयार रखा जाएगा।",
  ),
  policyNote: c(
    "Wedding jewellery is worked in 916 and 750 HUID gold. The making charge on wedding pieces is 7.9 percent. Gold rate, weight and GST are counted separately, and the hallmark is shown on the piece at the counter.",
    "शादी के गहने 916 और 750 हॉलमार्क सोने में बनते हैं। शादी के गहनों पर मजदूरी 7.9 प्रतिशत है। सोने का भाव, वज़न और जीएसटी अलग गिने जाते हैं, और हॉलमार्क दुकान पर गहने पर दिखाया जाता है।",
  ),
} as const;

export type Shop = typeof shop;
