# Homework 2 · Beka Revazishvili (@Beqarev) · SignalWorks

Individual, 5 points, due before Lab 8. Commit from your own account, then submit the HW2 link on Teams.

## 1. Ship report

What I personally built, wired, deployed, tested, or reviewed since Lab 6.

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Sprint 1 architecture: diagram, stack lines, secrets/.env rule | S6 / prep | https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/e48b5b5 | n/a (doc) | LM (architecture reviewer) |
| Next.js app in `app/` with first `/canteen` journey screen | S2 / S6 | https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/8041980 | Yes (base page Mariam extended) | MT deployed + extended |
| Home page fix so `/` reaches `/canteen` on Next 16 | S6 | https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/1c10fc4 | Yes | production URL loads |
| Lovable prototype v1 link in README + AI usage log | prototype track | https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/3153c55 | Prototype yes; live product is Vercel | MT ran frozen tests |
| Canteen UI polish (spacing, updated-ago labels) | S2 polish | https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/4a690f7 | Yes after redeploy | me on localhost; production after push |
| Sprint 2 file with team hours table | Sprint 2 | https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/cffab4e | n/a (doc) | team fills review/gate next |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** that a non-classmate will tap I'd go / I'd skip on production instead of only reading the wait. I will look at `student_makes_lunch_decision` from non-team visitors on the PostHog dashboard before Lab 8, and whether my field-week person opens the link.

**One thing I did that was not my assigned story:** filled `01-discovery/synthesis/patterns-analysis.md` in Week 4/5 so Milestone 1 row 4 was not an empty template (https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commit/e6e439a), outside Build, because the tagged review needed it.

## 2. Pattern journal, Weeks 5 to 7

I did not write Weeks 5–7 in their own week in `pattern-journal.md`; writing them now for HW2 (and will copy into the journal file).

### Week 5 · One metric that matters

As Build lead I stayed with the north star Mariam owned: go/skip decisions from the canteen wait, not page visits. Beyond my lane: I generated the Lovable prototype from `02-design/prototype-plan.md` (exactly three screens, will-not-appear list) and put the link in README so the frozen test had something to hit before production existed. Hack: one evening in Lovable instead of coding three screens by hand, then walked the one action on my phone. `https://kiu-break-bite-clock.lovable.app/`, `docs/ai-usage-log.md`, DECISIONS Wk6 prototype track (owner BR).

### Week 6 · The smallest complete journey

I wrote `03-build/architecture/architecture.md` for the five-step journey (phone → Vercel → Neon → PostHog) and created the Next.js app with the first `/canteen` screen so Sprint 1 had a real deploy target. Beyond my lane: pushed the home-page fix when Next 16 broke `force-dynamic` / redirect. Hack: shipped hard-coded wait numbers first so the phone URL worked before Neon was wired. Commits `e48b5b5`, `8041980`, `1c10fc4`.

### Week 7 · Ship to learn

Production is live at https://pdfse-f26-signalworks-one.vercel.app/canteen (Mariam finished PostHog, Neon, go/skip, deploy). My Week 7 ship work so far: Sprint 2 hours file, UI polish on the live page, and the Lab 7 walk on mobile data still pending with Mariam on Activity. Beyond my lane: keeping notes for this ship report so HW2 is evidence, not memory. Hack: small CSS/label polish instead of a redesign, so the gate walk stays on one screen. Commit `4a690f7`, `cffab4e`.

## 3. My DECISIONS.md lines

Every line since Week 5 where I am the owner or drove the evidence.

> `Wk6 · Prototype track: clickable v1 generated from 02-design/prototype-plan.md (Lovable, https://kiu-break-bite-clock.lovable.app/); frozen test runs on it, 3 sessions before the Week 7 lab · evidence: 02-design/prototype-plan.md · owner: BR`

I built the Lovable flow from the plan and logged the tool in `docs/ai-usage-log.md`; Mariam later logged the three failed frozen sessions that cite this prototype.

> `Wk5 · North star: go or skip decisions made from the canteen wait per active student per week; rejected page visits (presence) and students ever opened (presence, cumulative) · evidence: 03-build/analytics/event-schema.md, 01-discovery/interview-logs/01-student-cafeteria.md, 04-law-student-lecture-hall.md, 06-finance-masters-canteen.md, 07-student-kiu.md · owner: MT`

Not owner; I built toward that event (page + later production go/skip) and treated it as the Build target instead of chasing pageviews.

## 4. My person this week

**The field-week person I am responsible for:** CS-Y2, 2nd-year CS student who eats at the canteen between lectures (log 01) · **how and when the link reaches them:** Messenger with the production URL `https://pdfse-f26-signalworks-one.vercel.app/canteen?src=link` by Sun 23 Nov evening, asking them to check the wait once before a real break and tap I'd go or I'd skip. (Also add this row to `03-build/sprints/sprint-2.md` when the team fills the field-week table.)
