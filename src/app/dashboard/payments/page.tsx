import { demoPayments } from "@/lib/payments";
import { money } from "@/lib/business-data";

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Payments</h1>
      <p className="mt-2 text-stone-600">Deposits, remaining balances, tips, refunds, failed payments, Link outcomes, and exceptions.</p>
      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
        <table className="w-full text-left text-sm">
          <thead className="text-stone-500"><tr><th className="py-3">Type</th><th>Amount</th><th>Status</th><th>Source</th><th>Appointment</th></tr></thead>
          <tbody className="divide-y divide-stone-100">
            {demoPayments.map((payment) => <tr key={payment.id}><td className="py-3 font-bold capitalize">{payment.type.replaceAll("_", " ")}</td><td>{money(payment.amount)}</td><td>{payment.status}</td><td>{payment.source}</td><td>{payment.appointmentId}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
