# Google Workspace Backend Plan

The MVP does not connect to Google Workspace yet. This document defines the planned lightweight backend direction.

## Google Sheets workbook

Workbook name: `PureFlow Verified Impact System`

Required tabs:

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

## Google Drive folder structure

```text
PureFlow Verified Impact System
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

- Reading dashboard aggregates from Google Sheets.
- Validating CSV/XLSX import rows before commit.
- Writing accepted rows to operational tabs.
- Writing rejected or flagged rows to `Upload_Errors`.
- Creating or locating Google Drive evidence folders.
- Storing file metadata references in Sheets.
- Generating monthly report summaries and audit pack indexes.

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
3. Add Apps Script endpoints with stable JSON responses.
4. Replace page imports from mock arrays with calls to the data access module.
5. Add Google Workspace auth only after the data flows are confirmed.
