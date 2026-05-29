import Link from "next/link";
import { monitoringMetrics } from "@/lib/domain";

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Reports</h1>
      <p className="mt-2 text-stone-600">Bookings, revenue, cancellations, no-shows, tips, payment performance, CSV exports, and observability metrics.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Exports</h2><div className="mt-4 flex gap-3"><Link className="rounded-xl bg-stone-950 px-4 py-3 font-bold text-white" href="/api/exports/appointments">Appointments CSV</Link><Link className="rounded-xl bg-stone-950 px-4 py-3 font-bold text-white" href="/api/exports/payments">Payments CSV</Link></div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Tracked metrics</h2><div className="mt-4 flex flex-wrap gap-2">{monitoringMetrics.map((metric) => <span key={metric} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">{metric}</span>)}</div></section>
      </div>
    </div>
  );
}
