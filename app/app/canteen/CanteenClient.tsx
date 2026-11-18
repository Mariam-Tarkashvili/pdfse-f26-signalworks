"use client";

import { useEffect, useRef, useState } from "react";
import { capture, isTeamDevice, visitorId } from "../../lib/analytics";
import WhySlow from "./WhySlow";

type Props = { minutes: number; reason: string | null; updatedAt: string; sample: boolean };

const card = { border: "1px solid #2a3340", borderRadius: 12, padding: 16, marginBottom: 16 } as const;
const label = { margin: 0, opacity: 0.7, fontSize: 13 } as const;
const big = { margin: "8px 0 0", fontSize: 18 } as const;

function hhmm(d: Date) {
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

// Default class time: 30 min from now, rounded up to the next :00 or :30.
function defaultClassAt(now: Date) {
  const d = new Date(now.getTime() + 30 * 60000);
  const m = d.getMinutes();
  if (m > 30) d.setHours(d.getHours() + 1, 0, 0, 0);
  else if (m > 0) d.setMinutes(30, 0, 0);
  return hhmm(d);
}

function classTimeToday(now: Date, value: string) {
  const [h, m] = value.split(":").map(Number);
  const d = new Date(now);
  d.setHours(h, m, 0, 0);
  return d;
}

export default function CanteenClient({ minutes, reason, updatedAt, sample }: Props) {
  const [now, setNow] = useState<Date | null>(null);
  const [classAt, setClassAt] = useState("14:00");
  const [decision, setDecision] = useState<"go" | "skip" | null>(null);
  const opened = useRef(false);
  const openedAt = useRef(0);

  const minutesSinceUpdate = now ? Math.max(0, Math.round((now.getTime() - new Date(updatedAt).getTime()) / 60000)) : 0;
  const foodBy = now ? new Date(now.getTime() + minutes * 60000) : null;
  const classDate = now ? classTimeToday(now, classAt) : null;
  const minutesToSpare = foodBy && classDate ? Math.round((classDate.getTime() - foodBy.getTime()) / 60000) : 0;

  // Steps 1 and 2: page opened, wait seen. Once per load.
  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    const t = new Date();
    setNow(t);
    setClassAt(defaultClassAt(t));
    openedAt.current = performance.now();
    const src = new URLSearchParams(window.location.search).get("src");
    capture("student_opens_canteen", {
      source: src === "qr" || src === "link" ? src : "direct",
      local_time: hhmm(t),
    });
    capture("student_sees_wait", {
      minutes,
      minutes_since_update: Math.max(0, Math.round((t.getTime() - new Date(updatedAt).getTime()) / 60000)),
    });
  }, [minutes, updatedAt]);

  // Step 3: break fit seen. Fires on load and when the class time changes (after a short pause).
  useEffect(() => {
    if (!now) return;
    const id = setTimeout(() => {
      capture("student_sees_break_fit", { minutes, class_at: classAt, minutes_to_spare: minutesToSpare });
    }, 800);
    return () => clearTimeout(id);
  }, [now, classAt, minutes, minutesToSpare]);

  // Step 5: the north star event. One decision per visit.
  // tapAt is the click's timestamp (same clock as performance.now()).
  // Saved to the database first; the event fires only after the save worked,
  // so PostHog and the database count the same taps.
  async function decide(d: "go" | "skip", tapAt: number) {
    if (decision) return;
    setDecision(d);
    const props = {
      decision: d,
      minutes,
      minutes_to_spare: minutesToSpare,
      seconds_on_page: Math.round((tapAt - openedAt.current) / 1000),
    };
    try {
      const res = await fetch("/api/decision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...props, visitor_id: visitorId(), is_team: isTeamDevice() }),
      });
      if (!res.ok) return;
    } catch {
      return;
    }
    capture("student_makes_lunch_decision", props);
  }

  const updatedLabel = sample
    ? "Sample number: no live data connected"
    : minutesSinceUpdate === 0
      ? "Updated just now"
      : `Updated ${minutesSinceUpdate} min ago`;

  const late = minutesToSpare < 0;

  return (
    <>
      <h1 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 12px" }}>
        About {minutes} minutes from the door to the counter
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 28 }}>{updatedLabel}</p>

      <section style={card}>
        <p style={label}>Against your break{now ? ` · now ${hhmm(now)}` : ""}</p>
        <label style={{ display: "block", margin: "10px 0 0", fontSize: 15 }}>
          My class starts at{" "}
          <input
            type="time"
            value={classAt}
            onChange={(e) => e.target.value && setClassAt(e.target.value)}
            style={{ fontSize: 16, padding: "4px 6px", borderRadius: 6, border: "1px solid #2a3340", background: "#1a222c", color: "#f4f1ea", colorScheme: "dark" }}
          />
        </label>
        {foodBy && (
          <>
            <p style={big}>
              Food by {hhmm(foodBy)}. Your class starts at {classAt}.
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 16, color: late ? "#ff6b6b" : "#7bd88f" }}>
              {late
                ? `No time: you would be ${-minutesToSpare} min late`
                : `${minutesToSpare} minutes to spare`}
            </p>
          </>
        )}
      </section>

      <WhySlow reason={reason} />

      <section style={{ marginTop: 24 }}>
        {decision ? (
          <p style={{ fontSize: 18, textAlign: "center" }}>
            Noted: {decision === "go" ? "you're going" : "you're skipping"}
          </p>
        ) : (
          <div style={{ display: "flex", gap: 12 }}>
            {(["go", "skip"] as const).map((d) => (
              <button
                key={d}
                onClick={(e) => decide(d, e.timeStamp)}
                style={{
                  flex: 1,
                  padding: "14px 0",
                  fontSize: 18,
                  borderRadius: 12,
                  border: "none",
                  background: d === "go" ? "#7bd88f" : "#2a3340",
                  color: d === "go" ? "#0f1419" : "#f4f1ea",
                }}
              >
                {d === "go" ? "I'd go" : "I'd skip"}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
