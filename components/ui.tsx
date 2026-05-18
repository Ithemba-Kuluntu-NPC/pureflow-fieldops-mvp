"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const badgeTone: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  Planned: "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
  Complete: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  Completed: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  Activated: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  Verified: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  Clean: "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200",
  Pass: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  Open: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  Review: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  "Awaiting review": "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  "Validation review": "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  "In progress": "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200",
  "On track": "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200",
  Upcoming: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
  "Not started": "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
  "Needs attention": "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  "Needs revisit": "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  Unreachable: "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
  Refused: "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
  "Issue escalated": "bg-red-100 text-red-800 ring-1 ring-red-200",
  "Missing info": "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
  "Duplicate warning": "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  High: "bg-red-100 text-red-800 ring-1 ring-red-200",
  Medium: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  Low: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
  Fail: "bg-rose-100 text-rose-800 ring-1 ring-rose-200"
};

const nav = [
  ["/", "Overview"],
  ["/rollouts", "Rollouts"],
  ["/monitoring", "Monitoring"],
  ["/evidence", "Evidence"],
  ["/reports", "Reports"]
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div className="min-h-screen bg-[#F5F7F8] text-[#163040]">
    <aside className="fixed hidden h-screen w-72 overflow-y-auto border-r border-white/10 bg-[#0A3550] p-5 text-white shadow-2xl lg:block">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 shadow-soft backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-mint-100">PureFlow Amanzi</p>
        <h1 className="mt-3 text-2xl font-black leading-tight">Verified Impact System</h1>
        <p className="mt-3 text-sm leading-6 text-sky-100">A calm programme-wide operating system for rollout, monitoring, evidence, and funder reporting.</p>
      </div>
      <nav className="mt-6 space-y-2 pb-8" aria-label="Primary navigation">
        {nav.map(([href, label]) => {
          const active = href === "/" ? pathname === href : pathname.startsWith(href);
          return <Link key={href} href={href} className={`block rounded-2xl px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-mint-200 ${active ? "bg-white text-water-950 shadow-soft" : "text-sky-50/85 hover:bg-white/10 hover:text-white"}`}>{label}</Link>;
        })}
      </nav>
      <div className="rounded-3xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-sky-100">
        Built for future multi-phase expansion. Current active phase is context, not the whole programme.
      </div>
    </aside>
    <main className="lg:pl-72">
      <div className="mx-auto max-w-[1380px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-soft lg:hidden">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-water-700">PureFlow Amanzi</p>
          <h1 className="text-xl font-black text-water-950">Verified Impact System</h1>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">{nav.map(([href, label]) => <Link key={href} href={href} className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-water-500 ${pathname === href || (href !== "/" && pathname.startsWith(href)) ? "bg-water-950 text-white" : "bg-slate-100 text-slate-700"}`}>{label}</Link>)}</div>
        </div>
        {children}
      </div>
    </main>
  </div>;
}

export function PageHeader({ eyebrow, title, children, actions }: { eyebrow: string; title: string; children?: ReactNode; actions?: ReactNode }) {
  return <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-water-950 via-[#0A4B63] to-teal-700 p-7 text-white shadow-soft">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-mint-100">{eyebrow}</p>
        <h2 className="mt-3 max-w-5xl text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
        {children && <div className="mt-4 max-w-4xl text-base leading-7 text-sky-50">{children}</div>}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  </div>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-soft ${className}`}>{children}</section>;
}

export function Metric({ label, value, detail, progress }: { label: string; value: string | number; detail?: string; progress?: number }) {
  return <Card>
    <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
    <p className="mt-2 text-3xl font-black tracking-tight text-water-950 sm:text-4xl">{value}</p>
    {detail && <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>}
    {typeof progress === "number" && <Progress value={progress} />}
  </Card>;
}

export function Progress({ value }: { value: number }) {
  return <div className="mt-4 h-2.5 rounded-full bg-slate-100"><div className="h-2.5 rounded-full bg-gradient-to-r from-teal-700 via-cyan-500 to-mint-500" style={{ width: `${Math.max(0, Math.min(value, 100))}%` }} /></div>;
}

export function Badge({ children }: { children: ReactNode }) {
  const key = String(children);
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${badgeTone[key] ?? "bg-slate-100 text-slate-700 ring-1 ring-slate-200"}`}>{children}</span>;
}

export function DataTable({ headers, rows }: { headers: string[]; rows: (ReactNode[])[] }) {
  return <div className="table-wrap rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
    <table className="min-w-full divide-y divide-slate-200 text-sm">
      <thead className="bg-slate-50/80"><tr>{headers.map((h) => <th key={h} className="px-4 py-3.5 text-left text-xs font-black uppercase tracking-wide text-slate-500">{h}</th>)}</tr></thead>
      <tbody className="divide-y divide-slate-100">{rows.map((row, i) => <tr key={i} className="hover:bg-sky-50/50">{row.map((cell, j) => <td key={j} className="whitespace-nowrap px-4 py-4 text-slate-700">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return <div className="mb-4">
    {eyebrow && <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">{eyebrow}</p>}
    <h3 className="mt-1 text-2xl font-black text-water-950">{title}</h3>
    {children && <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{children}</p>}
  </div>;
}

export function InsightPanel({ title, items }: { title: string; items: string[] }) {
  return <Card className="border-teal-100 bg-gradient-to-br from-mint-50 to-white">
    <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Current Signal</p>
    <h3 className="mt-2 text-2xl font-black text-water-950">{title}</h3>
    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />{item}</li>)}</ul>
  </Card>;
}

export function EvidenceCard({ title, source, status, folder }: { title: string; source: string; status: string; folder: string }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-wide text-slate-500">Linked source · {source}</p><h4 className="mt-1 font-black text-water-950">{title}</h4></div><Badge>{status}</Badge></div>
    <div className="mt-4 rounded-2xl border border-dashed border-teal-200 bg-sky-50 p-4 text-sm font-bold text-teal-800">Photo / scan placeholder</div>
    <p className="mt-3 text-xs font-semibold text-slate-500">{folder}</p>
  </div>;
}

export function BarList({ items }: { items: { label: string; value: number; detail?: string }[] }) {
  return <div className="space-y-4">{items.map((item) => <div key={item.label}>
    <div className="mb-1 flex items-center justify-between gap-4 text-sm"><span className="font-bold text-slate-700">{item.label}</span><span className="font-black text-water-950">{item.value}%</span></div>
    <div className="h-2.5 rounded-full bg-slate-100"><div className="h-2.5 rounded-full bg-teal-600" style={{ width: `${item.value}%` }} /></div>
    {item.detail && <p className="mt-1 text-xs text-slate-500">{item.detail}</p>}
  </div>)}</div>;
}
