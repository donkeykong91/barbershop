"use client";

import { useState } from "react";

export function CalendarActions() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <div className="mt-5">
      <button type="button" onClick={() => setShowForm((current) => !current)} className="min-h-12 w-full rounded-xl bg-stone-950 px-4 py-3 font-bold text-white transition hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950 active:scale-[0.98]">
        {showForm ? "Close quick add" : "Add walk-in / block"}
      </button>
      {showForm && (
        <form className="mt-4 grid gap-3 rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm">
          <label className="grid gap-1 font-bold text-stone-700">Label<input className="min-h-11 rounded-lg border border-stone-300 bg-white px-3 font-normal" placeholder="Walk-in or blocked time" /></label>
          <div className="grid grid-cols-2 gap-2">
            <label className="grid gap-1 font-bold text-stone-700">Start<input className="min-h-11 rounded-lg border border-stone-300 bg-white px-3 font-normal" placeholder="2:00 PM" /></label>
            <label className="grid gap-1 font-bold text-stone-700">End<input className="min-h-11 rounded-lg border border-stone-300 bg-white px-3 font-normal" placeholder="2:30 PM" /></label>
          </div>
          <button type="button" onClick={() => setStatus("Quick add staged for review. Persistence comes with the calendar backend.")} className="min-h-11 rounded-lg bg-amber-400 px-3 font-black text-stone-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 active:scale-[0.98]">Stage on calendar</button>
        </form>
      )}
      {status && <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm font-bold text-amber-900" aria-live="polite">{status}</p>}
    </div>
  );
}
