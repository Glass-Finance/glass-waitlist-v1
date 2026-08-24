// Stripe's "Create a card issuing program" card sits on top of a large,
// continuously-rotating, blurred colorful canvas that shows through
// around/behind the card -- not a thin outline. This reproduces that
// weight in pure CSS (no WebGL): an oversized, blurred, rotating
// conic-gradient glow sits behind the card with room to breathe, using
// Glass's own brand colors instead of Stripe's pink/purple/orange.
export default function GlowBorderCard({ children, className = "", radius = 8, glowPadding = 22 }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <style>{`
        @property --glow-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes glowRotate {
          to { --glow-angle: 360deg; }
        }
        .glow-bg {
          --glow-angle: 0deg;
          background: conic-gradient(from var(--glow-angle), #002FA7, #4f46e5, #7c3aed, #6B2FB5, #4f46e5, #002FA7);
          animation: glowRotate 8s linear infinite;
          filter: blur(28px);
        }
      `}</style>
      <div
        className="glow-bg absolute pointer-events-none opacity-70"
        style={{ inset: -glowPadding, borderRadius: radius + glowPadding }}
      />
      <div className="relative" style={{ borderRadius: radius, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
