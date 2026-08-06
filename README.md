# Charlottetown Taxi

Marketing site and online booking system for Charlottetown Taxi (Prince Edward Island). Built with Next.js, Prisma/Postgres, and Resend for booking notifications.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Prisma 7** with `@prisma/adapter-pg` (node-postgres driver adapter) — see [lib/prisma.ts](lib/prisma.ts)
- **PostgreSQL** — local dev via Docker Compose, production via a hosted provider (Supabase, Neon, etc.)
- **Resend** — sends a dispatch email to the admin inbox whenever a booking is submitted
- **Zod** — request validation ([lib/validation.ts](lib/validation.ts))

## Getting started

### 1. Install dependencies

```bash
npm install
```

`postinstall` runs `prisma generate` automatically — the Prisma client is generated to `app/generated/prisma` (a non-default location, so this step is required before anything else will type-check or run).

### 2. Start a local database

```bash
docker compose up -d
```

This matches the `DATABASE_URL` in `.env.example`.

### 3. Configure environment variables

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Verified sending address, e.g. `Charlottetown Taxi <bookings@charlottetowntaxi.ca>` |
| `BOOKING_NOTIFY_EMAIL` | Inbox that receives new booking notifications |

If `RESEND_API_KEY` is unset, booking emails are skipped and logged to the console instead of failing — see [lib/booking-email.ts](lib/booking-email.ts).

### 4. Run migrations

```bash
npx prisma migrate deploy
```

### 5. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx              Homepage — composes the sections below
  api/bookings/route.ts Booking submission endpoint
  generated/prisma/     Generated Prisma client (gitignored, regenerated on install)
components/
  sections/              Homepage sections (Hero, Services, Pricing, Fleet, Coverage, Reviews, Faq, FinalCta, ...)
  booking/               Booking form, service-specific fields, golf itinerary builder
lib/
  prisma.ts              Prisma client singleton (uses the pg driver adapter)
  booking-email.ts        Formats and sends the booking notification email
  validation.ts           Zod schema for booking submissions
prisma/
  schema.prisma           Booking model
  migrations/              Migration history
```

## Deploying to Vercel

1. **Database.** Use a hosted Postgres provider. For Vercel's serverless functions, use the connection **pooler** (transaction mode) as `DATABASE_URL` — the direct connection string will exhaust the connection limit under concurrent traffic. Run migrations separately against the **direct** connection.
2. **Environment variables.** Set `DATABASE_URL`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `BOOKING_NOTIFY_EMAIL` in the Vercel project settings.
3. **Resend domain.** Verify the sending domain in the Resend dashboard (SPF/DKIM records) before relying on `RESEND_FROM_EMAIL` in production — unverified domains will fail to send.
4. **Build.** No extra config needed; `postinstall` handles Prisma client generation automatically on Vercel's build.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
