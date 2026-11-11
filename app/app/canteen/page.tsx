// Copy to: app/app/canteen/page.tsx
// Journey step 1: Ana opens /canteen and sees the wait.

export default function CanteenPage() {
  // Sprint 1 first deploy: hard-coded numbers so the phone URL works
  // before Neon is wired. Replace with sql`select ... from canteen_status`
  // after Step 2 of SHIP-STACK-SETUP.
  const minutes = 18;
  const reason = "stuck at the register";
  const updatedLabel = "Updated 1 min ago";
  const nowLabel = "13:30";
  const foodBy = "13:48";
  const classAt = "14:00";

  return (
    <main
      style={{
        minHeight: "100dvh",
        maxWidth: 420,
        margin: "0 auto",
        padding: "24px 20px 40px",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        background: "#0f1419",
        color: "#f4f1ea",
      }}
    >
      <p style={{ opacity: 0.7, fontSize: 14, marginBottom: 8 }}>
        KIU canteen · right now
      </p>
      <h1 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 12px" }}>
        About {minutes} minutes from the door to the counter
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 28 }}>{updatedLabel}</p>

      <section
        style={{
          border: "1px solid #2a3340",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>
          Against your break · now {nowLabel}
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 18 }}>
          Food by {foodBy}. Your class starts at {classAt}.
        </p>
      </section>

      <section
        style={{
          border: "1px solid #2a3340",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>Why it is slow</p>
        <p style={{ margin: "8px 0 0", fontSize: 18 }}>
          Moving slowly: {reason}
        </p>
      </section>
    </main>
  );
}
