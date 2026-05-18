import { Badge, BarList, Card, EvidenceCard, InsightPanel, Metric, PageHeader, SectionTitle } from "@/components/ui";
import { activeProject, evidenceRecords, geographies, metrics, programme, projects, targets } from "@/lib/mock-data";

export default function ProgrammePage() {
  return <>
    <PageHeader eyebrow="Programme overview" title={programme.name}>
      PureFlow Amanzi is a programme-wide safe water and community resilience operating system. The 36,000-household Port St Johns + Ngquza Hill rollout is the first active funded phase, not the full programme.
    </PageHeader>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Metric label="Programme Scale Target" value="360,000" detail="Wider Eastern Cape household scale target" />
      <Metric label="Current active project" value="Phase 1" detail={activeProject.name} />
      <Metric label="Active phase target" value="36,000" detail="Selected Phase Target: 36,000 households" />
      <Metric label="Cumulative reach" value={targets.peopleReached.toLocaleString()} detail="Estimated people reached in active phase" />
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2"><SectionTitle eyebrow="Programme structure" title="Built for multiple regions, phases, and evidence streams" />
        <div className="rounded-3xl bg-slate-50 p-5 text-sm font-bold leading-8 text-slate-700">{programme.hierarchy}</div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">{projects.map((p) => <div key={p.id} className="rounded-3xl border border-slate-200 p-4"><Badge>{p.status}</Badge><h4 className="mt-3 font-black text-water-950">{p.name}</h4><p className="mt-2 text-sm text-slate-600">{p.description}</p></div>)}</div>
      </Card>
      <InsightPanel title="Scale narrative" items={["The foundational rollout creates the first credible operating base for programme scale.", "Future phases are represented as planned projects with reusable reporting, evidence, and target structures.", "Programme dashboards separate programme-level targets from selected phase delivery."]} />
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card><SectionTitle title="Programme-level monitoring" /><BarList items={[{ label: "Selected phase delivery", value: 24 }, { label: "Monitoring completion", value: 69 }, { label: "Issue resolution", value: metrics.issueResolutionRate }]} /></Card>
      <Card><SectionTitle title="Programme-level evidence" /><div className="grid gap-3"><Metric label="Evidence records logged" value={targets.evidenceFilesStored} /><Metric label="Verified records" value={targets.verifiedEvidence} /></div></Card>
      <Card><SectionTitle title="Municipality coverage" />{geographies.slice(1).map((g) => <div key={g.id} className="mb-3 rounded-2xl bg-slate-50 p-3"><p className="font-black text-water-950">{g.name}</p><p className="text-sm text-slate-600">{g.households.toLocaleString()} households · {g.evidence} evidence records · {g.issues} open/active issue signals</p></div>)}</Card>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{evidenceRecords.map((e) => <EvidenceCard key={e.id} title={e.title} source={e.source} status={e.status} folder={e.folder} />)}</div>
  </>;
}
