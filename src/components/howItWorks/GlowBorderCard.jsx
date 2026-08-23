// Continuously rotating gradient border, wrapping each How We Work card
// image -- pure CSS via the rotating @property angle trick (no JS mouse
// tracking, unlike Stripe's cursor-spotlight version). Degrades gracefully
// where `@property` isn't supported: the angle still animates, just with
// an abrupt reset each loop instead of a perfectly smooth one.
export default function GlowBorderCard({ children, className = "", radius = 8 }) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ borderRadius: radius }}>
      <style>{`
        @property --glow-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes glowRotate {
          to { --glow-angle: 360deg; }
        }
        .glow-border-ring {
          --glow-angle: 0deg;
          /* Glass's own brand gradient (same stops as the navbar scroll
             progress bar and the card backgrounds themselves), not a
             borrowed accent color. */
          background: conic-gradient(from var(--glow-angle), #002FA7, #4f46e5, #7c3aed, #6B2FB5, #002FA7);
          animation: glowRotate 6s linear infinite;
        }
      `}</style>
      <div
        className="glow-border-ring absolute -inset-[2px] pointer-events-none"
        style={{
          borderRadius: radius + 2,
          padding: 2,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative" style={{ borderRadius: radius, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
