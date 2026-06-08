// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { motion } from "motion/react";
// import { useEffect, useRef, useState } from "react";
// import waveBg from "../../assets/hero/hero.jpg";
// import iphone from "../../assets/hero/iphone.png";
// import BlurText from "../ui/BlurText";
// import VariableProximity from "../ui/VariableProximity";
// import TextType from "../ui/TextType";
// import MembersDashboard from "../MemberDashboardOverlay";

// export default function MembersHero() {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);
//   const [headlineDone, setHeadlineDone] = useState(false);
//   const [subDone, setSubDone] = useState(false);
//   const [btnVisible, setBtnVisible] = useState(false);

//   // Bottom wave fade on scroll
//   const [waveOpacity, setWaveOpacity] = useState(0);
//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current) return;
//       const { top, height } = sectionRef.current.getBoundingClientRect();
//       setWaveOpacity(Math.min(1, Math.max(0, (-top / height - 0.45) / 0.25)));
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Show button after sub-text finishes
//   useEffect(() => {
//     if (subDone) {
//       const t = setTimeout(() => setBtnVisible(true), 180);
//       return () => clearTimeout(t);
//     }
//   }, [subDone]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col justify-center pt-[68px] overflow-hidden"
//     >
//       {/* ── Wave image background ── */}
//       <div
//         className="absolute inset-0 w-full h-full"
//         style={{
//           backgroundImage: `url(${waveBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* ── Very dark overlay — left heavy so text is always legible ── */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(105deg, rgba(2,3,18,0.97) 0%, rgba(3,4,22,0.95) 35%, rgba(6,3,20,0.88) 60%, rgba(10,4,24,0.75) 100%)",
//         }}
//       />

//       {/* ── Glow blobs ── */}
//       <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
//         <div
//           className="absolute bottom-0 right-0 w-[700px] h-[480px]"
//           style={{
//             background:
//               "radial-gradient(ellipse at bottom right, rgba(120,10,150,0.4) 0%, transparent 65%)",
//             filter: "blur(60px)",
//           }}
//         />
//         <div
//           className="absolute bottom-0 left-0 w-[500px] h-[320px]"
//           style={{
//             background:
//               "radial-gradient(ellipse at bottom left, rgba(80,8,110,0.28) 0%, transparent 60%)",
//             filter: "blur(70px)",
//           }}
//         />
//       </div>

//       {/* ════════════════════════════════════════════════
//           DESKTOP — two-column layout
//       ════════════════════════════════════════════════ */}
//       <div className="hidden sm:flex relative z-10 w-full max-w-[1280px] mx-auto px-8 lg:px-16 min-h-[calc(100vh-68px)] flex-row items-center">
//         {/* ── Left: text ── */}
//         <div
//           ref={containerRef}
//           className="w-1/2 flex flex-col justify-center py-20"
//           style={{ position: "relative" }}
//         >
//           {/* Headline — BlurText word-by-word */}
//           <div
//             className="mb-6"
//             style={{
//               fontSize: "clamp(44px,6.5vw,70px)",
//               fontWeight: 800,
//               lineHeight: 1.05,
//               letterSpacing: "-0.03em",
//             }}
//           >
//             <BlurText
//               text="Pay Your Dues"
//               delay={100}
//               animateBy="words"
//               direction="top"
//               stepDuration={0.38}
//               className="text-white block"
//               style={{
//                 fontSize: "clamp(44px,6.5vw,70px)",
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 letterSpacing: "-0.03em",
//               }}
//               onAnimationComplete={() => {
//                 /* first line done */
//               }}
//             />
//             {/* "Effortlessly" — TextType cycles through synonyms */}
//             <span
//               style={{
//                 display: "block",

//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//                 backgroundClip: "text",
//                 fontSize: "clamp(44px,6.5vw,70px)",
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 letterSpacing: "-0.03em",
//                 minHeight: "1.1em",
//               }}
//             >
//               <TextType
//                 text={[
//                   "Effortlessly",
//                   "Instantly",
//                   "Transparently",
//                   "With Ease",
//                 ]}
//                 typingSpeed={55}
//                 deletingSpeed={35}
//                 pauseDuration={2600}
//                 loop
//                 showCursor
//                 cursorCharacter="|"
//                 cursorClassName="text-purple-400"
//                 onSentenceComplete={() => setHeadlineDone(true)}
//               />
//             </span>
//           </div>

