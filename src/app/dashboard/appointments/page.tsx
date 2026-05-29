import Link from "next/link";
import { demoAppointments } from "@/lib/appointments";
import { appointmentStatuses } from "@/lib/domain";

export default function AppointmentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Appointments</h1>
      <p className="mt-2 text-stone-600">Search, filter, inspect details, update lifecycle states, and open secure customer links.</p>
      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {appointmentStatuses.slice(2, 10).map((status) => <span key={status} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">{status}</span>)}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-stone-500"><tr><th className="py-3">Customer</th><th>Service</th><th>Time</th><th>Status</th><th>Payment</th><th>Link</th></tr></thead>
            <tbody className="divide-y divide-stone-100">
              {demoAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="py-3 font-bold">{appointment.customerName}<div className="font-normal text-stone-500">{appointment.customerPhone}</div></td>
                  <td>{appointment.service}</td>
                  <td>{appointment.time}</td>
                  <td><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{appointment.status}</span></td>
                  <td>{appointment.paymentStatus}</td>
                  <td><Link className="font-bold text-amber-700" href={`/appointment/${appointment.secureToken}`}>Open</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
