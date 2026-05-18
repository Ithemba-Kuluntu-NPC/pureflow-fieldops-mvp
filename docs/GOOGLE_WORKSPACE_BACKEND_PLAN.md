# Google Workspace Backend Plan

The MVP does not connect to Google Workspace yet. This document defines the planned lightweight backend direction for Google Sheets, Google Drive, and Google Apps Script.

## Google Sheets workbook

Workbook name: `PureFlow Verified Impact System`

Required tabs:

### Programme structure tabs

- Programmes
- Projects_Phases
- Geographies
- Targets

### Operational tabs

- Events
- Households
- Schools_ECDs
- Household_Followups
- Site_Followups
- Issues
- Water_Tests
- Upload_History
- Upload_Errors
- Users
- Reports

## Future linking fields

Operational records should include these fields wherever relevant:

- `programme_id`
- `project_id`
- `geography_id`

These fields allow dashboards and reports to roll up from household/site level to rollout event, community cluster, municipality, selected project/phase, region/province, and programme-wide views.

Suggested examples:

- Events: `programme_id`, `project_id`, `geography_id`, event fields, evidence folder reference.
- Households: `programme_id`, `project_id`, `geography_id`, event ID, household ID, representative, source, validation status.
- Schools_ECDs: `programme_id`, `project_id`, `geography_id`, site ID, site type, learners/children, activation status.
- Household_Followups and Site_Followups: `programme_id`, `project_id`, `geography_id`, linked record ID, survey fields, QA status.
- Issues and Water_Tests: `programme_id`, `project_id`, `geography_id`, linked source record, status, evidence reference.
- Reports: `programme_id`, `project_id`, `geography_id`, reporting period, KPI snapshot, generated pack reference.

## Google Drive folder structure

```text
PureFlow Verified Impact System
├── Programmes
├── Projects & Phases
├── Events
├── Household Evidence
├── School ECD Evidence
├── Issue Evidence
├── Water Tests
├── Imports
├── Reports
└── Audit Packs
```

## Google Apps Script API layer

Apps Script should act as the lightweight backend layer for:

- Reading programme, project/phase, geography, target, and dashboard aggregates from Google Sheets.
- Validating CSV/XLSX import rows before commit.
- Writing accepted rows to operational tabs.
- Writing rejected or flagged rows to `Upload_Errors`.
- Creating or locating Google Drive evidence folders.
- Storing file metadata references in Sheets.
- Generating monthly report summaries and audit pack indexes.
- Returning read-only funder report snapshots.

## Future Workspace authentication

A later phase should use Google Workspace accounts to support:

- Admin users
- Operations managers
- Field workers
- Data capturers
- Read-only funder users

No authentication is included in the v1 MVP.

## Migration strategy

1. Keep current mock data as demo fallback.
2. Add a small server-side data access module.
3. Create the programme structure tabs first: `Programmes`, `Projects_Phases`, `Geographies`, and `Targets`.
4. Add Apps Script endpoints with stable JSON responses.
5. Replace page imports from mock arrays with calls to the data access module.
6. Add Google Workspace auth only after the data flows are confirmed.

## Simplified MVP alignment

The simplified MVP keeps Google Workspace as the future lightweight backend direction while remaining mock-only now. The five primary areas map to future Workspace data as follows:

- **Overview:** read-only aggregates from Programmes, Projects_Phases, Events, Households, Schools_ECDs, Household_Followups, Issues, Water_Tests, Upload_History, and Reports.
- **Rollouts:** Events, Households, Schools_ECDs, Geographies, Upload_History, and Upload_Errors.
- **Monitoring:** Household_Followups, Site_Followups, Issues, Water_Tests, paper capture batches, and future Users assignments.
- **Evidence:** Drive folder references, evidence metadata, Upload_History, Upload_Errors, audit pack indexes, and report-ready status.
- **Reports:** Reports tab rows, monthly narrative snapshots, evidence summary, issue resolution summary, and generated report pack references.

CSV/Excel upload should be a first-class Apps Script workflow for household event rosters, paper follow-up forms, school/ECD site data, issue/replacement logs, and water testing logs. Future user/account controls should support admins, operations managers, supervisors, fieldworkers, data capturers, and read-only funder users, but no authentication is included in this MVP.
