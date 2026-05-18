import { Card, Metric, PageHeader, Progress } from "@/components/ui";
import { metrics, targets } from "@/lib/mock-data";

export default function Dashboard() {
  const householdProgress = Math.round((targets.householdsRegistered / targets.householdTarget) * 100);
  return <>
    <PageHeader eyebrow="Operations dashboard" title="PureFlow Verified Impact System">
      A proprietary rollout operating system for 36,000 household distributions, 114 institutional sites, evidence control, follow-up sampling, water testing, and funder-ready impact reporting.
    </PageHeader>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Metric label="Household target" value="36,000" detail={`${targets.householdsRegistered.toLocaleString()} registered`} progress={householdProgress} />
      <Metric label="Rollout events completed" value={metrics.eventsCompleted} detail="10 events loaded in demo register" progress={90} />
      <Metric label="Schools/ECDs activated" value={metrics.schoolsActivated} detail="of 114 fixed sites" progress={72} />
      <Metric label="Household sample follow-up" value={`${metrics.householdFollowupsComplete}/240`} detail="Annual statistically managed sample" progress={61} />
      <Metric label="School/ECD follow-up" value={`${metrics.siteFollowupsComplete}/228`} detail="Two follow-ups per site" progress={75} />
      <Metric label="Open issues" value={metrics.openIssues} detail="Replacement and coaching queue" progress={32} />
      <Metric label="Water tests completed" value={metrics.testsCompleted} detail="30 household + 30 institutional" progress={100} />
      <Metric label="Evidence files stored" value={targets.evidenceFilesStored} detail="Drive-ready mock evidence index" progress={84} />
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <h3 className="text-xl font-black text-water-900">Current rollout status</h3>
        <p className="mt-3 text-slate-600">{targets.currentStatus}</p>
        <Progress value={householdProgress} />
        <p className="mt-3 text-sm font-semibold text-slate-500">Registered household progress: {householdProgress}% of the 36,000 household rollout target.</p>
      </Card>
      <Card>
        <h3 className="text-xl font-black text-water-900">Evidence control</h3>
        <p className="mt-3 text-slate-600">Every event, follow-up, issue, and water test is modelled with an evidence folder/file status so the MVP can later map directly into Google Drive audit packs.</p>
      </Card>
    </div>
  </>;
}
