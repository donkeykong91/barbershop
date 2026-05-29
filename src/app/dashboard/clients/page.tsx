import { demoAppointments } from "@/lib/appointments";

export default function ClientsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Clients</h1>
      <p className="mt-2 text-stone-600">Client history from guest bookings and walk-ins.</p>
      <div className="mt-6 grid gap-3">
        {demoAppointments.map((appointment) => <div key={appointment.customerEmail} className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">{appointment.customerName}</h2><p className="text-sm text-stone-600">{appointment.customerPhone} · {appointment.customerEmail}</p><p className="mt-2 text-sm">Latest: {appointment.service} / {appointment.status}</p></div>)}
      </div>
    </div>
  );
}
