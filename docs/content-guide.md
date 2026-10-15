# What to edit, in plain language

You do not need to touch the design files. Change the words and the photographs in the places below, then refresh the site.

## Shop facts

Open `data/shop.ts`.

- Phone, email, and address
- The 7.9% making-charge line
- Opening hours (`hours` and `hoursNote`)
- The short policy note in the footer

Do not type “30% less” or “Brahmand certified” here until those lines are confirmed. They are listed in `data/claims-to-verify.md`.

## Sentences on the home page

Open `data/copy.ts` for the about story, the owner quote, and the offer paragraph.

The Hindi / English switch for the menu, the hero, and a few headings is in `data/i18n.ts`. Keep both languages when you change a line.

## Products

Open `data/products.ts`. Each piece has a name, a category, a short description, and an image path.

Categories you can use: Bridal, Diamond, Gems, Earrings, Necklaces, Bangles, Rings. Add a category only when you have a photograph of that piece. Do not reuse another ornament’s picture.

To add a photograph:

1. Put the file in `public/images/products/`.
2. Use a short English file name, such as `cb-payel.jpg`. No spaces.
3. Add a new block in `data/products.ts` pointing at `/images/products/cb-payel.jpg`.

The collections page reads this list. The filter tabs and the WhatsApp button use the product name automatically.

## Other lists

| File | What it is |
| --- | --- |
| `data/faq.ts` | Questions and answers. Edit the answer text. |
| `data/guide.ts` | Bridal checklist |
| `data/about.ts` | Timeline and values. Lines marked TODO are placeholders. |
| `data/gallery.ts` | The large gallery on the home page |
| `data/collections.ts` | The six category cards on the home page |
| `data/testimonials.ts` | Sample reviews. Replace them before you advertise them as real. |

## Photographs already named

New shop photographs live in `public/images/products/` (`ring-solitaire.jpg`, `heart-pendant.jpg`, and the rest). The shopfront is `public/images/shop-front.jpg`. Older bridal photographs stay in `public/images/gallery/`.

Phone screenshots and extra angles of the same ring were not published. The original files are still in `assets/`.

## Gold and silver rates

The home page reads a cached rate from `/api/rates`. About once every 10 minutes the site reads Tanishq’s published 22K rate and the 18K, 22K and 24K board on Mia by Tanishq. A figure is shown only when those two pages agree. Every visitor then sees that same saved figure.

Do not type a rupee amount into the code. The number is the published retail gold rate for 10 grams. It is not the shop’s bill, and it does not include making charges or GST.
