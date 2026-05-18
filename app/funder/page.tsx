import { BarList, Card, EvidenceCard, Metric, PageHeader, Progress, SectionTitle } from "@/components/ui";
import { activeProject, evidenceRecords, geographies, metrics, programme, targets } from "@/lib/mock-data";

export default function FunderPage() {
  return <>
    <PageHeader eyebrow="Read-only funder portal" title="PureFlow Amanzi Impact Portal" actions={<div className="rounded-3xl bg-white/95 p-4 text-water-950"><p className="text-xs font-black uppercase tracking-wide text-slate-500">Selected reporting period</p><p className="font-black">May 2026 · mock snapshot</p></div>}>
      A calm, evidence-led reporting view for programme-wide impact, selected project/phase delivery, and funder-ready reporting packs.
    </PageHeader>
    <Card className="mb-6 border-teal-100 bg-gradient-to-br from-white to-mint-50"><p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Programme headline</p><h3 className="mt-2 text-3xl font-black text-water-950">{programme.name}</h3><p className="mt-3 text-slate-600">Programme Scale Target: 360,000 households. Active Project: {activeProject.name}.</p></Card>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Metric label="Selected Phase Target" value="36,000" detail="Households" progress={24}/>
      <Metric label="Households reached" value={targets.householdsRegistered.toLocaleString()} detail="Registered records" progress={24}/>
      <Metric label="People reached" value={targets.peopleReached.toLocaleString()} detail="Estimated household reach" progress={24}/>
      <Metric label="Evidence records logged" value={targets.evidenceFilesStored} detail={`${targets.verifiedEvidence} verified`} progress={78}/>
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2"><SectionTitle eyebrow="Selected phase headline" title={activeProject.name} /><p className="text-slate-600">The foundational phase covers Port St Johns and Ngquza Hill, with 114 school/ECD sites, 80 local workers, 270 WASH sessions, and 1.06+ billion litres of safe water over the initial cycle.</p><Progress value={24}/></Card>
      <Card><SectionTitle title="Featured impact snapshot" /><p className="text-lg font-black text-water-950">Safe water access is expanding through community events supported by evidence control, sample-based follow-up, and issue resolution.</p><p className="mt-3 text-sm text-slate-600">Mock narrative card for future verified stories and case studies.</p></Card>
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card><SectionTitle title="Rollout progress" /><Progress value={24}/><p className="mt-3 text-sm text-slate-600">8,740 of 36,000 selected-phase household records are registered in mock data.</p></Card>
      <Card><SectionTitle title="Reach by geography" /><BarList items={geographies.slice(1).map((g) => ({ label: g.name, value: Math.round((g.households / targets.householdsRegistered) * 100), detail: `${g.households.toLocaleString()} households` }))} /></Card>
      <Card><SectionTitle title="Schools/ECD reach" /><Metric label="Activated" value={`${metrics.schoolsActivated}/114`} detail="31,031 learner and young child target" progress={72}/></Card>
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <Card><SectionTitle title="Household follow-up findings" /><BarList items={[{ label: "Systems functional", value: metrics.systemsFunctional }, { label: "Safe use observed", value: metrics.safeUseObserved }, { label: "Refresher needed", value: metrics.refresherNeeded }]} /></Card>
      <Card><SectionTitle title="Issue resolution summary" /><Metric label="Resolution rate" value={`${metrics.issueResolutionRate}%`} progress={metrics.issueResolutionRate}/><p className="mt-3 text-sm text-slate-600">Open issues remain visible to funders without exposing operational clutter.</p></Card>
      <Card><SectionTitle title="Water testing summary" /><Metric label="Tests completed" value={metrics.testsCompleted} detail="Household + institutional samples" progress={100}/></Card>
    </div>
    <div className="mt-6"><SectionTitle eyebrow="Evidence gallery" title="Selected evidence records" /></div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{evidenceRecords.map((e) => <EvidenceCard key={e.id} title={e.title} source={e.source} status={e.status} folder={e.folder} />)}</div>
    <Card className="mt-6"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><SectionTitle title="Export / report pack" /><p className="text-slate-600">Future report exports will compile KPI tables, evidence references, water testing summaries, issue resolution, and narrative impact snapshots. This remains mock-only.</p></div><button className="rounded-2xl bg-water-950 px-5 py-3 text-sm font-black text-white">Prepare mock report pack</button></div></Card>
  </>;
}
