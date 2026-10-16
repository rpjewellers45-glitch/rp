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
      "HUID is the unique number on a BIS hallmark. 916 is 22 karat gold and 750 is 18 karat gold. At the counter the mark is shown on the piece you are considering, so you can read it before you decide.",
      "हॉलमार्क पर एक नंबर होता है, उसे HUID कहते हैं। 916 मतलब 22 कैरेट सोना, 750 मतलब 18 कैरेट। जो गहना आप देख रहे हों, उसी पर निशान दुकान में दिखाया जाता है, ताकि तय करने से पहले पढ़ लें।",
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
      "Old gold is taken at the counter, piece by piece, after the ornament is seen. Call or WhatsApp before you travel and we will tell you what can be done with the piece you are bringing.",
      "पुराना सोना दुकान पर लिया जाता है, गहना देखकर। आने से पहले कॉल या व्हाट्सएप कर दें। जो गहना ला रहे हैं, उसका क्या हो सकता है, हम बता देंगे।",
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
      "Yes. Share the wedding date on WhatsApp and we will keep the set aside for you. The advance follows the piece, and we tell you that amount when you book.",
      "हाँ। व्हाट्सएप पर शादी की तारीख भेज दीजिए, सेट आपके नाम रख दिया जाएगा। एडवांस गहने के हिसाब से होता है, बुक करते समय वही रकम बता देते हैं।",
    ),
  },
];
