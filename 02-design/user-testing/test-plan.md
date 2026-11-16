# Prototype Test Plan

**Prototype v1 link:** https://kiu-break-bite-clock.lovable.app/

**Riskiest assumption under test:** We assume that a student leaving a lecture will decide whether to go to the canteen from a wait time shown on their phone, instead of going to look at the door or texting a friend first.

## The frozen test (copied from `02-design/prototype-plan.md`, section 5, unchanged)

**Task, read aloud word for word:** "13:30-ია. შენი შესვენება 14:00-ზე მთავრდება და ახლა გამოდიხარ ლექციიდან. მაჩვენე, როგორ გადაწყვეტდი, ჩახვალ თუ არა სასადილოში." / "It is 13:30. Your break ends at 14:00 and you are leaving the lecture now. Show me how you would decide whether to go to the canteen."

**Success:** within 30 seconds, the tester reads the wait time and says "I'd go" or "I wouldn't go", with a reason that comes from the screen, without asking us anything.

**Failure behaviors:**
1. says they would still go to the door and look before deciding;
2. says they would text a friend first;
3. asks "how does it know?" or "is this real?" and will not decide;
4. asks us how many people are in the line.

**Decision rule (out of 5):** if 3 or more of 5 testers fail, the assumption is weakened. Next we test a version that shows what they already trust (a photo of the line from the door, or a short report from someone inside) before building anything else.

**Predicted first mistake:** they look for how many people are in the line instead of the minutes, because a head count is what they check today (01, 04, 10).

## Five testers

All five from our ICP (Ana, `00-foundation/icp.md`). None in this course. Code names only; real names and numbers stay in the team chat.

| # | Code name | Role (as in our ICP) | Why they fit the ICP | Session runner (asks) | Session logger (writes) | Target day | Status (messaged / booked / done) |
|---|---|---|---|---|---|---|---|
| 1 | CS-Y2 | 2nd-year CS student, KIU | Log 01. 20-minute break between lectures; peeks at the line from the entrance and goes to Spar if it passes the door | LM | MT | Mon 16 Nov | messaged |
| 2 | KIU-1 | 2nd-year Law student, KIU | Log 04 (agreed to a follow-up). Back-to-back lectures; skipped lunch yesterday after one look at the line | LM | BR | Mon 16 Nov | messaged |
| 3 | KIU-2 | 3rd-year Business student, KIU | Log 05. Plans meals around group sessions; texts a friend inside, and the answer does not help | LM | MT | Mon 16 Nov | messaged |
| 4 | CS-Y2-B | 2nd-year student, KIU, classmate of CS-Y2 | New: introduced in log 01. Skips lunch in exam weeks | LM | BR | Tue 17 Nov, before the lab (backup) | |
| 5 | MGT-Y1-B | 1st-year student living on campus, KIU, roommate of MGT-Y1 | New: introduced in log 03. Uses the cafeteria, orders delivery when the line is bad | LM | MT | Tue 17 Nov, before the lab (backup) | |

At least three rows must be "messaged" or "booked" before this file is committed.

## Session protocol (same every time)

1. The tester opens the link on their own phone. Not ours.
2. The runner reads the task word for word, then says nothing.
3. The logger starts the timer on the last word of the task and writes: time to first tap, time to the one action, every unprompted sentence verbatim.
4. When the tester stops, or at 3 minutes, the runner asks one question only: "What were you expecting to happen?"
5. The logger writes the verdict against the rule before anyone discusses the session.
