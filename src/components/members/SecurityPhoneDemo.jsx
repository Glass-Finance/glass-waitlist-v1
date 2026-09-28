import { useLayoutEffect, useRef, useState } from "react";

import screenTransactionDetails from "../../assets/hero/phone-demo/screen-transaction-details.png";
import screenDataRights from "../../assets/hero/phone-demo/screen-data-rights.png";
import screenEncryption from "../../assets/hero/phone-demo/screen-encryption.png";

// ─────────────────────────────────────────────────────────────────────────────
// Static phone demo for the Security & Trust section — a front-facing,
// straight-on device mockup so the screen stays fully visible and legible.
// Deliberately NOT PhoneHeroDemo's angled hand/homography rig: that rig was
// built for the tilted hero shot and isn't the right tool here. PhoneHeroDemo
// itself is untouched and keeps powering the member hero section.
//
// Pure "show screen N" renderer: no autoplay, no timers, no navigation. The
// parent (the numbered claims list) owns activeStep; screens crossfade in
// place (opacity, ~300ms) rather than sliding — a static phone should feel
// calm.
// ─────────────────────────────────────────────────────────────────────────────

// Logical screen size (iPhone 15-class, 393×852 @1x). The frame, status bar,
// and screen images all share this coordinate space; the wrapper measures its
// container and scales the whole frame down to fit (ScaledPhoneHeroDemo's
// measure-and-scale pattern), capped at MAX_WIDTH so the phone never grows
// past its column — it is deliberately small and never over-sized.
const SCREEN_W = 393;
const SCREEN_H = 852;
const BEZEL = 12;
const FRAME_W = SCREEN_W + BEZEL * 2;
const FRAME_H = SCREEN_H + BEZEL * 2;
const MAX_WIDTH = 300;

// One entry per claim — every step has a real screen scraped from the app:
// 0 existing ledger-detail export; 1 the /privacy "Your Data Subject Rights"
// section; 2 the /member/security/authentication MFA screen (captured at the
// phone's 393×852 logical viewport @3x, member session seeded via the repo's
// own e2e network dispatcher). A null src still hides the panel defensively.
const STEP_SCREENS = [
  // Step 0 — Transparency / "Every kobo accounted for".
  { src: screenTransactionDetails },
  // Step 1 — Data Rights: the Privacy Policy's rights section.
  { src: screenDataRights },
  // Step 2 — Bank-level encryption: the MFA / security settings screen.
  { src: screenEncryption },
];

export default function SecurityPhoneDemo({
  activeStep = 0,
  className = "",
  maxWidth = MAX_WIDTH,
}) {
  const outerRef = useRef(null);
  const [width, setWidth] = useState(maxWidth);

  useLayoutEffect(() => {
    function measure() {
      if (!outerRef.current) return;
      const containerWidth = outerRef.current.offsetWidth;
      if (containerWidth > 0) setWidth(Math.min(containerWidth, maxWidth));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [maxWidth]);

  const active =
    Number.isInteger(activeStep) && activeStep >= 0 && activeStep < STEP_SCREENS.length
      ? activeStep
      : 0;
  const screen = STEP_SCREENS[active].src;

  // No real screen for this claim yet — hide the phone panel entirely; the
  // parent shows the text list on its own.
  if (!screen) return null;

  const scale = width / FRAME_W;

  return (
    <div
      ref={outerRef}
      className={className}
      style={{
        width: "100%",
        height: FRAME_H * scale,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Holder: exact visual size (width × height), so centering is honest
          and the unscaled layout box can never trigger page overflow. */}
      <div style={{ width, height: FRAME_H * scale, overflow: "hidden" }}>
        {/* Frame keeps its natural FRAME_W/FAME_H layout box; the uniform
            scale shrinks it to the holder's width. Origin top-left, so the
            holder — already centered by the parent flex — frames it. */}
        <div
          style={{
            width: FRAME_W,
            height: FRAME_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Device frame — flat, front-facing (CSS-drawn; no bezel asset in repo) */}
          <div
            style={{
              position: "relative",
              width: FRAME_W,
              height: FRAME_H,
              borderRadius: 56,
              background: "#0A0A0C",
              boxShadow:
                "0 36px 70px -24px rgba(10,14,40,0.40), 0 12px 28px -12px rgba(10,14,40,0.25), 0 0 0 1px rgba(255,255,255,0.10)",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {/* Screen */}
            <div
              style={{
                position: "absolute",
                left: BEZEL,
                top: BEZEL,
                width: SCREEN_W,
                height: SCREEN_H,
                borderRadius: 44,
                overflow: "hidden",
                background: "#F7F8FC",
              }}
            >
              {/* Claim screens, crossfading in place (no slide — calm, static) */}
              {STEP_SCREENS.map(({ src }, i) =>
                src ? (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden={active !== i}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      background: "#F7F8FC",
                      opacity: active === i ? 1 : 0,
                      transition: "opacity 300ms ease",
                    }}
                  />
                ) : null,
              )}

              {/* Fixed status bar + dynamic island — always visible, as in PhoneHeroDemo */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 58,
                  pointerEvents: "none",
                  zIndex: 30,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 11,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 125,
                    height: 37,
                    borderRadius: 20,
                    background: "#0A0A0C",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 42,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#111",
                  }}
                >
                  9:41
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 30,
                    width: 25,
                    height: 12,
                    border: "1px solid rgba(0,0,0,0.4)",
                    borderRadius: 4,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "2px 6px 2px 2px",
                      background: "#111",
                      borderRadius: 1.5,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
