# Sprint 2: the field week

Sprint 2 runs from Lab 7 to Lab 8. Real people use the product this week, and Lab 8 opens by reading what they did.

## Sprint 1 review

Our definition of done: merged to `main`, deployed at the public Vercel URL, walked on a phone by a teammate who did not build it, and its event shows in PostHog's Activity view.

| Story | Owner | Done by our definition? | If not: which clause is missing, and what happened |
|---|---|---|---|
| S1 · Ana taps go or skip | BR | Partly | Merged, live, decision works; BR walked production on mobile data. Missing: teammate-who-did-not-build-it walk + Live column in schema (MT confirms Activity) |
| S2 · Ana opens the canteen page | BR | Partly | Same: live and `student_opens_canteen` on dashboard/funnel; Activity Live column still MT |
| S3 · Ana sees the real wait | BR | Partly | Same: wait on live page; `student_sees_wait` on dashboard; Activity Live column still MT |
| S4 · Ana sees the wait against her break | MT | Partly | Live on /canteen with class-time / break fit; `student_sees_break_fit` on dashboard. Live column + Activity confirm still open |
| S5 · Ana sees why it is slow | LM | Partly | Reason on live page; `student_sees_reason` on dashboard. Live column + Activity confirm still open |
| S6 · Deploy and instrument | BR | Partly | Live URL + PostHog dashboard in README; events fire from production. Reconcile numbers and Live column still open (MT) |

**Slip rule:** did not fire. S4 (class-time / break fit) shipped on the live page; S1, S2, S3, S6 stayed as written.

## The gate

| Rung | Reached? | Evidence: a link or a number | If not: owner, and by when |
|---|---|---|---|
| 1 Production URL loads on a phone | Yes | https://pdfse-f26-signalworks-one.vercel.app/canteen · BR walk, mobile data | |
| 2 Journey completes there | Yes | wait → break fit → I'd go / I'd skip → "Noted" | |
| 3 North star event in Activity, from production | Yes | BR's walk Sat 21 Nov 15:00–15:05: all 5 events in Activity from production, Live column filled by MT in `03-build/analytics/event-schema.md` | |
| 4 Counts reconcile | Yes | PostHog 1 = database 1 for BR's walk window (Gate reconcile block in `03-build/analytics/event-schema.md`) | |
| 5 Dashboard, linked in README | Yes | https://eu.posthog.com/shared/qUv2Evycr4BxigNgbQ6Ns3YspoJKhQ | |

## Real hours before Lab 8

| Initials | Hours free | When, specifically |
|---|---|---|
| MT | 6 | Sun 23 Nov 20:00–22:00, Mon 24 Nov 18:00–22:00 |
| BR | 8 | Sat 22 Nov 14:00–18:00, Sun 23 Nov 19:00–23:00 |
| LM | 4 | Mon 24 Nov 18:00–22:00 |
| **Total** | **18** | |

## Stories this week

In this order: missing rungs, then anything that slipped from Sprint 1, then at most one new story, and only if a walk or a test session asked for it. Same shape as Sprint 1: one owner, a different reviewer, criteria checkable on a phone, the event it fires, hours. The sum must not exceed the total above.

### R3 · Live column from Activity · owner MT · reviewer BR · 1 h

**Done when:** MT watches Activity (or confirms recent production rows), adds the `Live` column to `03-build/analytics/event-schema.md`, and writes `yes` only for events seen from the production URL.

**Status:** done, Sat 21 Nov: all 5 events `yes`.

### R4 · Reconcile PostHog and Neon · owner MT · reviewer BR · 2 h

**Done when:** same window has PostHog count of `student_makes_lunch_decision` and Neon `decision` (or equivalent) count written in the Gate reconcile block; Match yes or no with the gap explained; internal filter set in PostHog.

**Status:** done, Sat 21 Nov: PostHog 1 = database 1; internal filter `is_team ≠ true` on all insights.

### F1 · Send field links · owner BR · reviewer MT · 2 h

**Done when:** the three people in the field-week table have the production URL (not a preview), and the Sent by / by when cells are filled.

### F2 · Mid-week look · owner BR · 1 h

**Done when:** BR opens the dashboard mid-week and writes one line under Prediction → Mid-week look.

Sum: 6 of 18 hours. The rest held for whatever real users break, plus LM on S5 polish if Activity shows a gap.

## Field week: who uses it

3 to 5 real people from your ICP. Not classmates. Code names and roles only, as in your logs. Each gets the production URL, never a preview link.

| Code name and role | Log or session they come from | How the link reaches them | Sent by, and by when | Opened? (fill in during the week) |
|---|---|---|---|---|
| CS-Y2 · 2nd-year CS, short break | `01-discovery/interview-logs/01-student-cafeteria.md` | Messenger / chat with production URL | BR, by Sun 23 Nov | |
| KIU-1 · 2nd-year law, 20-min break | `01-discovery/interview-logs/04-law-student-lecture-hall.md` | Messenger / chat with production URL | BR, by Sun 23 Nov | |
| KIU-2 · 3rd-year business, library blocks | `01-discovery/interview-logs/05-business-student-library.md` | Telegram / Messenger with production URL | BR, by Mon 24 Nov | |
| CS-Y2b · 2nd-year CS, 30-min break | `01-discovery/interview-logs/07-student-kiu.md` | Chat with production URL | MT, by Mon 24 Nov | |
| MGT-Y2 · 2nd-year management, late break | `01-discovery/interview-logs/08-student-kiu.md` | Chat with production URL | LM, by Mon 24 Nov | |

**What we tell them:** "We put the canteen wait on a phone page — open this link before you decide to queue. Tap I'd go or I'd skip after you read it. Student project; we only count opens and go/skip taps, no names."

## Prediction

Written in the lab, before the week starts. Never edited afterwards; Lab 8 reads it as written.

**By Lab 8:** 5 `student_makes_lunch_decision` events from real people, not our team. Also: at least 8 `student_opens_canteen` from those field links.

**We are wrong if:** fewer than 2 real-people `student_makes_lunch_decision` events by Lab 8.

**Mid-week look:** BR opens the dashboard on Wed 26 Nov and writes one line here: what the counts are and one thing we change because of them, or nothing.

## The DECISIONS.md line

Add one of these to the bottom of `DECISIONS.md` (you commit this yourself):

`Wk7 · Gate passed: live at [URL], north star event firing from production, PostHog [N] = database [N] · evidence: README links, 03-build/analytics/event-schema.md · owner: [initials]`

`Wk7 · Gate open at rung [N]: missing [what], owners and times in sprint-2.md · evidence: 03-build/sprints/sprint-2.md · owner: [initials]`

When an open gate closes, add the first line as a new entry that links the old one. Never edit the old line.
