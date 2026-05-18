export const programme = {
  id: "PRG-PFA-001",
  name: "PureFlow Amanzi Safe Water & Community Resilience Programme",
  scaleTargetHouseholds: 360000,
  targetRegion: "Eastern Cape programme scale",
  message: "Safe Water. Stronger Communities.",
  hierarchy: "Programme → Region / Province → Project / Phase → Municipality → Community / Village Cluster → Rollout Event → Household / School / ECD / Follow-up / Evidence / Issue / Report"
};

export const projects = [
  {
    id: "PHASE-001",
    name: "Foundational Rollout: Port St Johns + Ngquza Hill",
    status: "Active",
    geography: "Eastern Cape · OR Tambo District · Port St Johns + Ngquza Hill",
    householdTarget: 36000,
    peopleTarget: 180000,
    schoolEcdTarget: 114,
    learnersTarget: 31031,
    localWorkers: 80,
    washSessions: 270,
    safeWaterLitres: "1.06+ billion",
    evidenceStatus: "Evidence folders active",
    reportingStatus: "Monthly funder pack ready",
    description: "First active funded project and operating base for programme-wide scale."
  },
  {
    id: "PHASE-002",
    name: "Eastern Cape Expansion Phase 2",
    status: "Planned",
    geography: "Eastern Cape · additional municipalities to be confirmed",
    householdTarget: "Pipeline / TBC",
    peopleTarget: "Pipeline / TBC",
    schoolEcdTarget: "Pipeline / TBC",
    learnersTarget: "Pipeline / TBC",
    localWorkers: "TBC",
    washSessions: "TBC",
    safeWaterLitres: "TBC",
    evidenceStatus: "Evidence structure planned",
    reportingStatus: "Reporting template planned",
    description: "Next growth phase using the operating model proven in the foundational rollout."
  },
  {
    id: "PHASE-003",
    name: "Regional Replication Phase",
    status: "Planned",
    geography: "Replication regions · pipeline",
    householdTarget: "Pipeline / TBC",
    peopleTarget: "Pipeline / TBC",
    schoolEcdTarget: "Pipeline / TBC",
    learnersTarget: "Pipeline / TBC",
    localWorkers: "TBC",
    washSessions: "TBC",
    safeWaterLitres: "TBC",
    evidenceStatus: "Drive-ready folder pattern planned",
    reportingStatus: "Funder pack pattern planned",
    description: "Programme replication track for future regions and funder cohorts."
  }
];

export const activeProject = projects[0];

export const geographies = [
  { id: "GEO-EC", level: "Province / Region", name: "Eastern Cape", parent: programme.id, households: 8740, targetShare: 100, evidence: 438, issues: 33 },
  { id: "GEO-PSJ", level: "Municipality", name: "Port St Johns", parent: "GEO-EC", households: 4920, targetShare: 50, evidence: 238, issues: 14 },
  { id: "GEO-NQH", level: "Municipality", name: "Ngquza Hill", parent: "GEO-EC", households: 3820, targetShare: 50, evidence: 200, issues: 19 }
];

export const targets = {
  programmeScaleTarget: 360000,
  selectedPhaseHouseholdTarget: 36000,
  householdTarget: 36000,
  householdsRegistered: 8740,
  peopleReached: 43700,
  annualSampleTarget: 240,
  psjSampleTarget: 120,
  ngquzaSampleTarget: 120,
  schoolEcdSites: 114,
  schoolEcdFollowupsTarget: 228,
  learnersTarget: 31031,
  localWorkers: 80,
  washSessions: 270,
  safeWaterLitres: "1.06+ billion",
  evidenceFilesStored: 438,
  verifiedEvidence: 341,
  evidenceAwaitingReview: 97,
  duplicateWarnings: 42,
  missingFields: 76,
  uploadExceptions: 36,
  pendingValidation: 22,
  currentStatus: "Cohort 2 rollout active · bulk roster validation in progress"
};

