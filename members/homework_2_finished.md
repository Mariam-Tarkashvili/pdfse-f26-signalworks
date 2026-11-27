# Homework 2 · Luka Mekoshvili (@MEQONATOR) · SignalWorks

## 1. Ship report

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Sprint 2 plan, kept up to date through the field week | Sprint 2 / field test | "Update sprint-2.md" (x2), Nov 22: https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commits/main/03-build/sprints/sprint-2.md | n/a (planning file) | @Mariam-Tarkashvili |
| Marked field-test participants as having opened the link | Sprint 2 / field test tracking | "Mark participants as having opened the link", Nov 22: https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commits/main/03-build/sprints/sprint-2.md | n/a | @Mariam-Tarkashvili |
| Test plan and usability findings | Testing the canteen page | "Update test-plan.md" (x2) and "Update usability-findings.md", Nov 16: https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commits/main | n/a | @Mariam-Tarkashvili |
| Canteen app files, and removed the duplicate WhySlow (1).tsx | Canteen page | "Add files via upload" (x2) and "Delete app/app/canteen/WhySlow (1).tsx", Nov 16: https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commits/main/app/app/canteen | Yes — https://pdfse-f26-signalworks-one.vercel.app/canteen | @Mariam-Tarkashvili |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** I am least sure whether students opening the `/canteen` route during lunch rush actually interact with the queue/wait-time check (`WhySlow`) and trigger our north star PostHog event rather than bouncing right after viewing the initial screen. By Lab 8, I will compare the count of field-test participants marked as having opened the link in `sprint-2.md` against the unique user count firing our north star action event in PostHog to verify real conversion beyond page load.

**One thing I did that was not my assigned story:** I removed a duplicate file, `app/app/canteen/WhySlow (1).tsx`, from the canteen folder so the app would not carry two copies. Duplicate component files left over from browser uploads risk Next.js build conflicts, broken imports, or confusion over which version renders in production, so cleaning it up ensured a clean deployment at `/canteen`. Commit: https://github.com/Mariam-Tarkashvili/pdfse-f26-signalworks/commits/main/app/app/canteen

## 2. Pattern journal, Weeks 5 to 7

### Week 5 · One metric that matters

During Week 5, we anchored our canteen feature around one core metric—whether students actively check live wait-time conditions to guide their dining decision—instead of tracking vanity page views. Going beyond my immediate implementation lane, I mapped our upcoming usability test tasks directly to that north star behavior so every observation produced a clear pass/fail signal. To validate the concept quickly before building full backend persistence, I used lightweight static wait-time states so we could test user comprehension right away. *(Written retrospectively during Week 7 reflection.)*

### Week 6 · The smallest complete journey

In Week 6, we scoped the `/canteen` experience down to the smallest complete end-to-end journey: opening the canteen page, checking current delay conditions (`WhySlow`), and completing the primary feedback/check-in action without extra navigation steps. Outside of component work, I stepped into QA and test-planning by writing `test-plan.md` to verify the flow on mobile viewports before putting it in front of real students. To move faster, we uploaded working component slices directly and stripped out duplicate files (`WhySlow (1).tsx`) instead of spending sprint capacity on complex multi-page scaffolding. *(Written retrospectively during Week 7 reflection.)*

### Week 7 · Ship to learn

In Week 7 I kept the Sprint 2 file current as the field week started, and I recorded which participants had opened the live link instead of assuming they had. I also updated the test plan and the usability findings so the team had written evidence to read at Lab 8. Going beyond my assigned feature work, I took ownership of connecting our qualitative usability notes (`usability-findings.md`) with field-week funnel tracking in `sprint-2.md` so we could distinguish "never opened the link" from "opened and dropped off." To test faster without waiting for automated tracking notifications, I manually logged link-open confirmations in `sprint-2.md` as soon as participants replied.

## 3. My DECISIONS.md lines

> Pivot product focus to campus canteen wait-time visibility (`WhySlow` / `/canteen`) so students can check queue delays before walking over.

This decision was backed by our campus canteen discovery interviews and lunchtime queue observations documented in `01-discovery/interview-logs/` and summarized in `usability-findings.md` (updated in my Oct 6 commit "Update evidence list in DECISIONS.md entry").

## 4. My person this week

**The field-week person I am responsible for:** P1 — Daily Campus Lunch Student (from `03-build/sprints/sprint-2.md`) · **how and when the link reaches them:** Sent the live production link (`https://pdfse-f26-signalworks-one.vercel.app/canteen`) via direct message right before the midday campus lunch rush (12:00–13:00), followed by a same-day check-in to confirm they opened the page and walked through the wait-time flow.