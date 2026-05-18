import { Badge, DataTable, PageHeader } from "@/components/ui";
import { households, targets } from "@/lib/mock-data";

export default function HouseholdsPage() {
  return <>
    <PageHeader eyebrow="Issuance register" title="Household Register">Mock records representing {targets.householdsRegistered.toLocaleString()} registered households across paper, direct digital, and future CSV/XLSX upload workflows.</PageHeader>
    <DataTable headers={["Household ID", "Event", "Municipality", "Ward/village", "Household size", "Filter/batch ID", "Data source", "Record status"]} rows={households.map((h) => [h.id, h.event, h.municipality, h.village, h.size, h.batch, h.source, <Badge key="b">{h.status}</Badge>])} />
  </>;
}
