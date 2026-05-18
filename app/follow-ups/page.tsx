import { Badge, Card, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, householdFollowups, metrics, siteFollowups } from "@/lib/mock-data";

export default function FollowUpsPage() {
  const headers = ["Follow-up ID", "Project", "Linked record", "Visit type", "Filter/system present", "Functional status", "WASH practice", "Issue flagged", "Refresher needed"];
  return <>
    <PageHeader eyebrow="Field verification" title="Follow-ups">Combined view for sampled household follow-ups and full school/ECD follow-up operations. Active Project: {activeProject.name}.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Monitoring visits completed" value={metrics.monitoringVisitsCompleted} /><Metric label="Household sample completed" value={`${metrics.householdFollowupsComplete}/240`} progress={61} /><Metric label="School/ECD follow-up" value={`${metrics.siteFollowupsComplete}/228`} progress={75} /></div>
    <Card className="mb-5 bg-sky-50"><p className="font-black text-water-950">Operational note</p><p className="mt-2 text-sm text-slate-600">Household monitoring is sample-based. Schools and ECDs receive full follow-up coverage in the selected phase.</p></Card>
    <h3 className="mb-3 text-xl font-black text-water-950">Sampled household follow-ups</h3>
    <DataTable headers={headers} rows={householdFollowups.map((f) => [f.id, f.projectId, f.linked, f.visit, f.present, <Badge key="b">{f.functional}</Badge>, f.wash, f.issue, f.refresher])} />
    <h3 className="mb-3 mt-8 text-xl font-black text-water-950">School/ECD follow-ups</h3>
    <DataTable headers={headers} rows={siteFollowups.map((f) => [f.id, f.projectId, f.linked, f.visit, f.present, <Badge key="b">{f.functional}</Badge>, f.wash, f.issue, f.refresher])} />
  </>;
}
