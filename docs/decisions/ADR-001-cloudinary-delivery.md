# ADR-001: Cloudinary delivery for site images

- **Status:** Accepted
- **Date:** 2026-09-21
- **Sprint:** 1 (current landing visual-refresh + Cloudinary sprint)

## Context

The marketing site shipped every image from the bundle (`import img from
"../../assets/..."`), so each page upgrade and each deployment shipped the
full asset set to every visitor, at whatever resolution the source file
was. The same assets exist in `glass-waitlist` (the app repo), which serves
an identical landing experience — two codebases, two copies of each brand
asset, no shared delivery story.

The app had already begun moving to Cloudinary; the marketing site needed
the same treatment so both domains render the same assets from the same
cloud with proper responsive scaling and format negotiation (`f_auto`/`q_auto`).

## Decision

Serve all site images from Cloudinary:

1. **Deterministic public ids.** `glass/` + path relative to `src/assets/`,
   extension stripped (e.g. `glass/hero/hero`). No manifest to keep in sync
   — a file's path encodes its public id.
2. **Plain URL building, no SDK.** `src/lib/cloudinary.js` exports `cldUrl`
   and `cldSrcSet`; every transformation is a URL segment, so nothing
   Cloudinary-specific is ever shipped to the browser.
3. **LQIP component.** `CloudImage` (`src/components/common/CloudImage.jsx`)
   renders a ~1–2kb blurred placeholder immediately, then cross-fades to the
   responsive `srcSet` image when it loads.
4. **Shared `glass/` namespace with the app repo.** Both repos use the same
   cloud and the same prefix, so matching brand assets collide on one public
   id by design and the two sites render identically.
5. **`overwrite: true` uploads.** Whichever repo uploads last wins a shared
   id — written down as a coordination rule in the README, with source files
   kept in sync between the repos.
6. **A small local-only set stays bundled** (CSS `background-image` assets,
   phone-demo art for the overlays, decorations, handoff drafts) — see
   `docs/cloudinary.md`; the upload script — and future batches — skip or
   defer them deliberately rather than uploading the whole tree blindly.

## Consequences

- **Positive:** pages stop shipping every asset at maximum resolution;
  browsers negotiate format (`webp`/`avif`) and pick the right width from
  the `srcSet`; brand assets are single-sourced across the two repos with no
  manifest file to corrupt; `.env` now carries the Cloudinary credentials
  and is gitignored so secrets can't be committed.
- **Negative:** a missing `CLOUDINARY_CLOUD_NAME` in a deployed env breaks
  every image on the site (dev prints a loud error); shared ids are
  last-writer-wins — an admin running the upload script in only one repo can
  silently change what the other repo renders until the source files are
  re-synced; the LQIP component can't be used for aspect-driven images
  (`w-full h-auto`), which must fall back to raw `cldUrl`/`cldSrcSet` `<img>`s
  — two patterns, not one.

## Alternatives considered

- **Keep bundling images and ship larger source files.** Rejected: no format
  negotiation, no responsive widths, no shared delivery with the app repo.
- **A Cloudinary SDK at runtime in the browser.** Rejected: unnecessary
  payload; URL building is a pure string operation.
- **A committed manifest mapping local paths to uploaded ids.** Rejected:
  more moving parts to keep in sync; the deterministic path scheme already
  solves the mapping.
- **A separate cloud/namespace for the marketing site.** Rejected: breaks
  the "two sites render identically" invariant and doubles the asset
  management burden for zero benefit.
