# AI usage log

One line per AI-assisted piece of work.
Format: Wk<N> · who · tool · what it produced · what you checked or changed

Wk5 · BR · Lovable · Prototype v1 clickable phone flow (3 screens: canteen wait, against break, why slow) at https://kiu-break-bite-clock.lovable.app/ · checked against 02-design/prototype-plan.md section 4; walked one action on phone; deleted/ignored any screens outside the plan
Wk6 · MT · Claude · code for go/skip buttons (S1), PostHog wiring for all five events, the wait read from Neon (S3) and the class-time picker (S4), built on Beka's /canteen page and Luka's WhySlow component · built and tested on a phone-sized screen; checked event names against 03-build/analytics/event-schema.md; deployed it on Vercel with Neon and PostHog
