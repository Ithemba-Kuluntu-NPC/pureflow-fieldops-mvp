import { Badge, Card, EvidenceCard, PageHeader, Progress, SectionTitle } from "@/components/ui";
import { driveFolders, evidenceRecords, targets, uploadCards } from "@/lib/mock-data";

const pipeline = ["Captured", "Reviewed", "Verified", "Report-ready"];
const streams = ["Household rosters", "Field surveys", "School/ECD follow-ups", "Water tests", "Issue evidence"];
const checklist = ["Event rosters uploaded", "Stock reconciliation logged", "Sample list generated", "Fieldworker surveys underway", "Evidence folders linked", "Monthly report draft ready"];

export default function EvidencePage() {
  return <>
    <PageHeader eyebrow="Evidence Command Centre" title="Evidence">Confidence, verification pipeline, audit readiness, recent evidence and Drive-ready structure preview.</PageHeader>
    <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
      <Card className="bg-gradient-to-br from-water-950 to-teal-700 text-white">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-mint-100">Evidence Confidence</p>
        <p className="mt-3 text-6xl font-black">78%</p>
        <div className="mt-4 rounded-full bg-white/15"><div className="h-3 rounded-full bg-mint-100" style={{ width: "78%" }} /></div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm"><Info label="Records logged" value={targets.evidenceFilesStored} /><Info label="Verified records" value={targets.verifiedEvidence} /><Info label="Awaiting review" value={targets.evidenceAwaitingReview} /><Info label="Upload exceptions" value={targets.uploadExceptions} /></div>
      </Card>
      <Card>
        <SectionTitle eyebrow="Verification pipeline" title="Captured → Reviewed → Verified → Report-ready">Each evidence stream can move through the same simple readiness path.</SectionTitle>
        <div className="space-y-4">{streams.map((stream, index) => <div key={stream} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-3 flex items-center justify-between"><h3 className="font-black text-water-950">{stream}</h3><Badge>{index === 2 ? "Review" : index === 4 ? "Needs attention" : "Verified"}</Badge></div>
          <div className="grid grid-cols-4 gap-2">{pipeline.map((step, i) => <div key={step} className={`rounded-2xl px-3 py-3 text-center text-xs font-black ${i <= 2 || index < 2 ? "bg-teal-700 text-white" : "bg-white text-slate-500 ring-1 ring-slate-200"}`}>{step}</div>)}</div>
        </div>)}</div>
      </Card>
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      <Card><SectionTitle eyebrow="Audit Pack Readiness" title="Checklist" /> <div className="space-y-3">{checklist.map((item, i) => <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-sm font-bold text-slate-700">{item}</span><Badge>{i < 4 ? "Complete" : "In progress"}</Badge></div>)}</div></Card>
      <Card><SectionTitle eyebrow="Upload/data quality" title="Records awaiting review" /> <div className="space-y-3">{uploadCards.slice(0, 4).map(([name, uploaded, accepted, flagged]) => <div key={String(name)}><div className="flex justify-between text-sm font-bold"><span>{String(name)}</span><span>{String(flagged)} flagged</span></div><Progress value={Math.round(Number(accepted) / Number(uploaded) * 100)} /></div>)}</div></Card>
      <Card><SectionTitle eyebrow="Google Drive preview" title="Evidence folder structure" /> <div className="space-y-2">{driveFolders.slice(0, 8).map((folder) => <div key={folder} className="rounded-2xl bg-sky-50 px-3 py-2 text-sm font-bold text-water-950">↳ {folder}</div>)}</div></Card>
    </div>

    <Card className="mt-6"><SectionTitle eyebrow="Recent evidence" title="Latest records" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{evidenceRecords.map((record) => <EvidenceCard key={record.id} title={record.title} source={`${record.id} · ${record.source}`} status={record.status} folder={record.folder} />)}</div></Card>
  </>;
}

function Info({ label, value }: { label: string; value: string | number }) { return <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15"><p className="text-xs font-black uppercase tracking-wide text-mint-100">{label}</p><p className="mt-1 font-bold text-white">{value}</p></div>; }
