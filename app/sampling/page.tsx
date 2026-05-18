import { Badge, Card, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, householdSamples, targets } from "@/lib/mock-data";

export default function SamplingPage() {
  return <>
    <PageHeader eyebrow="Quality assurance" title="Household Sampling">Sample-based follow-up management for the selected phase. Not every household is visited; assigned samples are distributed across municipalities, cohorts, and fieldworkers.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Annual sample target" value={targets.annualSampleTarget} detail="Households" progress={61}/><Metric label="Port St Johns" value={targets.psjSampleTarget} detail="Annual target" progress={64}/><Metric label="Ngquza Hill" value={targets.ngquzaSampleTarget} detail="Annual target" progress={58}/></div>
    <Card className="mb-5"><h3 className="text-xl font-black text-water-950">Rollout cohort split</h3><p className="mt-2 text-sm text-slate-600">Active Project: {activeProject.name}</p><div className="mt-4 grid gap-3 sm:grid-cols-4">{["Cohort 1", "Cohort 2", "Cohort 3", "Cohort 4"].map((c, i) => <div key={c} className="rounded-2xl bg-slate-50 p-4"><p className="font-bold text-slate-600">{c}</p><p className="text-2xl font-black text-water-950">{[64, 58, 61, 57][i]}</p></div>)}</div></Card>
    <DataTable headers={["Selected household", "Municipality", "Village / ward", "Linked event", "Cohort", "Assigned field worker", "Due date", "Visit type", "Follow-up status"]} rows={householdSamples.map((s) => [s.household, s.municipality, `${s.village} / ${s.ward}`, s.eventId, s.cohort, s.worker, s.dueDate, s.visitType, <Badge key="b">{s.status}</Badge>])} />
  </>;
}
