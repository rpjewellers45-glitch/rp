# R.P Jewellers & Sons

Wedding jewellery site for the Dalsinghsarai branch. Maroon and gold, front end only, ready to deploy on Vercel.

Live site: [https://www.rpjewelleries.in/](https://www.rpjewelleries.in/)

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

Production builds use `https://www.rpjewelleries.in` from `.env.production` (and as a fallback in `lib/site.ts`). That value drives canonical links, the sitemap, and structured data. For local dev, copy `.env.example` to `.env.local` if you want to override it.

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
| `data/wedding.ts` | Wedding catalogue list (generated; do not edit by hand) |
| `data/collections.ts` | Home category cards |
| `data/claims-to-verify.md` | Lines that must not go live until confirmed |

## Replacing images

Put a new file in `public/images/products/` with a short name (`cb-payel.jpg`) and point a product at it in `data/products.ts`.

`next/image` serves AVIF or WebP, with a blur while the file loads. Hero uses the fringe haar. The shopfront is `public/images/shop-front.jpg`.

### Wedding catalogue (GitHub deploy)

Photographs that appear on `/wedding` live under `public/images/wedding/` (`choker-haar`, `churi`, `long-haar`). **Commit those folders and `data/wedding.ts` to GitHub** — the host serves them as static files at `https://www.rpjewelleries.in/images/wedding/...`.

Full-size source folders under `assets/` stay on your machine (gitignored). After you add new pages there, regenerate web copies and the data file:

```bash
node scripts/prepare-wedding.cjs
```

Then commit the updated `public/images/wedding/` and `data/wedding.ts`.

## Deploying to Vercel

1. Push the repository (including `public/images/`).
2. Import the project in Vercel. Framework preset: Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to `https://www.rpjewelleries.in` if you override env files on Vercel.
4. Point `www.rpjewelleries.in` (and optionally apex `rpjewelleries.in`) at the Vercel project.
5. Deploy. `npm run build` is the production check.

There is no database. Gold rate, opening hours, and two marketing claims stay unpublished until the shop confirms them. See `data/claims-to-verify.md`.
