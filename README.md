# 📭 UNEMPLOYABLE™

**An endless scroll of automated job rejection emails.**

A Gmail-flavored inbox that never ends. Scroll back in time through every
"we've decided to move forward with other candidates" you've ever read — because
every company sends the exact same email. A spiritual sequel to the
[CVS receipt that went viral](https://codepen.io/garrettbear/pen/JzMmqg), and the
launch site for the **Unemployable** clothing brand.

> Made with spite and love by [Garrett Bear](https://garrettbear.com) after 1.5 years on the job hunt.

---

## What's here

| File | What it does |
|------|--------------|
| `index.html` | Markup: top bar, sidebar, inbox, modals. All SEO + Open Graph tags live in `<head>`. |
| `style.css` | The Gmail look. Light theme, fully responsive (desktop-first, mobile-friendly). |
| `script.js` | The engine — procedurally generates infinite rejection emails, infinite scroll, the email modal, the about/disclaimer modal, and easter eggs. |
| `og-image.png` | 1200×630 social share card. |
| `og-image.svg` | Source for the OG image (re-render with the command below). |
| `codepen.html` | A single self-contained file (CSS + JS inlined) — paste straight into a CodePen, as a tribute to the receipt. |

## Run it

It's static. Open `index.html`, or:

```bash
npx serve .      # or: python3 -m http.server
```

## Make it *yours* (the real companies that rejected you)

Most of the companies in here are **real ones Garrett applied to** (pulled from a
250-email "Job Applications" Gmail label), shuffled with a few famous names.

To add or change them, open `script.js` and edit the `REAL_COMPANIES` array near
the top — it's just a list of names:

```js
const REAL_COMPANIES = [
  "Google", "Stripe", "Figma",
  "Your Real Rejection Inc.",   // <- just add the name; that's it
];
```

Each name automatically gets a sender domain (`yourrealrejection.com`) and a
stable avatar color. Want a specific brand color or domain? Add an override to
the `BRAND` map:

```js
const BRAND = {
  "Your Real Rejection Inc.": ["theircompany.com", "#FF0000"],
};
```

Tweak `ROLES` for the job titles to cycle through, and `TEMPLATES` for the
rejection copy. `FIRST_NAME` sets who the emails are addressed to.

### Easter eggs
- One **CVS receipt** email near the top — a tribute to the original pen.
- Type `hire` anywhere on the page.
- Hit Enter in the search bar.
- The "About" (ⓘ) button holds the full disclaimer + brand pitch.

## Shop

The **Shop UNEMPLOYABLE™** button currently points to
[garrettbear.com](https://garrettbear.com) as a placeholder — swap it for the
store URL (search `garrettbear.com` across the files) when the shop is live.

## Re-render the OG image

```bash
convert -background none -density 150 og-image.svg -resize 1200x630 \
  -flatten -background "#f6f8fc" og-image.png
```

## SEO notes

- Canonical + Open Graph + Twitter cards are set in `index.html`.
- They reference `https://unemployable.lol/` as a placeholder domain — update the
  `og:url`, `twitter`, and `canonical` URLs to your real domain before launch.
- JSON-LD `WebSite` structured data is included.

---

## ⚠️ Disclaimer

This is **satire**. It is not Gmail and is **not affiliated with, endorsed by, or
sponsored by Google** or any company shown. All emails are **fictional and
auto-generated** for comedy. Company names are used nominatively to parody the
universally identical job-rejection email. No real rejection emails are
reproduced. Any resemblance to the message you got last Tuesday is purely because
they all write the exact same thing.

© Garrett Bear. Be unemployable on purpose.
