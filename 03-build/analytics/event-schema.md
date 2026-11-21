# Event Schema

Your metric is only as good as your instrumentation. Every row here becomes one `capture()` call in Week 7 and one dashboard tile. Names are copied from this file, never retyped.

**North star:** Go or skip decisions made from the canteen wait per active student per week.

**North star event:** `student_makes_lunch_decision`

**How the north star is computed from events:** count of `student_makes_lunch_decision`, per `visitor_id` with at least one decision in the window, per week (Monday to Sunday).

## Events

| Step | Event (actor_verb_object) | Fired by | Properties (never a name, phone, email, or message text) | Owner | Live |
|---|---|---|---|---|---|
| Acquisition | `student_opens_canteen` | student (browser, on page load) | visitor_id, source (qr, link, direct), local_time | BR | yes |
| Activation (precursor) | `student_sees_wait` | student (browser, on page load) | visitor_id, minutes, minutes_since_update | BR | yes |
| Activation (precursor) | `student_sees_break_fit` | student (browser, on load and when the class time changes) | visitor_id, minutes, class_at, minutes_to_spare | MT | yes |
| Activation (precursor) | `student_sees_reason` | student (browser, only when a reason is shown) | visitor_id, reason | LM | yes |
| Activation (north star) ★ | `student_makes_lunch_decision` | student (browser, after the save to the database returns OK) | visitor_id, decision (go, skip), minutes, minutes_to_spare, seconds_on_page | BR | yes |

Retention has no event of its own: it is the same student firing `student_makes_lunch_decision` again in a later week. Referral and Revenue are empty on purpose; there is nothing to refer or pay for before Week 12.

## Rules we are following

- One name per event, one spelling, lowercase with underscores.
- `visitor_id` on every event. It is PostHog's anonymous id. A teammate's phone carries `is_team = true` after opening the page once with `?team=1`. No names, student IDs, phone numbers or emails anywhere in analytics.
- The north star event is fired by the student, because the student receives the value and the student is who the problem statement is about.
- `student_sees_wait` stays as a precursor so that when decisions are low we can see whether students are not arriving or are arriving and not deciding.

## Reconcile plan

Before we believe the dashboard, we count the north star event a second way.

**Event most likely to fail silently:** `student_makes_lunch_decision`
**How it would fail:** never fires. The student reads the wait, decides, puts the phone away and walks off without tapping; or an ad blocker on her phone blocks PostHog.
**The check that would catch it:** in every test session and in the Week 7 lab, the logger writes down by hand whether the tester decided and whether they tapped, then compares with the events for that session in PostHog's Activity view. If people decide but the event is missing, the button is the problem; if they tapped and it is still missing, the blocker is.
**Who runs the check in Week 7:** MT

## Gate reconcile (Lab 7)

**Production URL walked:** https://pdfse-f26-signalworks-one.vercel.app/canteen · **walked by:** BR (did not build the north star step), Sat 21 Nov 15:00–15:05, visitor `01a1fdc4-e63a-7e6a-9ab2-8f5f15706bab` · on a phone, mobile data: yes

| Source | Count | Window | Exactly how it was counted |
|---|---|---|---|
| PostHog | 1 | Sat 21 Nov 15:00 to 15:06, Tbilisi time | Activity, filtered to `student_makes_lunch_decision` in the window, internal filter off; all 5 schema events seen from the same visitor |
| Database | 1 | Same | `select count(*) from lunch_decisions where created_at >= '2026-11-21 15:00+04' and created_at < '2026-11-21 15:06+04';` |

**Match:** yes, on the first try.

**If no, first:** not needed. The walk was checked in PostHog Activity afterwards, not live: MT read the events for Beka's visitor id once he had finished.

**Silent failure we predicted in Lab 5:** students decide without tapping, or an ad blocker drops the event. · **Did it happen?** Not in the walk: Beka tapped, and the tap is in both PostHog and the database. For real students we will know from the field week, by comparing decisions in `lunch_decisions` with `student_opens_canteen` visits.

**Internal filter set in PostHog:** `is_team ≠ true`, plus PostHog's default internal-users cohort; on for all new insights and turned on for all existing ones. · **our test record is:** any phone that opened the page with `?team=1`; its rows have `is_team = true` in `lunch_decisions`.

**Checked by:** MT · **events still not Live, with owner and by when:** none
