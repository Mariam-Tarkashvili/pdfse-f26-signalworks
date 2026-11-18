-- Run once in the Neon SQL editor.
create table if not exists canteen_status (
  id serial primary key,
  minutes integer not null,
  reason text,
  updated_at timestamptz not null default now()
);

-- Lab 7: one row per go/skip tap, to reconcile with PostHog.
create table if not exists lunch_decisions (
  id serial primary key,
  decision text not null check (decision in ('go', 'skip')),
  minutes integer,
  minutes_to_spare integer,
  seconds_on_page integer,
  visitor_id text,
  is_team boolean not null default false,
  created_at timestamptz not null default now()
);

-- Update the wait (the newest row is shown):
-- insert into canteen_status (minutes, reason) values (18, 'stuck at the register');

-- Reconcile count (same window as the PostHog insight):
-- select count(*) from lunch_decisions where created_at >= '2026-11-20 00:00+04';
