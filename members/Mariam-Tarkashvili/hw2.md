# Homework 2 · Mariam Tarkashvili (@Mariam-Tarkashvili) · SignalWorks

## 1. Ship report

The code in the first two rows was written with Claude and is logged in `docs/ai-usage-log.md`.

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Go/skip buttons firing `student_makes_lunch_decision`, PostHog wiring for all five events, the wait read from Neon, and the class-time picker, built on Beka's /canteen page and Luka's WhySlow component | S1, S2, S3, S4 | [10540a5](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/10540a536b2f070d8f72758f9d455237dcd9f1dd) | Yes | BR's walk, Sat 21 Nov 15:00–15:05, mobile data: all 5 events Live |
| Each decision saved to a `lunch_decisions` table before the event fires, plus a `?team=1` flag for our own phones | Rung 4 | [869422a](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/869422a61b013472e70a10fbdbfc1c1cdb4d1154) | Yes | BR's walk; his tap is one row in Neon |
| Deployed on Vercel with Neon and PostHog; live link in the README | S6, rung 1 | [49b9564](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/49b956424a2ca4297d4d242b52478ecfbfe45960) | Yes | BR's walk |
| PostHog dashboard (north star trend, funnel, retention) with the internal filter on every tile; public link in the README | Rung 5 | [842edbb](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/842edbb7f89116f9f0f92478cda50d7b37fd40b7) | Yes | Opens without a login |
| `Live` column and gate reconcile: PostHog 1 = database 1 | Rungs 3 and 4, R3, R4 | [3ab5f28](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/3ab5f28f38cc8528b08ed047cb8fc42375e2cbbe), [ed9c43a](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/ed9c43a9360e32323fb9ce0f878d2e7741922f5d) | n/a | Reviewer BR, per `sprint-2.md` |
| Logged three test sessions on the Lovable prototype (Beka ran them) | Test plan, sessions 1 to 3 | [0632126](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/063212697e7d4a4fc3d52d014a71407fbbfdbe9e), [f9bbd86](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/f9bbd86d90f4613a247c74e0b40bcd064b3db693) | n/a | Beka was in every session |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** the go/skip buttons. Our predicted silent failure is that students read the wait and walk off without tapping. I will compare the funnel's last step, `student_makes_lunch_decision`, with its first, `student_opens_canteen`, for the five field-week people. If fewer than 1 in 3 visits ends in a tap, the buttons are not doing their job.

**One thing I did that was not my assigned story:** S1, S3 and S6 were Beka's stories in `sprint-1.md`. With the Week 7 gate already missed, I built and deployed them on 18 Nov on top of his page so the field week could start ([10540a5](https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/10540a536b2f070d8f72758f9d455237dcd9f1dd)).

## 2. Pattern journal, Weeks 5 to 7

I wrote the Week 5 and Week 6 entries late, on 18 Nov, and the Week 7 entry now.

### Week 5 · One metric that matters

I chose our north star from three candidates: go or skip decisions made from the canteen wait per active student per week. I rejected page visits and students who ever opened the page because they count presence: a student can open the page and still walk to the door to look (log 04). I wrote the event schema around `student_makes_lunch_decision`, with a reconcile plan for its likely silent failure, students deciding without tapping. Beyond my lane, I split the Lab 5 and 6 work between the three of us with owners and deadlines. I had no hack this week.

### Week 6 · The smallest complete journey

I wrote the MVP boundary from the five journey steps Beka had first sketched in the architecture, added the value hypothesis and cut ten features, including food-left status (03, 08). I wrote Sprint 1 with the north star step first and set up the board. I logged three test sessions while Beka ran them: all three failed on the prototype's navigation and missing decision button, not on trusting the number. Beyond my lane (Build), I built and deployed Beka's stories S1, S3 and S6 on top of his page once the gate was missed. Hack: I created the database from Vercel's Storage tab so the connection string was set automatically.

### Week 7 · Ship to learn

I made every go/skip tap save to the database before the event fires, so the two counts can be compared, and added a `?team=1` flag so our own phones can be filtered out. I set PostHog's internal filter on every tile and added the funnel and retention tiles. My hack: I missed Beka's walk live, so I found it afterwards in PostHog Activity by his visitor id, then counted the same six minutes in Neon: 1 and 1, and the gate passed. Beyond my lane, I split the Lab 7 work, keeping the PostHog and deploy tasks for myself.

## 3. My DECISIONS.md lines

> `Wk5 · North star: go or skip decisions made from the canteen wait per active student per week; rejected page visits (presence) and students ever opened (presence, cumulative) · evidence: 03-build/analytics/event-schema.md, 01-discovery/interview-logs/01-student-cafeteria.md, 04-law-student-lecture-hall.md, 06-finance-masters-canteen.md, 07-student-kiu.md · owner: MT`

The evidence is the moment at the door in logs 01, 04, 06 and 07, and the event that counts it in the schema.

> `Wk6 · MVP boundary: 5-step journey (Ana opens /canteen to Ana taps go or skip); cut food-left status, friend sharing, menu and pre-ordering · evidence: 03-build/mvp-boundary.md, logs 02, 03, 05, 06, 07, 08 · owner: MT`

The cut list in `03-build/mvp-boundary.md` gives the log behind each cut.

> `Wk6 · Prototype test: 3 of 3 failed the frozen test on the Lovable prototype, all on navigation and the missing decision button, none on trusting the number; rerun the same test on the deployed one-screen product before building the photo version · evidence: 02-design/user-testing/usability-findings.md (sessions 1 to 3) · owner: MT`

The evidence is my log of the three sessions in `02-design/user-testing/usability-findings.md`.

> `Wk7 · Gate passed (closes the "Gate open at rung 4" line above): live at https://pdfse-f26-signalworks-one.vercel.app/canteen, north star event firing from production, PostHog 1 = database 1 · evidence: README links, 03-build/analytics/event-schema.md · owner: MT`

The evidence is the gate reconcile block in `03-build/analytics/event-schema.md`: Beka's walk, counted in PostHog and in Neon for the same window.

## 4. My person this week

**The field-week person I am responsible for:** CS-Y2b · 2nd-year CS student with a 30-minute break (log 07), from `03-build/sprints/sprint-2.md` · **how and when the link reaches them:** Luka sent the production link by chat on Sat 21 Nov and it is marked opened; I follow up before Lab 8 to ask whether they decided from it, and check whether a tap of theirs reached `lunch_decisions`.
