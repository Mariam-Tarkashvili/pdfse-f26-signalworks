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
        padding: "24px 20px 40px",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        background: "#0f1419",
        color: "#f4f1ea",
      }}
    >
      <p style={{ opacity: 0.7, fontSize: 14, marginBottom: 8 }}>KIU canteen · right now</p>
      <Suspense fallback={<p style={{ opacity: 0.7 }}>Loading the wait…</p>}>
        <CanteenStatusLoader />
      </Suspense>
    </main>
  );
}
