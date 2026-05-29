import { demoAppointments } from "@/lib/appointments";
import { availabilitySettings } from "@/lib/settings";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Calendar</h1>
      <p className="mt-2 text-stone-600">Day/week schedule with appointments, blocked time, walk-ins, and status visibility.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
        <section className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-black">Today</h2>
          <div className="mt-4 grid gap-3">
            {demoAppointments.map((appointment) => <div key={appointment.id} className="rounded-xl border border-stone-200 p-4"><p className="font-bold">{appointment.time} · {appointment.customerName}</p><p className="text-sm text-stone-600">{appointment.service} · {appointment.status}</p></div>)}
          </div>
        </section>
        <aside className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-black">Blocked time</h2>
          <div className="mt-4 grid gap-3">
            {availabilitySettings.blockedTime.map((block) => <div key={block.id} className="rounded-xl bg-stone-50 p-3 text-sm"><strong>{block.label}</strong><p className="text-stone-600">{block.day} · {block.start}-{block.end}</p></div>)}
          </div>
          <button className="mt-5 w-full rounded-xl bg-stone-950 px-4 py-3 font-bold text-white">Add walk-in / block</button>
        </aside>
      </div>
    </div>
  );
}
