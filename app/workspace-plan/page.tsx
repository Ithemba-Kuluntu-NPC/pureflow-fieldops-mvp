import { Card, PageHeader, SectionTitle } from "@/components/ui";
import { driveFolders, workspaceTabs } from "@/lib/mock-data";

export default function WorkspacePlanPage() {
  return <>
    <PageHeader eyebrow="Future backend" title="Google Workspace Plan">The MVP is intentionally mock-data only, but its records are shaped for a lightweight Google Workspace backend using Sheets, Drive, and Apps Script later.</PageHeader>
    <div className="grid gap-4 lg:grid-cols-2">
      <Card><SectionTitle title="Google Sheets workbook tabs" /> <div className="mt-4 grid gap-2 sm:grid-cols-2">{workspaceTabs.map((tab) => <span key={tab} className="rounded-2xl bg-water-50 px-3 py-2 text-sm font-black text-water-950">{tab}</span>)}</div></Card>
      <Card><SectionTitle title="Google Drive folder structure" /><p className="mt-3 font-black text-slate-700">PureFlow Verified Impact System</p><div className="mt-3 space-y-2">{driveFolders.map((folder) => <div key={folder} className="rounded-2xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">↳ {folder}</div>)}</div></Card>
      <Card><SectionTitle title="Future linking fields" /><p className="text-slate-600">Operational records are shaped to include programme_id, project_id, and geography_id so events, households, schools/ECDs, follow-ups, issues, water tests, uploads, evidence, users, and reports can roll up by programme, phase, and geography.</p></Card>
      <Card><SectionTitle title="Google Apps Script API layer" /><p className="text-slate-600">Future Apps Script endpoints can validate uploads, append rows to Sheets tabs, create Drive folders, write audit events, and return dashboard aggregates to the Next.js app. No connection is included yet.</p></Card>
    </div>
  </>;
}
