import { Badge, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, metrics, rolloutEvents, targets } from "@/lib/mock-data";

export default function EventsPage() {
  return <>
    <PageHeader eyebrow="Distribution operations" title="Rollout Events">Event-based distribution records for high-volume WASH training and filter issuance days. Active Project: {activeProject.name}.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Events completed" value={metrics.eventsCompleted} /><Metric label="Selected phase households" value={targets.householdsRegistered.toLocaleString()} /><Metric label="WASH sessions target" value={targets.washSessions} /></div>
    <DataTable headers={["Event ID", "Project/phase", "Municipality", "Ward/village cluster", "Venue", "Date", "Households", "Units", "Training", "Stock", "Evidence"]} rows={rolloutEvents.map((e) => [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], <Badge key="t">{e[8]}</Badge>, <Badge key="s">{e[9]}</Badge>, <Badge key="e">{e[10]}</Badge>])} />
  </>;
}
