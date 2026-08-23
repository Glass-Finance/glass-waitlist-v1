import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

// Ported from the design handoff (checkmark-success-animation.dc.html) —
// structure, timing, easing, and colors are final per that spec. Reused
// wherever a static green checkmark previously stood in for a
// success/verified state. Trigger is scroll-into-view (once) rather than
// mount, since this always lives inside a card that's off-screen at first.
//
// Positions/sizes/colors below are static Tailwind classes. Only the
// per-element `animation` (name+duration+easing+delay+fill-mode) stays as
// an inline style, because each accent's delay is computed from the
// `badgeDelay` prop at render time via string interpolation -- Tailwind's
// JIT scanner can't see runtime-built class strings, so an arbitrary-value
// class here would silently compile to no CSS at all.
const ACCENTS = [
  { glyph: "★", cls: "left-[92px] top-[2px] text-[14px] text-[oklch(0.5_0.15_145)]" },
  { glyph: "●", cls: "left-[12px] top-[54px] text-[8px] text-[oklch(0.78_0.1_145)]" },
  { glyph: "●", cls: "left-[170px] top-[48px] text-[8px] text-[oklch(0.5_0.15_145)]" },
  { glyph: "★", cls: "left-[14px] top-[108px] text-[12px] text-[oklch(0.5_0.15_145)]" },
  { glyph: "★", cls: "left-[150px] top-[138px] text-[10px] text-[oklch(0.78_0.1_145)]" },
  { glyph: "●", cls: "left-[90px] top-[174px] text-[7px] text-[oklch(0.5_0.15_145)]" },
];
const STAGGER = 0.08;
const ACCENT_DUR = 0.45;

export default function SuccessBadge({ message, subMessage, badgeDelay = 0.1 }) {
  const stageRef = useRef(null);
  const inView = useInView(stageRef, { once: true, amount: 0.6 });
  const [checkOffset, setCheckOffset] = useState(60);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const checkStart = badgeDelay * 1000 + 550;
    timerRef.current = setTimeout(() => {
      const start = performance.now();
      const dur = 380;
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setCheckOffset(60 * (1 - eased));
        if (p < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, checkStart);
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [inView, badgeDelay]);

  const accentStart = badgeDelay + 0.95;
  const ringDelay = badgeDelay + 0.5;
  const textDelay = accentStart + ACCENTS.length * STAGGER + 0.15;

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <style>{`
        @keyframes sbBadgePop {
          0% { transform: translateY(50px) scale(0.3); opacity: 0; }
          60% { transform: translateY(-6px) scale(1.1); opacity: 1; }
          80% { transform: translateY(2px) scale(0.96); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes sbAccentPop {
          0% { transform: scale(0) rotate(-20deg); opacity: 0; }
          55% { transform: scale(1.25) rotate(4deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes sbRingPulse {
          0% { transform: scale(0.6); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes sbTextFade {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div ref={stageRef} className="relative w-[200px] h-[200px] flex items-center justify-center">
        <div
          className="absolute w-[130px] h-[130px] rounded-full bg-[oklch(0.6_0.18_145)] opacity-0"
          style={inView ? { animation: `sbRingPulse 1.8s ease-out ${ringDelay}s both` } : undefined}
        />

        {ACCENTS.map((a, i) => (
          <div
            key={i}
            className={`absolute opacity-0 origin-center ${a.cls}`}
            style={
              inView
                ? { animation: `sbAccentPop ${ACCENT_DUR}s cubic-bezier(0.34,1.56,0.64,1) ${accentStart + i * STAGGER}s both` }
                : undefined
            }
          >
            {a.glyph}
          </div>
        ))}

        <div
          className="relative w-[112px] h-[112px] opacity-0"
          style={inView ? { animation: `sbBadgePop 0.65s cubic-bezier(0.34,1.56,0.64,1) ${badgeDelay}s both` } : undefined}
        >
          <svg width="112" height="112" viewBox="0 0 24 24" className="block">
            <defs>
              <filter id="sbRoundBadge" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
              </filter>
            </defs>
            <path
              d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72 3.1 5.53l.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z"
              fill="#008000"
              filter="url(#sbRoundBadge)"
            />
          </svg>
          <svg width="50" height="39" viewBox="0 0 44 34" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <path
              d="M4 17 L17 29 L40 4"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60"
              strokeDashoffset={checkOffset}
            />
          </svg>
        </div>
      </div>

      <div
        className="mt-7 text-[20px] text-[oklch(0.25_0.01_275)] text-center opacity-0"
        style={inView ? { animation: `sbTextFade 0.5s ease-out ${textDelay}s both` } : undefined}
      >
        {message}
      </div>
      {subMessage && (
        <div
          className="mt-2 text-[14px] text-[oklch(0.5_0.01_275)] text-center max-w-[300px] opacity-0"
          style={inView ? { animation: `sbTextFade 0.5s ease-out ${textDelay}s both` } : undefined}
        >
          {subMessage}
        </div>
      )}
    </div>
  );
}
