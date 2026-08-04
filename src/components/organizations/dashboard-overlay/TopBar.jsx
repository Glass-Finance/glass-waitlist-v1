// Search + notification + user row across the top of the dashboard mockup.
export default function TopBar() {
  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "1px solid #eef0f8",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#f5f6fa",
          borderRadius: 7,
          padding: "6px 12px",
          border: "1px solid #eef0f8",
          flex: 1,
          maxWidth: 340,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="1.8" />
          <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 11, color: "#9ca3af" }}>
          Search members, payments, receipts...
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ position: "relative" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
              stroke="#6b7280"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 5,
              height: 5,
              background: "#e11d48",
              borderRadius: "50%",
              border: "1px solid #fff",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#002FA7,#4f6fe5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 9,
              fontWeight: 700,
            }}
          >
            AA
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#0f1d6e", lineHeight: 1.2 }}>
              Amina Agrawal
            </div>
            <div style={{ fontSize: 9, color: "#9ca3af" }}>amina@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
