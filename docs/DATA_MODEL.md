# Data Model

The MVP uses mock arrays in `lib/mock-data.ts`. These structures are intentionally close to the future Google Sheets workbook tabs and now support a programme-wide PureFlow Amanzi structure.

## Programme-wide hierarchy

The app models this hierarchy throughout the UI:

```text
Programme
→ Region / Province
→ Project / Phase
→ Municipality
→ Community / Village Cluster
→ Rollout Event
→ Household / School / ECD / Follow-up / Evidence / Issue / Report
```

## Programmes

Programme rows include programme ID, programme name, scale target, target region, message direction, and the programme hierarchy. Current mock programme:

- PureFlow Amanzi Safe Water & Community Resilience Programme
- Programme Scale Target: 360,000 households

## Projects_Phases

Project/phase rows include project ID, programme link, name, status, geography, household target, people target, schools/ECDs target, learner/young child target, local worker target, WASH session target, safe-water litre estimate, evidence status, reporting status, and description.

Current mock phases:

- Active: Foundational Rollout: Port St Johns + Ngquza Hill
- Planned: Eastern Cape Expansion Phase 2
- Planned: Regional Replication Phase

## Geographies

Geography rows include geography ID, level, name, parent geography or programme, associated household reach, target share, evidence counts, and issue signals where relevant.

## Targets

Target rows should be able to link to programme_id, project_id, and geography_id. Mock targets include programme scale target, selected phase household target, people target, schools/ECD target, learners/young children target, local worker target, WASH session target, safe-water litre estimate, sample targets, and follow-up targets.

## Events

Distribution event rows include event ID, project ID, municipality, ward/village cluster, venue type, date, households present, units issued, WASH training status, stock reconciliation status, and evidence folder status.

## Households

Household rows include household ID, project ID, linked event ID, municipality, ward/village, representative name, household size, filter/batch ID, data source, and record status.

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

Institutional site rows include site ID, project ID, school/ECD type, site name, ward/village, learners or children reached, staff trained, activation status, and evidence status.

## Household_Followups

Sampled household follow-up rows include selected household, representative, municipality, village, ward, linked event ID, linked project/phase, rollout cohort, assigned field worker, due date, visit type, follow-up status, filter present, functional status, WASH practice observed, issue flag, and refresher training flag.

Supported visit types:

- In-person
- Phone
- WhatsApp
- Paper captured later

Supported fieldworker statuses:

- Not started
- In progress
- Completed
- Unreachable
- Refused
- Needs revisit
- Issue escalated

## Fieldworker survey fields

The mobile-friendly mock household survey includes fieldworker name, visit date, visit type, household confirmed, consent confirmed, filter present, filter functional, used in last 7 days, used as main drinking water source, estimated fills per day, user understands filter use, user understands cleaning, safe storage observed, still boiling water, boiling reduced, issue reported, issue type, replacement needed, refresher training needed, notes, photo placeholder, and voice note placeholder.

## Paper survey capture

Paper batch records include paper form batch ID, captured by, original fieldworker, linked household follow-up record, validation status, rows captured, rows flagged, and rows accepted.

## Site_Followups

School/ECD follow-up rows include linked site, project ID, visit type, system present, functional status, WASH practice observed, issue flag, and refresher training flag.

## Issues

Issue rows include issue ID, project ID, linked household or site, issue type, severity, assigned person, replacement required, status, and resolution date.

## Water_Tests

Water test rows include test ID, project ID, household/site ID, sample type, test date, pass/fail/review result, and evidence file status.

## Evidence records

Evidence records include evidence ID, title, linked source record, type, verification status, and Drive-ready folder reference. Evidence can link to events, households, schools/ECDs, follow-ups, issues, water tests, imports, and reports.

## Upload_History and Upload_Errors

Bulk upload records should track rows uploaded, accepted, flagged, rejected, duplicate warnings, missing field warnings, validation status, uploader, upload time, target tab, and commit status.
