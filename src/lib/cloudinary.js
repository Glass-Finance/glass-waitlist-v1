// src/lib/cloudinary.js
//
// Plain URL building — no Cloudinary SDK shipped to the browser. Every
// transformation is just a string in the URL, resolved by Cloudinary's CDN
// on request.
//
// publicId matches the upload script's scheme 1:1, e.g.:
//   "glass/hero/hero"
//   "glass/howItWorks/icon-signup"

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

if (!CLOUD_NAME && import.meta.env.DEV) {
  // Loud in dev, silent in prod build — a missing env var here means every
  // image on the page breaks, so this should never fail quietly.
  console.error("VITE_CLOUDINARY_CLOUD_NAME is not set — Cloudinary images will 404.");
}

/**
 * Build a Cloudinary delivery URL.
 * @param {string} publicId - e.g. "glass/hero/hero"
 * @param {object} [opts]
 * @param {number} [opts.width] - target width in px (w_)
 * @param {number} [opts.dpr] - device pixel ratio (dpr_), e.g. 2 for retina
 * @param {string} [opts.crop] - crop mode (c_), default "limit" (never upscale)
 * @param {string} [opts.quality] - default "auto"
 * @param {boolean} [opts.blur] - low-quality blurred placeholder variant
 */
export function cldUrl(publicId, opts = {}) {
  const { width, dpr, crop = "limit", quality = "auto", blur = false } = opts;

  const parts = ["f_auto", `q_${quality}`, `c_${crop}`];
  if (width) parts.push(`w_${width}`);
  if (dpr) parts.push(`dpr_${dpr}`);
  if (blur) parts.push("e_blur:1200", "q_auto:low", "w_32");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${parts.join(",")}/${publicId}`;
}

/**
 * Build a srcSet string across a set of widths, for responsive delivery.
 * @param {string} publicId
 * @param {number[]} widths - e.g. [400, 800, 1200, 1600]
 */
export function cldSrcSet(publicId, widths) {
  return widths.map((w) => `${cldUrl(publicId, { width: w })} ${w}w`).join(", ");
}
