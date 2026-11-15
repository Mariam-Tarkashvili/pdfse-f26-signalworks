# Sprint 1

Sprint 1 runs from today to the Week 7 lab (Tue 17 Nov) and ends at the gate: deployed at a public URL, north star event firing in PostHog. Everything here is sized to the hours we actually have.

## Definition of done

A story is done when it is merged to `main`, deployed at the public Vercel URL, walked on a phone by a teammate who did not build it, and its event shows in PostHog's Activity view.

## Real hours before the Week 7 lab

| Initials | Hours free | When, specifically |
|---|---|---|
| MT | 6 |Sun 15 Nov 20:00–21:00, Mon 16 Nov 16:00–21:00|
| BR | 9 | Sun 15 Nov 19:00–23:00, Mon 16 Nov 17:00–22:00 |
| LM | 4 | Mon 16 Nov 18:00–22:00 |
| **Total** | 19 | |

## The board

GitHub Projects on the team repo, linked from the README. Columns: next, doing, review, done. One card per story below. Merge to `main` every day you work.

## Stories

### S1 · Ana taps go or skip · owner BR · reviewer MT · 2 h

**As** Ana, **I** tap "I'd go" or "I'd skip" after reading the wait **so that** I decide whether to join the line before I lose break minutes in it.

**Acceptance criteria:**
- Given `/canteen` on a phone showing a wait, when I tap "I'd go", then the buttons are replaced by "Noted: you're going"
- And tapping again does nothing; one decision per visit
- And `student_makes_lunch_decision` fires once with `visitor_id`, `decision`, `minutes`, `minutes_to_spare`, `seconds_on_page`

**Smallest demo that proves it:** open the URL on a phone, tap "I'd skip", show the one event in Activity.

### S2 · Ana opens the canteen page · owner BR · reviewer LM · 1 h

**As** Ana, **I** open `/canteen` on my phone as I leave class **so that** I can check the canteen without walking there.

**Acceptance criteria:**
- Given the public URL on a phone on mobile data, when it loads, then the wait is readable without zooming
- And `student_opens_canteen` fires once per load with `visitor_id` and `source` (from `?src=qr`, `link`, or `direct`)

**Smallest demo that proves it:** open the URL with `?src=qr`, show the event.

### S3 · Ana sees the real wait · owner BR · reviewer MT · 3 h

**As** Ana, **I** see how long it takes from the door to the counter right now **so that** I stop guessing from how many people are standing there.

**Acceptance criteria:**
- Given a `canteen_status` row with 18 minutes, when I load the page, then it says "About 18 minutes from the door to the counter"
- And changing the row to 6 and reloading shows 6; "Updated N min ago" matches the row's `updated_at`
- And `student_sees_wait` fires with `minutes` and `minutes_since_update`

**Smallest demo that proves it:** change the row, reload on a phone, show the new number and the event.

### S4 · Ana sees the wait against her break · owner MT · reviewer BR · 2 h

**As** Ana, **I** see when I would have food and when my class starts **so that** I know whether the wait fits my break.

**Acceptance criteria:**
- Given a wait of 18 minutes at 13:30, when I pick 14:00 as my class time, then it says "Food by 13:48. Your class starts at 14:00." and "12 minutes to spare"
- And if the food-by time is after the class time, the line says so in red
- And `student_sees_break_fit` fires with `minutes`, `class_at`, `minutes_to_spare`

**Smallest demo that proves it:** pick 13:45, show the red "no time" line and the event.

### S5 · Ana sees why it is slow · owner LM · reviewer BR · 1 h

**As** Ana, **I** see why the line is slow **so that** a short-looking line that is stuck at the register does not fool me.

**Acceptance criteria:**
- Given a row with reason "stuck at the register", when I load the page, then it says "Moving slowly: stuck at the register"
- And with no reason in the row, the line is hidden
- And `student_sees_reason` fires with `reason` only when the line is shown

**Smallest demo that proves it:** clear the reason, reload, show the line gone and no event.

### S6 · Deploy and instrument · owner BR · reviewer MT · 3 h

First, not last: `setup/SHIP-STACK-SETUP.md` on the first evening, so S1 to S5 deploy the day they merge. Public URL in the README's Live product row, Neon connected, every schema event visible in PostHog's Activity view, reconcile check written in `03-build/analytics/event-schema.md`. The Week 7 lab adds the dashboard.

Story hours total: 12. They must not exceed the total in the hours table; if they do, the slip rule decides.

## Slip rule

Written now, obeyed later. If S4 is not done by Monday 16 November at 21:00, the class-time picker moves to Sprint 2 and the page shows the wait and the reason only; S1, S2, S3 and S6 stay no matter what, because without the wait and the go or skip tap the north star event cannot fire.

## The DECISIONS.md lines

The boundary line is in `03-build/mvp-boundary.md`. Our prototype was not built before the Week 6 lab, so this line goes to `DECISIONS.md` as well:

`Wk6 · Prototype track: clickable v1 generated from 02-design/prototype-plan.md (Lovable, https://kiu-break-bite-clock.lovable.app/); frozen test runs on it, 3 sessions before the Week 7 lab · evidence: 02-design/prototype-plan.md · owner: MT`
