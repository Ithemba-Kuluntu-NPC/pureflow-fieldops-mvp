# PureFlow Verified Impact System

A polished, Vercel-ready MVP prototype for the **PureFlow Amanzi Safe Water & Community Resilience Programme**.

The product is a programme-wide operating system for safe-water rollout, monitoring, evidence control, issue resolution, water testing, and funder-ready reporting. The current 36,000-household Port St Johns + Ngquza Hill rollout is shown as the **first active project / phase**, not the whole programme.

## Current simplification and visual-redesign pass

This version simplifies the MVP into five primary areas and removes target-led dashboard framing so the product feels like a calmer PureFlow Amanzi operating system rather than a dense admin dashboard.

### Five primary areas

1. **Overview** — programme headline, active phase context, current operational KPIs, active phase status, milestone tracker, Current Signal, Urgent Actions, and Evidence Confidence.
2. **Rollouts** — projects/phases summary, rollout event pipeline, household register summary, schools/ECD register summary, community/cohort cards, and bulk-upload entry point.
3. **Monitoring** — household sampling, fieldworker surveys, household/site follow-ups, issue tracking, water testing, paper forms awaiting capture, and supervisor QA.
4. **Evidence** — evidence confidence, verification pipeline, data quality snapshot, audit pack readiness, recent evidence, upload status, and Google Drive evidence folder preview.
5. **Reports** — funder-ready update, monthly narrative, impact story snapshot, issue resolution summary, evidence summary, export/report pack mockup, and future Google Workspace backend direction.

### Programme-wide structure and active phase context

- **Programme:** PureFlow Amanzi Safe Water & Community Resilience Programme
- **Active Phase:** Foundational Rollout: Port St Johns + Ngquza Hill

The Port St Johns + Ngquza Hill rollout remains the first active phase, not the whole programme. Future expansion remains visible as a programme-wide architecture concept, but future scale ambition is not presented as a live current delivery target.

### Target-framing decision

Large targets are intentionally no longer used as main dashboard KPIs. The Overview does not lead with programme-scale household ambition, selected-phase household targets, or big target progress bars. Targets remain useful as secondary planning data for phase detail, reports, documentation, and future backend records. The main landing page now focuses on operational momentum, phase health, evidence confidence, data quality, urgent actions, monitoring progress, and issues needing attention.

### Milestone/status tracking approach

The Overview now uses a Rollout Timeline-style milestone tracker with plain statuses: Complete, Active, On track, Needs attention, and Upcoming. This is designed to explain progress without making early rollout activity look artificially small against large future targets.

### Fieldworker-first monitoring workflow

Monitoring now centres the fieldworker path: Today’s Assigned Visits → open household/site → complete short grouped survey → flag issue if needed → done. The household survey is grouped into Visit details, Filter use, Correct use, Boiling and water source, Issues, and Evidence. Paper Survey Capture and Supervisor QA are shown as intentional operational workflows, not edge cases.

### Rural rollout operating reality

The redesigned MVP represents large rural community events with 200–500 household representatives; venues such as schools, community halls, churches, traditional leader homes, clinics, and community centres; unreliable connectivity; paper forms and signatures; CSV/Excel upload as a core future workflow; sample-based household follow-up; fuller school/ECD monitoring; and evidence from event records, rosters, photos, paper scans, field notes, surveys, follow-up records, issues, and water tests.

### Mock-only and future backend boundary

All operational data remains in `lib/mock-data.ts`. The current version does **not** connect to Google Sheets, Google Drive, Apps Script, Supabase, Prisma, or any external database. It does **not** include authentication and does **not** process real file uploads. Upload buttons, evidence cards, survey submission buttons, and export/report actions are polished mock UI only. The future backend direction remains Google Sheets, Google Drive, Google Apps Script, and later user/account controls.

## What the MVP demonstrates

PureFlow Amanzi needs a lightweight digital trust layer for:

- Programme-wide safe water rollout across multiple future phases and regions
- Planning rollout and community event delivery
- Proving distribution through rosters, paper forms, scans, photos, and upload history
- Registering households at scale through event capture, paper capture, or future CSV/XLSX upload
- Sample-based household monitoring instead of visiting every household
- Full school/ECD site follow-up as fixed institutional monitoring
- Mobile-friendly fieldworker survey workflow
- Paper survey capture fallback and supervisor QA review
- Issue and replacement tracking
- Household and institutional water testing logs
- Evidence confidence, audit pack readiness, and funder-ready reporting
- Future Google Workspace backend using Google Sheets, Google Drive, and Apps Script

## Pages

1. Overview
2. Rollouts
3. Monitoring
4. Evidence
5. Reports

Legacy detailed routes may remain in the codebase as mock reference views, but the primary navigation is intentionally reduced to these five areas.

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
