import { Badge, Card, InsightPanel, Metric, PageHeader, Progress, SectionTitle } from "@/components/ui";
import { activeProject, metrics, programme, targets } from "@/lib/mock-data";

const milestones = [
  ["Mobilisation", "Complete", "Community partners, venues, stock flow and field teams prepared."],
  ["Community rollout events", "Active", "Large event days continue through halls, schools, churches and community centres."],
  ["Household registration", "On track", "Rosters are captured through direct entry, paper forms and CSV-ready batches."],
  ["School/ECD activation", "On track", "Institutional sites remain a fuller follow-up stream."],
  ["Household sample follow-up", "Needs attention", "Supervisor support needed for paper batches and unreachable cases."],
  ["Evidence review", "Active", "Recent rosters, scans and photo sets are moving through review."],
  ["Funder reporting", "Upcoming", "Monthly narrative pack prepared after evidence QA."],
];

const urgentActions = [
  "Verify latest event roster before it moves to report-ready status.",
  "Review duplicate household records from CSV and paper capture batches.",
  "Schedule school/ECD follow-up for sites with photos pending.",
  "Resolve high-priority issue evidence for replacement cases.",
  "Process paper survey batch PAPER-HF-022 this week."
];

export default function Overview() {
  return <>
    <PageHeader eyebrow="Programme-wide operating system" title="PureFlow Verified Impact System" actions={<div className="rounded-3xl bg-white/95 p-4 text-water-950 shadow-soft lg:w-80">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700">Active phase status</p>
      <p className="mt-2 text-lg font-black">Foundational Rollout</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">Port St Johns + Ngquza Hill · evidence-led rollout in progress.</p>
    </div>}>
      <p>Safe Water. Stronger Communities. Verified impact for programme-wide rollout.</p>
      <div className="mt-4 grid gap-2 text-sm font-bold sm:grid-cols-2">
        <span className="rounded-2xl bg-white/10 px-4 py-3">Programme: {programme.name}</span>
        <span className="rounded-2xl bg-white/10 px-4 py-3">Active Phase: {activeProject.name}</span>
      </div>
    </PageHeader>

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
      <Metric label="Households Registered" value={targets.householdsRegistered.toLocaleString()} detail="Current registrations from events and uploads" />
      <Metric label="Rollout Events Completed" value={metrics.eventsCompleted} detail="Community event records closed" />
      <Metric label="Schools/ECDs Activated" value={metrics.schoolsActivated} detail="Fixed sites activated or trained" />
      <Metric label="Monitoring Visits Completed" value={metrics.monitoringVisitsCompleted} detail="Sample and site follow-ups" />
      <Metric label="Evidence Records Logged" value={targets.evidenceFilesStored} detail={`${targets.verifiedEvidence} verified · ${targets.evidenceAwaitingReview} awaiting review`} />
      <Metric label="Open Issues" value={metrics.openIssues} detail="Needs review or field resolution" />
    </div>

    <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_1.4fr]">
      <Card className="bg-gradient-to-br from-white to-sky-50">
        <SectionTitle eyebrow="Context, not target framing" title="Active Phase Status">The first active phase proves the operating model while the system remains ready for future multi-phase expansion.</SectionTitle>
        <div className="space-y-4 text-sm leading-6 text-slate-700">
          <Info label="Current rollout focus" value="Community events, household registration, school/ECD activation, sampled follow-up and evidence capture." />
          <Info label="Phase health" value="Operationally active, with paper-form validation and issue closure requiring supervisor attention." />
          <Info label="Next reporting milestone" value="Monthly funder update after evidence QA and issue-resolution review." />
          <Info label="Operating status" value="Built for future regional rollout readiness without presenting future ambition as a live delivery target." />
        </div>
      </Card>

      <Card>
        <SectionTitle eyebrow="Rollout Timeline style" title="Milestone Tracker">Status-led tracking replaces large target progress bars.</SectionTitle>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {milestones.map(([name, status, detail]) => <div key={name} className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-start justify-between gap-3"><h4 className="font-black text-water-950">{name}</h4><Badge>{status}</Badge></div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
          </div>)}
        </div>
      </Card>
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      <InsightPanel title="Operational momentum is visible, with a few clear constraints." items={[
        "Rollout activity is active across the current phase, supported by large community event records and household rosters.",
        "Evidence capture is progressing, while paper-form validation and issue resolution need supervisor attention this week.",
        "For funders, the current view shows credible operating control without comparing early progress against large future targets."
      ]} />
      <Card>
        <SectionTitle eyebrow="Only the next actions" title="Urgent Actions" />
        <div className="space-y-3">{urgentActions.map((action) => <div key={action} className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-semibold leading-6 text-amber-950">{action}</div>)}</div>
      </Card>
      <Card>
        <SectionTitle eyebrow="Evidence Confidence" title="Audit pack readiness" />
        <p className="text-5xl font-black text-water-950">78%</p>
        <Progress value={78} />
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <Info label="Records logged" value={targets.evidenceFilesStored} />
          <Info label="Verified" value={targets.verifiedEvidence} />
          <Info label="Awaiting review" value={targets.evidenceAwaitingReview} />
          <Info label="Upload exceptions" value={targets.uploadExceptions} />
        </div>
      </Card>
    </div>
  </>;
}

function Info({ label, value }: { label: string; value: string | number }) {
  return <div className="rounded-2xl bg-white/80 p-3 ring-1 ring-slate-200"><p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p><p className="mt-1 font-bold text-water-950">{value}</p></div>;
}
