// Shared outer card chrome for every "How We Work" tile: 8px radius, 1px
// #E0E0EB border, overflow hidden (this is what actually crops the
// oversized inner mockups down to their visible portion, matching the
// Figma reference where mockups intentionally bleed past the card edge).
// Callers pass exact width/height/background via `className` (Tailwind
// arbitrary values) so every value stays a static utility class rather
// than an inline style prop.
export default function Card({ className = "", blobs, children }) {
  return (
    <div
      className={`relative overflow-hidden border border-[#E0E0EB] rounded-[8px] shrink-0 ${className}`}
    >
      {blobs}
      {children}
    </div>
  );
}
