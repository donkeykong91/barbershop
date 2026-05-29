import Link from "next/link";

const nav = [
  "calendar",
  "appointments",
  "clients",
  "messages",
  "payments",
  "services",
  "availability",
  "policies",
  "reports",
  "settings",
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <div className="mx-auto grid min-h-screen max-w-7xl md:grid-cols-[260px_1fr]">
        <aside className="border-r border-stone-200 bg-white p-5">
          <Link href="/" className="text-xl font-black">The Barber Shop</Link>
          <p className="mt-1 text-sm text-stone-500">Barber / owner dashboard</p>
          <nav className="mt-8 grid gap-1">
            <Link href="/dashboard" className="rounded-xl px-3 py-2 font-bold hover:bg-stone-100">Overview</Link>
            {nav.map((item) => (
              <Link key={item} href={`/dashboard/${item}`} className="rounded-xl px-3 py-2 capitalize text-stone-700 hover:bg-stone-100">{item}</Link>
            ))}
          </nav>
        </aside>
        <section className="p-5 md:p-8">
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Demo shell: dashboard routes are scaffolded; real authentication/RBAC is the next security story before production use.
          </div>
          {children}
        </section>
      </div>
    </main>
  );
}
