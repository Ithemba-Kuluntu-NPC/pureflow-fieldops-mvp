import { Badge, DataTable, PageHeader } from "@/components/ui";
import { rolloutEvents } from "@/lib/mock-data";

export default function EventsPage() {
  return <>
    <PageHeader eyebrow="Distribution operations" title="Rollout Events">Event-based distribution records for high-volume WASH training and filter issuance days.</PageHeader>
    <DataTable headers={["Event ID", "Municipality", "Ward/village cluster", "Venue", "Date", "Households", "Units", "Training", "Stock", "Evidence"]} rows={rolloutEvents.map((e) => [e[0], e[1], e[2], e[3], e[4], e[5], e[6], <Badge key="t">{e[7]}</Badge>, <Badge key="s">{e[8]}</Badge>, <Badge key="e">{e[9]}</Badge>])} />
  </>;
}
