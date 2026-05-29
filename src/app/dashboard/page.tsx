import { demoAppointments } from "@/lib/appointments";
import { demoPayments } from "@/lib/payments";
import { demoAuditLog } from "@/lib/domain";
import { money } from "@/lib/business-data";

const revenue = demoPayments.filter((payment) => payment.status === "succeeded").reduce((sum, payment) => sum + payment.amount, 0);

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Dashboard overview</h1>
      <p className="mt-2 text-stone-600">Manage calendar, appointments, clients, messages, payments, services, availability, policies, reports, and settings.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card label="Today" value={`${demoAppointments.length} appointments`} />
        <Card label="Revenue" value={money(revenue)} />
        <Card label="Messages" value="1 unread" />
        <Card label="Audit events" value={String(demoAuditLog.length)} />
      </div>
      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
        <h2 className="font-black">Latest audit activity</h2>
        {demoAuditLog.map((entry) => <div key={entry.id} className="mt-3 rounded-xl bg-stone-50 p-3 text-sm"><strong>{entry.action}</strong><p className="text-stone-600">{entry.actor} changed {entry.target}: {entry.oldValue} → {entry.newValue}</p></div>)}
      </section>
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm text-stone-500">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>;
}
