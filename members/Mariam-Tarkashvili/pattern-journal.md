# Pattern journal · Mariam Tarkashvili (@Mariam-Tarkashvili)

Same prompt every week: Where did you apply this pattern this week, where did you exercise agency beyond your assigned lane, and what did you hack together to test something faster than the plan allowed? Link the DECISIONS.md lines you drove.

## Week 1 · Act like an owner, not a role

No lab was held in Week 1. I joined SignalWorks and took the Delivery accountability (deadlines, submissions, milestone tags). `00-foundation/team-contract.md`

**DECISIONS.md:** N/A

## Week 2 · Evidence over opinion

My problem-pool statement (3. KIU Cafeteria Queues), based on watching about ten students leave the line in one rush, became the problem the team picked. Outside my lane, I created a repository and a catch-up agenda instead of waiting for direction, and wrote our interview script v1 in Georgian and English, with the "we are wrong if" line at the top and one question for each belief we did not pick. Hack: I contacted four people for interviews in one go and added them to the outreach tracker, bringing the team to seven booked. `00-foundation/problem-pool.md`, `01-discovery/interview-script-v1.md`

**DECISIONS.md:** Wk2 · Investigate (evidence: my problem-pool statement 3; owner: LM)

## Week 3 · Kill your favorite idea

The canteen-queue problem was my own idea, so I counted the prediction across all ten logs rather than assume it held: eight raised not knowing the wait before we mentioned it, so the verdict is confirmed, and the two that did not became our runners-up (food running out in 03 and 08, a break too short to eat in 09). I asked in interviews 07, 08 and 09 and logged 10. Outside my lane, I regrouped all 30 quotes in the affinity map into eight patterns instead of appending mine, because three of my teammates' clusters said the same thing. I ran the five whys on the strongest pattern, marked the answers that were guesses, and wrote script v2 with four new questions from surprises in two or more logs. Hack: I tallied the verdict from each log's "Prediction check" line instead of rereading every log. `01-discovery/synthesis/affinity-map.md`, `01-discovery/synthesis/patterns-analysis.md`, `01-discovery/interview-script-v2.md`

**DECISIONS.md:** Wk3 · Prediction verdict: confirmed (owner: MT)

## Week 4 · The prototype is the conversation

I wrote the prototype plan around the one behavior no log has tested yet: whether a student will decide from a wait time on their phone instead of walking to the door to look. The failure behaviors come from what students told us they do today (checking the door in 01, 04, 10; texting a friend in 02, 05, 07). Outside my lane (Build and Discovery), I wrote the problem statement and the competitive landscape seed and checked every log number against the full logs, which corrected the break length from 30–40 to 20–40 minutes. In my own lane, I graded us against the Milestone 1 rubric, fixed the team contract and ICP, and pushed the `m1-discovery` tag. Hack: GitHub's website has no tag button, so I created the tag through a release. `02-design/prototype-plan.md`, `01-discovery/problem-statement.md`, `01-discovery/competitive-landscape-seed.md`

**DECISIONS.md:** Wk4 · Problem statement v1 (owner: MT)
## Week 5 · One metric that matters

I chose our north star from three candidates: go or skip decisions made from the canteen wait per active student per week. I rejected page visits and students who ever opened the page because they count presence, not value: a student can open the page and still walk to the door to look (log 04). I wrote the event schema around it, with `student_makes_lunch_decision` as the north star event and a reconcile plan for its most likely silent failure: students deciding without tapping. Outside my lane, I split the Lab 5 and 6 work between the three of us in one document with owners and deadlines. Beka built the Lovable prototype; Luka wrote the test plan. `03-build/analytics/event-schema.md`

**DECISIONS.md:** Wk5 · North star (owner: MT)

## Week 6 · The smallest complete journey

I wrote the MVP boundary from the five journey steps Beka had first sketched in the architecture: from Ana opening /canteen to Ana tapping go or skip. I added the value hypothesis and cut ten features, including food-left status (03, 08), friend sharing and accounts. I wrote Sprint 1 with one story per step, the north star step first, and set up the board. Beka wrote the architecture and the first /canteen page; Luka built the "why it is slow" line. Outside my lane (Build), I extended their code with Claude: the go/skip buttons, PostHog events, the wait read from the database and the class-time picker. I deployed it on Vercel with Neon and PostHog and built the dashboard. I logged three test sessions on the prototype while Beka ran them: all three failed, but on navigation and the missing decision button, not on trusting the number, so we rerun the test on the deployed one-screen product next. Hack: I created the database from Vercel's Storage tab so the connection string was set automatically, and used a README commit to trigger the redeploy. `03-build/mvp-boundary.md`, `03-build/sprints/sprint-1.md`, `02-design/user-testing/usability-findings.md`, `docs/ai-usage-log.md`

**DECISIONS.md:** Wk6 · MVP boundary (owner: MT), Wk6 · Prototype test (owner: MT)

## Week 7 · Ship to learn

I made every go/skip tap save to the database before the event fires, so the two counts can be compared, and added a `?team=1` flag so our own phones can be filtered out. I set PostHog's internal filter on every tile and added the funnel and retention tiles. I missed Beka's walk live, so I found it afterwards in PostHog Activity by his visitor id, then counted the same six minutes in Neon: 1 and 1, and the gate passed. Beyond my lane, I split the Lab 7 work, keeping the PostHog and deploy tasks for myself. `03-build/analytics/event-schema.md`, `03-build/sprints/sprint-2.md`

**DECISIONS.md:** Wk7 · Gate passed (owner: MT)
