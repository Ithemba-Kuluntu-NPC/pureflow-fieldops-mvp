import { Badge, DataTable, Metric, PageHeader } from "@/components/ui";
import { activeProject, metrics, schoolSites, targets } from "@/lib/mock-data";

export default function SchoolsPage() {
  return <>
    <PageHeader eyebrow="Institutional rollout" title="Schools and ECDs">Fixed register for 114 school and ECD sites in the selected phase, including activation, training, learner reach, staff training, and evidence status.</PageHeader>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><Metric label="Fixed institutional sites" value={targets.schoolEcdSites}/><Metric label="Sites activated" value={metrics.schoolsActivated} progress={72}/><Metric label="Required follow-ups" value={targets.schoolEcdFollowupsTarget} detail="Two per site" progress={75}/></div>
    <DataTable headers={["Site ID", "Project", "Type", "Site name", "Ward/village", "Learners/children", "Staff trained", "Activation", "Evidence"]} rows={schoolSites.map((s) => [s.id, activeProject.id, s.type, s.name, s.village, s.learners, s.staff, <Badge key="a">{s.activation}</Badge>, <Badge key="e">{s.evidence}</Badge>])} />
  </>;
}
