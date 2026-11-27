# Field-week readout

One page on what real people did between Lab 7 and Lab 8. Counts, never percentages.

**Our state:** A: real people used it

**Window:** Sat 21 Nov 00:00 to Wed 25 Nov 00:00, Tbilisi time (field week, through Lab 8 on Tue 24 Nov). **Real people** means: not a team phone (`is_team` is not true) and not Beka's gate walk (visitor `01a1fdc4-e63a-7e6a-9ab2-8f5f15706bab`).

## 1. Is it real?

| Source | Count of `student_makes_lunch_decision` | Window | How it was counted |
|---|---|---|---|
| PostHog | 15 (12 people) | Lab 7 to Lab 8, as above | PostHog SQL editor on the events table, same exclusions as the internal filter plus Beka's walk: `select event, count() as events, count(distinct properties.visitor_id) as people from events where event in ('student_opens_canteen', 'student_sees_wait', 'student_sees_break_fit', 'student_makes_lunch_decision') and timestamp >= toDateTime('2026-11-20 20:00:00', 'UTC') and timestamp < toDateTime('2026-11-24 20:00:00', 'UTC') and ifNull(toString(properties.visitor_id), '') != '01a1fdc4-e63a-7e6a-9ab2-8f5f15706bab' and ifNull(toString(properties.is_team), '') != 'true' group by event` |
| Database | 15 | same | `select count(*) from lunch_decisions where is_team = false and visitor_id <> '01a1fdc4-e63a-7e6a-9ab2-8f5f15706bab' and created_at >= '2026-11-21 00:00+04' and created_at < '2026-11-25 00:00+04';` |

**Match:** yes, 15 and 15.

## 2. Prediction against reality

**Our prediction, pasted from `sprint-2.md` exactly as committed:** "By Lab 8: 5 student_makes_lunch_decision events from real people, not our team. Also: at least 8 student_opens_canteen from those field links. We are wrong if: fewer than 2 real-people student_makes_lunch_decision events by Lab 8."

| What we predicted | Predicted | Real |
|---|---|---|
| `student_makes_lunch_decision` from real people | 5 | 15 (from 12 people) |
| `student_opens_canteen` from the field links | at least 8 | 30 (from 18 people) |

**Did "we are wrong if" fire?** No: 15 decisions, not fewer than 2.

## 3. Where people stop

| Journey step (event name, pasted) | Count, real people only |
|---|---|
| `student_opens_canteen` | 18 |
| `student_sees_wait` | 18 |
| `student_sees_break_fit` | 18 |
| `student_makes_lunch_decision` | 12 |

`student_sees_reason` is left out: it fires only when the wait has a reason, so it is not a step every visitor passes.

**Widest drop:** between `student_sees_break_fit` and `student_makes_lunch_decision`: 18 to 12.

**Not explained by the counts:** 18 people opened the page, but we sent the link to 5 (field table in `sprint-2.md`). Either the link was passed on, or some visitors are teammates whose phones were never marked with `?team=1`. Section 5 asks.

## 4. Who is standing at the drop

**The actor:** [which kind of user, or the system]

| Person or group (code names) | What reached them | What they did | What they did not do |
|---|---|---|---|
| | | | |

**One timing or count that sizes the drop, and the query or insight it came from:** 6 of 18 people saw their break fit and did not tap go or skip (section 3 query).

## 5. What the data refuses to say

Three questions your counts cannot answer. Each has a person to ask.

| Question | Who we ask (code name) | Asked by, and by when |
|---|---|---|
| | | |

Every conversation is logged in `01-discovery/interview-logs/`, numbered on from your last log.

## 6. Claims

**Direction (two claims our counts support):** [...]
**Not yet (one claim we are tempted to make, and who we must ask first):** [...]

## 7. What changes

**Comes off the plan:** [one thing, and the count that removed it]
**Goes on:** [one thing, and the count that added it]

Add to `DECISIONS.md`:

`Wk8 · Field-week read: predicted [N], real [N]; widest drop at [step], actor: [who]; [what comes off], [what goes on] · evidence: 03-build/analytics/break-readout.md · owner: [initials]`

## 8. Who is next

**Our field table as a funnel:** asked [N] · link delivered [N] · opened [N] · did the first step [N] · reached the north star [N]

| Next person (code name, role) | Channel, and our evidence for it | Sent by | Sent in the lab? |
|---|---|---|---|
| | | | |

**The exact message we sent:** [who sent you, one true fact from the field week, one ask with a day in it; no pitch]

**Target before Lab 9:** [N] new people holding a working link.
