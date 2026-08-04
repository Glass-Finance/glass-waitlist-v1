const STATS = [
  { label: "Total Amount Collected", value: "₦4,800,040", color: "#d4a017", small: true },
  { label: "Active Plans", value: "04", color: "#e11d48" },
  { label: "Yet to pay", value: "36", color: "#d4a017" },
  { label: "Failed Payments", value: "08", color: "#c026d3" },
];

const PLANS = [
  { st: "Active", stc: "#059669", stb: "#ecfdf5", name: "Association Dues", freq: "Monthly", fc: "#d4a017", fb: "#fff8e7", bar: "#d4a017", pct: "60%" },
  { st: "Active", stc: "#059669", stb: "#ecfdf5", name: "Infrastructure Development", freq: "Monthly", fc: "#c026d3", fb: "#fdf0ff", bar: "#c026d3", pct: "74%" },
  { st: "Inactive", stc: "#e11d48", stb: "#fff1f2", name: "End Of The Year Party", freq: "One-Time", fc: "#9C27B0", fb: "#F3E5F5", bar: "#2547D0", pct: "100%" },
  { st: "Paused", stc: "#6b7280", stb: "#f3f4f6", name: "Association Dues", freq: "Weekly", fc: "#1C2B8A", fb: "#E8ECF8", bar: "#e88504", pct: "45%" },
];

// Tour overlay — slides over the dashboard content pane only (sidebar/topbar
// persist like the real app). `active` = the guided tour is on this screen.
export default function PaymentsScreen({ active }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#F7F8FC",
        padding: "14px 16px 0",
        transform: active ? "translateX(0)" : "translateX(105%)",
        transition: "transform 480ms cubic-bezier(0.32,0.72,0.3,1)",
        boxShadow: "-24px 0 48px rgba(0,0,0,0.14)",
        willChange: "transform",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#0f1d6e" }}>Payments</div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
            A full picture of all payments created in your community.
          </div>
        </div>
        <button style={{ padding: "6px 12px", borderRadius: 7, border: "none", background: "#002FA7", color: "#fff", fontSize: 11, fontWeight: 600 }}>
          + Create Payment Plan
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 10 }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 10, padding: "9px 11px", border: "1px solid #eef0f8", boxShadow: "0 1px 4px rgba(0,47,167,0.05)" }}>
            <div style={{ fontSize: 9, color: "#6b7280", fontWeight: 500, marginBottom: 6 }}>{s.label}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ fontSize: s.small ? 12 : 14, fontWeight: 800, color: "#0f1d6e" }}>{s.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "inline-flex", background: "#eef0f8", borderRadius: 8, padding: 2, marginBottom: 10 }}>
        {["All Plans", "Recurring", "One Time"].map((t, i) => (
          <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: i === 0 ? "#fff" : "transparent", color: i === 0 ? "#0f1d6e" : "#6b7280" }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {PLANS.map((p, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #eef0f8", padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: p.stc, background: p.stb, borderRadius: 99, padding: "2px 8px", display: "inline-flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.stc }} />
                {p.st}
              </span>
              <span style={{ fontSize: 12, color: "#9ca3af", letterSpacing: 1 }}>•••</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0f1d6e", marginBottom: 4 }}>{p.name}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#0f1d6e" }}>
                ₦5,000
                <span style={{ fontSize: 9, fontWeight: 700, color: p.fc, background: p.fb, borderRadius: 99, padding: "1px 7px", marginLeft: 4 }}>{p.freq}</span>
              </span>
              <span style={{ fontSize: 9, color: "#9ca3af" }}>
                <b style={{ color: "#0f1d6e" }}>N1.2M</b>/N2M Collected
              </span>
            </div>
            <div style={{ height: 4, borderRadius: 99, background: "#eef0f8", overflow: "hidden", marginBottom: 5 }}>
              <div style={{ height: "100%", width: p.pct, borderRadius: 99, background: p.bar }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#9ca3af" }}>
              <span><b style={{ color: "#374151" }}>24 / 120</b> members paid</span>
              <span>Due Apr 1</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
