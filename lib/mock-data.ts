export const targets = {
  householdTarget: 36000,
  householdsRegistered: 8740,
  annualSampleTarget: 240,
  psjSampleTarget: 120,
  ngquzaSampleTarget: 120,
  schoolEcdSites: 114,
  schoolEcdFollowupsTarget: 228,
  evidenceFilesStored: 438,
  currentStatus: "Cohort 2 rollout active · bulk roster validation in progress"
};

export const rolloutEvents = [
  ["EVT-001", "Port St Johns", "Ward 3 / Mthumbane", "Community hall", "2026-02-12", 412, 410, "Complete", "Balanced", "Synced"],
  ["EVT-002", "Port St Johns", "Ward 5 / Ntafufu", "School hall", "2026-02-19", 368, 366, "Complete", "Balanced", "Synced"],
  ["EVT-003", "Ngquza Hill", "Ward 9 / Lusikisiki North", "Church", "2026-03-02", 497, 492, "Complete", "Variance review", "Synced"],
  ["EVT-004", "Port St Johns", "Ward 7 / Tombo", "Sports field", "2026-03-15", 286, 286, "Complete", "Balanced", "Pending photos"],
  ["EVT-005", "Ngquza Hill", "Ward 11 / Mbotyi", "Community hall", "2026-03-28", 442, 440, "Complete", "Balanced", "Synced"],
  ["EVT-006", "Port St Johns", "Ward 12 / Agate Terrace", "Clinic courtyard", "2026-04-04", 319, 318, "Complete", "Balanced", "Synced"],
  ["EVT-007", "Ngquza Hill", "Ward 16 / Flagstaff Rural", "School hall", "2026-04-18", 503, 500, "Complete", "Variance review", "Synced"],
  ["EVT-008", "Port St Johns", "Ward 15 / Sicambeni", "Church", "2026-04-25", 391, 390, "Complete", "Balanced", "Synced"],
  ["EVT-009", "Ngquza Hill", "Ward 18 / Magwa", "Community hall", "2026-05-03", 273, 272, "Complete", "Balanced", "Awaiting scan"],
  ["EVT-010", "Port St Johns", "Ward 19 / Majola", "School hall", "2026-05-11", 456, 454, "In progress", "Open", "Folder created"]
];

export const households = Array.from({ length: 18 }, (_, i) => ({
  id: `HH-${(2040 + i).toString().padStart(5, "0")}`,
  event: rolloutEvents[i % rolloutEvents.length][0] as string,
  municipality: i % 3 === 0 ? "Ngquza Hill" : "Port St Johns",
  village: ["Mthumbane", "Ntafufu", "Mbotyi", "Tombo", "Sicambeni", "Majola"][i % 6],
  size: [3, 4, 5, 6, 7][i % 5],
  batch: `PF-B${["A12", "A13", "B04", "B05"][i % 4]}-${100 + i}`,
  source: ["Direct", "Paper captured", "CSV upload"][i % 3],
  status: ["Verified", "Clean", "Missing info", "Duplicate warning"][i % 4]
}));

export const uploadCards = [
  ["Household event rosters", 2870, 2718, 119, 33, 42, 76],
  ["Paper follow-up forms", 188, 176, 9, 3, 2, 7],
  ["School/ECD site data", 114, 109, 5, 0, 1, 4],
  ["Issue/replacement logs", 62, 57, 4, 1, 3, 2],
  ["Water testing logs", 60, 56, 3, 1, 0, 3]
];

export const householdSamples = Array.from({ length: 12 }, (_, i) => ({
  household: households[i].id,
  municipality: i % 2 === 0 ? "Port St Johns" : "Ngquza Hill",
  cohort: `Cohort ${1 + (i % 4)}`,
  worker: ["A. Mbanjwa", "L. Mqadi", "S. Ndlovu", "T. Gxowa"][i % 4],
  status: ["Complete", "Scheduled", "In field", "Needs revisit"][i % 4]
}));

export const schoolSites = Array.from({ length: 14 }, (_, i) => ({
  id: `SITE-${(i + 1).toString().padStart(3, "0")}`,
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
  linked: s.household,
  visit: ["In-person", "Phone", "WhatsApp", "Paper captured later"][i % 4],
  present: i % 5 === 0 ? "Not confirmed" : "Yes",
  functional: ["Functional", "Review", "Functional", "Repair needed"][i % 4],
  wash: ["Observed", "Partial", "Observed", "Needs coaching"][i % 4],
  issue: i % 4 === 3 ? "Yes" : "No",
  refresher: i % 4 === 1 ? "Yes" : "No"
}));

export const siteFollowups = schoolSites.slice(0, 12).map((s, i) => ({
  id: `SF-${(i + 1).toString().padStart(3, "0")}`,
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
  linked: i % 2 === 0 ? households[i].id : schoolSites[i % schoolSites.length].id,
  sample: i % 2 === 0 ? "Household stored water" : "Institutional point-of-use",
  date: `2026-05-${(1 + i).toString().padStart(2, "0")}`,
  result: ["Pass", "Pass", "Review", "Fail"][i % 4],
  evidence: ["Lab sheet stored", "Photo stored", "Awaiting scan"][i % 3]
}));

export const workspaceTabs = ["Events", "Households", "Schools_ECDs", "Household_Followups", "Site_Followups", "Issues", "Water_Tests", "Upload_History", "Upload_Errors", "Users", "Reports"];
export const driveFolders = ["Events", "Household Evidence", "School ECD Evidence", "Issue Evidence", "Water Tests", "Imports", "Reports", "Audit Packs"];

export const metrics = {
  eventsCompleted: rolloutEvents.filter((e) => e[7] === "Complete").length,
  schoolsActivated: 82,
  householdFollowupsComplete: 146,
  siteFollowupsComplete: 171,
  openIssues: issues.filter((issue) => issue.status !== "Resolved").length,
  testsCompleted: 60,
  issueResolutionRate: 68
};
