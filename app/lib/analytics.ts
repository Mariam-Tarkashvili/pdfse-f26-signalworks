// One place that sends events to PostHog. Event names come from
// 03-build/analytics/event-schema.md; copy them, never retype them.
import posthog from "posthog-js";

let started = false;

// A teammate's phone is marked once by opening the page with ?team=1
// (and unmarked with ?team=0). Its events carry is_team = true, so the
// PostHog internal filter and the database count can leave them out.
export function isTeamDevice(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const flag = new URLSearchParams(window.location.search).get("team");
    if (flag === "1") localStorage.setItem("signalworks_team", "1");
    if (flag === "0") localStorage.removeItem("signalworks_team");
    return localStorage.getItem("signalworks_team") === "1";
  } catch {
    return false;
  }
}

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
  posthog.register({ is_team: isTeamDevice() });
  started = true;
  return true;
}

// PostHog's anonymous id, or a random id kept on this phone if PostHog is off.
export function visitorId(): string {
  if (ensureStarted()) return posthog.get_distinct_id();
  try {
    let id = localStorage.getItem("signalworks_visitor");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("signalworks_visitor", id);
    }
    return id;
  } catch {
    return "unknown";
  }
}

export function capture(event: string, properties: Record<string, unknown> = {}) {
  if (!ensureStarted()) return;
  posthog.capture(event, { visitor_id: posthog.get_distinct_id(), ...properties });
}
