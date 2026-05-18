import { Badge, Card, DataTable, Metric, PageHeader, SectionTitle } from "@/components/ui";
import { activeProject, metrics, rolloutEvents, schoolSites, targets, uploadCards } from "@/lib/mock-data";

const clusters = [
  ["Port St Johns coastal cluster", "Active", "EVT-010 roster and scan review", "Confirm latest school hall photos"],
  ["Port St Johns inland cluster", "In progress", "Household registration from paper forms", "Validate before commit"],
  ["Ngquza Hill cluster 1", "Planned", "Traditional leader venue confirmation", "Prepare event roster pack"],
  ["School/ECD cohort", "Active", "Site activation and training evidence", "Book follow-up visits"],
];

export default function RolloutsPage() {
  return <>
    <PageHeader eyebrow="Deployment operations" title="Rollouts">Manage the active phase through event pipelines, community clusters, registers, and bulk-upload readiness. Active Phase: {activeProject.name}.</PageHeader>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Metric label="Events completed" value={metrics.eventsCompleted} detail="Closed community rollout events" />
      <Metric label="Household register" value={targets.householdsRegistered.toLocaleString()} detail="Current records, not target progress" />
      <Metric label="Schools/ECD register" value={`${metrics.schoolsActivated} active`} detail="Fixed institutional sites" />
      <Metric label="Paper/CSV batches" value="5 types" detail="Core workflow for low-connectivity field conditions" />
    </div>

    <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_1.2fr]">
      <Card>
        <SectionTitle eyebrow="Phase planning" title="Community and cohort cards">Cohorts show recent activity, next action and evidence state without large target bars.</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2">{clusters.map(([name, status, activity, action]) => <div key={name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-start justify-between gap-3"><h3 className="font-black text-water-950">{name}</h3><Badge>{status}</Badge></div>
          <p className="mt-3 text-sm text-slate-600"><strong>Recent activity:</strong> {activity}</p>
          <p className="mt-2 text-sm text-slate-600"><strong>Next action:</strong> {action}</p>
          <p className="mt-3 rounded-2xl bg-white px-3 py-2 text-sm font-bold text-teal-800 ring-1 ring-teal-100">Evidence state: folder ready</p>
        </div>)}</div>
      </Card>
      <Card>
        <SectionTitle eyebrow="Event pipeline" title="Rollout events">Events reflect real rural venues and high-volume attendance.</SectionTitle>
        <DataTable headers={["Event", "Municipality", "Ward / village", "Venue", "Date", "Households", "Evidence"]} rows={rolloutEvents.slice(-6).map((e) => [e[0], e[2], e[3], e[4], e[5], e[6], <Badge key="e">{e[10]}</Badge>])} />
      </Card>
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      <Card><SectionTitle eyebrow="Registers" title="Household register summary" /> <p className="text-sm leading-6 text-slate-600">Registration happens at scale through event rosters, direct capture, paper signatures and CSV-ready uploads. Exceptions are reviewed before future commit.</p><div className="mt-4 grid gap-3 sm:grid-cols-3"><Mini label="Duplicate warnings" value={targets.duplicateWarnings} /><Mini label="Missing fields" value={targets.missingFields} /><Mini label="Pending validation" value={targets.pendingValidation} /></div></Card>
      <Card><SectionTitle eyebrow="Registers" title="Schools/ECD activation summary" /> <div className="space-y-3">{schoolSites.slice(0, 4).map((site) => <div key={site.id} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3"><div><p className="font-black text-water-950">{site.name}</p><p className="text-sm text-slate-600">{site.type} · {site.village}</p></div><Badge>{site.activation}</Badge></div>)}</div></Card>
    </div>

    <Card className="mt-6">
      <SectionTitle eyebrow="Bulk Upload" title="Validate before commit">Excel/CSV and paper capture are planned as core workflows, not backups. No real upload is connected in this mock MVP.</SectionTitle>
      <div className="grid gap-3 lg:grid-cols-5">{uploadCards.slice(0, 5).map(([name, uploaded, accepted, flagged, rejected]) => <div key={String(name)} className="rounded-3xl border border-slate-200 bg-white p-4">
        <h3 className="font-black text-water-950">{String(name)}</h3>
        <p className="mt-2 text-sm text-slate-600">Latest status: {String(accepted)} accepted from {String(uploaded)} rows.</p>
        <p className="mt-2 text-sm text-amber-900">Warnings/errors: {String(flagged)} flagged · {String(rejected)} rejected.</p>
        <button className="mt-4 w-full rounded-2xl bg-water-950 px-4 py-3 text-sm font-black text-white">Review mock batch</button>
      </div>)}</div>
    </Card>
  </>;
}

function Mini({ label, value }: { label: string; value: string | number }) { return <div className="rounded-2xl bg-sky-50 p-4"><p className="text-xs font-black uppercase text-slate-500">{label}</p><p className="mt-1 text-2xl font-black text-water-950">{value}</p></div>; }
