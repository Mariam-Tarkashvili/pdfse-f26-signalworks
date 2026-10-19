# Homework 1 · Beka Revazishvili (@Beqarev) · Team SignalWorks

**Individual. 5 points. Commit from your own account, then fill the HW1 section of the Google form.**

## 1. My interview log

Every real interview I took part in. At least 2 where I was the **asker**.

| Log file (link) | My role (asked / logged / both) | What this interview changed, in one sentence |
|---|---|---|
| [01-student-cafeteria.md](../../01-discovery/interview-logs/01-student-cafeteria.md) | asked | Doorway as go/no-go: "You never know in advance whether you'll need 5 minutes or 25" became our strongest pattern seed. |
| [02-student-exam-week.md](../../01-discovery/interview-logs/02-student-exam-week.md) | asked | Showed peer texting as a pre-check ("Is the line big?") and that exam-week students will skip lunch entirely rather than risk the queue. |
| [03-student-campus-freshman.md](../../01-discovery/interview-logs/03-student-campus-freshman.md) | asked | Waited 20 minutes and food ran out — second unknown at the door, later a runner-up in `DECISIONS.md`. |
| [04-law-student-lecture-hall.md](../../01-discovery/interview-logs/04-law-student-lecture-hall.md) | logged | Another door look-and-leave: skipped lunch for the library when wait was unknowable. |
| [06-finance-masters-canteen.md](../../01-discovery/interview-logs/06-finance-masters-canteen.md) | logged | Joined, stood 5 minutes with no movement, left with no food — Pattern 4 (abandon after joining). |
| [07-student-kiu.md](../../01-discovery/interview-logs/07-student-kiu.md) | logged | Friend-check fails ("Sometimes she answers, sometimes not"); also waited 15 minutes then left for lecture. |
| [08-student-kiu.md](../../01-discovery/interview-logs/08-student-kiu.md) | logged | Sharpest cost: seven minutes late and attendance mark refused after a long line with no hot food left. |

**The quote I heard myself that mattered most, with its log number:**

> "წინასწარ არასდროს იცი 5 წუთი დაგჭირდება თუ 25." / "You never know in advance whether you'll need 5 minutes or 25." (01)

**One moment I broke the Mom Test, and what I asked instead next time** (name the log):

In log 02, after he described texting a friend about the line, I asked something like whether it would help to know the wait beforehand. He said yes, which told us nothing. In log 03 I stayed in the past: "Walk me through the last time you stood in that line — what happened at the end?" and got the 20-minute wait where the food ran out.

## 2. Pattern journal, Weeks 1 to 4

Copied from `members/Beqarev/pattern-journal.md`.

### Week 1 · Act like an owner, not a role

Joined SignalWorks and treated discovery as everyone's job, not only the Discovery lead. Wrote three problem statements from personal observation (clinic wait, Messenger bookings, housing photos vs reality) and committed them to `00-foundation/problem-pool.md` instead of waiting for someone else to fill my share. Signed the team contract as Build lead so repo/code accountability had a named owner from day one. `00-foundation/problem-pool.md`, `00-foundation/team-contract.md`

### Week 2 · Evidence over opinion

Stayed on evidence instead of jumping to a product idea. Helped land the cafeteria-queue investigation by writing ICP v1 (`00-foundation/icp.md`) as one person (Ana), not "students in general", and a falsifiable problem hypothesis (`01-discovery/problem-hypothesis.md`) with a clear "we are wrong if" line before any real interview. Filled three outreach targets in `01-discovery/outreach-tracker.md` so interviews get booked instead of debated. Went beyond the Build lane to do foundation/discovery docs when the team needed them done. `00-foundation/icp.md`, `01-discovery/problem-hypothesis.md`, `01-discovery/outreach-tracker.md`

### Week 3 · Kill your favorite idea

My favorite belief was that the real pain is the short break itself, not wait uncertainty. I still put it in the script as an unpicked belief, then asked three real interviews (`01-student-cafeteria.md`, `02-student-exam-week.md`, `03-student-campus-freshman.md`) as asker with Mariam logging. All three raised not knowing the wait before we named it, which supported confirming the team prediction instead of mine. Outside Build: wrote the logs with verbatim quotes and drafted an early affinity map from those nine quotes. Hack: used each log's Prediction check line to tally yes/no for the hypothesis instead of re-reading every transcript. `01-discovery/interview-logs/01-student-cafeteria.md`, `01-discovery/synthesis/affinity-map.md`

### Week 4 · The prototype is the conversation

Read Mariam's `02-design/prototype-plan.md` as Build lead so I know what we will actually ship to test: whether a student will decide from a wait signal on a phone instead of walking to the door. Outside my lane, I filled the empty `01-discovery/synthesis/patterns-analysis.md` (five whys on Patterns 1–3) so Milestone 1 rubric row 4 was not missing, and checked it against the problem statement root cause. Hack: started from the three strongest affinity clusters and the root cause already written in `01-discovery/problem-statement.md` instead of redoing five whys from scratch. `01-discovery/synthesis/patterns-analysis.md`, `02-design/prototype-plan.md`

## 3. My DECISIONS.md citations

Each `DECISIONS.md` line I drove or supplied evidence for. Copied exactly.

| The line, copied | What I did for it |
|---|---|
| `Wk2 · Investigate: Students cannot tell how long the canteen queue is between classes, so they skip meals or arrive late · evidence: 00-foundation/problem-pool.md (Mariam Tarkashvili, Luka Mekoshvili,Beqa Revazishvili), 00-foundation/four-filters-scorecard.md · runner-up: Dorm laundry uncertainty · owner: LM` | Named in the evidence list; wrote ICP v1 and problem hypothesis v1 that framed the investigation after the pick. |
| `Wk3 · Prediction "We are wrong if students describing the last time they skipped lunch or arrived late do not mention uncertainty about wait time (guessing at the door / no way to know) before we bring it up" verdict: confirmed · evidence: 01-discovery/interview-logs/01-student-cafeteria.md, 02-student-exam-week.md, 03-student-campus-freshman.md, 04-law-student-lecture-hall.md, 05-business-student-library.md, 06-finance-masters-canteen.md, 07-student-kiu.md, 10-student-kiu.md · owner: MT · runner-up: food runs out before their turn (03, 08); break too short to eat (09)` | Asked in evidence logs 01, 02, 03; logged 04, 06, 07 (and 08 for the food-runs-out runner-up). |
| `Wk4 · Problem statement v1: KIU students with a fixed 20–40 minute break cannot tell from the canteen door how long getting food will take, so they skip lunch or arrive late · evidence: 01-discovery/problem-statement.md, 01-discovery/synthesis/patterns-analysis.md · owner: MT` | Completed `01-discovery/synthesis/patterns-analysis.md`, which this line cites as evidence. |

---

**Before you upload, check**

- [x] 2 or more rows say "asked" or "both", and each links a real log in `01-discovery/interview-logs/`.
- [x] Four journal entries, each with a link. The commit history shows they were written across the weeks, not tonight.
- [x] Every DECISIONS.md line is copied word for word, and the owner or evidence on it connects to you.
- [ ] Committed from your own GitHub account. Uploaded to the LMS / Google form before the deadline.
