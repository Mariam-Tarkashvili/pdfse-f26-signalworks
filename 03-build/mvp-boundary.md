# MVP Boundary

The smallest complete user journey that tests whether the product creates value. Complete: the person gets the value, start to finish. Smallest: nothing that is not on that path is in Sprint 1.

**Value hypothesis under test:** A KIU student with a fixed 20–40 minute break who can see the canteen wait on her phone before she leaves class will decide to go or skip from that number, instead of guessing at the door, and stop losing break minutes to a line she then abandons (problem statement, sentences 2 and 5; logs 04, 05, 06, 07).

**The one person walking this journey:** Ana, 20, second-year KIU student with back-to-back classes and a short break that is her only chance to eat on campus (`00-foundation/icp.md`).

## The journey

1. Ana opens `/canteen` on her phone as she leaves the lecture at 13:30
2. Ana sees how many minutes it takes from the door to the counter right now, and how old that number is
3. Ana sees that wait against her break: when she would have food, and when her class starts
4. Ana sees why the line is slow, if it is (for example, stuck at the register)
5. Ana taps "I'd go" or "I'd skip", and goes or does not

**Why this is complete:** After step 5 Ana has decided whether to join the line knowing how long it will take, which is the thing she could not do at the door (logs 01, 04, 07).

**Why this is smallest:** We considered removing step 3. Log 06 says a 10-minute wait "would be fine" and the real question is whether it fits the break; without step 3 Ana still has to do the arithmetic against her class time and may still walk to the door to check.

**Outside the journey, by hand in Sprint 1:** a teammate at the canteen updates the minutes and the reason in the database. No form, no login.

## Cut list

| Feature | Reason (cite the log, session, or hypothesis) | Comes back when |
|---|---|---|
| Whether food is still left | A real second unknown (03, 08), but the hypothesis is about the wait; mixing it in would blur what the decision was based on | After the first test round, if testers decide from the wait |
| Texting or sharing with friends | Texting a friend is the workaround that fails (02, 05, 07); the page replaces it, not extends it | Never |
| Menu, prices, dish photos | 0 of 10 logs asked; they do not change go or skip | Never, until a student asks |
| Pre-ordering or paying ahead | No interviewee named it (`01-discovery/competitive-landscape-seed.md`, Alternatives nobody mentioned); the hypothesis is testable without the canteen changing anything | Only if the canteen proposes it |
| Delivery ordering | A different job: eating without the canteen (03, 06) | Never |
| Accounts and login | Nothing is personal; any student reads the same number | When something has to be saved per student |
| Staff dashboard to update the wait | One database row updated by a teammate is enough to test whether students act on a number | When the canteen agrees to keep the number current |
| Automatic queue counting (camera, sensors) | Tests nothing about whether students decide from a number; it only makes the number cheaper to produce | Only if the north star moves |
| Push notifications | Ana checks when she leaves class (prototype plan, section 5 task); nothing needs to reach her first | If session logs show testers forgetting to check |
| Ratings and reviews | 0 of 10 logs | Never, until a student asks |

## Step to event

| Step | Event (actor_verb_object) | In the schema? |
|---|---|---|
| 1 | `student_opens_canteen` | yes |
| 2 | `student_sees_wait` | yes |
| 3 | `student_sees_break_fit` | yes |
| 4 | `student_sees_reason` | yes |
| 5 | `student_makes_lunch_decision` | yes |

**North star step:** 5

## The DECISIONS.md line

`Wk6 · MVP boundary: 5-step journey (Ana opens /canteen to Ana taps go or skip); cut food-left status, friend sharing, menu and pre-ordering · evidence: 03-build/mvp-boundary.md, logs 02, 03, 05, 06, 07, 08 · owner: MT`
