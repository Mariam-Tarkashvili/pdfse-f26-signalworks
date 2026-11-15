# Event Schema

Your metric is only as good as your instrumentation. Every row here becomes one `capture()` call in Week 7 and one dashboard tile. Names are copied from this file, never retyped.

**North star:** Go or skip decisions made from the canteen wait per active student per week.

**North star event:** `student_makes_lunch_decision`

**How the north star is computed from events:** count of `student_makes_lunch_decision`, per `visitor_id` with at least one decision in the window, per week (Monday to Sunday).

## Events

| Step | Event (actor_verb_object) | Fired by | Properties (never a name, phone, email, or message text) | Owner |
|---|---|---|---|---|
| Acquisition | `student_opens_canteen` | student | visitor_id, source (qr, link, direct), local_time | BR |
| Activation (precursor) | `student_sees_wait` | student | visitor_id, minutes, minutes_since_update | BR |
| Activation (precursor) | `student_sees_break_fit` | student | visitor_id, minutes, class_at, minutes_to_spare | MT |
| Activation (precursor) | `student_sees_reason` | student | visitor_id, reason | LM |
| Activation (north star) ★ | `student_makes_lunch_decision` | student | visitor_id, decision (go, skip), minutes, minutes_to_spare, seconds_on_page | BR |

Retention has no event of its own: it is the same student firing `student_makes_lunch_decision` again in a later week. Referral and Revenue are empty on purpose; there is nothing to refer or pay for before Week 12.

## Rules we are following

- One name per event, one spelling, lowercase with underscores.
- `visitor_id` on every event. It is PostHog's anonymous id. No names, student IDs, phone numbers or emails anywhere in analytics.
- The north star event is fired by the student, because the student receives the value and the student is who the problem statement is about.
- `student_sees_wait` stays as a precursor so that when decisions are low we can see whether students are not arriving or are arriving and not deciding.

## Reconcile plan

Before we believe the dashboard, we count the north star event a second way.

**Event most likely to fail silently:** `student_makes_lunch_decision`
**How it would fail:** never fires. The student reads the wait, decides, puts the phone away and walks off without tapping; or an ad blocker on her phone blocks PostHog.
**The check that would catch it:** in every test session and in the Week 7 lab, the logger writes down by hand whether the tester decided and whether they tapped, then compares with the events for that session in PostHog's Activity view. If people decide but the event is missing, the button is the problem; if they tapped and it is still missing, the blocker is.
**Who runs the check in Week 7:** MT
