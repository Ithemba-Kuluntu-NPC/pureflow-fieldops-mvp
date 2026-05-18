import { Card, Metric, PageHeader, SectionTitle } from "@/components/ui";
import { activeProject, metrics, programme, targets } from "@/lib/mock-data";

export default function ReportsPage() {
  return <>
    <PageHeader eyebrow="Impact Report" title="Funder Update">A polished live reporting view for programme leadership and funders, using narrative confidence instead of dense internal dashboards.</PageHeader>
    <Card className="bg-gradient-to-br from-white to-mint-50 p-7">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Programme headline</p>
      <h2 className="mt-2 text-3xl font-black text-water-950">{programme.name}</h2>
      <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">PureFlow is building a verified digital trust layer for safe water rollout: planning distribution, proving delivery, monitoring realistic use, managing issues, collecting evidence and reporting credibly.</p>
      <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold text-water-950 ring-1 ring-slate-200">Active Phase: {activeProject.name}. This is the first active phase, while the operating system remains designed for future regional rollout readiness.</p>
    </Card>

    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Metric label="Households registered" value={targets.householdsRegistered.toLocaleString()} detail="Current activity number" />
      <Metric label="Rollout events completed" value={metrics.eventsCompleted} detail="Community events closed" />
      <Metric label="Monitoring confidence" value={`${metrics.safeUseObserved}%`} detail="Safe use observed in sample" />
      <Metric label="Evidence records logged" value={targets.evidenceFilesStored} detail="Audit trail in progress" />
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      <Card><SectionTitle eyebrow="Rollout progress narrative" title="What is happening now" /><p className="text-sm leading-7 text-slate-700">The active phase is moving through community rollout events, household roster validation, school/ECD activation and sampled follow-up. Rural operating realities are built into the workflow: paper records, signatures, photos, field notes and later CSV capture are treated as core evidence channels.</p></Card>
      <Card><SectionTitle eyebrow="Evidence summary" title="Confidence for reporting" /><p className="text-sm leading-7 text-slate-700">Evidence is organised through a captured, reviewed, verified and report-ready pipeline. Current attention is on paper-form validation, upload exceptions and high-priority issue evidence before the next monthly pack.</p></Card>
      <Card><SectionTitle eyebrow="Issue resolution" title="Management attention" /><p className="text-sm leading-7 text-slate-700">Open issues are visible but not over-amplified. Replacement needs, refresher training and water-test review items are routed to supervisors so programme managers can show operational control.</p></Card>
      <Card className="border-teal-100 bg-mint-50"><SectionTitle eyebrow="Selected impact story" title="Community event to verified evidence" /><p className="text-sm leading-7 text-slate-700">A school hall event in Port St Johns produced a roster, paper signatures, photo evidence and follow-up sample list. The record is moving toward report-ready status once supervisor QA is complete.</p></Card>
    </div>

    <Card className="mt-6 flex flex-col justify-between gap-4 bg-water-950 text-white sm:flex-row sm:items-center">
      <div><p className="text-xs font-black uppercase tracking-[0.22em] text-mint-100">Export/report pack mockup</p><h3 className="mt-2 text-2xl font-black">Prepare monthly funder pack</h3><p className="mt-2 text-sm text-sky-100">Mock-only CTA. Future backend direction remains Google Sheets, Drive and Apps Script with user/account controls later.</p></div>
      <button className="rounded-2xl bg-white px-5 py-4 text-sm font-black text-water-950">Preview mock report pack</button>
    </Card>
  </>;
}
