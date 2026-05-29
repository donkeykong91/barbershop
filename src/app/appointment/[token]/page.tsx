import Link from "next/link";
import { business, money, services } from "@/lib/business-data";

export default async function AppointmentPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const service = services[0];
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-8">
      <Link href="/" className="text-sm font-bold text-amber-300">← {business.name}</Link>
      <section className="mt-8 rounded-[2rem] border border-stone-800 bg-stone-900 p-6">
        <p className="text-sm text-stone-400">Secure appointment link</p>
        <h1 className="mt-2 text-3xl font-black">Your appointment</h1>
        <div className="mt-6 grid gap-3 rounded-2xl bg-stone-950 p-5 text-stone-300">
          <p><strong className="text-white">Service:</strong> {service.name}</p>
          <p><strong className="text-white">When:</strong> Tomorrow · 9:30 AM</p>
          <p><strong className="text-white">Duration:</strong> {service.durationMinutes} minutes</p>
          <p><strong className="text-white">Deposit:</strong> {money(service.deposit)} paid</p>
          <p><strong className="text-white">Location:</strong> {business.location}</p>
          <p className="text-xs text-stone-500">Token preview: {token}</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <button className="rounded-2xl bg-amber-400 px-4 py-3 font-black text-stone-950">Reschedule once</button>
          <button className="rounded-2xl border border-stone-700 px-4 py-3 font-bold">Cancel</button>
          <button className="rounded-2xl border border-stone-700 px-4 py-3 font-bold">Message barber</button>
        </div>
      </section>
    </main>
  );
}
