# Paste this complete brief into Claude Code

Build and publish a professional, mobile-first Riva venue brochure website on GitHub Pages. Work in the supplied `riva-github-kit` directory. I want the final public website link to send to prospective clients on WhatsApp. Implement the work, verify it, and deploy it if GitHub access is available; do not stop at a plan. The starter HTML, CSS and JavaScript are supplied in `docs/`.

## 1. Outcome and technology

- Deliver a responsive, single-page venue introduction, real photo gallery, event tariff, directions, and WhatsApp enquiry flow.
- Use the supplied plain HTML/CSS/JavaScript architecture. No framework, server, paid service, database or build step is required.
- Publish the `docs/` folder from the `main` branch on GitHub Pages. Use the actual existing default branch if this is an existing repository with a different default.
- Use a repository named `riva-events` if creating a new repository and the name is available. Inspect the working directory and existing Git remote before initializing anything. Preserve unrelated files and user changes. Never overwrite an unrelated repository or force-push.
- The final visitor link must be the verified Pages URL, generally `https://USERNAME.github.io/riva-events/`, not the source repository URL. Never fabricate USERNAME or claim a placeholder is a live website.

## 2. Brand and design direction

RIVA is a lakeside event venue at Enamavu Lake, Thrissur, Kerala. Tagline: “Celebration and Beyond”.

