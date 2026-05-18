import { Badge, Card, DataTable, Metric, PageHeader } from "@/components/ui";
import { householdSamples, targets } from "@/lib/mock-data";

export default function SamplingPage() {
  return <>
    <PageHeader eyebrow="Quality assurance" title="Household Sampling">Annual follow-up sample management split evenly between Port St Johns and Ngquza Hill and across rollout cohorts.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Annual sample target" value={targets.annualSampleTarget} detail="Households" progress={61}/><Metric label="Port St Johns" value={targets.psjSampleTarget} detail="Annual target" progress={64}/><Metric label="Ngquza Hill" value={targets.ngquzaSampleTarget} detail="Annual target" progress={58}/></div>
    <Card className="mb-5"><h3 className="text-xl font-black text-water-900">Rollout cohort split</h3><div className="mt-4 grid gap-3 sm:grid-cols-4">{["Cohort 1", "Cohort 2", "Cohort 3", "Cohort 4"].map((c, i) => <div key={c} className="rounded-2xl bg-slate-50 p-4"><p className="font-bold text-slate-600">{c}</p><p className="text-2xl font-black text-water-900">{[64, 58, 61, 57][i]}</p></div>)}</div></Card>
    <DataTable headers={["Selected household", "Municipality", "Cohort", "Assigned field worker", "Follow-up status"]} rows={householdSamples.map((s) => [s.household, s.municipality, s.cohort, s.worker, <Badge key="b">{s.status}</Badge>])} />
  </>;
}