//           {/* Sub-text — VariableProximity (weight responds to cursor) */}
//           <div className="mb-10" style={{ maxWidth: 440 }}>
//             <VariableProximity
//               label="Stop sending screenshots of receipts. Get instant proof of payment, track your history, and never miss a deadline again."
//               fromFontVariationSettings="'wght' 300, 'opsz' 9"
//               toFontVariationSettings="'wght' 700, 'opsz' 40"
//               containerRef={containerRef}
//               radius={140}
//               falloff="gaussian"
//               className="leading-relaxed"
//               style={{
//                 fontSize: 16,
//                 color: "rgba(255,255,255,0.5)",
//                 lineHeight: 1.7,
//                 fontFamily: "Inter,-apple-system,sans-serif",
//               }}
//             />
//           </div>

//           {/* CTA button — fades in after text */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.55,
//               ease: [0.22, 1, 0.36, 1],
//               delay: 1.2,
//             }}
//           >
//             <button
//               onClick={() => navigate("/waitlist")}
//               className="inline-flex items-center gap-2 bg-white text-[#0c1020] text-[15px] px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 shadow-lg shadow-black/30"
//               style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
//             >
//               Join A Community
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{
//                   duration: 1.4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{ display: "inline-flex", alignItems: "center" }}
//               >
//                 <ArrowRight className="w-4 h-4" />
//               </motion.span>
//             </button>
//           </motion.div>
//         </div>

//         {/* ── Right: iPhone + dashboard overlaid inside screen ── */}
//         <div className="w-1/2 relative self-stretch flex items-end justify-end pr-4">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
//             style={{ position: "relative", width: 480, maxWidth: "100%" }}
//           >
//             {/* Phone frame — sits on top of the dashboard */}
//             <img
//               src={iphone}
//               alt="Glass app on iPhone"
//               className="relative block w-full"
//               style={{
//                 zIndex: 10,
//                 height: "auto",
//                 objectFit: "contain",
//                 filter: "drop-shadow(0 32px 80px rgba(120,10,160,0.6))",
//                 position: "relative",
//               }}
//               draggable={false}
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* ════════════════════════════════════════════════
//           MOBILE — stacked layout
//       ════════════════════════════════════════════════ */}
//       <div className="sm:hidden relative z-10 w-full px-6 pt-12 pb-0 flex flex-col">
//         <div ref={containerRef} style={{ position: "relative" }}>
//           <h1 className="text-[clamp(38px,10vw,56px)] font-bold text-white leading-[1.05] tracking-tight mb-2">
//             Pay Your Dues
//           </h1>
//           <h1 className="font-bold leading-[1.05] text-[clamp(38px,10vw,56px)] text-white tracking-tight mb-5">
//             <TextType
//               text={["Effortlessly", "Instantly", "Transparently", "With Ease"]}
//               typingSpeed={55}
//               deletingSpeed={35}
//               pauseDuration={2600}
//               loop
//               showCursor
//               cursorCharacter="|"
//               cursorClassName="text-purple-400"
//             />
//           </h1>
//           <p className="text-[15px] text-white  /50 leading-relaxed mb-8">
//             Stop sending screenshots of receipts. Get instant proof of payment,
//             track your history, and never miss a deadline again.
//           </p>
//           <button
//             onClick={() =>
//               window.open(
//                 "https://tally.so/r/WOEblj",
//                 "_blank",
//                 "noopener,noreferrer",
//               )
//             }
//             className="inline-flex items-center gap-2 bg-white text-[#0c1020] text-[15px] px-8 py-3.5 rounded-full mb-8 shadow-lg shadow-black/30"
//             style={{ fontWeight: 400 }}
//           >
//             Join A Community <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Phone below on mobile — cropped to show just top portion */}
//         <div
//           className="w-full flex justify-center overflow-hidden"
//           style={{ maxHeight: 380 }}
//         >
//           <div style={{ position: "relative", width: 280 }}>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "1.8%",
//                 left: "8.2%",
//                 width: "83.5%",
//                 height: "96%",
//                 borderRadius: "38px",
//                 overflow: "hidden",
//                 zIndex: 2,
//               }}
//             >
//               <div
//                 style={{
//                   width: 390,
//                   height: 844,
//                   transform: `scale(${(280 * 0.835) / 390})`,
//                   transformOrigin: "top left",
//                 }}
//               >
//                 <MembersDashboard />
//               </div>
//             </div>
//             <img
//               src={iphone}
//               alt="Glass app on iPhone"
//               style={{
//                 position: "relative",
//                 zIndex: 10,
//                 width: "100%",
//                 display: "block",
//                 filter: "drop-shadow(0 16px 40px rgba(120,10,160,0.5))",
//               }}
//               draggable={false}
//             />
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom gradient fade — desktop ── */}
//       <div
//         className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 hidden sm:block"
//         style={{
//           height: "80px",
//           background:
//             "linear-gradient(to top, rgba(229,229,229,0.97) 0%, rgba(229,229,229,0.65) 35%, rgba(229,229,229,0.1) 75%, transparent 100%)",
//         }}
//       />
//       {/* ── Bottom gradient fade — mobile ── */}
//       <div
//         className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 block sm:hidden"
//         style={{
//           height: "60px",
//           background:
//             "linear-gradient(to top, rgba(229,229,229,0.95) 0%, rgba(229,229,229,0.5) 40%, transparent 100%)",
//         }}
//       />
//     </section>
//   );
// }
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import iphone from "../../assets/hero/iphone.png";
import { motion } from "motion/react";

