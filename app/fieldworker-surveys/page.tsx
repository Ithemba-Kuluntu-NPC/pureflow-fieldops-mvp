import { Badge, Card, Metric, PageHeader, SectionTitle } from "@/components/ui";
import { householdSamples, paperBatches } from "@/lib/mock-data";

const yesNo = ["Yes", "No"];

export default function FieldworkerSurveysPage() {
  return <>
    <PageHeader eyebrow="Field-ready monitoring" title="Fieldworker Household Surveys">
      Mobile-first mock workflow for sampled household follow-up surveys. Monitoring is sample-based, with paper fallback for rural field conditions and later data capture.
    </PageHeader>
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section>
        <SectionTitle eyebrow="1" title="My Assigned Surveys">Large tap targets show what a fieldworker should do next.</SectionTitle>
        <div className="space-y-3">{householdSamples.slice(0, 7).map((s) => <Card key={s.household} className="p-4">
          <div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-black text-water-950">{s.household}</h3><p className="text-sm font-semibold text-slate-600">{s.representative} · {s.village} / {s.ward}</p></div><Badge>{s.status}</Badge></div>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2"><Info label="Municipality" value={s.municipality} /><Info label="Linked event" value={s.eventId} /><Info label="Linked project/phase" value={s.project} /><Info label="Due date" value={s.dueDate} /><Info label="Visit type" value={s.visitType} /></div>
          <button className="mt-4 w-full rounded-2xl bg-water-950 px-4 py-3 text-base font-black text-white">Start / continue survey</button>
        </Card>)}</div>
      </section>
      <section>
        <SectionTitle eyebrow="2" title="Start Household Survey">Mock form only. It does not submit real data yet.</SectionTitle>
        <Card className="bg-white p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2"><Field label="Fieldworker name" placeholder="A. Mbanjwa" /><Field label="Visit date" placeholder="2026-05-22" /><Select label="Visit type" options={["In-person", "Phone", "WhatsApp", "Paper captured later"]} /><Field label="Estimated fills per day" placeholder="3" /></div>
          <div className="mt-6 space-y-5">
            <Question title="Household and consent" items={["Household confirmed", "Consent confirmed"]} />
            <Question title="Filter use and function" items={["Filter present", "Filter functional", "Used in last 7 days", "Used as main drinking water source"]} />
            <Question title="Safe use and behaviour" items={["User understands filter use", "User understands cleaning", "Safe storage observed"]} />
            <div className="rounded-3xl border border-slate-200 p-4"><h4 className="font-black text-water-950">Boiling and issue escalation</h4><div className="mt-3 grid gap-3 sm:grid-cols-2"><Select label="Still boiling water" options={["Yes", "No", "Sometimes"]} /><Select label="Boiling reduced" options={["Yes", "No", "Unknown"]} /><Select label="Issue reported" options={yesNo} /><Field label="Issue type" placeholder="Low flow / cracked tap / missing lid" /><Select label="Replacement needed" options={yesNo} /><Select label="Refresher training needed" options={yesNo} /></div></div>
            <label className="block"><span className="text-sm font-black text-slate-700">Notes</span><textarea className="mt-1 min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Short notes for supervisor review" /></label>
            <div className="grid gap-3 sm:grid-cols-2"><Placeholder title="Photo optional placeholder" /><Placeholder title="Voice note optional placeholder" /></div>
            <button className="w-full rounded-2xl bg-teal-700 px-5 py-4 text-lg font-black text-white">Submit mock survey</button>
          </div>
        </Card>
      </section>
    </div>
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <section><SectionTitle eyebrow="3" title="Paper Survey Capture">Paper fallback is an intentional workflow, not an exception.</SectionTitle>{paperBatches.map((b) => <Card key={b.id}><h3 className="text-xl font-black text-water-950">Paper form batch {b.id}</h3><div className="mt-4 rounded-3xl border border-dashed border-teal-200 bg-sky-50 p-8 text-center font-black text-teal-800">Scanned form placeholder</div><div className="mt-4 grid gap-2 sm:grid-cols-2"><Info label="Captured by" value={b.capturedBy} /><Info label="Original fieldworker" value={b.originalWorker} /><Info label="Linked household follow-up record" value={b.linked} /><Info label="Validation status" value={b.status} /><Info label="Rows captured" value={b.rowsCaptured} /><Info label="Rows flagged" value={b.rowsFlagged} /><Info label="Rows accepted" value={b.rowsAccepted} /></div><button className="mt-4 rounded-2xl border border-water-200 px-4 py-3 text-sm font-black text-water-950">Capture / upload paper batch</button></Card>)}</section>
      <section><SectionTitle eyebrow="4" title="Supervisor QA Review">Supervisors review quality, exceptions, and escalations.</SectionTitle><div className="grid gap-4 sm:grid-cols-2"><Metric label="Surveys completed" value="146" /><Metric label="Missing required fields" value="9" /><Metric label="Non-response cases" value="18" /><Metric label="Replacement households used" value="7" /><Metric label="Issue escalations" value="11" /><Metric label="Supervisor review target" value="10–20%" /></div><Card className="mt-4 bg-amber-50"><p className="font-black text-amber-950">QA signal</p><p className="mt-2 text-sm text-amber-900">Review unreachable, refused, issue escalated, and paper-captured-later records before monthly reporting.</p></Card></section>
    </div>
  </>;
}

function Info({ label, value }: { label: string; value: string | number }) { return <div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs font-black uppercase text-slate-400">{label}</p><p className="mt-1 text-sm font-black text-water-950">{value}</p></div>; }
function Field({ label, placeholder }: { label: string; placeholder: string }) { return <label className="block"><span className="text-sm font-black text-slate-700">{label}</span><input className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder={placeholder} /></label>; }
function Select({ label, options }: { label: string; options: string[] }) { return <label className="block"><span className="text-sm font-black text-slate-700">{label}</span><select className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm">{options.map((o) => <option key={o}>{o}</option>)}</select></label>; }
function Question({ title, items }: { title: string; items: string[] }) { return <div className="rounded-3xl border border-slate-200 p-4"><h4 className="font-black text-water-950">{title}</h4><div className="mt-3 grid gap-3 sm:grid-cols-2">{items.map((item) => <Select key={item} label={item} options={yesNo} />)}</div></div>; }
function Placeholder({ title }: { title: string }) { return <div className="rounded-3xl border border-dashed border-teal-200 bg-sky-50 p-5 text-center text-sm font-black text-teal-800">{title}</div>; }
