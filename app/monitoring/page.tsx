import { Badge, Card, Metric, PageHeader, SectionTitle } from "@/components/ui";
import { householdSamples, issues, metrics, paperBatches, waterTests } from "@/lib/mock-data";

const surveySections = [
  ["Visit details", ["Household confirmed", "Consent confirmed"]],
  ["Filter use", ["Filter present", "Filter functional", "Used in last 7 days", "Used as main drinking water source", "Estimated fills per day"]],
  ["Correct use", ["Understands filter use", "Understands cleaning", "Safe storage observed"]],
  ["Boiling and water source", ["Still boiling water", "Boiling reduced"]],
  ["Issues", ["Issue reported", "Issue type", "Replacement needed", "Refresher training needed", "Notes"]],
  ["Evidence", ["Photo optional placeholder", "Voice note optional placeholder"]],
];

export default function MonitoringPage() {
  return <>
    <PageHeader eyebrow="Field Operations Board" title="Monitoring">Sampling, fieldworker surveys, follow-ups, issue escalation, water testing and paper capture in one calmer operational area.</PageHeader>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
      <Metric label="Assigned visits today" value="18" detail="Household and site visits" />
      <Metric label="Surveys completed" value={metrics.householdFollowupsComplete} detail="Sample-based household follow-up" />
      <Metric label="Follow-ups due" value="34" detail="Includes schools/ECDs" />
      <Metric label="Open issues" value={metrics.openIssues} detail="Escalation queue" />
      <Metric label="Water tests logged" value={metrics.testsCompleted} detail="Household and institutional" />
      <Metric label="Paper forms awaiting capture" value="46" detail="Intentional fallback workflow" />
    </div>

    <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <section>
        <SectionTitle eyebrow="Fieldworker Surveys" title="Today’s Assigned Visits">Mobile-style cards keep the fieldworker path simple: open visit, complete short survey, flag issue if needed, done.</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">{householdSamples.slice(0, 6).map((s, index) => <Card key={s.household} className="p-4">
          <div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-black text-water-950">{s.household}</h3><p className="text-sm font-semibold text-slate-600">{s.representative}</p></div><Badge>{s.status}</Badge></div>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2"><Info label="Municipality" value={s.municipality} /><Info label="Village / ward" value={`${s.village} · ${s.ward}`} /><Info label="Due date" value={s.dueDate} /><Info label="Visit type" value={s.visitType} /></div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3"><button className="rounded-2xl bg-water-950 px-4 py-3 text-sm font-black text-white">{index === 1 ? "Continue" : "Start Survey"}</button><button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-700">Mark Unreachable</button><button className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-black text-amber-900">Flag Issue</button></div>
        </Card>)}</div>
      </section>

      <section>
        <SectionTitle eyebrow="Short Household Survey" title="Grouped, not overwhelming">All required survey fields are shown in short sections with large touch targets. This is a mock form only.</SectionTitle>
        <Card className="p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">{surveySections.map(([title, fields]) => <div key={title as string} className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="font-black text-water-950">{title as string}</h4>
            <div className="mt-3 space-y-2">{(fields as string[]).map((field) => <label key={field} className="flex min-h-12 items-center justify-between gap-3 rounded-2xl bg-white px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200"><span>{field}</span><span className="rounded-full bg-mint-100 px-3 py-1 text-xs font-black text-teal-800">capture</span></label>)}</div>
          </div>)}</div>
          <button className="mt-5 w-full rounded-2xl bg-teal-700 px-5 py-4 text-lg font-black text-white">Submit mock survey</button>
        </Card>
      </section>
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      <Card><SectionTitle eyebrow="Paper Survey Capture" title="Paper forms captured" />{paperBatches.map((b) => <div key={b.id} className="rounded-3xl bg-slate-50 p-4"><h3 className="font-black text-water-950">{b.id}</h3><div className="mt-3 rounded-2xl border border-dashed border-teal-200 bg-sky-50 p-6 text-center font-black text-teal-800">Scan/photo placeholder</div><div className="mt-3 grid gap-2 text-sm"><Info label="Captured by" value={b.capturedBy} /><Info label="Original fieldworker" value={b.originalWorker} /><Info label="Linked household/site" value={b.linked} /><Info label="Rows captured / flagged / accepted" value={`${b.rowsCaptured} / ${b.rowsFlagged} / ${b.rowsAccepted}`} /></div></div>)}</Card>
      <Card><SectionTitle eyebrow="Supervisor QA" title="Simple review cards" />{[["Completed surveys", 146], ["Missing required fields", 9], ["Non-response cases", 7], ["Replacement households used", 6], ["Issue escalations", 11], ["Supervisor review target", "10–20%"]].map(([label, value]) => <Info key={String(label)} label={String(label)} value={String(value)} />)}</Card>
      <Card><SectionTitle eyebrow="Issue and water testing" title="Today’s field signals" /><div className="space-y-3">{issues.slice(0, 3).map((i) => <div key={i.id} className="rounded-2xl bg-amber-50 p-3"><p className="font-black text-amber-950">{i.id} · {i.type}</p><p className="text-sm text-amber-900">{i.linked} · assigned to {i.assigned}</p></div>)}{waterTests.slice(0, 3).map((t) => <div key={t.id} className="flex items-center justify-between rounded-2xl bg-sky-50 p-3"><span className="text-sm font-bold text-water-950">{t.id} · {t.sample}</span><Badge>{t.result}</Badge></div>)}</div></Card>
    </div>
  </>;
}

function Info({ label, value }: { label: string; value: string | number }) { return <div className="mb-2 rounded-2xl bg-white/80 p-3 ring-1 ring-slate-200"><p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p><p className="mt-1 font-bold text-water-950">{value}</p></div>; }
