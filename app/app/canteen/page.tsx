// Journey steps 1 to 5: Ana opens /canteen, sees the wait, sees it against
// her break, sees why it is slow, and taps go or skip.
import { Suspense } from "react";
import { connection } from "next/server";
import { getCanteenStatus } from "./status";
import CanteenClient from "./CanteenClient";

async function CanteenStatusLoader() {
  await connection(); // always read the latest wait, never a cached one
  const s = await getCanteenStatus();
  return <CanteenClient minutes={s.minutes} reason={s.reason} updatedAt={s.updatedAt} sample={s.sample} />;
}

export default function CanteenPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        maxWidth: 420,
        margin: "0 auto",
        padding: "28px 20px 48px",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        background: "linear-gradient(180deg, #121820 0%, #0f1419 40%)",
        color: "#f4f1ea",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontSize: 13,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "#9aa3ad",
        }}
      >
        KIU canteen · right now
      </p>
      <Suspense fallback={<p style={{ color: "#9aa3ad" }}>Loading the wait…</p>}>
        <CanteenStatusLoader />
      </Suspense>
    </main>
  );
}
