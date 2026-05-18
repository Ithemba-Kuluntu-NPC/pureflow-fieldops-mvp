import Link from "next/link";
import { ReactNode } from "react";

const badgeTone: Record<string, string> = {
  Complete: "bg-mint-100 text-mint-700",
  Activated: "bg-mint-100 text-mint-700",
  Verified: "bg-mint-100 text-mint-700",
  Clean: "bg-water-100 text-water-700",
  Pass: "bg-mint-100 text-mint-700",
  Open: "bg-amber-100 text-amber-800",
  Review: "bg-amber-100 text-amber-800",
  "In progress": "bg-water-100 text-water-700",
  "Missing info": "bg-rose-100 text-rose-700",
  "Duplicate warning": "bg-amber-100 text-amber-800",
  Fail: "bg-rose-100 text-rose-700"
};

export function Shell({ children }: { children: ReactNode }) {
  const nav = [
    ["/", "Dashboard"], ["/events", "Rollout Events"], ["/households", "Households"], ["/uploads", "Bulk Upload Hub"],
    ["/sampling", "Household Sampling"], ["/schools", "Schools & ECDs"], ["/follow-ups", "Follow-ups"], ["/issues", "Issues"],
    ["/water-testing", "Water Testing"], ["/funder", "Funder Portal"], ["/workspace-plan", "Workspace Plan"]
  ];
  return <div className="min-h-screen">
    <aside className="fixed hidden h-screen w-72 border-r border-slate-200 bg-white/90 p-6 backdrop-blur lg:block">
      <div className="rounded-3xl card-gradient p-5 text-white shadow-soft">
        <p className="text-xs uppercase tracking-[0.28em] text-water-100">PureFlow Amanzi</p>
        <h1 className="mt-3 text-2xl font-bold leading-tight">Verified Impact System</h1>
        <p className="mt-3 text-sm text-water-100">Rural safe-water operations command centre.</p>
      </div>
      <nav className="mt-6 space-y-1">
        {nav.map(([href, label]) => <Link key={href} href={href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-water-50 hover:text-water-900">{label}</Link>)}
      </nav>
    </aside>
    <main className="lg:pl-72">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 rounded-3xl bg-white p-4 shadow-soft lg:hidden">
          <p className="text-xs uppercase tracking-[0.22em] text-water-700">PureFlow Amanzi</p>
          <h1 className="text-xl font-bold text-water-900">Verified Impact System</h1>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">{nav.map(([href, label]) => <Link key={href} href={href} className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">{label}</Link>)}</div>
        </div>
        {children}
      </div>
    </main>
  </div>;
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="mb-6 rounded-[2rem] card-gradient p-7 text-white shadow-soft">
    <p className="text-xs font-bold uppercase tracking-[0.28em] text-water-100">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
    {children && <div className="mt-4 max-w-3xl text-water-50">{children}</div>}
  </div>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-soft ${className}`}>{children}</section>;
}

export function Metric({ label, value, detail, progress }: { label: string; value: string | number; detail?: string; progress?: number }) {
  return <Card>
    <p className="text-sm font-semibold text-slate-500">{label}</p>
    <p className="mt-2 text-3xl font-black text-water-900">{value}</p>
    {detail && <p className="mt-1 text-sm text-slate-500">{detail}</p>}
    {typeof progress === "number" && <Progress value={progress} />}
  </Card>;
}

export function Progress({ value }: { value: number }) {
  return <div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-gradient-to-r from-water-700 to-mint-500" style={{ width: `${Math.max(0, Math.min(value, 100))}%` }} /></div>;
}

export function Badge({ children }: { children: ReactNode }) {
  const key = String(children);
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${badgeTone[key] ?? "bg-slate-100 text-slate-700"}`}>{children}</span>;
}

export function DataTable({ headers, rows }: { headers: string[]; rows: (ReactNode[])[] }) {
  return <div className="table-wrap rounded-3xl border border-slate-200 bg-white shadow-soft">
    <table className="min-w-full divide-y divide-slate-200 text-sm">
      <thead className="bg-slate-50"><tr>{headers.map((h) => <th key={h} className="px-4 py-3 text-left font-bold text-slate-600">{h}</th>)}</tr></thead>
      <tbody className="divide-y divide-slate-100">{rows.map((row, i) => <tr key={i} className="hover:bg-water-50/40">{row.map((cell, j) => <td key={j} className="whitespace-nowrap px-4 py-3 text-slate-700">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}
