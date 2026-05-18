import { Badge, Card, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, metrics, waterTests } from "@/lib/mock-data";

export default function WaterTestingPage() {
  return <>
    <PageHeader eyebrow="Water quality" title="Water Testing">Mock water testing log for household and institutional samples, with file-ready evidence status. Active Project: {activeProject.name}.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Household tests" value="30" progress={100}/><Metric label="Institutional tests" value="30" progress={100}/><Metric label="Tests completed" value={metrics.testsCompleted} detail="Demo total" progress={100}/></div>
    <Card className="mb-5 bg-sky-50"><p className="font-black text-water-950">Evidence-led testing</p><p className="mt-2 text-sm text-slate-600">Each test record is designed to link to future lab sheets, photos, review notes, and Drive-ready evidence folders.</p></Card>
    <DataTable headers={["Test ID", "Project", "Household/site ID", "Sample type", "Test date", "Pass/fail/review", "Evidence file status"]} rows={waterTests.map((t) => [t.id, t.projectId, t.linked, t.sample, t.date, <Badge key="r">{t.result}</Badge>, t.evidence])} />
  </>;
}
