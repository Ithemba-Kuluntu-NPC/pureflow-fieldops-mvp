import { BarList, Card, EvidenceCard, InsightPanel, Metric, PageHeader, Progress, SectionTitle } from "@/components/ui";
import { activeProject, evidenceRecords, geographies, metrics, programme, projects, targets } from "@/lib/mock-data";

export default function Dashboard() {
  const householdProgress = Math.round((targets.householdsRegistered / targets.selectedPhaseHouseholdTarget) * 100);
  const months = [18, 24, 32, 44, 58, 72, 88];
  return <>
    <PageHeader eyebrow="Programme mission control" title="PureFlow Verified Impact System" actions={<div className="grid gap-2 sm:grid-cols-2 lg:w-[25rem]">
      <select className="rounded-2xl border border-white/20 bg-white/95 px-3 py-2 text-sm font-bold text-water-950"><option>Reporting period · May 2026</option></select>
      <select className="rounded-2xl border border-white/20 bg-white/95 px-3 py-2 text-sm font-bold text-water-950"><option>Geography · All active municipalities</option></select>
      <select className="rounded-2xl border border-white/20 bg-white/95 px-3 py-2 text-sm font-bold text-water-950 sm:col-span-2"><option>{activeProject.name}</option>{projects.slice(1).map((p) => <option key={p.id}>{p.name}</option>)}</select>
      <button className="rounded-2xl bg-white px-4 py-2 text-sm font-black text-water-950 shadow-soft sm:col-span-2">Export snapshot</button>
    </div>}>
      <p>Safe Water. Stronger Communities. Verified impact across households, schools, ECDs, and community rollout systems.</p>
      <div className="mt-4 grid gap-2 text-sm font-bold sm:grid-cols-2">
        <span className="rounded-2xl bg-white/10 px-4 py-3">Programme: {programme.name}</span>
        <span className="rounded-2xl bg-white/10 px-4 py-3">Active Project: {activeProject.name}</span>
      </div>
    </PageHeader>

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Metric label="Programme Scale Target" value="360,000" detail="Households across the wider Eastern Cape programme scale" progress={10} />
      <Metric label="Selected Phase Target" value="36,000" detail="Foundational rollout household target" progress={householdProgress} />
      <Metric label="Households Reached" value={targets.householdsRegistered.toLocaleString()} detail="Registered across rollout events" progress={householdProgress} />
      <Metric label="People Reached" value={targets.peopleReached.toLocaleString()} detail="Estimated household reach" progress={householdProgress} />
      <Metric label="Schools & ECDs Activated" value={`${metrics.schoolsActivated}/114`} detail="Learners and young children target: 31,031" progress={72} />
      <Metric label="Monitoring Visits Completed" value={metrics.monitoringVisitsCompleted} detail="Household sample + school/ECD follow-ups" progress={69} />
      <Metric label="Household Sample Completed" value={`${metrics.householdFollowupsComplete}/240`} detail="Sample-based, not every household" progress={61} />
      <Metric label="Evidence Records Logged" value={targets.evidenceFilesStored} detail={`${targets.verifiedEvidence} verified · ${targets.evidenceAwaitingReview} awaiting review`} progress={78} />
    </div>

    <div className="mt-6 grid gap-4 xl:grid-cols-5">
      <Card className="xl:col-span-2">
        <SectionTitle title="Rollout Progress Over Time" eyebrow="Selected phase" />
        <div className="mt-8 flex h-52 items-end gap-3 rounded-3xl bg-slate-50 p-4" aria-label="CSS mock line chart">
          {months.map((m, i) => <div key={i} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-gradient-to-t from-teal-700 to-cyan-400" style={{ height: `${m}%` }} /><span className="text-xs font-bold text-slate-500">{["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"][i]}</span></div>)}
        </div>
      </Card>
      <Card className="xl:col-span-2">
        <SectionTitle title="Coverage by Municipality" eyebrow="Municipality/community rollout" />
        <BarList items={geographies.slice(1).map((g) => ({ label: g.name, value: Math.round((g.households / targets.householdsRegistered) * 100), detail: `${g.households.toLocaleString()} households registered · ${g.evidence} evidence records` }))} />
        <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-amber-900">Issue resolution needs attention in selected wards with open replacement and coaching queues.</div>
      </Card>
      <Card>
        <SectionTitle title="Geographic Coverage Map" eyebrow="Map placeholder" />
        <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 to-mint-100 p-4">
          <div className="absolute left-8 top-10 h-28 w-40 rounded-[45%] bg-white/70 shadow-soft" />
          <div className="absolute bottom-8 right-8 h-36 w-32 rounded-[50%] bg-teal-600/20 shadow-soft" />
          <span className="absolute left-12 top-20 rounded-full bg-water-950 px-3 py-1 text-xs font-black text-white">Port St Johns</span>
          <span className="absolute bottom-20 right-10 rounded-full bg-teal-700 px-3 py-1 text-xs font-black text-white">Ngquza Hill</span>
        </div>
      </Card>
    </div>

    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card><SectionTitle title="Household Follow-up Findings" /><BarList items={[{ label: "Systems functional", value: metrics.systemsFunctional }, { label: "Safe use observed", value: metrics.safeUseObserved }, { label: "Refresher training needed", value: metrics.refresherNeeded }]} /></Card>
      <Card><SectionTitle title="School/ECD Follow-up Findings" /><BarList items={[{ label: "Activated sites with evidence", value: 72 }, { label: "WASH practice observed", value: 79 }, { label: "Follow-ups validated", value: 75 }]} /></Card>
      <Card><SectionTitle title="Issue Resolution Status" /><p className="text-5xl font-black text-water-950">{metrics.issueResolutionRate}%</p><p className="mt-2 text-sm text-slate-600">Issue resolution rate across active phase records.</p><Progress value={metrics.issueResolutionRate} /><div className="mt-4 grid grid-cols-2 gap-3"><Metric label="Open issues" value={metrics.openIssues} /><Metric label="Replacements" value={metrics.replacementsRequired} /></div></Card>
    </div>

    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <Card>
        <SectionTitle title="Evidence Control" eyebrow="Credibility layer">Claims are designed to link back to source records and future Drive evidence folders.</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-3"><Metric label="Logged" value={targets.evidenceFilesStored} /><Metric label="Verified" value={targets.verifiedEvidence} /><Metric label="Awaiting review" value={targets.evidenceAwaitingReview} /></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">{evidenceRecords.slice(0, 2).map((e) => <EvidenceCard key={e.id} title={e.title} source={e.source} status={e.status} folder={e.folder} />)}</div>
      </Card>
      <Card>
        <SectionTitle title="Data Quality Snapshot" eyebrow="Validation before commit" />
        <div className="grid gap-3 sm:grid-cols-2"><Metric label="Duplicate warnings" value={targets.duplicateWarnings} /><Metric label="Missing fields" value={targets.missingFields} /><Metric label="Upload exceptions" value={targets.uploadExceptions} /><Metric label="Follow-ups pending validation" value={targets.pendingValidation} /></div>
        <div className="mt-4 rounded-2xl bg-sky-50 p-4 text-sm font-semibold text-slate-700">Bulk upload remains mock-only, but the workflow mirrors future CSV/XLSX validation into Google Sheets tabs.</div>
      </Card>
    </div>

    <div className="mt-6"><InsightPanel title="Current Signal" items={[
      "The active rollout phase is building the first operating base for wider programme scale.",
      "Household registration is progressing ahead of follow-up verification, so sample QA must remain visible.",
      "Issue resolution needs attention in selected wards while school/ECD follow-up is progressing well.",
      "Evidence records are increasingly organised around linked source records and future Drive-ready folders."
    ]} /></div>
  </>;
}
