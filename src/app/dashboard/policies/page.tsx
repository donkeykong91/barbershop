import { depositPolicy } from "@/lib/domain";
import { money } from "@/lib/business-data";

export default function PoliciesPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Policies</h1>
      <p className="mt-2 text-stone-600">Deposit requirements, cancellation windows, forfeitures, and override rules.</p>
      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div><dt className="text-sm text-stone-500">Deposit mode</dt><dd className="text-xl font-black capitalize">{depositPolicy.mode}</dd></div>
          <div><dt className="text-sm text-stone-500">Default deposit</dt><dd className="text-xl font-black">{money(depositPolicy.defaultAmount)}</dd></div>
          <div><dt className="text-sm text-stone-500">Cancellation window</dt><dd className="text-xl font-black">{depositPolicy.cancellationWindowHours} hours</dd></div>
          <div><dt className="text-sm text-stone-500">No-show outcome</dt><dd className="text-xl font-black">{depositPolicy.noShowOutcome}</dd></div>
        </dl>
      </section>
    </div>
  );
}
