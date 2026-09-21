# Architecture

## Current architecture

This repo is the public marketing site for Glass, deployed at **glasspay.app**. It is a frontend-only React 19 single-page application built with Vite 7. React Router 7 owns client-side navigation between the organizations landing page (`/`), the members landing page (`/members`), and the legal pages (`/privacy`, `/terms`, and friends).

It contains **no auth, no dashboards, no backend calls, and no member app**. Anyone trying to sign up, sign in, or use the product is redirected to the real application at `app.glasspay.app` (a separate repository — see the [root README](../README.md) for the two-repo rule).

The main boundaries are:

- `src/components/organizations/` — organizations landing-page sections (Hero, CTA, GetStarted, OurSolution, ProblemSection).
- `src/components/members/` — members landing-page sections (MembersHero, MembersHowItWorks, MembersProblem, MembersSolution, MembersCTA).
- `src/components/howItWorks/` — the shared step-by-step section used by both landing variants.
- `src/components/common/` — components shared across sections (CTASection, SolutionSection, ProblemSection, CloudImage, BrandedSpinner).
- `src/components/ui/` — small visual primitives (BlurText, VariableProximity, TrueFocus).
- `src/components/legal/` — legal page layout shell.
- `src/pages/` — route pages: `index.jsx` (organizations), `MembersHome.jsx`, `legal/*`.
- `src/lib/cloudinary.js` — Cloudinary URL building (`cldUrl`, `cldSrcSet`); the only image-delivery seam on this site.
- `src/hooks/` — `useSeoMeta`, `usePageTitle`, `useScrollReveal`.
- `src/utils/` — `deviceRedirect.js` (`goToApp`) and `monitoring.js` (Sentry wrapper).

## The two-repo rule (applies to every component under `src/components/`)

This site does not independently design its landing pages. Every landing component is a port of the same component in `glass-waitlist` (the app repo), which is the source of truth. If the two sites ever render differently, a change landed in `glass-waitlist` and wasn't copied over — that's a bug to fix, not an intentional difference. Porting steps are in the root [README](../README.md).

The only code difference between a component here and its `glass-waitlist` copy should be navigation: this repo's `goToApp(path, navigate)` must hard-redirect to `app.glasspay.app` for routes that only exist in the app (e.g. `goToApp("/member/join", navigate)`), never an internal `navigate()` to a route that doesn't exist on this domain.

## Image delivery

All site images are served from Cloudinary, not the bundle (see [cloudinary.md](cloudinary.md)). Source files stay in `src/assets/`; `src/lib/cloudinary.js` + `src/components/common/CloudImage.jsx` build the delivery URLs. A small set of assets intentionally stays bundled (mobile auth CSS backdrop, dashboard/hero phone-demo art rendered by the demo overlays) — detailed in [cloudinary.md](cloudinary.md).

## Proposed/future architecture

Future work may fold the shared landing components into a true shared package consumed by both repos instead of hand-porting, and add integration tests around the `goToApp` redirect seams. These are proposals, not current structure.
