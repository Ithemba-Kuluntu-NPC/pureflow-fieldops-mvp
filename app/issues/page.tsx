import { Badge, Card, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, issues, metrics } from "@/lib/mock-data";

export default function IssuesPage() {
  return <>
    <PageHeader eyebrow="Service queue" title="Issues and Replacements">Track replacement needs, severity, ownership, and resolution dates for households and institutional sites. Active Project: {activeProject.name}.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Open issues" value={metrics.openIssues} /><Metric label="Issue resolution rate" value={`${metrics.issueResolutionRate}%`} progress={metrics.issueResolutionRate}/><Metric label="Replacements required" value={metrics.replacementsRequired} /></div>
    <Card className="mb-5 bg-amber-50"><p className="font-black text-amber-950">Unresolved exceptions</p><p className="mt-2 text-sm text-amber-900">High severity, replacement-required, and coaching-related issues remain visible until closed or validated.</p></Card>
    <DataTable headers={["Issue ID", "Project", "Linked household/site", "Issue type", "Severity", "Assigned person", "Replacement required", "Status", "Resolution date"]} rows={issues.map((i) => [i.id, i.projectId, i.linked, i.type, <Badge key="sev">{i.severity}</Badge>, i.assigned, i.replacement, <Badge key="st">{i.status}</Badge>, i.date])} />
  </>;
}
