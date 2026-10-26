# PageMate — nearby pages, priced per page

A student-to-student marketplace prototype for assignment and handwritten work. Buyers post what
they need; writers publish a verified sample, a per-page price and a locality; PageMate ranks the
writers by **how close they are**, so pages can change hands in person instead of by courier.

Indigo-and-white front end, no build step, no dependencies.

## The name

**PageMate** — friendly, easy to remember, and it explains the product: a student-to-student
marketplace for pages, whether they are handwritten, typed or proofread. "Mate" also carries the
local, peer-to-peer feel the product depends on.

Other names considered: **HandIn** (student-native pun, a little generic in search),
**NearScribe** (descriptive but longer), **PagePal** (very close to PageMate), **QuillLocal**
(literary, but doesn't say pages).

The whole site reads the name from the header, footer, `<title>` and the CSS comments — swapping
it later is a find-and-replace across `index.html`, `app.js` and `README.md`.

## Files

- `index.html` — page structure, writer/request grids, both dialogs
- `styles.css` — indigo-and-white design system, responsive layout
- `app.js` — sample writers and requests, distance matching, filters, forms, demo storage

## Run it locally

No install, no build:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`. Double-clicking `index.html` also works, except geolocation is
blocked on `file://` in most browsers.

## What works in this prototype

- **Two sides** — buyer flow and writer flow, plus a requests board writers can respond to.
- **Nearby-first matching** — each writer has a locality and coordinates. Distances are computed
  from the area you choose (or your live location) with the haversine formula, and the default list
  is sorted nearest first.
- **Radius slider** — 1–25 km, filters the grid live.
- **Price per page** — every writer sets their own rate; the request dialog totals it against your
  page count before you send anything.
- **Samples** — each listing shows a handwritten-style excerpt, delivery mode, turnaround and a
  public pickup point.
- **Post a request** — two-step flow: details, then the five nearest matching writers, then send.
  Posted requests appear on the requests board marked "Yours".
- **Send an offer** — from any request card; the offer is stored locally and the button changes.
- **Publish a demo listing** — your own name, subjects, price, locality and sample appear in the
  grid so you can see the match mechanics from the writer side.
- **Geolocation** — "Use my location" recalculates every distance from the browser's position; if
  permission is denied it falls back to the chosen area.

## Design

- Palette: indigo (`#4f46e5`), deep indigo ink (`#1e1a3c`, `#2b2360`), a pale indigo page canvas
  (`#eef0ff`) with white cards and panels. Amber appears only on rating pills.
- Type: Plus Jakarta Sans for UI, Instrument Serif for accents, Caveat for sample pages.
- Fully responsive down to small phones; visible focus rings; `prefers-reduced-motion` respected.

## Prototype limits (important)

This is a **front-end demo**, not a live marketplace. Listings, distances, requests and offers are
sample data. Your own request, offer and listing are saved in `localStorage` in this browser only —
nothing is uploaded, emailed or paid. There is no account system, no chat, no file storage and no
payment. Footer → *Reset demo data* clears everything.

Ship these before real users:

- Backend + database for users, listings, requests, offers, orders and reviews
- Real auth, password security, rate limiting, input validation and abuse reporting
- Sample upload with size/type limits and moderation
- Consent-based location; never expose a home address — only public pickup points
- Order states, payment on handover (or escrow), cancellations and disputes
- A clear academic-integrity policy and a way to report listings that break it

## Deploy on DigitalOcean App Platform

The site is static, so App Platform can serve it without a build step:

1. Push this folder to a GitHub repository.
2. In DigitalOcean: **Create → Apps → GitHub**, pick the repo and branch.
3. Choose **Static Site** as the resource type.
4. Build command: leave empty. Output directory: `/` (the repo root, where `index.html` lives).
5. Set the HTTP port if asked (only used for health checks) and create the app.

Every push to the branch redeploys. Later, when you add a backend, add a **Web Service** component
(Node/Express or Python) plus a managed **PostgreSQL** database and **Spaces** for sample images;
update the front end to call that API instead of `localStorage`.

Do not put API keys, database passwords or payment secrets in these front-end files — they are
public once deployed. Use App Platform environment variables from day one.

## Suggested next step

The core loop (post → match by distance → send) is demoed. The next credible build is a real
backend: one `writers` table with lat/lng and per-page price, one `requests` table, and a
`GET /writers?lat=&lng=&radius=&mode=` endpoint that does the same distance sort on the server.
