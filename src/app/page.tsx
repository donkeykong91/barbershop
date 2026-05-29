import Link from "next/link";
import { Header } from "@/components/Header";
import { business, money, services } from "@/lib/business-data";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="mx-auto grid min-h-[78vh] w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-sm font-semibold text-amber-200">Hosted direct booking page</p>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl">{business.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">Book a cut from your phone, review deposits and policies up front, and get a secure appointment link after confirmation.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="rounded-2xl bg-amber-400 px-6 py-4 text-center font-black text-stone-950 shadow-lg shadow-amber-500/20">Start booking</Link>
            <Link href="/appointment/demo-token" className="rounded-2xl border border-stone-700 px-6 py-4 text-center font-bold text-stone-100">View appointment link</Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-stone-800 bg-stone-900/80 p-5 shadow-2xl">
          <div className="rounded-[1.5rem] bg-stone-950 p-5">
            <p className="text-sm text-stone-400">Services from</p>
            <div className="mt-4 space-y-3">
              {services.map((service) => (
                <div key={service.id} className="rounded-2xl border border-stone-800 bg-stone-900 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-bold">{service.name}</h2>
                      <p className="mt-1 text-sm text-stone-400">{service.durationMinutes} min · Deposit {money(service.deposit)}</p>
                    </div>
                    <p className="font-black text-amber-300">{money(service.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
