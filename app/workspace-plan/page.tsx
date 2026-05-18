import { Card, PageHeader } from "@/components/ui";
import { driveFolders, workspaceTabs } from "@/lib/mock-data";

export default function WorkspacePlanPage() {
  return <>
    <PageHeader eyebrow="Future backend" title="Google Workspace Plan">The MVP is intentionally mock-data only, but its records are shaped for a lightweight Google Workspace backend.</PageHeader>
    <div className="grid gap-4 lg:grid-cols-2">
      <Card><h3 className="text-xl font-black text-water-900">Google Sheets workbook tabs</h3><div className="mt-4 grid gap-2 sm:grid-cols-2">{workspaceTabs.map((tab) => <span key={tab} className="rounded-2xl bg-water-50 px-3 py-2 text-sm font-bold text-water-900">{tab}</span>)}</div></Card>
      <Card><h3 className="text-xl font-black text-water-900">Google Drive folder structure</h3><p className="mt-3 font-bold text-slate-700">PureFlow Verified Impact System</p><div className="mt-3 space-y-2">{driveFolders.map((folder) => <div key={folder} className="rounded-2xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">↳ {folder}</div>)}</div></Card>
      <Card><h3 className="text-xl font-black text-water-900">Google Apps Script API layer</h3><p className="mt-3 text-slate-600">Future Apps Script endpoints can validate uploads, append rows to Sheets tabs, create Drive folders, write audit events, and return dashboard aggregates to the Next.js app.</p></Card>
      <Card><h3 className="text-xl font-black text-water-900">Future Workspace authentication</h3><p className="mt-3 text-slate-600">Later phases can restrict staff, field worker, admin, and funder views using Google Workspace accounts. No authentication library is included in this v1 prototype.</p></Card>
    </div>
  </>;
}
