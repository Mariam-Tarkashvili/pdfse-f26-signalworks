// One place that sends events to PostHog. Event names come from
// 03-build/analytics/event-schema.md; copy them, never retype them.
import posthog from "posthog-js";

let started = false;

function ensureStarted(): boolean {
  if (started) return true;
  if (typeof window === "undefined") return false;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return false; // no key set: events are skipped, the page still works
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
    person_profiles: "identified_only", // anonymous visitors only, no names
    autocapture: false,
    capture_pageview: false,
  });
  started = true;
  return true;
}

export function capture(event: string, properties: Record<string, unknown> = {}) {
  if (!ensureStarted()) return;
  posthog.capture(event, { visitor_id: posthog.get_distinct_id(), ...properties });
}
