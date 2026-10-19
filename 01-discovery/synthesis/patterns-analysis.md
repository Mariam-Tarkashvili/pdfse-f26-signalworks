# Patterns Analysis

One section per pattern from the affinity map. Ask why, then why of the answer. Stop when the next answer would be a guess instead of something a quote supports.

## Pattern 1: Standing at the canteen door, students cannot tell whether the wait will be 5 minutes or 25.

**Interviews behind it:** 01, 03, 04, 05, 07

1. Why does this happen? From the door they only see how many people are standing, not how fast the line will move. (01: "You never know in advance whether you'll need 5 minutes or 25."; 04: "no way of knowing if it'll take 5 minutes or 20 minutes.")
2. Why does a head count fail? The line often stalls farther inside, at the register, out of sight from the door. (05: "the line looks small from the outside, but inside it gets stuck at the register.")
3. Why does that matter so much? Their break is fixed, so a wrong guess costs lunch, lateness, or both. (05: gamble of 2 minutes vs 25 and late to a group meeting; 01: 15 minutes late twice.)

**Root cause, one sentence:** Students have to bet a fixed break on a line whose speed is decided at the register, out of sight, while the only pre-commit signal they have is a head count from the door.

**Which answer is a guess rather than a quote?** That the stall is *always* at the register is strongly backed by 05; whether every slow day is register-driven (vs kitchen) is still a guess. Worth a direct question in later interviews.

## Pattern 2: The checks students run before committing (a text to a friend, a look from the door or a window) show how many people are there, not how fast the line will move.

**Interviews behind it:** 02, 05, 07, 10

1. Why do they check at all? They want a go/no-go signal before spending break minutes on the walk and the wait. (02: texts "Is the line big?" before going down; 10: looks from the second-floor window.)
2. Why do those checks still fail? A friend inside often cannot name the wait either, or does not answer in time. (05: friend replies "I don't know, it's moving slowly for some reason"; 07: "Sometimes she answers, sometimes not.")
3. Why keep using a bad check? It is free, fast, and already in their habit; nothing else they trust is available before they commit. (02, 07, 10 all describe the same checks as default behavior.)

**Root cause, one sentence:** Their current information channels report crowd size or vague movement, not a wait they can plan a fixed break around.

## Pattern 3: Faced with the line at the door, students walk away without joining it: to Spar, to delivery, or to no lunch at all.

**Interviews behind it:** 01, 02, 03, 04

1. Why walk away? Uncertainty at the door makes joining feel riskier than leaving. (04: looked at the line, had no idea how long, went straight to the library.)
2. Why is leaving acceptable? Paid or empty alternatives protect the next class better than a gamble on the queue. (01: Spar sandwich; 03: dorm delivery; 02: would rather take a quiz hungry.)

**Root cause, one sentence:** When wait time is unknowable, students treat "do not enter" as the safe default, even when it means junk food, delivery cost, or hunger.

---

**Strongest pattern:** Pattern 1 — cannot tell whether the wait is 5 minutes or 25.

**Why it is the strongest, in two sentences, citing log numbers:** It shows up across five interviews without needing a product prompt (01, 03, 04, 05, 07), and Patterns 2–3 are mostly how students cope with that same unknown. The root cause also matches what we wrote into `01-discovery/problem-statement.md` and points at something testable in the prototype: a wait signal they did not get from the door or a friend.
