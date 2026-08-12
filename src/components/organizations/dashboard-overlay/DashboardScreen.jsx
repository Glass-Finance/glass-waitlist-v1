import StatsRow from "./StatsRow";
import PaymentPlansPanel from "./PaymentPlansPanel";
import RecentActivityPanel from "./RecentActivityPanel";

// Base "Dashboard" tour screen — sits in normal flow underneath the
// Payments/Members overlays, which slide in on top of it absolutely
// positioned within the same relative content container.
export default function DashboardScreen() {
  return (
    <>
      <div
        id="dbo-e0"
        style={{
          opacity: 0,
          transform: "translateY(10px)",
          transition: "opacity .5s ease, transform .5s ease",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#000" }}>Dashboard</div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
            A full picture of your community's financial activity.
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: 7,
              border: "1.5px solid #E0E0EB",
              background: "#fff",
              color: "#000",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            Create Payment Plan
          </button>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: 7,
              border: "none",
              background: "#002FA7",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            + Add Member
          </button>
        </div>
      </div>

      <StatsRow />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <PaymentPlansPanel />
        <RecentActivityPanel />
      </div>
    </>
  );
}
