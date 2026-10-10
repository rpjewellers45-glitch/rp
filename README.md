# R.P Jewellers & Sons

Wedding jewellery site for the Dalsinghsarai branch. Maroon and gold, front end only, ready to deploy on Vercel.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the live domain before you deploy. That value is used for canonical links, the sitemap, and structured data.

## Editing content

A short guide for the shop is in [docs/content-guide.md](docs/content-guide.md).

| File | What it controls |
| --- | --- |
| `data/shop.ts` | Name, phone, address, 7.9% offer, hours |
| `data/copy.ts` | About story, owner quote, offer paragraph |
| `data/i18n.ts` | English / हिंदी labels for the menu, hero, and key headings |
| `data/products.ts` | Every product on the collections page |
| `data/faq.ts` | FAQ answers |
| `data/guide.ts` | Bridal checklist |
| `data/about.ts` | Timeline and values |
| `data/gallery.ts` | Home gallery |
| `data/collections.ts` | Home category cards |
| `data/claims-to-verify.md` | Lines that must not go live until confirmed |

## Replacing images

Put a new file in `public/images/products/` with a short name (`cb-payel.jpg`) and point a product at it in `data/products.ts`.

`next/image` serves AVIF or WebP, with a blur while the file loads. Hero uses the fringe haar. The shopfront is `public/images/shop-front.jpg`.

## Deploying to Vercel

1. Push the repository.
2. Import the project in Vercel. Framework preset: Next.js.
3. Add `NEXT_PUBLIC_SITE_URL`.
4. Deploy. `npm run build` is the production check.

There is no database. Gold rate, opening hours, and two marketing claims stay unpublished until the shop confirms them. See `data/claims-to-verify.md`.
