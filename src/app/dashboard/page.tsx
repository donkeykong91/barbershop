const stats = [
  ["Today", "6 appointments"],
  ["Deposits", "$85 collected"],
  ["Messages", "3 unread"],
  ["No-shows", "0 this week"],
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Dashboard overview</h1>
      <p className="mt-2 text-stone-600">Manage calendar, appointments, clients, messages, payments, services, availability, policies, reports, and settings.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => <div key={label} className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm text-stone-500">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>)}
      </div>
    </div>
  );
}
