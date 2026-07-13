// This site is the marketing-only deployment (glasspay.app); the actual
// product lives on a separate deployment (app.glasspay.app), a genuinely
// different codebase/repo now, not just a different route in this one. Any
// "Get Started"/"Sign Up" action has to be a real cross-origin navigation,
// not client-side routing.
export const APP_ORIGIN = import.meta.env.VITE_APP_URL ?? "https://app.glasspay.app";

export function appUrl(path = "") {
  return `${APP_ORIGIN}${path}`;
}
