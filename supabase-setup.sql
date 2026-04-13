-- FinRead: Run this in Supabase Dashboard → SQL Editor
-- Creates tables for article purchases and Pro subscriptions

-- 1. Purchases table (single article unlocks)
create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  doc_id text not null,
  amount numeric not null default 0,
  stripe_session_id text,
  created_at timestamptz default now(),
  unique(user_id, doc_id)
);

alter table public.purchases enable row level security;

create policy "Users can read own purchases"
  on public.purchases for select
  using (auth.uid() = user_id);

-- 2. Subscriptions table (Pro membership)
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  stripe_subscription_id text,
  status text not null default 'active',
  current_period_end timestamptz not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.subscriptions enable row level security;

create policy "Users can read own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);
