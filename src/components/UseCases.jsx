import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
// import case1 from "../assets/usecase/case1.webp";
// import case2 from "../assets/usecase/case2.webp";
// import case3 from "../assets/usecase/case3.webp";
// import case4 from "../assets/usecase/case4.webp";

// ── Import your real icons ──────────────────────────────────────────────────
// Place your 4 card icons in src/assets/usecase/
import iconSchools from "../assets/usecase/icon-schools.webp";
import iconProfessional from "../assets/usecase/icon-professional.webp";
import iconClubs from "../assets/usecase/icon-clubs.webp";
import iconReligious from "../assets/usecase/icon-religious.webp";

// ── Import your corner line assets ─────────────────────────────────────────
// Two variants: top-left corner and bottom-right corner
// Place them in src/assets/usecase/
import cornerTL from "../assets/usecase/corner-tl.webp"; // top-left curved line
import cornerBR from "../assets/usecase/corner-br.webp"; // bottom-right curved line

// ─── BlurText (inline) ────────────────────────────────────────────────────────
const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const kf = {};
  keys.forEach((k) => {
    kf[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return kf;
};

function BlurText({
  text = "",
  delay = 70,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.15,
  stepDuration = 0.4,
  centered = false,
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  const from =
    direction === "top"
      ? { filter: "blur(8px)", opacity: 0, y: -18 }
      : { filter: "blur(8px)", opacity: 0, y: 18 };
  const to = [
    { filter: "blur(3px)", opacity: 0.5, y: direction === "top" ? 2 : -2 },
    { filter: "blur(0px)", opacity: 1, y: 0 },
  ];
  const totalDuration = stepDuration * to.length;
  const times = Array.from({ length: to.length + 1 }, (_, i) => i / to.length);
  const kf = buildKeyframes(from, to);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: centered ? "center" : "flex-start",
        width: centered ? "100%" : "auto",
      }}
    >
      {elements.map((seg, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={from}
          animate={inView ? kf : from}
          transition={{
            duration: totalDuration,
            times,
            delay: (i * delay) / 1000,
            ease: "easeOut",
          }}
        >
          {seg === " " ? "\u00A0" : seg}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Card icon map — uses your imported images ────────────────────────────────
const CARD_ICONS = {
  schools: iconSchools,
  professional: iconProfessional,
  clubs: iconClubs,
  religious: iconReligious,
};

// ─── Use case card ──────────────────────────────────────────────────────────
function UseCaseCard({ title, desc, variant, entryDelay }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);
  const accent = "#001F6E";

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        position: "relative",
        height: "380px",
        borderRadius: 24,
        background: "#F5F5F8",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.75) inset, 0 2px 20px rgba(28,43,138,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: "32px 28px",
        textAlign: "center",
        overflow: "hidden",
        opacity: 0,
        animation: inView
          ? `ucCardIn 0.7s cubic-bezier(0.22,1,0.36,1) ${entryDelay}ms forwards`
          : "none",
      }}
    >
      {/* Top-left corner line — imported asset */}
      <img
        src={cornerTL}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 80,
          height: 80,
          objectFit: "contain",
          opacity: 0.55,
          pointerEvents: "none",
        }}
        loading="lazy"
        decoding="async"
      />

      {/* Bottom-right corner line — imported asset (rotated 180°) */}
      <img
        src={cornerBR}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 80,
          height: 80,
          objectFit: "contain",
          opacity: 0.45,
          pointerEvents: "none",
        }}
        loading="lazy"
        decoding="async"
      />

      {/* Icon circle — your imported image */}
      <img
        src={CARD_ICONS[variant]}
        alt={title}
        style={{
          width: 72,
          height: 72,
          objectFit: "contain",
          marginBottom: 4,
        }}
        loading="lazy"
        decoding="async"
      />

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(20px,4vw,24px)",
          fontWeight: 500,
          color: accent,
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {title}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontSize: 18,
          color: "rgba(0,0,0,0.5)",
          lineHeight: 1.6,
          margin: 0,
          maxWidth: 360,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

// ─── Cases data ───────────────────────────────────────────────────────────────
const cases = [
  {
    title: "Schools & Alumni",
    desc: "Collect fees and dues without stress.",
    variant: "schools",
  },
  {
    title: "Professional Bodies",
    desc: "Manage dues and certification fees effortlessly.",
    variant: "professional",
  },
  {
    title: "Clubs & Associations",
    desc: "Collect monthly dues and event fees in seconds, not hours.",
    variant: "clubs",
  },
  {
    title: "Religious Organizations",
    desc: "Track tithes and contributions with full transparency.",
    variant: "religious",
  },
];

// ─── Main export ──────────────────────────────────────────────────────────────
export default function UseCases() {
  const containerRef = useRef(null);

  return (
    <>
      <style>{`
        @keyframes ucCardIn {
          from { opacity: 0; transform: translateY(36px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <section
        ref={containerRef}
        className="py-20 md:py-28 relative isolate overflow-hidden"
        id="use-cases"
      >

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            {/* Badge */}
            <div
              style={{
                marginBottom: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span className="inline-flex items-center border border-[#1C2B8A]/25 text-[#1C2B8A] text-[13px] font-medium px-5 py-2 rounded-full">
                Use Cases
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(26px,5.5vw,64px)",
                  fontWeight: 700,
                  color: "#0f1d6e",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  maxWidth: 1080,
                  textAlign: "center",
                }}
              >
                <BlurText
                  text="Built for every Nigerian community"
                  animateBy="words"
                  direction="top"
                  delay={65}
                  stepDuration={0.42}
                  centered
                />
              </h2>
            </div>

            {/* Subtext */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontSize: "clamp(15px,2vw,17px)",
                  color: "rgba(0,0,0,0.6)",
                  maxWidth: 700,
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                Whether you run a small club or a national association, Glass scales with you.
              </p>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {cases.map(({ title, desc, variant }, i) => (
              <UseCaseCard
                key={title}
                title={title}
                desc={desc}
                variant={variant}
                entryDelay={150 + i * 110}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
