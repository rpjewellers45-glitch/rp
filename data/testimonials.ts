import { c, type Copy } from "@/lib/copy";

export type Testimonial = {
  id: string;
  quote: Copy;
  author: Copy;
  detail: Copy;
};

export const testimonials: Testimonial[] = [
  {
    id: "sunita",
    quote: c(
      "We sat for my daughter’s bridal set without being hurried. Gopu Ji showed the hallmark on the haar and told us the making charge before we said yes. The whole family was comfortable.",
      "बेटी का सेट बैठकर देखा, जल्दी नहीं कराई। गोपू जी ने हार पर हॉलमार्क दिखाया और हाँ कहने से पहले मजदूरी बता दी। पूरा परिवार निश्चिंत था।",
    ),
    author: c("Sunita Devi", "सुनीता देवी"),
    detail: c("Mother of the bride, Dalsinghsarai", "दुल्हन की माँ, दलसिंहसराय"),
  },
  {
    id: "amit",
    quote: c(
      "We came from Samastipur only for the wedding gold. The sets were laid out properly, nothing extra was pushed, and the bill was easy for everyone to read.",
      "समस्तीपुर से सिर्फ़ शादी का सोना लेने आए थे। सेट ठीक से रखे गए, कुछ ज़्यादा नहीं थोपा गया, और बिल सब पढ़ सके।",
    ),
    author: c("Amit Kumar", "अमित कुमार"),
    detail: c("Groom’s father, Samastipur", "दूल्हे के पिता, समस्तीपुर"),
  },
  {
    id: "neha",
    quote: c(
      "My sister’s haar and payal were matched in one visit. They look like what a bride in our town actually wears. We are glad we came to this shop.",
      "बहन का हार और पायल एक ही बार में मिल गए। जैसे इस शहर की दुल्हन पहनती है, वैसे ही लगे। यहीं आना अच्छा रहा।",
    ),
    author: c("Neha Kumari", "नेहा कुमारी"),
    detail: c("Sister of the bride, Dalsinghsarai", "दुल्हन की बहन, दलसिंहसराय"),
  },
];
