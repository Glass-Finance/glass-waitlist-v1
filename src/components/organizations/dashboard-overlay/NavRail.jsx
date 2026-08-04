// Blue icon rail on the far left of the animated dashboard mockup.
export default function NavRail() {
  return (
    <div
      style={{
        width: 48,
        background: "#002FA7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 12,
        flexShrink: 0,
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <img
          src="/Glass.webp"
          alt=""
          style={{
            width: 24,
            height: 24,
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"
            stroke="#002FA7"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21V12h6v9"
            stroke="#002FA7"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        style={{
          width: 20,
          height: 1,
          background: "rgba(255,255,255,0.2)",
          marginBottom: 12,
        }}
      />
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "#fff",
          color: "#002FA7",
          fontSize: 10,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 7,
        }}
      >
        KC
      </div>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "rgba(255,255,255,0.18)",
          color: "#fff",
          fontSize: 10,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        C1
      </div>
    </div>
  );
}
