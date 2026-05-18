import { Badge, DataTable, Metric, PageHeader } from "@/components/ui";
import { metrics, waterTests } from "@/lib/mock-data";

export default function WaterTestingPage() {
  return <>
    <PageHeader eyebrow="Water quality" title="Water Testing">Mock water testing log for household and institutional samples, with file-ready evidence status.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Household tests" value="30" progress={100}/><Metric label="Institutional tests" value="30" progress={100}/><Metric label="Tests completed" value={metrics.testsCompleted} detail="Demo total" progress={100}/></div>
    <DataTable headers={["Test ID", "Household/site ID", "Sample type", "Test date", "Pass/fail/review", "Evidence file status"]} rows={waterTests.map((t) => [t.id, t.linked, t.sample, t.date, <Badge key="r">{t.result}</Badge>, t.evidence])} />
  </>;
}
