import { Card, PageHeader, Progress } from "@/components/ui";
import { uploadCards } from "@/lib/mock-data";

export default function UploadsPage() {
  return <>
    <PageHeader eyebrow="Central workflow" title="Bulk Upload Hub">Mock-only upload validation centre for event rosters, captured paper forms, sites, issues, and water testing logs. Buttons are visual placeholders; no real file processing is connected.</PageHeader>
    <div className="grid gap-4 lg:grid-cols-2">
      {uploadCards.map(([name, uploaded, accepted, flagged, rejected, duplicates, missing]) => <Card key={name as string}>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div><h3 className="text-xl font-black text-water-900">{name}</h3><p className="mt-1 text-sm text-slate-500">Validation before commit · Google Sheets-ready import path</p></div>
          <div className="flex gap-2"><button className="rounded-full border border-water-200 px-3 py-2 text-xs font-bold text-water-700">Template</button><button className="rounded-full bg-water-900 px-3 py-2 text-xs font-bold text-white">Upload file</button></div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm sm:grid-cols-6">
          <Stat label="Uploaded" value={uploaded} /><Stat label="Accepted" value={accepted} /><Stat label="Flagged" value={flagged} /><Stat label="Rejected" value={rejected} /><Stat label="Duplicates" value={duplicates} /><Stat label="Missing" value={missing} />
        </div>
        <Progress value={Math.round(Number(accepted) / Number(uploaded) * 100)} />
        <p className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-600">Demo validation: check duplicate household IDs, required fields, municipality/ward consistency, date format, and evidence folder reference before commit.</p>
      </Card>)}
    </div>
  </>;
}
function Stat({ label, value }: { label: string; value: unknown }) { return <div><p className="text-xs font-bold uppercase text-slate-400">{label}</p><p className="text-lg font-black text-water-900">{String(value)}</p></div>; }
