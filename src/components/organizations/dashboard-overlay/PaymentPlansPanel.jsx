// Reveal-in/out ids (dbo-e5/e6/e7, dbo-pb0/pb1/pb2) are driven imperatively
// by DashboardOverlay's animation loop — see constants.js's ELEM_IDS/PBARS.
const REVEAL_STYLE = {
  opacity: 0,
  transform: "translateY(10px)",
  transition: "opacity .5s ease, transform .5s ease",
};

const PLANS = [
  {
    id: "e5",
    pb: "pb0",
    name: "Association Dues",
    freq: "Monthly",
    fColor: "#d4a017",
    fBg: "#fff8e7",
    amt: "₦1.2M",
    paid: "24 / 120",
    bar: "#d4a017",
    pct: "60%",
  },
  {
    id: "e6",
    pb: "pb1",
    name: "Infrastructure Development",
    freq: "One-Time",
    fColor: "#7c3aed",
    fBg: "#f3eeff",
    amt: "₦300,000",
    paid: "24 / 120",
    bar: "#7c3aed",
    pct: "74%",
  },
  {
    id: "e7",
    pb: "pb2",
    name: "End Of The Year Party",
    freq: "Weekly",
    fColor: "#059669",
    fBg: "#ecfdf5",
    amt: "₦400,500",
    paid: "24 / 120",
    bar: "#059669",
    pct: "20%",
  },
];

export default function PaymentPlansPanel() {
  return (
    <div
      style={{
        background: "rgba(204,219,255,0.4)",
        borderRadius: 10,
        border: "1px solid #eef0f8",
        padding: "12px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0f1d6e" }}>Payment Plans</span>
        <span style={{ fontSize: 11, color: "#002FA7", fontWeight: 600 }}>Manage All</span>
      </div>
      {PLANS.map((p) => (
        <div
          key={p.id}
          id={"dbo-" + p.id}
          style={{
            ...REVEAL_STYLE,
            background: "#fff",
            borderRadius: 8,
            padding: "10px 12px",
            marginBottom: 6,
            border: "1px solid rgba(204,219,255,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#0f1d6e" }}>{p.name}</span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: p.fColor,
                  background: p.fBg,
                  borderRadius: 99,
                  padding: "1px 6px",
                }}
              >
                {p.freq}
              </span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#0f1d6e" }}>{p.amt}</span>
          </div>
          <div style={{ fontSize: 9, color: "#9ca3af", marginBottom: 5 }}>{p.paid} members paid</div>
          <div style={{ height: 4, borderRadius: 99, background: "#eef0f8", overflow: "hidden" }}>
            <div
              id={"dbo-" + p.pb}
              style={{ height: "100%", borderRadius: 99, background: p.bar, width: 0 }}
            />
          </div>
          <div style={{ fontSize: 9, color: "#9ca3af", textAlign: "right", marginTop: 2 }}>
            {p.pct} Collected
          </div>
        </div>
      ))}
    </div>
  );
}
