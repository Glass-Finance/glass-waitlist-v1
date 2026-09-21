// src/components/common/CloudImage.jsx
//
// Drop-in replacement for a raw <img src={localImport} />. Renders a tiny
// (~1-2kb) blurred placeholder immediately — visible even on a slow
// connection before the real image finishes — then cross-fades to the
// full image once it loads. Always serves f_auto/q_auto (best format +
// compression for the requesting browser) and a responsive srcSet so
// phones don't download desktop-sized files.
//
// Usage (replacing the old pattern):
//   Before: import signupIcon from "../../assets/howItWorks/icon-signup.png";
//           <img src={signupIcon} alt="" className="w-[42px] h-[42px]" />
//
//   After:  <CloudImage publicId="glass/howItWorks/icon-signup" alt=""
//                        width={70} className="w-[42px] h-[42px] lg:w-[70px] lg:h-[70px]" />
//
// `width` should be the LARGEST size this image ever renders at (usually
// the desktop/lg width) — srcSet is generated from it, letting the browser
// pick the right one for the actual layout size and screen density.

import { useState } from "react";
import { cldUrl, cldSrcSet } from "../../lib/cloudinary";

// Standard width buckets to generate a srcSet from, capped to whatever is
// <= the requested `width` (plus one step above for retina/dpr headroom).
const WIDTH_STEPS = [200, 400, 600, 800, 1000, 1200, 1600, 2000];

function widthsFor(targetWidth) {
  const steps = WIDTH_STEPS.filter((w) => w <= targetWidth * 2);
  // Always include the exact target width itself so 1x displays are crisp.
  if (!steps.includes(targetWidth)) steps.push(targetWidth);
  return [...new Set(steps)].sort((a, b) => a - b);
}

export default function CloudImage({
  publicId,
  alt,
  width,
  sizes = "100vw",
  className = "",
  priority = false,
  style,
  onClick,
}) {
  const [loaded, setLoaded] = useState(false);

  const src = cldUrl(publicId, { width });
  const srcSet = cldSrcSet(publicId, widthsFor(width));
  const placeholder = cldUrl(publicId, { blur: true });

  return (
    <span
      className={`relative inline-block overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Blur placeholder — tiny payload, shows instantly on slow networks */}
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(8px)" }}
      />
      {/* Real image */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`relative w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}
