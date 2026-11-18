-- Run once in the Neon SQL editor.
create table if not exists canteen_status (
  id serial primary key,
  minutes integer not null,
  reason text,
  updated_at timestamptz not null default now()
);

-- Update the wait (the newest row is shown). Run this whenever someone checks the canteen:
insert into canteen_status (minutes, reason) values (18, 'stuck at the register');
-- With no reason:
-- insert into canteen_status (minutes, reason) values (6, null);
