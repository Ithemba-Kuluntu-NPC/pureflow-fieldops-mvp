import { Badge, DataTable, PageHeader } from "@/components/ui";
import { issues } from "@/lib/mock-data";

export default function IssuesPage() {
  return <>
    <PageHeader eyebrow="Service queue" title="Issues and Replacements">Track replacement needs, severity, ownership, and resolution dates for households and institutional sites.</PageHeader>
    <DataTable headers={["Issue ID", "Linked household/site", "Issue type", "Severity", "Assigned person", "Replacement required", "Status", "Resolution date"]} rows={issues.map((i) => [i.id, i.linked, i.type, <Badge key="sev">{i.severity}</Badge>, i.assigned, i.replacement, <Badge key="st">{i.status}</Badge>, i.date])} />
  </>;
}
