# R.P Jewellers & Sons

A frontend-only demo site for R.P Jewellers & Sons, a wedding jewellery shop in Dalsinghsarai, Bihar, since 1998.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

There is no backend. The contact form checks the fields in the browser and then asks the visitor to call or WhatsApp. It does not send email.

## Where to edit content

All shop facts live in typed files under `data/`. Change them there and the pages pick the new copy up.

| File | What it controls |
| --- | --- |
| `data/shop.ts` | Name, proprietor, ambassador, phone, email, address, 7.9% offer, hours note, footer policy |
| `data/copy.ts` | Hero line, about story, owner quote, stats, about-page promises, offer banner |
| `data/collections.ts` | Collection names, groups, summaries, and which photograph each card uses |
| `data/gallery.ts` | Gallery photographs, titles, and alt text |
| `data/features.ts` | “Why Choose R.P Jewellers” cards |
| `data/testimonials.ts` | Sample reviews. Replace these before launch |
| `data/navigation.ts` | Navbar and footer links |

## Where to replace images

Optimized images used by the site are in `public/images/`. The files you dropped in `assets/` are the originals.

| Site file | Used for |
| --- | --- |
| `public/images/logo.png` | Navbar, footer, loader, favicon source |
| `public/images/owner.jpg` | Proprietor portrait in Our Story |
| `public/images/gallery/bridal-01.jpg` | Wedding gold card and gallery |
| `public/images/gallery/bridal-02.jpg` | Bridal sets card and gallery |
| `public/images/gallery/bridal-03.jpg` | Hero photograph and gallery |
| `public/images/gallery/bridal-04.jpg` | Gems card and gallery |
| `public/images/gallery/choker-01.jpg` | Necklaces & chokers |
| `public/images/gallery/floral-01.jpg` | Jhumka & earrings |
| `public/images/gallery/necklace-01.jpg` through `necklace-04.jpg` | Gallery |
| `public/images/gallery/festive-01.jpg` | Gallery |
| `app/icon.png` and `app/apple-icon.png` | Browser icon, made from the logo |

Cards for CB Payel, Sukh Payel, diamond, bangles, maang tikka, and rings use a gold placeholder. Put a real file in `public/images/gallery/` and set `image` (and `imageAlt`) for that item in `data/collections.ts`. Each missing photograph is marked with a `TODO` in that file.

If `owner.jpg` or a gallery file is missing, the frame falls back to a maroon panel instead of a broken image.

## Claims that are not on the site yet

In `data/shop.ts` there is a TODO next to two lines that still need the owner’s confirmation. They are **not** shown on the pages:

- “30% less”
- “Brahmand certified”

BIS hallmark is shown as **to confirm**. Shop hours are shown as **to be confirmed**. The owner quote in `data/copy.ts` is drafted for this demo and should be replaced with his own words.

Three supplier photographs in `assets/` were left out of the gallery because they carry another seller’s watermark and a “100%Less” line. Two chain screenshots were left out because they include a phone status bar. Say if you want those prepared differently and added.

## Pages

- `/` long scroll: hero, trust strip, collections, why us, offer, story, gallery, reviews, visit, contact
- `/about`
- `/collections`
