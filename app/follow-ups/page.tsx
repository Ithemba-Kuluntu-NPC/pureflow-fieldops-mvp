import { Badge, DataTable, PageHeader } from "@/components/ui";
import { householdFollowups, siteFollowups } from "@/lib/mock-data";

export default function FollowUpsPage() {
  const headers = ["Follow-up ID", "Linked record", "Visit type", "Filter/system present", "Functional status", "WASH practice", "Issue flagged", "Refresher needed"];
  return <>
    <PageHeader eyebrow="Field verification" title="Follow-ups">Combined view for sampled household follow-ups and full school/ECD follow-up operations.</PageHeader>
    <h3 className="mb-3 text-xl font-black text-water-900">Sampled household follow-ups</h3>
    <DataTable headers={headers} rows={householdFollowups.map((f) => [f.id, f.linked, f.visit, f.present, <Badge key="b">{f.functional}</Badge>, f.wash, f.issue, f.refresher])} />
    <h3 className="mb-3 mt-8 text-xl font-black text-water-900">School/ECD follow-ups</h3>
    <DataTable headers={headers} rows={siteFollowups.map((f) => [f.id, f.linked, f.visit, f.present, <Badge key="b">{f.functional}</Badge>, f.wash, f.issue, f.refresher])} />
  </>;
}
