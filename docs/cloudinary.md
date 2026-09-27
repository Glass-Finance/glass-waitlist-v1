# Cloudinary assets

Site images are served from Cloudinary instead of the bundle. This pattern
was built out on this repo first and subsequently ported to `glass-waitlist`
the application repo (see that repo's `docs/cloudinary.md`) — keep the two
in sync.

## How it works

1. **Source files stay in `src/assets/`.** They're still the originals; the
   bundle just stops importing them directly.
2. **Upload script** — `scripts/upload-assets-to-cloudinary.mjs` walks
   `src/assets/`, uploads every image to Cloudinary, and derives each
   public id deterministically:

   `"glass/" + <path relative to src/assets, extension stripped>`

   e.g. `src/assets/hero/hero.jpg` → `glass/hero/hero`. No manifest to keep
   in sync — if you know the file path you know the public id. When the same
   basename exists in multiple formats they collide on one public id, so the
   script prefers `png > jpg > jpeg > webp > gif > svg`.

   ```bash
   node scripts/upload-assets-to-cloudinary.mjs --dry-run   # preview mapping
   node scripts/upload-assets-to-cloudinary.mjs             # upload everything
   ```

   Requires `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` /
   `CLOUDINARY_API_SECRET` in `.env` (script-time only — never shipped, and
   `.env` is gitignored). `VITE_CLOUDINARY_CLOUD_NAME` is the public
   browser-side value read by `src/lib/cloudinary.js`.

3. **Delivery helper** — `src/lib/cloudinary.js` builds CDN URLs
   (`cldUrl`) and responsive `srcSet` strings (`cldSrcSet`). No Cloudinary
   SDK is ever shipped to the browser; every transformation is a URL
   segment (`f_auto`, `q_auto`, `w_`, `dpr_`, `c_limit`).
4. **Components** — one of two render styles:
   - `CloudImage` (`src/components/common/CloudImage.jsx`) for images
     rendered in a fixed-size box: blur-up LQIP placeholder, responsive
     srcSet, lazy/eager control.
   - Raw `cldUrl()`/`cldSrcSet()` `<img>` for aspect-driven images whose
     natural size decides the box height (`w-full h-auto`), and `cldUrl()`
     for CSS backgroundImage.

## Use-case carousel photos

The Use Cases section (`src/components/UseCases.jsx`) shuffles 12 photos per
category (48 total) from Cloudinary:

- **Manifest** — `src/components/usecasePhotos.js` is the source of truth:
  `publicId` (`glass/usecase/<category>/<code>`), the original Pexels URL
  (provenance — [Pexels license](https://www.pexels.com/license/): free for
  commercial use, attribution not required) and `alt` text. Imported by both
  the component (public ids + alts) and the upload script.
- **Upload script** — manifest-driven, uploads by fetching each original URL,
  and skips public ids that already exist, so it is re-runnable after adding
  photos:

  ```bash
  node scripts/upload-usecase-photos.mjs --dry-run   # preview
  node scripts/upload-usecase-photos.mjs             # upload missing photos
  ```

- Delivery uses `q_auto:best` at widths `[640, 960, 1280, 1600]` (`cldSrcSet`
  accepts an optional opts object forwarded to `cldUrl` per width).

## Shared `glass/` namespace across the two repos

`glass-waitlist` and `glass-waitlist-v1` share the same cloud and the same
`glass/` prefix, so matching brand assets (`Glass.webp`, `hero/hero`,
`solution/*`, `problem/*`, ...) resolve to the **same public id** on
purpose — the two repos' landing components are meant to render
identically. Because uploads use `overwrite: true`, whichever repo runs the
script last wins for a shared id; keep the source files in sync between
repos (the two-repo rule in the root README).

## What stays local

- `src/assets/background.webp`, `auth/mobile-auth.webp`,
  `auth/auth-background-mobile.webp` — CSS `background-image` assets still
  referenced by bundled CSS.
- `src/assets/hero/phone-demo/**` + the app-screen PNGs under
  `src/assets/design_handoff_phone_hero/**` — rendered inline by the
  `PhoneHeroDemo` / `DashboardOverlay` components at many small sizes;
  kept bundled until those are migrated.
- `src/assets/problem/problem-glow.webp`, `Overlay*.webp`, `laptop*.jpg`,
  `desktopdash.png`, `mobiledash.png` — decorative/draft assets not yet
  wired to Cloudinary.
- Debug and handoff files (`laptop.jpg`, the Figma `.dc.html` drafts)
  — not serving assets at all.

## Tests

`src/lib/cloudinary.test.js` covers `cldUrl` (defaults, width/dpr, blur,
custom crop/quality), `cldSrcSet`, and the `CloudImage` LQIP render
(placeholder swap, priority eager/fetchpriority, srcSet) — run with
`npm test` in CI. The same test suite exists in `glass-waitlist`; keep the
two in sync when the URL pattern changes.
