# PureFlow Verified Impact System

A clean, Vercel-ready MVP prototype for the PureFlow Amanzi rural safe-water rollout programme.

The prototype is intentionally lightweight:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Mock data only
- No external database service, Prisma, database client, auth library, chart library, or real upload processing
- Designed for a later Google Workspace backend

## What the MVP demonstrates

PureFlow Amanzi needs an operating system for:

- 36,000 household rollout across Port St Johns and Ngquza Hill
- 114 schools and ECD sites in Port St Johns
- Large rollout events with 200 to 500 household representatives
- WASH training and filter-use training at events
- Paper, direct digital, and future CSV/XLSX household registration
- Bulk upload as a central workflow
- Sample-based household follow-up
- Full school/ECD follow-up
- Issue and replacement tracking
- Household and institutional water testing logs
- Funder-facing reporting and evidence readiness

## Pages

1. Dashboard
2. Rollout Events
3. Household Register
4. Bulk Upload Hub
5. Household Sampling
6. Schools and ECDs
7. Follow-ups
8. Issues and Replacements
9. Water Testing
10. Funder Portal
11. Google Workspace Plan

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import `Ithemba-Kuluntu-NPC/pureflow-fieldops-mvp`.
4. Keep the default Next.js settings.
5. Deploy.

Vercel should build directly from GitHub because this is a standard Next.js app with no required environment variables.

## Mock-data guarantee

All operational data is in `lib/mock-data.ts`. The current version does not connect to Google Sheets, Google Drive, Prisma, or any external database.
