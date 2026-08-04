// Fake cursor + click-ring effect that walks the sidebar during the guided
// tour loop. `cursor`/`ring` are imperative animation state set by
// DashboardOverlay's tourLoop (see its NAV_POINTS-driven move()/clickFx()).
export default function TourCursor({ cursor, ring }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: cursor.x,
          top: cursor.y,
          opacity: cursor.visible ? 1 : 0,
          transition:
            "left 0.9s cubic-bezier(0.22,1,0.36,1), top 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
          zIndex: 300,
          pointerEvents: "none",
        }}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          style={{ display: "block", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.35))" }}
        >
          <path
            d="M4 2v16.5l4.4-3.6 2.4 5.6 2.8-1.2-2.4-5.5 5.8-0.6z"
            fill="#fff"
            stroke="#111"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {ring && (
        <span
          key={ring.key}
          style={{
            position: "absolute",
            left: ring.x - 11,
            top: ring.y - 11,
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: "2px solid rgba(0,47,167,0.65)",
            background: "rgba(0,47,167,0.18)",
            animation: "gh-click 0.55s ease-out forwards",
            zIndex: 290,
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
}
