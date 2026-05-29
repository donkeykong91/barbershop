"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { addOns, availableSlots, business, money, services } from "@/lib/business-data";

type Step = "service" | "time" | "contact" | "review" | "confirmed";

export default function BookPage() {
  const [step, setStep] = useState<Step>("service");
  const [serviceId, setServiceId] = useState(services[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [slot, setSlot] = useState(availableSlots[0]);
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const selectedService = services.find((service) => service.id === serviceId) ?? services[0];
  const chosenAddOns = addOns.filter((addOn) => selectedAddOns.includes(addOn.id));
  const totals = useMemo(() => {
    return chosenAddOns.reduce(
      (sum, addOn) => ({ price: sum.price + addOn.price, duration: sum.duration + addOn.durationMinutes }),
      { price: selectedService.price, duration: selectedService.durationMinutes },
    );
  }, [chosenAddOns, selectedService]);

  function toggleAddOn(id: string) {
    setSelectedAddOns((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  const contactValid = contact.name && contact.phone.includes("-") && contact.email.includes("@");

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-6">
      <Link href="/" className="text-sm font-bold text-amber-300">← {business.name}</Link>
      <div className="mt-6 rounded-[2rem] border border-stone-800 bg-stone-900 p-5 shadow-2xl md:p-8">
        <div className="mb-8 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-stone-400">
          {["service", "time", "contact", "review", "confirmed"].map((item) => (
            <span key={item} className={`rounded-full px-3 py-1 ${item === step ? "bg-amber-400 text-stone-950" : "bg-stone-800"}`}>{item}</span>
          ))}
        </div>

        {step === "service" && (
          <section>
            <h1 className="text-3xl font-black">Choose your service</h1>
            <p className="mt-2 text-stone-400">Pick one primary service, then add whatever extras you want.</p>
            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <button key={service.id} onClick={() => setServiceId(service.id)} className={`rounded-2xl border p-4 text-left ${service.id === serviceId ? "border-amber-300 bg-amber-300/10" : "border-stone-800 bg-stone-950"}`}>
                  <div className="flex justify-between gap-3"><strong>{service.name}</strong><strong>{money(service.price)}</strong></div>
                  <p className="mt-1 text-sm text-stone-400">{service.description}</p>
                  <p className="mt-2 text-sm text-amber-200">{service.durationMinutes} min · deposit {money(service.deposit)}</p>
                </button>
              ))}
            </div>
            <h2 className="mt-8 text-xl font-black">Optional add-ons</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {addOns.map((addOn) => (
                <button key={addOn.id} onClick={() => toggleAddOn(addOn.id)} className={`rounded-2xl border p-4 text-left ${selectedAddOns.includes(addOn.id) ? "border-amber-300 bg-amber-300/10" : "border-stone-800 bg-stone-950"}`}>
                  <strong>{addOn.name}</strong>
                  <p className="mt-1 text-sm text-stone-400">{money(addOn.price)} · +{addOn.durationMinutes} min</p>
                </button>
              ))}
            </div>
            <Summary price={totals.price} duration={totals.duration} deposit={selectedService.deposit} />
            <button onClick={() => setStep("time")} className="mt-6 w-full rounded-2xl bg-amber-400 px-5 py-4 font-black text-stone-950">Continue to availability</button>
          </section>
        )}

        {step === "time" && (
          <section>
            <h1 className="text-3xl font-black">Pick a time</h1>
            <p className="mt-2 text-stone-400">These slots are mocked for the first pass; the backend availability engine comes next.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {availableSlots.map((time) => <button key={time} onClick={() => setSlot(time)} className={`rounded-2xl border p-4 text-left font-bold ${slot === time ? "border-amber-300 bg-amber-300/10" : "border-stone-800 bg-stone-950"}`}>{time}</button>)}
            </div>
            <Nav onBack={() => setStep("service")} onNext={() => setStep("contact")} next="Continue to contact" />
          </section>
        )}

        {step === "contact" && (
          <section>
            <h1 className="text-3xl font-black">Guest contact</h1>
            <p className="mt-2 text-stone-400">No account required. We only need the basics.</p>
            <div className="mt-6 grid gap-4">
              <Input label="Name" value={contact.name} onChange={(name) => setContact({ ...contact, name })} placeholder="Kevin Barber" />
              <Input label="Phone" value={contact.phone} onChange={(phone) => setContact({ ...contact, phone })} placeholder="555-010-2323" />
              <Input label="Email" value={contact.email} onChange={(email) => setContact({ ...contact, email })} placeholder="you@example.com" />
            </div>
            {!contactValid && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-200">Enter a name, phone with a dash, and valid email before review.</p>}
            <Nav onBack={() => setStep("time")} onNext={() => contactValid && setStep("review")} next="Review booking" disabled={!contactValid} />
          </section>
        )}

        {step === "review" && (
          <section>
            <h1 className="text-3xl font-black">Review and policy</h1>
            <div className="mt-6 rounded-2xl border border-stone-800 bg-stone-950 p-5 text-sm text-stone-300">
              <p><strong className="text-white">Service:</strong> {selectedService.name}</p>
              <p><strong className="text-white">Add-ons:</strong> {chosenAddOns.length ? chosenAddOns.map((item) => item.name).join(", ") : "None"}</p>
              <p><strong className="text-white">When:</strong> {slot}</p>
              <p><strong className="text-white">Total:</strong> {money(totals.price)} · {totals.duration} minutes · deposit {money(selectedService.deposit)}</p>
              <p><strong className="text-white">Contact:</strong> {contact.name}, {contact.phone}, {contact.email}</p>
            </div>
            <label className="mt-5 flex gap-3 rounded-2xl border border-stone-800 bg-stone-950 p-4 text-sm text-stone-300">
              <input type="checkbox" checked={policyAccepted} onChange={(event) => setPolicyAccepted(event.target.checked)} className="mt-1" />
              <span>I acknowledge the cancellation policy: {business.cancellationPolicy}</span>
            </label>
            <Nav onBack={() => setStep("contact")} onNext={() => policyAccepted && setStep("confirmed")} next={selectedService.deposit ? "Pay deposit and confirm" : "Confirm booking"} disabled={!policyAccepted} />
          </section>
        )}

        {step === "confirmed" && (
          <section className="text-center">
            <p className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-green-400 text-2xl text-stone-950">✓</p>
            <h1 className="text-3xl font-black">Booking confirmed</h1>
            <p className="mt-3 text-stone-300">You are booked for {slot}. A confirmation notification and secure appointment link will be sent to {contact.email || "your email"}.</p>
            <Link href="/appointment/demo-token" className="mt-8 inline-flex rounded-2xl bg-amber-400 px-6 py-4 font-black text-stone-950">Open secure appointment link</Link>
          </section>
        )}
      </div>
    </main>
  );
}

function Summary({ price, duration, deposit }: { price: number; duration: number; deposit: number }) {
  return <div className="mt-6 rounded-2xl bg-stone-950 p-4 text-sm text-stone-300">Total: <strong className="text-white">{money(price)}</strong> · Duration: <strong className="text-white">{duration} min</strong> · Deposit: <strong className="text-white">{money(deposit)}</strong></div>;
}

function Nav({ onBack, onNext, next, disabled }: { onBack: () => void; onNext: () => void; next: string; disabled?: boolean }) {
  return <div className="mt-8 flex gap-3"><button onClick={onBack} className="flex-1 rounded-2xl border border-stone-700 px-5 py-4 font-bold">Back</button><button disabled={disabled} onClick={onNext} className="flex-1 rounded-2xl bg-amber-400 px-5 py-4 font-black text-stone-950 disabled:cursor-not-allowed disabled:opacity-40">{next}</button></div>;
}

function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return <label className="grid gap-2 text-sm font-bold text-stone-300">{label}<input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="rounded-2xl border border-stone-800 bg-stone-950 px-4 py-3 text-white outline-none focus:border-amber-300" /></label>;
}