export const rolloutEvents = [
  ["EVT-001", "PHASE-001", "Port St Johns", "Ward 3 / Mthumbane", "Community hall", "2026-02-12", 412, 410, "Complete", "Balanced", "Synced"],
  ["EVT-002", "PHASE-001", "Port St Johns", "Ward 5 / Ntafufu", "School hall", "2026-02-19", 368, 366, "Complete", "Balanced", "Synced"],
  ["EVT-003", "PHASE-001", "Ngquza Hill", "Ward 9 / Lusikisiki North", "Church", "2026-03-02", 497, 492, "Complete", "Variance review", "Synced"],
  ["EVT-004", "PHASE-001", "Port St Johns", "Ward 7 / Tombo", "Sports field", "2026-03-15", 286, 286, "Complete", "Balanced", "Pending photos"],
  ["EVT-005", "PHASE-001", "Ngquza Hill", "Ward 11 / Mbotyi", "Community hall", "2026-03-28", 442, 440, "Complete", "Balanced", "Synced"],
  ["EVT-006", "PHASE-001", "Port St Johns", "Ward 12 / Agate Terrace", "Clinic courtyard", "2026-04-04", 319, 318, "Complete", "Balanced", "Synced"],
  ["EVT-007", "PHASE-001", "Ngquza Hill", "Ward 16 / Flagstaff Rural", "School hall", "2026-04-18", 503, 500, "Complete", "Variance review", "Synced"],
  ["EVT-008", "PHASE-001", "Port St Johns", "Ward 15 / Sicambeni", "Church", "2026-04-25", 391, 390, "Complete", "Balanced", "Synced"],
  ["EVT-009", "PHASE-001", "Ngquza Hill", "Ward 18 / Magwa", "Community hall", "2026-05-03", 273, 272, "Complete", "Balanced", "Awaiting scan"],
  ["EVT-010", "PHASE-001", "Port St Johns", "Ward 19 / Majola", "School hall", "2026-05-11", 456, 454, "In progress", "Open", "Folder created"]
];

export const households = Array.from({ length: 18 }, (_, i) => ({
  id: `HH-${(2040 + i).toString().padStart(5, "0")}`,
  projectId: "PHASE-001",
  event: rolloutEvents[i % rolloutEvents.length][0] as string,
  municipality: i % 3 === 0 ? "Ngquza Hill" : "Port St Johns",
  village: ["Mthumbane", "Ntafufu", "Mbotyi", "Tombo", "Sicambeni", "Majola"][i % 6],
  size: [3, 4, 5, 6, 7][i % 5],
  representative: ["N. Dlamini", "P. Mqadi", "A. Ndamase", "Z. Xaba", "L. Faku", "T. Gxowa"][i % 6],
  batch: `PF-B${["A12", "A13", "B04", "B05"][i % 4]}-${100 + i}`,
  source: ["Direct", "Paper captured", "CSV upload"][i % 3],
  status: ["Verified", "Clean", "Missing info", "Duplicate warning"][i % 4]
}));

export const uploadCards = [
  ["Household event rosters", 2870, 2718, 119, 33, 42, 76, "Households"],
  ["Paper follow-up forms", 188, 176, 9, 3, 2, 7, "Household_Followups"],
  ["School/ECD site data", 114, 109, 5, 0, 1, 4, "Schools_ECDs"],
  ["Issue/replacement logs", 62, 57, 4, 1, 3, 2, "Issues"],
  ["Water testing logs", 60, 56, 3, 1, 0, 3, "Water_Tests"],
  ["Programme/project target updates", 6, 5, 1, 0, 0, 1, "Targets"]
];

export const householdSamples = Array.from({ length: 12 }, (_, i) => ({
  household: households[i].id,
  representative: households[i].representative,
  municipality: i % 2 === 0 ? "Port St Johns" : "Ngquza Hill",
  village: households[i].village,
  ward: ["Ward 3", "Ward 5", "Ward 9", "Ward 11"][i % 4],
  eventId: households[i].event,
  project: activeProject.name,
  cohort: `Cohort ${1 + (i % 4)}`,
  worker: ["A. Mbanjwa", "L. Mqadi", "S. Ndlovu", "T. Gxowa"][i % 4],
  dueDate: `2026-05-${(20 + i).toString().padStart(2, "0")}`,
  visitType: ["In-person", "Phone", "WhatsApp", "Paper captured later"][i % 4],
  status: ["Not started", "In progress", "Completed", "Unreachable", "Refused", "Needs revisit", "Issue escalated"][i % 7]
}));

export const schoolSites = Array.from({ length: 14 }, (_, i) => ({
  id: `SITE-${(i + 1).toString().padStart(3, "0")}`,
  projectId: "PHASE-001",
  type: i % 3 === 0 ? "ECD" : "School",
  name: ["Sibhongweni Primary", "Ntafufu ECD", "Mthumbane Junior", "Sicambeni Primary", "Mbotyi ECD", "Majola Senior"][i % 6],
  village: ["Mthumbane", "Ntafufu", "Sicambeni", "Mbotyi", "Majola"][i % 5],
  learners: 45 + i * 37,
  staff: 3 + (i % 8),
  activation: ["Activated", "Training booked", "Evidence review"][i % 3],
  evidence: ["Complete", "Photos pending", "Folder synced"][i % 3]
}));

