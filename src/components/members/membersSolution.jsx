import { useEffect, useRef } from "react";
import icon1 from "../../assets/icon/frame1.png";
import icon2 from "../../assets/icon/frame2.png";
import icon3 from "../../assets/icon/frame3.png";
import icon4 from "../../assets/icon/frame4.png";

import featureAutomate from "../../assets/solution/automate.png";
import featureRecover from "../../assets/solution/recover.png";
import featureProof from "../../assets/solution/proof.png";
import featureMonitor from "../../assets/solution/monitor.png";
import Overlay from "../../assets/Overlay2.png";
import lightBg from "../../assets/solution/bg-light.png";

const features = [
  {
    icon: icon2,
    title: "Set It and Forget It.",
    desc: "Link your card once. Dues are deducted automatically.",
    illustration: featureAutomate,
    imgTransform: "translate(-50%, -45%) scale(1.15)",
  },
  {
    icon: icon1,
    title: "Set Reminders",
    desc: "Get automated reminders via SMS, WhatsApp, and email.",
    illustration: featureRecover,
    imgTransform: "translate(-50%, -45%) scale(1.15)",
  },
  {
    icon: icon3,
    title: "Instant Proof Of Payment",
    desc: "View your full history and download official receipts immediately after paying.",
    illustration: featureProof,
    imgTransform: "translate(-50%, -35%) scale(1.2)",
  },
  {
    icon: icon4,
    title: "Flexible Options",
    desc: "Pay exactly how you want, via Card, Bank Transfer, or USSD.",
    illustration: featureMonitor,
    imgTransform: "translate(-50%, -45%) scale(1.15)",
  },
];

export default function membersSolution() {
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
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const anim = (i, delay = 0) => ({
    ref: (el) => (itemsRef.current[i] = el),
    style: {
      opacity: 0,
      transform: "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    },
  });

  return (
    <section className="py-20 md:py-28 relative" id="solution">
      {/* Same overlay as problem section */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${Overlay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
        }}
      />

      <div className="max-w-[1140px] mx-auto px-6 relative z-30">
        {/* Header */}
        <div className="text-center mb-12">
          <div {...anim(0, 0)}>
            <span className="inline-flex items-center border border-[#1C2B8A]/25 text-[#1C2B8A] text-[13px] font-medium px-5 py-2 rounded-full mb-5">
              Our Solution
            </span>
          </div>
          <div {...anim(1, 80)}>
            <h2 className="text-[clamp(26px,5vw,58px)] font-extrabold text-[#0f1d6e] leading-tight tracking-tight mb-4">
              Experience Financial Peace Of Mind
            </h2>
          </div>
          <div {...anim(2, 160)}>
            <p className="text-[17px] md:text-[16px] text-[#00000099] max-w-[700px] mx-auto leading-relaxed">
              Make payments in seconds, track everything in one place, and never
              miss a due date again.
            </p>
          </div>
        </div>

        {/* Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map(
            ({ icon, title, desc, illustration, imgTransform }, i) => (
              <div
                key={title}
                {...anim(3 + i, 200 + i * 80)}
                className="flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{
                  borderRadius: "12px",
                  background: "#EFEFF1",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.75) inset, 0 2px 12px rgba(28,43,138,0.07), 0 1px 3px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                {/* Icon + text
                  — no fixed height so text wraps freely on mobile
                  — smaller padding on mobile via clamp */}
                <div
                  className="flex items-start gap-3 flex-shrink-0"
                  style={{
                    padding:
                      "clamp(16px, 3vw, 28px) clamp(14px, 2.5vw, 20px) clamp(12px, 2vw, 20px)",
                  }}
                >
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: "clamp(36px, 5vw, 50px)",
                      height: "clamp(36px, 5vw, 50px)",
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: "clamp(14px, 2.5vw, 18px)",
                        fontWeight: 800,
                        color: "#0f1d6e",
                        lineHeight: 1.3,
                        marginBottom: "4px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontSize: "clamp(15px, 2vw, 18px)",
                        color: "#00000099",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Illustration panel */}
                <div
                  className="relative flex-shrink-0 h-[160px] md:h-[220px]"
                  style={{ overflow: "hidden" }}
                >
                  {/* lightBg — full bleed behind everything */}
                  <img
                    src={lightBg}
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                    draggable={false}
                  />
                  {/* White-to-transparent gradient — covers top quarter, blends card bg into lightBg */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "55%",
                      background:
                        "linear-gradient(to bottom, #EFEFF1 0%, rgba(239,239,241,0.85) 25%, rgba(239,239,241,0.4) 60%, rgba(239,239,241,0) 100%)",
                      pointerEvents: "none",
                      zIndex: 5,
                    }}
                  />
                  {/* Illustration on top */}
                  <img
                    src={illustration}
                    alt={title}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform:
                        imgTransform || "translate(-50%, -45%) scale(1.15)",
                      width: "100%",
                      height: "85%",
                      objectFit: "contain",
                      objectPosition: "center center",
                      display: "block",
                      transformOrigin: "center center",
                      zIndex: 10,
                    }}
                    draggable={false}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