export default function MembersHero() {
  const navigate = useNavigate();
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const animItem = (index, delay = 0) => ({
    ref: (el) => (itemsRef.current[index] = el),
    style: {
      opacity: 0,
      transform: "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    },
  });

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-[68px] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c1020 0%, #0e1128 30%, #120d24 60%, #1d0b32 80%, #2e0a44 100%)",
      }}
    >
      {/* ── Glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[800px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, #7a1090 0%, #4a0860 40%, transparent 65%)",
            filter: "blur(70px)",
            opacity: 0.9,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[350px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, #6b0f7a 0%, transparent 60%)",
            filter: "blur(80px)",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom, #5a0870 0%, transparent 55%)",
            filter: "blur(90px)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* ── Glass shimmer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 65%)",
            filter: "blur(45px)",
            opacity: 0.03,
            animation: "glassFloat1 14s ease-in-out infinite",
            top: "15%",
            right: "20%",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(210,180,255,0.9) 0%, transparent 65%)",
            filter: "blur(55px)",
            opacity: 0.025,
            animation: "glassFloat2 18s ease-in-out infinite",
            top: "40%",
            left: "10%",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="hidden sm:flex relative z-10 w-full max-w-[1280px] mx-auto px-8 lg:px-16 min-h-[calc(100vh-68px)] flex-row items-center">
        <div className="max-w-[600px]">
          <h1
            {...animItem(0, 80)}
            className="text-[clamp(44px,7vw,70px)] font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            Pay Your Dues
            <br />
            <span className="text-white bg-clip-text">Effortlessly</span>
          </h1>

          <p
            {...animItem(1, 200)}
            className="text-[16px] text-white/55 leading-relaxed max-w-[480px] mb-10"
          >
            Stop sending screenshots of receipts. Get instant proof of payment,
            track your history, and never miss a deadline again.
          </p>

          <div {...animItem(2, 320)}>
            <button
              onClick={() => navigate("/waitlist")}
              className="inline-flex items-center gap-2 bg-white text-[#0c1020] text-[15px] px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 shadow-lg shadow-black/30"
            >
              Join Our Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Right: iPhone + dashboard overlaid inside screen ── */}
        <div className="w-1/2 relative self-stretch flex items-end justify-end pr-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ position: "relative", width: 480, maxWidth: "100%" }}
          >
            {/* Phone frame — sits on top of the dashboard */}
            <img
              src={iphone}
              alt="Glass app on iPhone"
              className="relative block w-full"
              style={{
                zIndex: 10,
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 32px 80px rgba(120,10,160,0.6))",
                position: "relative",
              }}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-[10px] tracking-[0.2em] uppercase">
        <div
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
          style={{ animation: "scrollline 2.2s ease-in-out infinite" }}
        />
        scroll
      </div> */}

      <style>{`
        @keyframes scrollline {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes glassFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-40px, -25px) scale(1.06); }
          66%       { transform: translate(25px, 20px) scale(0.96); }
        }
        @keyframes glassFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%       { transform: translate(30px, -30px) scale(1.07); }
          70%       { transform: translate(-20px, 18px) scale(0.94); }
        }
      `}</style>
    </section>
  );
}