export const householdFollowups = householdSamples.map((s, i) => ({
  id: `HF-${(i + 1).toString().padStart(3, "0")}`,
  projectId: "PHASE-001",
  linked: s.household,
  visit: s.visitType,
  present: i % 5 === 0 ? "Not confirmed" : "Yes",
  functional: ["Functional", "Review", "Functional", "Repair needed"][i % 4],
  wash: ["Observed", "Partial", "Observed", "Needs coaching"][i % 4],
  issue: i % 4 === 3 ? "Yes" : "No",
  refresher: i % 4 === 1 ? "Yes" : "No"
}));

export const siteFollowups = schoolSites.slice(0, 12).map((s, i) => ({
  id: `SF-${(i + 1).toString().padStart(3, "0")}`,
  projectId: "PHASE-001",
  linked: s.id,
  visit: ["In-person", "Phone", "WhatsApp", "Paper captured later"][i % 4],
  present: "Yes",
  functional: ["Functional", "Functional", "Review", "Repair needed"][i % 4],
  wash: ["Observed", "Observed", "Partial", "Needs coaching"][i % 4],
  issue: i % 4 === 3 ? "Yes" : "No",
  refresher: i % 3 === 2 ? "Yes" : "No"
}));

export const issues = Array.from({ length: 12 }, (_, i) => ({
  id: `ISS-${(70 + i).toString().padStart(3, "0")}`,
  projectId: "PHASE-001",
  linked: i % 2 === 0 ? households[i].id : schoolSites[i].id,
  type: ["Cracked tap", "Missing lid", "Training refresh", "Low flow", "Replacement filter"][i % 5],
  severity: ["Low", "Medium", "High"][i % 3],
  assigned: ["A. Mbanjwa", "Ops desk", "T. Gxowa"][i % 3],
  replacement: i % 4 === 0 ? "Yes" : "No",
  status: ["Open", "Resolved", "In progress", "Resolved"][i % 4],
  date: i % 4 === 1 || i % 4 === 3 ? `2026-05-${(10 + i).toString().padStart(2, "0")}` : "—"
}));

export const waterTests = Array.from({ length: 16 }, (_, i) => ({
  id: `WT-${(300 + i).toString().padStart(3, "0")}`,
  projectId: "PHASE-001",
  linked: i % 2 === 0 ? households[i].id : schoolSites[i % schoolSites.length].id,
  sample: i % 2 === 0 ? "Household stored water" : "Institutional point-of-use",
  date: `2026-05-${(1 + i).toString().padStart(2, "0")}`,
  result: ["Pass", "Pass", "Review", "Fail"][i % 4],
  evidence: ["Lab sheet stored", "Photo stored", "Awaiting scan"][i % 3]
}));

export const evidenceRecords = [
  { id: "EVD-1101", title: "Event attendance scan", source: "EVT-010", type: "Register", status: "Verified", folder: "Drive-ready / Events / EVT-010" },
  { id: "EVD-1102", title: "School activation photos", source: "SITE-004", type: "Photo set", status: "Review", folder: "Drive-ready / School ECD Evidence / SITE-004" },
  { id: "EVD-1103", title: "Water test lab sheet", source: "WT-306", type: "Lab sheet", status: "Verified", folder: "Drive-ready / Water Tests / WT-306" },
  { id: "EVD-1104", title: "Paper follow-up batch scan", source: "HF-BATCH-022", type: "Scanned form", status: "Awaiting review", folder: "Drive-ready / Imports / Paper Forms" }
];

export const paperBatches = [
  { id: "PAPER-HF-022", capturedBy: "Data desk · L. Faku", originalWorker: "A. Mbanjwa", linked: "HF batch 18-31", status: "Validation review", rowsCaptured: 46, rowsFlagged: 4, rowsAccepted: 42 }
];

export const workspaceTabs = ["Programmes", "Projects_Phases", "Geographies", "Targets", "Events", "Households", "Schools_ECDs", "Household_Followups", "Site_Followups", "Issues", "Water_Tests", "Upload_History", "Upload_Errors", "Users", "Reports"];
export const driveFolders = ["Programmes", "Projects & Phases", "Events", "Household Evidence", "School ECD Evidence", "Issue Evidence", "Water Tests", "Imports", "Reports", "Audit Packs"];

export const metrics = {
  eventsCompleted: rolloutEvents.filter((e) => e[8] === "Complete").length,
  schoolsActivated: 82,
  monitoringVisitsCompleted: 317,
  householdFollowupsComplete: 146,
  siteFollowupsComplete: 171,
  openIssues: issues.filter((issue) => issue.status !== "Resolved").length,
  testsCompleted: 60,
  issueResolutionRate: 68,
  systemsFunctional: 88,
  safeUseObserved: 81,
  refresherNeeded: 19,
  replacementsRequired: 11
};
