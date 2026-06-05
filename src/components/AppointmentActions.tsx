"use client";

import { useState } from "react";

const actions = {
  reschedule: "Reschedule request started. Pick a replacement slot from the barber dashboard next.",
  cancel: "Cancellation request staged. Production will require confirmation before changing the appointment.",
  message: "Message composer opened. SMS/email relay wiring comes with the messaging backend.",
};

export function AppointmentActions() {
  const [status, setStatus] = useState("Choose an appointment action to preview the next step.");

  return (
    <div className="mt-6">
      <div className="grid gap-3 sm:grid-cols-3">
        <button type="button" onClick={() => setStatus(actions.reschedule)} className="min-h-12 rounded-2xl bg-amber-400 px-4 py-3 font-black text-stone-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 active:scale-[0.98]">Reschedule once</button>
        <button type="button" onClick={() => setStatus(actions.cancel)} className="min-h-12 rounded-2xl border border-stone-700 px-4 py-3 font-bold transition hover:border-red-300 hover:bg-red-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300 active:scale-[0.98]">Cancel</button>
        <button type="button" onClick={() => setStatus(actions.message)} className="min-h-12 rounded-2xl border border-stone-700 px-4 py-3 font-bold transition hover:border-amber-300 hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 active:scale-[0.98]">Message barber</button>
      </div>
      <p className="mt-4 rounded-2xl border border-stone-800 bg-stone-950 p-4 text-sm text-stone-300" aria-live="polite">{status}</p>
    </div>
  );
}
