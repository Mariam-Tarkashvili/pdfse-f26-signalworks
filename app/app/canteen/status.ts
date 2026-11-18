import { neon } from "@neondatabase/serverless";

export type CanteenStatus = {
  minutes: number;
  reason: string | null;
  updatedAt: string; // ISO time
  sample: boolean; // true when no database is connected
};

export async function getCanteenStatus(): Promise<CanteenStatus> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    return { minutes: 18, reason: "stuck at the register", updatedAt: new Date().toISOString(), sample: true };
  }
  const sql = neon(url);
  const rows = (await sql`
    select minutes, reason, updated_at
    from canteen_status
    order by updated_at desc
    limit 1
  `) as { minutes: number; reason: string | null; updated_at: string | Date }[];
  if (rows.length === 0) {
    return { minutes: 0, reason: null, updatedAt: new Date(0).toISOString(), sample: true };
  }
  const r = rows[0];
  return {
    minutes: Number(r.minutes),
    reason: r.reason,
    updatedAt: new Date(r.updated_at).toISOString(),
    sample: false,
  };
}
