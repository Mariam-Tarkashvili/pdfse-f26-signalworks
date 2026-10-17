# Prototype Plan

## 1. The riskiest assumption

> We assume that a student leaving a lecture will decide whether to go to the canteen from a wait time shown on their phone, instead of going to look at the door or texting a friend first.

**Why this one is riskiest:** No log yet, that is why we test it. Today every student trusts only what they see from the door (01, 04, 10) or what a friend inside tells them (02, 05, 07). If they still walk to the door to check after seeing a number, a wait time changes nothing, however accurate it is.

## 2. The one action

> A student can check how long it will take to get food at the canteen right now.

## 3. Fidelity

| Choice (paper / clickable / coded) | Why it is the cheapest thing that can kill the assumption in section 1 | Tool | Time we will spend |
|---|---|---|---|
| Clickable, phone-sized, with fake but realistic numbers | The assumption is about trusting a number on their own phone at the moment they leave class, the same phone they text friends from (02, 05, 07). Paper does not feel like a live number; real data adds nothing the test needs. | An AI prototyping tool, exported as a link that opens on a phone | One evening |

## 4. Screens, each traced to evidence

| Screen | What the tester does on it | The log or problem-statement sentence that earns it |
|---|---|---|
| 1. Canteen right now | Sees "About 18 minutes from the door to the counter" and when it was last updated | They cannot tell whether it is 5 minutes or 25 (01, 04, 07); problem statement sentence 5 |
| 2. Against your break | Sees the wait set against the time left: "Food by 13:48. Your class starts at 14:00." | A fixed break decides it: "If the line took 10 minutes it would be fine" (06); problem statement sentence 1 |
| 3. Why it is slow | Sees "Moving slowly: stuck at the register" | "inside it gets stuck at the register and you don't realize it until you're all the way in" (05) |

**Will not appear, even if a tool generates it:**
- Menu, prices or dish photos
- Pre-ordering or paying ahead
- Whether food is still left (a second unknown from 03 and 08; it gets its own test later)
- Ratings or reviews of dishes
- Chat with friends or sharing
- Delivery ordering
- Accounts, login or settings
- A dashboard for canteen staff
- An AI assistant

## 5. The test that can fail

- **Task, read aloud to the tester, word for word:** "13:30-ია. შენი შესვენება 14:00-ზე მთავრდება და ახლა გამოდიხარ ლექციიდან. მაჩვენე, როგორ გადაწყვეტდი, ჩახვალ თუ არა სასადილოში." / "It is 13:30. Your break ends at 14:00 and you are leaving the lecture now. Show me how you would decide whether to go to the canteen."
- **Success looks like:** within 30 seconds, the tester reads the wait time and says "I'd go" or "I wouldn't go", with a reason that comes from the screen, without asking us anything.
- **Failure looks like:**
  - says they would still go to the door and look before deciding;
  - says they would text a friend first;
  - asks "how does it know?" or "is this real?" and will not decide;
  - asks us how many people are in the line.
- **Decision rule:** if 3 or more of 5 testers fail, the assumption is weakened. Next we test a version that shows what they already trust (a photo of the line from the door, or a short report from someone inside) before building anything else.
- **Our prediction of the first thing a tester gets wrong:** they look for how many people are in the line instead of the minutes, because a head count is what they check today (01, 04, 10).

## 6. Five testers

| Code name | From log, or new | Who on the team books them |
|---|---|---|
| CS-Y2 | log 01 | BR |
| KIU-1 | log 04 (agreed to a follow-up) | LM |
| KIU-2 | log 05 | MT |
| CS-Y2-B | new: the classmate log 01 introduced, who skips lunch in exam weeks | BR |
| MGT-Y1-B | new: the roommate log 03 introduced | MT |

---

**Self-check before committing**

- [x] Section 1 is about behavior, not technology.
- [x] Section 5 has a failure behavior you could see with your own eyes.
- [x] Every screen in section 4 cites a log or a problem-statement sentence.
