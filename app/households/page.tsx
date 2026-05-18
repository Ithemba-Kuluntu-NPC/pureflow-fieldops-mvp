import { Badge, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, households, targets } from "@/lib/mock-data";

export default function HouseholdsPage() {
  return <>
    <PageHeader eyebrow="Issuance register" title="Household Register">Mock household records across paper, direct digital, and future CSV/XLSX upload workflows. Active Project: {activeProject.name}.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Programme Scale Target" value="360,000" /><Metric label="Selected Phase Target" value="36,000" /><Metric label="Registered households" value={targets.householdsRegistered.toLocaleString()} progress={24} /></div>
    <DataTable headers={["Household ID", "Project", "Event", "Municipality", "Ward/village", "Representative", "Household size", "Filter/batch ID", "Data source", "Record status"]} rows={households.map((h) => [h.id, h.projectId, h.event, h.municipality, h.village, h.representative, h.size, h.batch, h.source, <Badge key="b">{h.status}</Badge>])} />
  </>;
}
