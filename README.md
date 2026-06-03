# 📭 UNEMPLOYABLE™

**An endless scroll of automated job rejection emails.**

A Gmail-flavored inbox that never ends. Scroll back in time through every
"we've decided to move forward with other candidates" you've ever read — because
every company sends the exact same email. A spiritual sequel to the
[CVS receipt that went viral](https://codepen.io/garrettbear/pen/JzMmqg), and the
launch site for the **UNEMPLOYABLE™** clothing brand.

> Made with spite and love by [Garrett Bear](https://garrettbear.com) after 1.5 years on the job hunt.

**Live:**
- The inbox → **[theunemployable.xyz](https://theunemployable.xyz)**
- The shop (waitlist) → **[shop.theunemployable.xyz](https://shop.theunemployable.xyz)**

---

## What's here

```
/                     the inbox app (theunemployable.xyz)
├─ index.html         top bar, sidebar, inbox, modals; all SEO/OG tags in <head>
├─ style.css          the Gmail look — light + Gmail-style dark mode, responsive
├─ script.js          the engine: procedurally generates infinite rejections,
│                      the email modal, Rejection Training game, share card, easter eggs
├─ og-image.png       1200×630 social card   (source: og-image.svg)
├─ codepen.html       single self-contained file (CSS+JS inlined) — paste into a CodePen
└─ shop/              the coming-soon shop (shop.theunemployable.xyz)
   ├─ index.html      black/Inter/#001fff teaser with always-on email signup
   ├─ style.css       scattered product collage that bleeds off the edges
   ├─ script.js       scroll-reactive collage motion + Google-Form waitlist capture
   └─ img/            product photos, white logo, og-shop.png
```

No build step, no framework — just vanilla HTML/CSS/JS.

## Features

**The inbox**
- Endless, procedurally generated rejection emails (real-ish companies + a sharp/sarcastic copy bank), dated further back the more you scroll.
- Clickable rows open a full email in a Gmail-style modal.
- **Rejection Training** — a game that ranks you (Fresh Grad → … → *Final Boss: The Algorithm*) by how many rejections you read, with a shareable "Rejection Résumé" card.
- Gmail-style **dark mode** (remembers your choice; follows your OS by default).
- Promotions / Social inbox tabs, each with their own themed junk.
- Mobile rebuilt as a native-feeling Gmail app (drawer, bottom tabs, compose FAB).

**The shop** (`/shop`)
- Coming-soon teaser with an always-visible email signup (validation + honeypot + time-trap, no friction).
- Resilient capture: keepalive request + a localStorage retry queue, plus a "use the form directly" fallback link.

## Run it

It's static. Open `index.html`, or:

```bash
npx serve .      # or: python3 -m http.server
```

## Make it *yours* (the real companies that rejected you)

Most of the companies are **real ones Garrett applied to** (pulled from a 250-email
"Job Applications" Gmail label), shuffled with a few famous names. To add or change
them, open `script.js` and edit the `REAL_COMPANIES` array — it's just a list of names:

```js
const REAL_COMPANIES = [
  "Google", "Stripe", "Figma",
  "Your Real Rejection Inc.",   // <- just add the name; that's it
];
```

Each name auto-gets a sender domain and a stable avatar color. Want a specific brand
color/domain? Add an override to the `BRAND` map. Tweak `ROLES` for the job titles,
`TEMPLATES` for the rejection copy, and `FIRST_NAME` for who the emails are addressed to.

### Easter eggs
- One **CVS receipt** email near the top — a tribute to the original pen.
- Type `hire` anywhere on the page.
- Type `boss` to trigger the Final Boss "you got an offer!" confetti prank on demand.
- Hit Enter in the search bar.
- The "About" (ⓘ) button holds the full disclaimer + brand pitch.

## Re-render the OG image

```bash
convert -background none -density 150 og-image.svg -resize 1200x630 \
  -flatten -background "#f6f8fc" og-image.png
```

SEO: canonical + Open Graph + Twitter cards + JSON-LD live in each `index.html`,
pointed at `theunemployable.xyz` / `shop.theunemployable.xyz`.

---

## ⚠️ Disclaimer

This is **satire**. It is not Gmail and is **not affiliated with, endorsed by, or
sponsored by Google** or any company shown. All emails are **fictional and
auto-generated** for comedy. Company names are used nominatively to parody the
universally identical job-rejection email. No real rejection emails are reproduced.
Any resemblance to the message you got last Tuesday is purely because they all write
the exact same thing.

© Garrett Bear. Be unemployable on purpose.
