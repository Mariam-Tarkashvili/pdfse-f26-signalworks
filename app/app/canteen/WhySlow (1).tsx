"use client";

import { useEffect } from "react";

// S5 · Ana sees why it is slow.
// Shows "Moving slowly: <reason>" only when the row has a reason.
// Fires `student_sees_reason` (property: reason) once, only when the line is shown.

type PostHogLike = {
  capture: (event: string, properties?: Record<string, unknown>) => void;
  get_distinct_id?: () => string;
};

export default function WhySlow({ reason }: { reason?: string | null }) {
  const text = reason?.trim() ?? "";

  useEffect(() => {
    if (!text) return;
    // PostHog is wired in S6 (BR). Until then window.posthog is undefined and
    // this does nothing. Once S6 lands, swap this for the shared capture helper.
    const ph = (window as unknown as { posthog?: PostHogLike }).posthog;
    ph?.capture("student_sees_reason", {
      visitor_id: ph.get_distinct_id?.(),
      reason: text,
    });
  }, [text]);

  if (!text) return null;

  return (
    <section
      style={{
        border: "1px solid #2a3340",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>Why it is slow</p>
      <p style={{ margin: "8px 0 0", fontSize: 18 }}>Moving slowly: {text}</p>
    </section>
  );
}
