# PureFlow Verified Impact System

A polished, Vercel-ready MVP prototype for the **PureFlow Amanzi Safe Water & Community Resilience Programme**.

The product is a programme-wide operating system for safe-water rollout, monitoring, evidence control, issue resolution, water testing, and funder-ready reporting. The current 36,000-household Port St Johns + Ngquza Hill rollout is shown as the **first active project / phase**, not the whole programme.

## Current improvement pass

This version upgrades the prototype into a more premium, funder-ready PureFlow Amanzi operating system:

- Refined water-and-impact visual system using Water Navy, Deep Teal, Aqua Teal, Soft Mint, clean cards, larger typography, calm spacing, and stronger evidence cues.
- Programme-wide hierarchy across the app: Programme → Region / Province → Project / Phase → Municipality → Community / Village Cluster → Rollout Event → Household / School / ECD / Follow-up / Evidence / Issue / Report.
- Clear separation between programme-wide view, selected project/phase view, and municipality/community rollout view.
- Dashboard redesign with programme controls, selected phase KPI cards, CSS-based progress visuals, data quality, evidence control, and a plain-language Current Signal panel.
- Funder Portal redesign as a calmer, read-only impact reporting dashboard with narrative impact, evidence gallery, and report pack CTA.
- Dedicated Fieldworker Surveys page for sample-based household follow-up, mobile-first mock forms, paper fallback capture, and supervisor QA review.
- Bulk Upload Hub positioned as a central validation-before-commit workflow for future CSV/XLSX imports.

## Programme context

- **Programme:** PureFlow Amanzi Safe Water & Community Resilience Programme
- **Programme Scale Target:** 360,000 households
- **Active Project:** Foundational Rollout: Port St Johns + Ngquza Hill
- **Selected Phase Target:** 36,000 households
- **Selected phase people target:** 180,000 people
- **Selected phase institutional target:** 114 schools and ECD sites
- **Selected phase children/learner target:** 31,031 learners and young children
- **Selected phase local workers:** 80
- **Selected phase WASH sessions:** 270
- **Selected phase safe water over initial cycle:** 1.06+ billion litres

Future phases are represented as planned/pipeline mock projects so the app is structured for programme scale from the start.

## What the MVP demonstrates

PureFlow Amanzi needs an operating system for:

- Programme-wide safe water rollout across multiple future phases and regions
- Large community rollout events
- Household registration through paper, direct digital capture, or future CSV/XLSX upload
- Bulk upload as a central workflow
- Sample-based household follow-up
- Mobile-friendly fieldworker survey workflow
- Paper survey capture fallback
- Supervisor QA review
- Full school/ECD follow-up
- Issue and replacement tracking
- Household and institutional water testing logs
- Funder-facing reporting and evidence readiness
- Future Google Workspace backend using Google Sheets, Google Drive, and Apps Script

## Pages

1. Dashboard
2. Programme Overview
3. Projects & Phases
4. Rollout Events
5. Household Register
6. Bulk Upload Hub
7. Household Sampling
8. Fieldworker Surveys
9. Schools and ECDs
10. Follow-ups
11. Issues and Replacements
12. Water Testing
13. Funder Portal
14. Google Workspace Plan

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
3. Import the repository.
4. Keep the default Next.js settings.
5. Deploy.

Vercel should build directly from GitHub because this is a standard Next.js app with no required environment variables.

## Mock-data boundary

All operational data is in `lib/mock-data.ts`. The current version does **not** connect to Google Sheets, Google Drive, Apps Script, Supabase, Prisma, or any external database. It does **not** include authentication and does **not** process real file uploads. Upload buttons, evidence cards, form submission buttons, and export actions are polished mock UI only.
