import React from "react";

export default function GridBackground({ children, variant = "default" }) {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blur Gradients */}
        {variant === "default" && (
          <>
            <div
              className="absolute w-[1251px] h-[717px] -left-[61px] top-[157px]"
              style={{
                background:
                  "linear-gradient(133deg, white 0%, rgba(255, 255, 255, 0) 100%)",
                boxShadow: "48px 48px 48px rgba(0,0,0,0.05)",
                filter: "blur(24.46px)",
              }}
            />
            <div
              className="absolute w-[1010px] h-[722px] left-[215px] top-[856px]"
              style={{
                background:
                  "radial-gradient(ellipse 85.36% 173.79% at 31.58% 63.92%, white 0%, rgba(255, 255, 255, 0) 100%)",
                boxShadow: "48px 48px 48px rgba(0,0,0,0.05)",
                filter: "blur(24.46px)",
              }}
            />
          </>
        )}

        {variant === "alternate" && (
          <>
            <div
              className="absolute w-[1251px] h-[717px] -left-[61px] top-[531px]"
              style={{
                background:
                  "linear-gradient(133deg, white 0%, rgba(255, 255, 255, 0) 100%)",
                boxShadow: "48px 48px 48px rgba(0,0,0,0.05)",
                filter: "blur(24.46px)",
              }}
            />
            <div
              className="absolute w-[1010px] h-[722px] left-[215px] -top-[172px]"
              style={{
                background:
                  "radial-gradient(ellipse 85.36% 173.79% at 31.58% 63.92%, white 0%, rgba(255, 255, 255, 0) 100%)",
                boxShadow: "48px 48px 48px rgba(0,0,0,0.05)",
                filter: "blur(24.46px)",
              }}
            />
          </>
        )}

        {/* Horizontal Grid Lines */}
        <div className="absolute w-full h-full left-0 top-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-0 left-0"
              style={{
                top: `${i * 80}px`,
                borderTop: "1.26px solid rgba(60, 72, 78, 0.07)",
              }}
            />
          ))}
        </div>

        {/* Vertical Grid Lines */}
        <div className="absolute w-full h-full left-0 top-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-0 h-full top-0"
              style={{
                left: `${i * 80}px`,
                borderLeft: "1.26px solid rgba(60, 72, 78, 0.07)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}