# Usability Findings
 
One block per session, written within an hour of running it, in the order we ran them. Behavior timed, quotes verbatim, verdict against the rule written in `test-plan.md` before any session.
 
Sessions ran on 18 Nov, after the Week 7 lab (the Wk6 prototype-track line promised them before it). The three testers replaced testers 1 to 3 in `test-plan.md`, who were not available. MT and BR ran the sessions together; Luka was not present.
 
## Session 1 · T1 · 2nd-year CS student, KIU · their phone · ran MT, logged MT
 
**Task read:** "It is 13:30. Your break ends at 14:00 and you are leaving the lecture now. Show me how you would decide whether to go to the canteen." (Georgian original in `test-plan.md`)
 
| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | task read | | |
| ~0:05 | scrolls down as if to refresh; seems to think something is missing | | predicted first mistake: no |
| ~0:05 | taps the screen to get past a black screen; the next page opens before he has read the first | | the tap moved him on by accident |
| ~0:15 | finds the Continue button after about 10 seconds | | |
| last page | reads "moving slowly"; has forgotten how much time he had | | the wait was on an earlier screen |
| end | finds no button to give his decision | "uhmm I guess I wouldn't go" | no reason taken from the screen |
 
**Time to first tap:** about 5 seconds (a tap on the screen, not a button)
**Time to the one action, or did not complete:** decided out loud after more than 30 seconds; no decision button exists in the prototype
**Result vs rule:** FAIL, because he did not decide within 30 seconds and gave no reason from the screen. None of the four listed failure behaviors happened.
**Surprise (something no interview told you):** by the last screen he had forgotten the wait; splitting the wait and the break across screens loses the number he needs.
**Answer to "what were you expecting to happen?":** not recorded
**Reconcile check (event-schema.md):** decided: yes, out loud · tapped: no, there is no button · PostHog: none; the Lovable prototype has no analytics
 
## Session 2 · T2 · 1st-year Master's student (intellectual property), KIU · their phone · ran MT, logged MT
 
**Task read:** "It is 13:30. Your break ends at 14:00 and you are leaving the lecture now. Show me how you would decide whether to go to the canteen." (Georgian original in `test-plan.md`)
 
| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | task read; starts reading | | |
| ~0:02 | scrolls down, then slightly back up, unsure | | predicted first mistake: no |
| ~0:07 | finds Continue after about 5 seconds | | |
| next page | scrolls down before finishing, goes back up to read the rest, waits, taps Continue | | |
| last page | reads slowly, pauses | "Wait, is there a button for going back?" | asked us a question |
| end | looks around the screen for a way to give her decision | "I guess I would go but how can i confirm that?" | asked us a question |
 
**Time to first tap:** about 7 seconds (Continue)
**Time to the one action, or did not complete:** decided out loud after more than 30 seconds; could not confirm it on screen
**Result vs rule:** FAIL, because she asked us questions ("is there a button for going back?", "how can i confirm that?") and took more than 30 seconds. None of the four listed failure behaviors happened.
**Surprise (something no interview told you):** she wanted to go back to an earlier screen; the information she needed was not on the screen where she decided.
**Answer to "what were you expecting to happen?":** not recorded
**Reconcile check (event-schema.md):** decided: yes, out loud · tapped: no, there is no button · PostHog: none; the Lovable prototype has no analytics
 
## Session 3 · T3 · 4th-year CS student, KIU · our phone · ran MT, logged MT
 
**Task read:** "It is 13:30. Your break ends at 14:00 and you are leaving the lecture now. Show me how you would decide whether to go to the canteen." (Georgian original in `test-plan.md`)
 
Protocol break: the session ran on our phone, not hers.
 
| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | task read; reads the first screen twice | | predicted first mistake: no |
| early | looks for the Continue button, taps it, starts reading the next screen | | |
| next page | tries to scroll down; the touch moves her to the next screen | | the tap moved her on by accident |
| last page | spends time thinking about the scenario | | |
| end | goes back to the bottom and looks for a button to choose her decision | "So, am I just supposed to say what I would do? seriously what was the point?" | asked us a question |
| end | | "I don't know. what just happened." | no decision |
 
**Time to first tap:** not timed
**Time to the one action, or did not complete:** did not complete; no decision
**Result vs rule:** FAIL, because she did not decide. None of the four listed failure behaviors happened.
**Surprise (something no interview told you):** without a decision button, the screen did not read as something to act on at all ("what was the point?").
**Answer to "what were you expecting to happen?":** not recorded
**Reconcile check (event-schema.md):** decided: no · tapped: no, there is no button · PostHog: none; the Lovable prototype has no analytics
 
## After 3 sessions: apply the decision rule
 
**Sessions run:** 3 · **Fails:** 3 · **Rule says:** 3 or more fails of 5, so the assumption is weakened; change course.
 
**What the fails have in common:** no tester doubted the wait number, went to the door, texted a friend, or asked how many people were in the line, which are the four failure behaviors that would show distrust of a number. All three failed on the prototype itself: the wait, the break and the reason sit on separate screens, accidental taps skip a screen, and there is no button to give a decision. So these sessions show the flow fails; they do not yet show whether students trust the number.
 
**Change of course:** before building the photo or inside-report version that the rule names, we run the same frozen test on the deployed product, which already puts the wait, the break, the reason and the go/skip buttons on one screen (https://pdfse-f26-signalworks-one.vercel.app/canteen). If students still fail there with any of the four failure behaviors, we build the photo version next.
 
**If change course:** the DECISIONS.md line, one line, this shape:
 
```
Wk6 · Prototype test: 3 of 3 failed the frozen test on the Lovable prototype, all on navigation and the missing decision button, none on trusting the number; rerun the same test on the deployed one-screen product before building the photo version · evidence: 02-design/user-testing/usability-findings.md (sessions 1 to 3) · owner: MT
```
 
**Count so far against the decision rule:** 3 failures out of 3 sessions run.
 
