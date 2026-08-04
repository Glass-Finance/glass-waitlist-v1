const STATS = [
  { label: "Total Members", value: "209", color: "#002FA7" },
  { label: "Active Members", value: "212", color: "#e11d48" },
  { label: "Inactive", value: "36", color: "#d4a017" },
  { label: "Admins", value: "02", color: "#c026d3" },
];

const MEMBERS = [
  { n: "Adebayor Okafor", plans: "2", st: "2/2 Paid", sc: "#059669", sb: "#ecfdf5", d: "Mar 12, 2025", e: "adebayor@gmail.com" },
  { n: "Chisom Eze", plans: "2", st: "1/2 Paid", sc: "#b45309", sb: "#fffbeb", d: "Mar 12, 2025", e: "chisom@gmail.com" },
  { n: "Tunde Nwosu", plans: "3", st: "0/3 Paid", sc: "#e11d48", sb: "#fff1f2", d: "Mar 12, 2025", e: "tunde@gmail.com" },
  { n: "Blessing Igwe", plans: "2", st: "2/2 Paid", sc: "#059669", sb: "#ecfdf5", d: "Mar 12, 2025", e: "blessing@gmail.com" },
];

// Tour overlay — slides over the dashboard content pane only (sidebar/topbar
// persist like the real app). `active` = the guided tour is on this screen.
export default function MembersScreen({ active }) {
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
          <div style={{ fontSize: 16, fontWeight: 800, color: "#0f1d6e" }}>Members</div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
            A full picture of the members of your community.
          </div>
        </div>
        <button style={{ padding: "6px 12px", borderRadius: 7, border: "none", background: "#002FA7", color: "#fff", fontSize: 11, fontWeight: 600 }}>
          + Add Member
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 10 }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 10, padding: "9px 11px", border: "1px solid #eef0f8", boxShadow: "0 1px 4px rgba(0,47,167,0.05)" }}>
            <div style={{ fontSize: 9, color: "#6b7280", fontWeight: 500, marginBottom: 6 }}>{s.label}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 800, color: "#0f1d6e" }}>{s.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #eef0f8", padding: "10px 14px 6px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0f1d6e" }}>Member Payments</span>
          <button style={{ padding: "5px 11px", borderRadius: 7, border: "1.5px solid #e0e3f0", background: "#fff", color: "#002FA7", fontSize: 10, fontWeight: 600 }}>
            Export Csv
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f5f6fa", borderRadius: 7, padding: "5px 11px", border: "1px solid #eef0f8", flex: 1, maxWidth: 220 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="1.8" />
              <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 10, color: "#9ca3af" }}>Search members…</span>
          </div>
          <span style={{ fontSize: 10, color: "#6b7280" }}>Sort by: <b style={{ color: "#0f1d6e" }}>Recent</b></span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 1fr 1.2fr 1.8fr", gap: 8, padding: "7px 0", borderBottom: "1px solid #f3f4f8", fontSize: 10, color: "#9ca3af", fontWeight: 600, background: "#F9F9FB" }}>
          <span>Members</span>
          <span>Plans</span>
          <span>Status</span>
          <span>Date</span>
          <span>Email</span>
        </div>
        {MEMBERS.map((m, i, arr) => (
          <div
            key={m.n}
            style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 1fr 1.2fr 1.8fr", gap: 8, alignItems: "center", padding: "9px 0", borderBottom: i < arr.length - 1 ? "1px solid #f3f4f8" : "none" }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "#002FA7" }}>{m.n}</span>
            <span style={{ fontSize: 11, color: "#374151" }}>{m.plans}</span>
            <span>
              <span style={{ fontSize: 9, fontWeight: 700, color: m.sc, background: m.sb, borderRadius: 99, padding: "1px 8px" }}>{m.st}</span>
            </span>
            <span style={{ fontSize: 11, color: "#374151" }}>{m.d}</span>
            <span style={{ fontSize: 11, color: "#6b7280" }}>{m.e}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
