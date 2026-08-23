import { useEffect, useRef, useState } from "react";

// Mobile replacement for the desktop grid: each card becomes a full-width
// swipeable slide (same content/animation as desktop, just laid out one
// per screen) instead of a generic vertical stack -- keeps every card's
// full visual richness intact rather than compressing them into a list.
export default function MobileCarousel({ children }) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = slideRefs.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(slides.indexOf(visible.target));
      },
      { root: track, threshold: [0.5, 0.75, 0.9] },
    );
    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [children]);

  function scrollToIndex(i) {
    const el = slideRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="md:hidden">
      {/* scrollbar-width/-webkit-overflow-scrolling have no Tailwind utility
          (no scrollbar plugin installed) -- kept as the one inline style
          here, everything else below is a Tailwind class. */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {children.map((child, i) => (
          <div key={i} ref={(el) => (slideRefs.current[i] = el)} className="flex-none snap-center">
            {child}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {children.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to step ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-[7px] rounded-full border-none p-0 cursor-pointer transition-all duration-200 ${i === active ? "w-5 bg-[#0b2fa8]" : "w-[7px] bg-[#dcdde8]"}`}
          />
        ))}
      </div>
    </div>
  );
}
