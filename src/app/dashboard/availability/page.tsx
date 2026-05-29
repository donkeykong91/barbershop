import { availabilitySettings } from "@/lib/settings";

export default function AvailabilityPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Availability</h1>
      <p className="mt-2 text-stone-600">Business hours, booking windows, slot intervals, buffers, and blocked time.</p>
      <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-black">Business hours</h2>
          <div className="mt-4 divide-y divide-stone-100">
            {availabilitySettings.businessHours.map((hours) => (
              <div key={hours.day} className="flex items-center justify-between py-3 text-sm">
                <span className="font-bold">{hours.day}</span>
                <span className="text-stone-600">{hours.closed ? "Closed" : `${hours.open}–${hours.close}`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-black">Booking rules</h2>
          <dl className="mt-4 grid gap-3 text-sm">
            <div><dt className="text-stone-500">Minimum notice</dt><dd className="font-bold">{availabilitySettings.minimumNoticeHours} hours</dd></div>
            <div><dt className="text-stone-500">Future booking window</dt><dd className="font-bold">{availabilitySettings.futureBookingWindowDays} days</dd></div>
            <div><dt className="text-stone-500">Slot interval</dt><dd className="font-bold">{availabilitySettings.slotIntervalMinutes} minutes</dd></div>
            <div><dt className="text-stone-500">Buffer</dt><dd className="font-bold">{availabilitySettings.bufferMinutes} minutes</dd></div>
          </dl>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-black">Blocked time</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {availabilitySettings.blockedTime.map((block) => (
              <div key={block.id} className="rounded-xl bg-stone-50 p-4 text-sm">
                <p className="font-bold">{block.label}</p>
                <p className="text-stone-600">{block.day} · {block.start}–{block.end}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
