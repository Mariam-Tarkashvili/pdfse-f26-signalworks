// Saves one go/skip decision, so the PostHog count of
// student_makes_lunch_decision can be reconciled against the database.
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const url = process.env.DATABASE_URL;
  if (!url) return Response.json({ ok: false, error: "no database" }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const decision = body.decision;
  if (decision !== "go" && decision !== "skip") {
    return Response.json({ ok: false, error: "decision must be go or skip" }, { status: 400 });
  }
  const toInt = (v: unknown) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : null);
  const visitorId = typeof body.visitor_id === "string" ? body.visitor_id.slice(0, 100) : null;

  const sql = neon(url);
  await sql`
    insert into lunch_decisions (decision, minutes, minutes_to_spare, seconds_on_page, visitor_id, is_team)
    values (${decision}, ${toInt(body.minutes)}, ${toInt(body.minutes_to_spare)},
            ${toInt(body.seconds_on_page)}, ${visitorId}, ${body.is_team === true})
  `;
  return Response.json({ ok: true });
}
