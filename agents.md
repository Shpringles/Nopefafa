# AGENTS.md

## Overview
Single-page event invitation site for the inauguration of **Nopéfafa & Royal Wash**
(27 June 2026, Agoè Cacavéli, Lomé, Togo). Static HTML/CSS/JS, no framework, no build step.
Content is in French.

## Architecture & key files
- `index.html` — the whole site: nav, hero (date/time), "Au programme" concept grid (5 features),
  gallery of the original invitation cards, practical infos, and the RSVP form.
- `merci.html` — RSVP confirmation page; the form's `action="/merci"` lands here.
- `styles.css` — single stylesheet. Design tokens live in `:root` (`--ink`, `--gold`, `--gold-grad`, etc.).
- `script.js` — `IntersectionObserver` that adds `.is-visible` to `.reveal` elements on scroll.
- `assets/` — `invitation-recto.jpeg` and `programme.jpeg` (source invitation images, shown in the gallery).
- `netlify.toml` — `publish = "."`, no build command; rewrites `/merci` → `/merci.html`.

## Conventions
- Aesthetic: refined black & gold art-deco. Fonts: Marcellus (display/labels), Cormorant Garamond
  (body accents), Pinyon Script (script flourish), Jost (UI/body). Keep this palette and type system.
- Use CSS variables for all colors; do not hardcode hex values in components.
- Animate only `transform`/`opacity`. New scroll-revealed elements just need the `.reveal` class.
- Avoid pure black (#000) and emojis in UI; use the inline SVG icons already in the markup.

## Netlify Forms (important)
- The RSVP form (`name="rsvp"`) uses `data-netlify="true"` with a honeypot (`bot-field`).
- Netlify detects the form by scanning the static `index.html` at deploy time — keep the form in
  static HTML and keep the hidden `form-name` field. The feature was enabled via the
  netlify-forms skill's `scripts/enable.cjs`; re-run it if form config changes.
- If fields are added/removed, update both the visible form and any expectations in the Netlify UI.

## Don't
- Don't add a build pipeline or framework for this site; it is intentionally static.
- Don't run build commands (`netlify build`, `npm run build`, etc.) — the platform validates builds.
