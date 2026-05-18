import { Badge, Card, Metric, PageHeader, Progress, SectionTitle } from "@/components/ui";
import { activeProject, uploadCards } from "@/lib/mock-data";

export default function UploadsPage() {
  return <>
    <PageHeader eyebrow="Central validation workflow" title="Bulk Upload Hub">
      Mock-only CSV/XLSX workflow for validating high-volume records before future commit into Google Sheets tabs. Active Project: {activeProject.name}. No real file processing is connected.
    </PageHeader>
    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Metric label="Rows uploaded" value="3,300" /><Metric label="Rows accepted" value="3,121" /><Metric label="Duplicate warnings" value="48" /><Metric label="Missing field warnings" value="93" /></div>
    <Card className="mb-6 border-teal-100 bg-gradient-to-br from-mint-50 to-white"><SectionTitle eyebrow="Mock workflow" title="Validate before commit" /><div className="grid gap-3 text-sm font-bold text-slate-700 md:grid-cols-4"><span className="rounded-2xl bg-white p-3">1. Choose upload type</span><span className="rounded-2xl bg-white p-3">2. Validate required fields</span><span className="rounded-2xl bg-white p-3">3. Review exceptions</span><span className="rounded-2xl bg-white p-3">4. Future commit to Sheets</span></div></Card>
    <div className="grid gap-4 lg:grid-cols-2">
      {uploadCards.map(([name, uploaded, accepted, flagged, rejected, duplicates, missing, tab]) => <Card key={name as string}>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div><h3 className="text-xl font-black text-water-950">{name}</h3><p className="mt-1 text-sm text-slate-500">Future target tab: <span className="font-black text-teal-700">{String(tab)}</span></p></div>
          <div className="flex gap-2"><button className="rounded-full border border-water-200 px-3 py-2 text-xs font-black text-water-700">Template</button><button className="rounded-full bg-water-950 px-3 py-2 text-xs font-black text-white">Mock upload</button></div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm sm:grid-cols-6">
          <Stat label="Uploaded" value={uploaded} /><Stat label="Accepted" value={accepted} /><Stat label="Flagged" value={flagged} /><Stat label="Rejected" value={rejected} /><Stat label="Duplicates" value={duplicates} /><Stat label="Missing" value={missing} />
        </div>
        <Progress value={Math.round(Number(accepted) / Number(uploaded) * 100)} />
        <div className="mt-4 flex flex-wrap gap-2"><Badge>Duplicate warning</Badge><Badge>Missing info</Badge><Badge>Review</Badge></div>
        <p className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-600">Validation checks household IDs, programme_id, project_id, geography_id, required fields, dates, municipality/ward consistency, and Drive-ready evidence references before commit.</p>
      </Card>)}
    </div>
    <Card className="mt-6"><SectionTitle title="Upload history snapshot" /><div className="grid gap-3 md:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-4"><p className="font-black text-water-950">Last accepted batch</p><p className="text-sm text-slate-600">Household roster · EVT-010 · 454 rows</p></div><div className="rounded-2xl bg-amber-50 p-4"><p className="font-black text-amber-900">Exceptions queue</p><p className="text-sm text-amber-900">36 rows need review before commit</p></div><div className="rounded-2xl bg-sky-50 p-4"><p className="font-black text-water-950">Paper capture</p><p className="text-sm text-slate-600">Paper forms captured intentionally where field conditions require fallback.</p></div></div></Card>
  </>;
}
function Stat({ label, value }: { label: string; value: unknown }) { return <div><p className="text-xs font-black uppercase text-slate-400">{label}</p><p className="text-lg font-black text-water-950">{String(value)}</p></div>; }
