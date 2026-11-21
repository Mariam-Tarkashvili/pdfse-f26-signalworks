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
    <section
      style={{
        border: "1px solid #343d4a",
        borderRadius: 14,
        padding: "14px 16px 16px",
        background: "#161c24",
        marginBottom: 8,
      }}
    >
      <p style={{ margin: 0, fontSize: 13, color: "#9aa3ad" }}>Why it is slow</p>
      <p style={{ margin: "10px 0 0", fontSize: 17, lineHeight: 1.35 }}>
        Moving slowly: {text}
      </p>
    </section>
  );
}
