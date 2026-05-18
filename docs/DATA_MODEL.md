# Data Model

The MVP uses mock arrays in `lib/mock-data.ts`. These structures are intentionally close to the future Google Sheets workbook tabs.

## Events

Distribution event rows include event ID, municipality, ward/village cluster, venue type, date, households present, units issued, WASH training status, stock reconciliation status, and evidence folder status.

## Households

Household rows include household ID, linked event ID, municipality, ward/village, household size, filter/batch ID, data source, and record status.

Supported data sources:

- Direct
- Paper captured
- CSV upload

Supported record statuses:

- Clean
- Missing info
- Duplicate warning
- Verified

## Schools_ECDs

Institutional site rows include site ID, school/ECD type, site name, ward/village, learners or children reached, staff trained, activation status, and evidence status.

## Household_Followups

Sampled household follow-up rows include selected household, municipality, rollout cohort, assigned field worker, visit type, filter present, functional status, WASH practice observed, issue flag, and refresher training flag.

## Site_Followups

School/ECD follow-up rows include linked site, visit type, system present, functional status, WASH practice observed, issue flag, and refresher training flag.

## Issues

Issue rows include issue ID, linked household or site, issue type, severity, assigned person, replacement required, status, and resolution date.

## Water_Tests

Water test rows include test ID, household/site ID, sample type, test date, pass/fail/review result, and evidence file status.

## Upload_History and Upload_Errors

Bulk upload records should track rows uploaded, accepted, flagged, rejected, duplicate warnings, missing field warnings, validation status, uploader, upload time, and commit status.
