import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import macbookMockup from "../../assets/desktopdash.png";
import iphoneMockup from "../../assets/mobiledash.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden pt-[68px]"
      style={{
        background:
          "linear-gradient(180deg, #0d1022 0%, #0f1228 25%, #130d22 55%, #1a0a2e 75%, #2a0a3a 100%)",
      }}
    >
      {/* ── Static glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 100%, #6b0f6b 0%, #3d0a4a 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, #7a0a5a 0%, transparent 60%)",
            filter: "blur(80px)",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at top, #0d1840 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* ── Subtle animated glass shimmer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 65%)",
            filter: "blur(40px)",
            opacity: 0.035,
            animation: "glassFloat1 12s ease-in-out infinite",
            top: "10%",
            left: "20%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,180,255,0.9) 0%, transparent 65%)",
            filter: "blur(50px)",
            opacity: 0.025,
            animation: "glassFloat2 16s ease-in-out infinite",
            bottom: "15%",
            right: "15%",
          }}
        />
      </div>

      {/* ── Hero text content ── */}
      <div className="relative z-10 w-full max-w-[720px] mx-auto text-center px-6 pt-12 pb-[280px] sm:pb-8 sm:pt-20">
        <Reveal variant="up" delay={80}>
          <h1
            className="font-medium lg:font-extrabold  text-white leading-[1.05] tracking-tight mb-5 text-center max-w-[280px] sm:max-w-none mx-auto"
            style={{ fontSize: "clamp(38px, 7.5vw, 72px)" }}
          >
            Community finance
            <br />
            <span className="text-white">Crystal Clear</span>
          </h1>
        </Reveal>
        <Reveal variant="up" delay={160}>
          <p className="text-[15px] sm:text-[16px] text-white/55 leading-relaxed max-w-[540px] mx-auto mb-8 sm:mb-10">
            Save 15–20 hours monthly chasing payments. The transparent way for
            Nigerian associations, clubs, and schools to manage funds.
          </p>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <button
            onClick={() => navigate("/waitlist")}
            className="inline-flex items-center gap-2 bg-white text-[#0d1022] text-[15px] px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 shadow-lg shadow-black/30"
          >
            Join Our Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>

      {/* ── DESKTOP mockup — normal flow, hidden on mobile ── */}
      <Reveal variant="up" delay={360}>
        <div className="relative z-10 w-full px-8 pb-0 hidden sm:block">
          <div className="w-full max-w-[1100px] mx-auto">
            <img
              src={macbookMockup}
              alt="Glass dashboard on MacBook"
              className="w-full h-auto object-contain"
              style={{
                filter: "drop-shadow(0 32px 80px rgba(107, 15, 107, 0.45))",
              }}
              draggable={false}
            />
          </div>
        </div>
      </Reveal>

      {/* ── MOBILE mockup — absolutely pinned to the bottom, hidden on desktop ── */}
      <div
        className="block sm:hidden absolute bottom-0 left-0 right-0 z-10"
        style={{ padding: "0 16px" }}
      >
        <Reveal variant="up" delay={360}>
          <div
            className="w-full max-w-[360px] mx-auto overflow-hidden"
            style={{ maxHeight: "240px" }}
          >
            <img
              src={iphoneMockup}
              alt="Glass dashboard on iPhone"
              className="w-full"
              style={{
                display: "block",
                objectFit: "cover",
                objectPosition: "top",
                filter: "drop-shadow(0 24px 60px rgba(107, 15, 107, 0.5))",
              }}
              draggable={false}
            />
          </div>
        </Reveal>
      </div>

      {/* ── Bottom fade — desktop ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 hidden sm:block"
        style={{
          height: "120px",
          background:
            "linear-gradient(to top, rgba(229,229,229,0.95) 0%, rgba(229,229,229,0.6) 30%, rgba(229,229,229,0.1) 70%, transparent 100%)",
        }}
      />

      {/* ── Bottom fade — mobile ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 block sm:hidden"
        style={{
          height: "70px",
          background:
            "linear-gradient(to top, rgba(229,229,229,0.95) 0%, rgba(229,229,229,0.5) 40%, transparent 100%)",
        }}
      />

      <style>{`
        @keyframes glassFloat1 {
          0%,100% { transform: translate(0px,  0px)  scale(1);    }
          33%      { transform: translate(40px,-30px)  scale(1.05); }
          66%      { transform: translate(-20px,20px) scale(0.97); }
        }
        @keyframes glassFloat2 {
          0%,100% { transform: translate(0px,  0px)  scale(1);    }
          40%      { transform: translate(-35px,-25px) scale(1.08); }
          70%      { transform: translate(25px, 15px) scale(0.95); }
        }
      `}</style>
    </section>
  );
}
