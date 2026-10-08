# Riva website — Claude Code handoff

This kit contains editable website code and a detailed build/deployment brief. It has not been published to GitHub.

## Quick start

1. Extract this ZIP into a folder on your computer.
2. Open the extracted `riva-github-kit` folder in Claude Code.
3. Tell Claude: **Read CLAUDE_CODE_PROMPT.md, complete this Riva website, and deploy it to my GitHub Pages account.**
4. Supply your actual Riva photos, logo and WhatsApp booking number when asked.

`docs/index.html` is the webpage, `docs/styles.css` controls appearance, `docs/app.js` provides interactions, and `docs/config.js` holds editable content. `CLAUDE_CODE_PROMPT.md` is the full brief to copy/paste if preferred.

## Preview without deployment

From the kit folder run:

```sh
python3 -m http.server 8000 --directory docs
```

Open http://localhost:8000. Stop the server with Ctrl+C. No package installation is required. The missing-photo default uses typography; the gallery appears when photos are added. If the booking number is empty, the form copies an enquiry instead of opening WhatsApp.

## Edit content

In `docs/config.js`, change the relevant value and retain quotes, commas and brackets.

Hero photo:

```js
heroPhoto: 'assets/photos/lakeside.webp',
heroAlt: 'The Riva lawn beside Enamavu Lake',
```

Gallery photo (place the actual photo in `docs/assets/photos/` first):

```js
photos: [
  {src: 'assets/photos/lawn.webp', alt: 'Riva event lawn', caption: 'Gather by the lake', position: '50% 50%'}
],
```

Tariff example — change only the intended package price; numbers have no commas:

```js
{id: 'event-100', name: 'Event Package · 100', guests: 100, price: 55000}
```

WhatsApp number — replace the placeholder with your own actual country code + number, digits only:

```js
whatsappNumber: '91YOUR10DIGITNUMBER',
phoneDisplay: '+91 YOUR NUMBER',
```

The example above is deliberately not a working number. Remove placeholder letters when setting your actual number. The code rejects nonnumeric values and retains the copy fallback.

## Update the live website

Edit and save → commit changes in GitHub/Claude Code → push to the connected branch → wait for the successful Pages deployment. Replacing a photo with the same filename may require refreshing a cached page; a new filename makes updates clearer. Local edits alone do not update the public website.

GitHub Pages should publish the `docs` folder. The repository URL shows source code; the Pages URL shows the visitor website. Both are provided separately by Claude after successful publishing. GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Data used and remaining setup

Tariff source: the supplied Riva sheet named “WhatsApp Image 2026-10-06 at 23.10.10.jpeg”. Prices: ₹55,000/₹65,000/₹75,000/₹95,000 for up to 100/200/300/500 guests. Timing: 3 PM–10 PM. Inclusions: two rooms, mini hall, open stage and entire facility. Package names are proposed neutral labels. No tax rate, food inclusion, boating inclusion or booking policy has been assumed.

Google Maps link: https://maps.app.goo.gl/bCVWC7fKYBdj2ZVm8

Still to supply/set: real photos, optional official logo, actual WhatsApp number, GitHub account/repository access, real published URL, and the final static sharing preview image/metadata. The detailed Claude brief covers these final steps. The kit includes no credentials or backend.

## Validation

Tested in headless Chromium at 375px, 768px and 1440px (no horizontal overflow, no console errors, no 404s), under the `/riva-events/` sub-path, including gallery open/Escape/focus return, a missing gallery photo, package preselection, and the encoded WhatsApp message (using a temporary test number, not committed).

Public link (once GitHub Pages is switched on for `main` → `/docs`): https://sandeepkottai281-oss.github.io/riva-events/