Create the feeling of a professionally designed boutique hospitality brochure: quiet, refined, natural and welcoming. Use warm ivory (#F5F1E8), deep forest green (#203D35), muted sand (#E8DFCF) and subtle dividers. These are proposed website styling colours, not claimed official brand specifications. Use generous space, editorial serif headings, clean sans-serif body type and large real photographs. Keep body text legible on phones. Avoid heavy animation, stock resort imagery passed off as Riva, fabricated reviews, badges, ratings, guarantees or invented offers.

Use the actual Riva logo if I supply it. Otherwise use a typographic RIVA heading without inventing an official logo. The starter's large R is a temporary typographic visual, not a venue photograph. Maintain graceful rendering when images are not supplied.

## 3. Page structure

1. Compact header: RIVA, The venue, Tariff, Find us.
2. Hero: location line, editorial headline, tagline, real venue photo, “Explore event packages” button.
3. Introduction: “On the banks of Enamavu Lake in Thrissur, Riva brings people together in a peaceful lakeside setting. From intimate weddings and family celebrations to corporate gatherings, discover a space to make the occasion your own.”
4. Photo gallery: actual Riva photos, captions, responsive grid, accessible enlarged view. No broken images or empty cards if a photo is missing. Preserve natural crops and make focal position editable.
5. Four event tariff cards with exact prices and capacity limits below; each has an enquiry button that selects its package in the enquiry form.
6. Clearly list common inclusions and timing directly below the tariff cards.
7. Location section with the exact Google Maps link below. A direct maps button is sufficient. Do not pretend the location panel is a geographic map, invent coordinates or embed a short URL as an iframe. Add an embedded map only if I supply a verified embed URL.
8. Enquiry section with name, event date, guest count, event type, package and optional notes. It should open WhatsApp with a readable prefilled message, not silently send it or claim a booking is confirmed.
9. Footer and mobile-friendly “Plan your event” shortcut. Include a native share button with a copy-link fallback.

## 4. Exact tariff data

These figures were transcribed from my supplied tariff image. Prices are per event, not per person. Do not calculate a per-person rate.

| Package label | Guest capacity | Price |
|---|---|---|
| Event Package · 100 | Up to 100 guests | ₹55,000 per event |
| Event Package · 200 | Up to 200 guests | ₹65,000 per event |
| Event Package · 300 | Up to 300 guests | ₹75,000 per event |
| Event Package · 500 | Up to 500 guests | ₹95,000 per event |

Timing for all packages: **3 PM – 10 PM**.

Common inclusions, exactly as stated in the source: **two rooms, mini hall, open stage and entire facility**.

Package labels above are neutral editable website labels, not claimed existing branded package names.

Use the note: “Please contact Riva to confirm availability, catering, décor, additional services and applicable taxes for your event.”

Do not invent a GST rate, tax-inclusive claim, deposit percentage, cancellation policy, meal menu, catering inclusion, room capacity, boating inclusion or booking guarantee. Do not import a price from a previous one-off boating invoice. Do not add a pricing calculator that guesses which capacity tier applies. If policies are later supplied, add them to the editable terms array.

## 5. Location and contact

Exact Google Maps location link:
https://maps.app.goo.gl/bCVWC7fKYBdj2ZVm8

Address wording: Enamavu Lake, Thrissur, Kerala. Do not invent a street address or postcode.

The Riva WhatsApp booking number, phone display text, email, Instagram, actual logo and photographs have not been supplied with this code. Ask me for them together in one concise message after inspecting the supplied assets, while completing other work. Never substitute a fake phone number. Optional email/Instagram links should stay hidden if missing. Until the WhatsApp number is provided, retain the honest “Copy enquiry details” fallback; do not label a nonworking button as WhatsApp.

The WhatsApp link must use digits-only country-code format in `https://wa.me/NUMBER?text=ENCODED_MESSAGE`. Confirm that the number is mine to use, validate its format, and use encodeURIComponent for the message. Visitors must press Send themselves.

No form data should be stored by this website or sent to analytics. Do not add payments, a booking backend or client-side secrets.

## 6. Easy customization

Keep all normal editable content in `docs/config.js`: introduction, headline, tagline, map link, contact details, hero photo, gallery photos/captions/focal positions, tariff packages, inclusions, duration, terms and public site URL.

Images belong in `docs/assets/photos/`; use relative paths such as `assets/photos/lakeside.webp` so the site works under the GitHub project path. Preserve the original originals separately when optimizing. Use supplied photographs only and never source private photos without my direction.

This is a static website: changes in config.js and photo assets must be committed and pushed to update what every visitor sees. Do not create a fake password-protected admin screen, put GitHub tokens in browser code, or imply localStorage edits publish publicly. Do not introduce an admin backend unless I separately request one.

In README, show one exact example each for replacing the hero photo, adding a gallery photo, changing a price and setting the WhatsApp number. Explain the edit → commit → push → wait for Pages deployment cycle in beginner-friendly language.

## 7. WhatsApp link preview and SEO

- Set a descriptive page title, meta description, favicon, canonical URL and static Open Graph tags in the HTML head.
- Once the actual Pages URL is known, set the canonical URL, og:url and config.siteUrl to that real HTTPS address.
- Create a 1200×630 JPEG/PNG preview from the supplied Riva photography/logo, or a simple branded text composition if no photo is available. Use “RIVA” and “Celebration and Beyond” with good readability. Do not present generated imagery as a photograph of the property.
- Set og:image to the absolute publicly accessible HTTPS URL, with width, height and alt tags. Metadata must be in HTML source, not just inserted at runtime, because preview crawlers may not run JavaScript.
- Verify the deployed HTML and image URL. Explain that WhatsApp may cache previews; do not promise an immediate preview refresh.
- Keep all other stylesheet/script/photo paths relative to the project base. Do not add a service worker that could cause stale tariffs.

## 8. Accessibility and quality

Semantic sections, labels for every input, a single h1, keyboard focus styles, descriptive photo alt text, adequate contrast, reduced-motion support and touch targets around 44px. Gallery enlargement must support Escape, focus containment and returning focus to the trigger. Keep date validation in the visitor's local timezone. Do not collect information beyond what the enquiry needs.

Verify at 375px, 768px and 1440px. Check horizontal overflow, text wrapping, tariff formatting, header navigation, image error handling, empty photo configuration, gallery keyboard use, missing phone fallback, valid phone link generation, correctly preselected packages and the encoded enquiry contents. Confirm the page also works under `/riva-events/`, not just the domain root. Inspect browser console errors and local asset 404s.

Do not assert successful production checks that were not actually run. If a dependency or browser is unavailable, report the specific limitation.

## 9. GitHub Pages deployment

Use the current official GitHub Pages documentation when setting this up:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Check GitHub CLI authentication if available. Reuse the user's selected existing account and repository. Do not read or expose authentication tokens. If no authorized GitHub access is available, prepare every file and then give me the exact remaining sign-in/upload steps; never invent a deployment.

For a new repository, explain that the published brochure is public and use the intended public brochure assets only. Configure Settings → Pages → Deploy from a branch → main → /docs (or the verified existing default branch). Retain docs/.nojekyll. If using an Actions deployment instead because the repo requires it, use the current official Pages workflow and document the choice; do not enable conflicting deployment methods.

Commit and push the website, then verify deployment status and the public URL. If the real URL requires a metadata update, update canonical/og:url/og:image/config.siteUrl, commit, push and verify the final deployment again. Do not force-push or delete branches.

## 10. Final handoff

Return:
1. The actual working public website link to send on WhatsApp.
2. The source repository link separately.
3. A short guide to editing photos, tariffs and contact details.
4. What you tested and any genuine remaining missing assets or blockers.

Do not stop after generating a mockup. Complete implementation and authorized deployment, subject to available GitHub access and any platform-required approvals.
