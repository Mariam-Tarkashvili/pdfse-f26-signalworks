"use client";

import { useEffect } from "react";
import { capture } from "../../lib/analytics";

// S5 · Ana sees why it is slow.
// Shows "Moving slowly: <reason>" only when the row has a reason.
// Fires `student_sees_reason` (property: reason) once, only when the line is shown.
export default function WhySlow({ reason }: { reason?: string | null }) {
  const text = reason?.trim() ?? "";

  useEffect(() => {
    if (!text) return;
    capture("student_sees_reason", { reason: text });
  }, [text]);

  if (!text) return null;

  return (
    <section style={{ border: "1px solid #2a3340", borderRadius: 12, padding: 16 }}>
      <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>Why it is slow</p>
      <p style={{ margin: "8px 0 0", fontSize: 18 }}>Moving slowly: {text}</p>
    </section>
  );
}
