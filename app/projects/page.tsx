import { Badge, Card, Metric, PageHeader, Progress, SectionTitle } from "@/components/ui";
import { activeProject, programme, projects } from "@/lib/mock-data";

export default function ProjectsPage() {
  return <>
    <PageHeader eyebrow="Projects & phases" title="Programme portfolio and rollout phases">
      Programme: {programme.name}. Active Project: {activeProject.name}. Planned phases are shown as mock pipeline records to make the system programme-wide from day one.
    </PageHeader>
    <div className="grid gap-5 lg:grid-cols-3">
      {projects.map((project, index) => <Card key={project.id} className={index === 0 ? "border-teal-200 bg-gradient-to-br from-white to-mint-50" : ""}>
        <div className="flex items-start justify-between gap-4"><div><Badge>{project.status}</Badge><h3 className="mt-4 text-2xl font-black text-water-950">{project.name}</h3></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{project.id}</span></div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-5 space-y-3 text-sm"><Row label="Geography" value={project.geography} /><Row label="Household target" value={project.householdTarget} /><Row label="People target" value={project.peopleTarget} /><Row label="Schools/ECDs target" value={project.schoolEcdTarget} /><Row label="Evidence status" value={project.evidenceStatus} /><Row label="Reporting status" value={project.reportingStatus} /></div>
        {index === 0 && <><Progress value={24} /><p className="mt-2 text-xs font-bold text-slate-500">Selected Phase Target: 36,000 households · 8,740 reached in mock data.</p></>}
        <button className="mt-5 w-full rounded-2xl bg-water-950 px-4 py-3 text-sm font-black text-white hover:bg-teal-700">View phase dashboard</button>
      </Card>)}
    </div>
    <div className="mt-6"><Card><SectionTitle eyebrow="Portfolio principle" title="Programme first, phase-specific delivery second" /><p className="text-slate-600">The operating system is shaped to add future projects, municipalities, community clusters, rollout events, households, schools/ECDs, follow-ups, evidence, issues, and reports without changing the core product concept.</p></Card></div>
  </>;
}

function Row({ label, value }: { label: string; value: string | number }) {
  return <div className="flex justify-between gap-4 border-b border-slate-100 pb-2"><span className="font-bold text-slate-500">{label}</span><span className="max-w-[60%] text-right font-black text-water-950">{value}</span></div>;
}
