import { Card, Metric, PageHeader, Progress } from "@/components/ui";
import { metrics, targets } from "@/lib/mock-data";

export default function FunderPage() {
  return <>
    <PageHeader eyebrow="Read-only funder view" title="PureFlow Amanzi Impact Portal">A polished, audit-ready snapshot for funders showing rollout progress, verified evidence, follow-up completion, issue closure, and water testing coverage.</PageHeader>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <Metric label="Rollout progress" value="24%" detail="8,740 of 36,000 households reached" progress={24}/>
      <Metric label="Schools/ECDs activated" value={`${metrics.schoolsActivated}/114`} progress={72}/>
      <Metric label="Sample follow-up completion" value={`${metrics.householdFollowupsComplete}/240`} progress={61}/>
      <Metric label="Issue resolution rate" value={`${metrics.issueResolutionRate}%`} progress={metrics.issueResolutionRate}/>
      <Metric label="Water tests completed" value={metrics.testsCompleted} detail="30 household + 30 institutional" progress={100}/>
      <Metric label="Evidence files stored" value={targets.evidenceFilesStored} progress={84}/>
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      {["Event photos and attendance scans", "School activation evidence", "Water test lab sheets"].map((title, i) => <Card key={title}><p className="text-xs font-bold uppercase tracking-wide text-mint-700">Selected evidence</p><h3 className="mt-2 text-xl font-black text-water-900">{title}</h3><p className="mt-3 text-sm text-slate-600">Mock Drive folder status: {i === 0 ? "Synced" : i === 1 ? "Reviewed" : "Audit pack ready"}</p></Card>)}
    </div>
    <Card className="mt-6"><h3 className="text-2xl font-black text-water-900">Monthly summary · May 2026</h3><p className="mt-3 text-slate-600">Rollout is progressing across Port St Johns and Ngquza Hill with central upload validation, evidence indexing, and field follow-ups ready for monthly reporting. All figures are mock data for prototype demonstration.</p><Progress value={84}/><p className="mt-4 rounded-2xl bg-mint-100 p-4 font-bold text-mint-700">Audit-ready message: every reported output is designed to link back to an event, register row, follow-up record, issue log, water test, and future Google Drive evidence file.</p></Card>
  </>;
}
