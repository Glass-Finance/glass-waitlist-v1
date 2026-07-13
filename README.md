# Glass — Marketing Site

This is the public marketing site for Glass, deployed at **glasspay.app**. It's the landing pages only — no auth, no dashboards, no member app. Anyone trying to sign up, sign in, or actually use the product is sent to the real application at **app.glasspay.app**, a completely separate repo and deployment ([`glass-waitlist`](https://github.com/Glass-Finance/glass-waitlist)).

> Named `glass-waitlist-v1` because it started life as `glass-waitlist`, the original landing page repo, before the actual application grew into its own separate codebase (the plain `glass-waitlist` repo). The two names are easy to mix up — see the table below.

## Two-repo setup — read this before touching landing-page components

| Repo | Deploys to | What it is |
|---|---|---|
| [`glass-waitlist`](https://github.com/Glass-Finance/glass-waitlist) | `app.glasspay.app` | The actual product — auth, onboarding, dashboards, member app. **Source of truth for landing-page components.** |
| `glass-waitlist-v1` (this repo) | `glasspay.app` | This repo — the public marketing site only. |

**This repo does not independently design its landing pages.** Every component under `src/components/` (Navbar, Footer, Hero, ProblemSection, OurSolution, GetStarted, CTA, Usecases, TrustedBy, Security, Pricing, WhyGlass, the `howItWorks/` and `members/` trees, the legal pages) is a port of the same component in `glass-waitlist`. If the two ever look different, it's because a change landed in `glass-waitlist` and didn't get copied over here yet — that's a bug to fix, not an intentional difference, unless a specific instruction says otherwise.

**When `glass-waitlist`'s landing pages change, do this:**
1. Diff the changed component(s) against this repo's copy (same relative path under `src/components/`, `src/hooks/`, `src/pages/legal/`).
2. Copy the file over as-is. Almost everything ports with **zero changes** because both repos use an identically-named `goToApp(path, navigate)` helper (`src/utils/deviceRedirect.js` in both) — it does an internal SPA navigate on `app.glasspay.app` and a hard cross-origin redirect to `app.glasspay.app` from `glasspay.app`.
3. **The one thing to check on every port:** if the component calls `navigate("/some-app-route")` directly instead of through `goToApp`, that route doesn't exist on this domain — rewrite it to `goToApp("/some-app-route", navigate)`. (This bit `membersHero.jsx`, `membersHowItWorks.jsx`, and `membersCTA.jsx` the first time — they called `navigate(isMobileDevice() ? "/member/join" : mobileRequiredPath(...))` directly.)
4. Also check for **public-root asset references** (`src="/Glass.webp"` etc., not a bundled `import`) — those need the actual file copied into this repo's `public/` folder too, not just `src/assets/`. This is the easiest thing to miss since a missing bundled import breaks the build loudly, but a missing public-root file just silently 404s a broken image.
5. Run `npm run build && npm run lint` before pushing. Both repos share the same (deliberately relaxed) `eslint.config.js` — if lint fails here but not in `glass-waitlist`, the configs have drifted; fix the config, don't rewrite the component to dodge it.

If you're not sure whether something ported cleanly, spin up both dev servers side by side (`npm run dev` in each, different ports) and compare the same route.

## Tech stack

Same core stack as `glass-waitlist`, minus everything app-specific (no React Query, no Axios, no auth):

- **React 19** + **React Router 7**
- **Vite 7**
- **Tailwind CSS 4** (CSS-first config, no `tailwind.config.js`)
- **Framer Motion / Motion / GSAP** for animation
- **Sentry** (`@sentry/react`) for crash reporting, gated behind an optional env var — disabled unless configured
- **ESLint 9**

## Getting started

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173` by default.

### Environment variables

Neither of these is required to run locally — both have safe fallbacks baked in.

| Variable | Required | Purpose |
|---|---|---|
| `VITE_APP_URL` | No | Origin of the real application that "Get Started" / "Sign In" / "Join a Community" buttons redirect to. Defaults to `https://app.glasspay.app` if unset — so it's safe to skip even in production unless you specifically need to point at a different app deployment (e.g. a staging environment). |
| `VITE_SENTRY_DSN` | No | Enables crash/error reporting (`src/utils/monitoring.js`). Leave unset to run with monitoring silently disabled — the current default everywhere including production, until/unless a Sentry project is set up for this site specifically. |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | Run ESLint over the project |
| `npm run preview` | Serve the production build locally |

## Project structure

```
src/
├── components/
│   ├── organizations/   # "Organizations" landing page sections (Hero, CTA, etc.)
│   ├── members/          # "Members" landing page sections
│   ├── howItWorks/       # Shared step-by-step section used by both landing variants
│   ├── legal/            # Legal page layout shell
│   └── ui/                # Small shared visual primitives (BlurText, VariableProximity, etc.)
├── hooks/                # useSeoMeta, usePageTitle, useScrollReveal
├── pages/
│   ├── index.jsx          # Organizations landing page ("/")
│   ├── membersHome.jsx     # Members landing page ("/members")
│   └── legal/              # Privacy, Terms, Cookies, Acceptable Use, Refund Policy
└── utils/
    ├── deviceRedirect.js   # goToApp() cross-origin navigation — see above
    └── monitoring.js       # Sentry wrapper, no-ops without VITE_SENTRY_DSN
```

## What NOT to do here

- Don't add auth pages, dashboards, or anything behind a login — that's `glass-waitlist`'s job. This repo has no backend calls at all.
- Don't hand-diverge a landing component "just for the marketing site" without a reason — it'll get silently clobbered the next time someone ports from `glass-waitlist`, and in the meantime the two sites look inconsistent to visitors bouncing between them.
- Don't loosen `eslint.config.js` here independently of `glass-waitlist` — keep the two in sync so ported components lint the same way in both places.
