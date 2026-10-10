/**
 * Edit the answers here. The FAQ accordion reads this file only.
 * Keep the replies short, and do not add a claim until the shop has confirmed it.
 */
import { c, type Copy } from "@/lib/copy";

export type FaqItem = {
  id: string;
  question: Copy;
  answer: Copy;
};

export const faq: FaqItem[] = [
  {
    id: "hallmark",
    question: c("What does HUID hallmark purity mean?", "हॉलमार्क पर 916 और 750 का क्या मतलब है?"),
    answer: c(
      "HUID is the unique number on a BIS hallmark. 916 is 22 karat gold and 750 is 18 karat gold. At the counter we show the mark on the piece you are considering. BIS hallmark status for the shop is still to be confirmed in writing, so please ask to see the mark on the ornament itself.",
      "हॉलमार्क पर एक नंबर होता है, उसे HUID कहते हैं। 916 मतलब 22 कैरेट सोना, 750 मतलब 18 कैरेट। दुकान पर वही निशान दिखाया जाता है, जो गहना आप देख रहे हों उस पर। दुकान का BIS काग़ज़ अभी लिखा नहीं गया है, इसलिए निशान गहने पर ही देख लीजिए।",
    ),
  },
  {
    id: "making",
    question: c("How does the 7.9% making charge work?", "7.9% मजदूरी कैसे लगती है?"),
    answer: c(
      "On wedding jewellery the making charge is 7.9 percent. It is stated before you choose, not added as a surprise on the bill. Gold rate, weight, and stone charges are separate. Terms apply, and the shop will explain them for the piece in front of you.",
      "शादी के गहनों पर बनने की मजदूरी 7.9 प्रतिशत है। यह गहना चुनने से पहले बता दी जाती है, बिल में छिपकर नहीं जुड़ती। सोने का भाव, वज़न और नगीने का चार्ज अलग होते हैं। जो गहना सामने होगा, उसकी पूरी बात दुकान समझा देगी।",
    ),
  },
  {
    id: "exchange",
    question: c("Do you exchange jewellery?", "पुराना गहना बदला जाता है?"),
    answer: c(
      "Exchange is handled at the shop, piece by piece. Call or WhatsApp before you travel so we can tell you what is possible for that ornament. A full written exchange policy will be published here once the owner confirms the wording.",
      "पुराना गहना बदलना दुकान पर होता है, हर गहने को देखकर। आने से पहले कॉल या व्हाट्सएप कर लें, ताकि बता सकें उस गहने का क्या हो सकता है। लिखी हुई पूरी शर्त मालिक के शब्द पक्के होते ही यहाँ आ जाएगी।",
    ),
  },
  {
    id: "custom",
    question: c("Can a bridal set be customised?", "दुल्हन का सेट अपनी पसंद से बन सकता है?"),
    answer: c(
      "Many wedding orders are adjusted for the family — a matching earring, a different length, a tikka with the set. Tell us the ceremony and the time you have, and the shop will say what can be made.",
      "बहुत से सेट परिवार की पसंद से बनते हैं — साथ के झुमके, हार की लंबाई, या सेट के साथ माँग टीका। कौन सी रस्म है और कितना समय है, बता दीजिए। दुकान कह देगी क्या बन सकता है।",
    ),
  },
  {
    id: "booking",
    question: c("Can we book a set in advance?", "सेट पहले से रखवा सकते हैं?"),
    answer: c(
      "Yes. Wedding dates fill the counter, so families often reserve a set ahead of the muhurat. Share the date on WhatsApp and we will tell you what to hold and what advance the shop asks for. The advance amount is confirmed by the shop, not fixed on this website.",
      "हाँ। शादी की तारीखों पर दुकान भर जाती है, इसलिए परिवार मुहूर्त से पहले सेट रखवा लेते हैं। व्हाट्सएप पर तारीख भेज दीजिए। क्या रोकना है और एडवांस कितना है, दुकान बताएगी। रकम वेबसाइट पर लिखी नहीं है।",
    ),
  },
];
