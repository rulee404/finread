# FinRead · 原典财报

面向中国投资者的 SEC 披露原文、管理层原话与结构化投研摘要；中英对照，数据与引文可溯源。

## 已覆盖公司 (Q4/FY2025)

| Ticker | Company | Exchange |
|--------|---------|----------|
| HOOD | Robinhood Markets, Inc. | NASDAQ |
| COIN | Coinbase Global, Inc. | NASDAQ |
| CRCL | Circle Internet Group, Inc. | NYSE |

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Auth**: Supabase Auth (email/password)
- **Deploy**: Vercel
- **Data**: Static JSON (no database needed for content)

## Local Development

```bash
# Install dependencies
npm install

# Copy env file and add your Supabase keys
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a free project
2. Go to **Settings → API** and copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Paste them into `.env.local`

> Auth works out of the box - Supabase creates the `auth.users` table automatically.

## Deploy to Vercel

### Option A: One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/finread)

### Option B: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Option C: GitHub auto-deploy

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Add environment variables in the Vercel dashboard
4. Every push to `main` auto-deploys

## Custom Domain

After deploying to Vercel:

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., `finread.app`)
3. Update DNS records as instructed by Vercel

### Domain Suggestions

| Domain | Notes |
|--------|-------|
| `finread.app` | 简洁，品牌感强 |
| `finread.cc` | 备选 |
| `caibao.one` | 中文域名，直观 |
| `yuandoc.com` | 源文档，突出一手信息 |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── company/[ticker]/           # Company pages (HOOD/COIN/CRCL)
│   ├── weekly/                     # Weekly report list
│   ├── weekly/[slug]/              # Weekly report detail
│   ├── login/                      # Login page
│   ├── register/                   # Register page
│   └── pro/                        # Pro upgrade page
├── components/                     # Shared UI components
├── data/
│   ├── companies/                  # Company data (JSON)
│   └── weekly/                     # Weekly report data
└── lib/
    ├── types.ts                    # TypeScript types
    ├── companies.ts                # Company data helpers
    └── supabase/                   # Supabase client setup
```

## Adding a New Company

1. Create `src/data/companies/new-ticker.json` following the `CompanyData` type
2. Import it in `src/lib/companies.ts`
3. That's it - routes are generated automatically

## License

Private - All rights reserved.
