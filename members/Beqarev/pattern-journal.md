# Pattern journal · Beka Revazishvili (@Beqarev)

Same prompt every week: Where did you apply this pattern this week, where did you exercise agency beyond your assigned lane, and what did you hack together to test something faster than the plan allowed? Link the DECISIONS.md lines you drove.

## Week 1 · Act like an owner, not a role

Joined SignalWorks and treated discovery as everyone's job, not only the Discovery lead. Wrote three problem statements from personal observation (clinic wait, Messenger bookings, housing photos vs reality) and committed them to `00-foundation/problem-pool.md` instead of waiting for someone else to fill my share. Signed the team contract as Build lead so repo/code accountability had a named owner from day one.

**DECISIONS.md:** N/A (problem pick came in Week 2)

## Week 2 · Evidence over opinion

Stayed on evidence instead of jumping to a product idea. Helped land the cafeteria-queue investigation by writing ICP v1 (`00-foundation/icp.md`) as one person (Ana), not "students in general", and a falsifiable problem hypothesis (`01-discovery/problem-hypothesis.md`) with a clear "we are wrong if" line before any real interview. Filled three outreach targets in `01-discovery/outreach-tracker.md` so interviews get booked instead of debated. Went beyond the Build lane to do foundation/discovery docs when the team needed them done.

**DECISIONS.md:** team pick line — investigate cafeteria queue uncertainty (owner LM); I did not drive that line, but built ICP + hypothesis evidence that sits under it.

## Week 3 · Kill your favorite idea

My favorite belief was that the real pain is the short break itself, not wait uncertainty. I still put it in the script as an unpicked belief, then asked three real interviews (`01-student-cafeteria.md`, `02-student-exam-week.md`, `03-student-campus-freshman.md`) as asker with Mariam logging. All three raised not knowing the wait before we named it, which supported confirming the team prediction instead of mine. Outside Build: wrote the logs with verbatim quotes and drafted an early affinity map from those nine quotes. Hack: used each log's Prediction check line to tally yes/no for the hypothesis instead of re-reading every transcript. `01-discovery/interview-logs/`, early `01-discovery/synthesis/affinity-map.md`

**DECISIONS.md:** supplied evidence logs 01–03 for the Wk3 confirmed verdict (owner MT).

## Week 4 · The prototype is the conversation

Read Mariam's `02-design/prototype-plan.md` as Build lead so I know what we will actually ship to test: whether a student will decide from a wait signal on a phone instead of walking to the door. Outside my lane, I filled the empty `01-discovery/synthesis/patterns-analysis.md` (five whys on Patterns 1–3) so Milestone 1 rubric row 4 was not missing, and checked it against the problem statement root cause. Hack: started from the three strongest affinity clusters and the root cause already written in `01-discovery/problem-statement.md` instead of redoing five whys from scratch. `01-discovery/synthesis/patterns-analysis.md`, `02-design/prototype-plan.md`

**DECISIONS.md:** Wk4 evidence includes `patterns-analysis.md`, which I completed.

## Week 5 · One metric that matters

As Build lead I stayed with the north star Mariam owned: go/skip decisions from the canteen wait, not page visits. Beyond my lane: I generated the Lovable prototype from `02-design/prototype-plan.md` (exactly three screens, will-not-appear list) and put the link in README so the frozen test had something to hit before production existed. Hack: one evening in Lovable instead of coding three screens by hand, then walked the one action on my phone. `https://kiu-break-bite-clock.lovable.app/`, `docs/ai-usage-log.md`

**DECISIONS.md:** Wk6 prototype track line (owner BR) — written when the prototype shipped.

## Week 6 · The smallest complete journey

I wrote `03-build/architecture/architecture.md` for the five-step journey (phone → Vercel → Neon → PostHog) and created the Next.js app with the first `/canteen` screen so Sprint 1 had a real deploy target. Beyond my lane: pushed the home-page fix when Next 16 broke `force-dynamic` / redirect. Hack: shipped hard-coded wait numbers first so the phone URL worked before Neon was wired. Commits `e48b5b5`, `8041980`, `1c10fc4`.

**DECISIONS.md:** architecture supports the Wk6 MVP boundary (owner MT).

## Week 7 · Ship to learn

Production is live at https://pdfse-f26-signalworks-one.vercel.app/canteen (Mariam finished PostHog, Neon, go/skip, deploy). My Week 7 ship work so far: Sprint 2 hours file, UI polish on the live page, and the Lab 7 walk on mobile data still pending with Mariam on Activity. Beyond my lane: writing Homework 2 ship report with commit links. Hack: small UI polish instead of a redesign so the gate walk stays on one screen. Commits `4a690f7`, `cffab4e`.

**DECISIONS.md:** gate line still open until after the production walk / reconcile.
