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

  const contactValid = contact.name.trim().length > 0 && /^\d{3}-\d{3}-\d{4}$/.test(contact.phone) && contact.email.includes("@");
  const steps: Step[] = ["service", "time", "contact", "review", "confirmed"];

  function canOpenStep(item: Step) {
    if (item === "service" || item === "time" || item === "contact") {
      return true;
    }

    if (item === "review") {
      return contactValid;
    }

    return step === "confirmed";
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-3 py-4 sm:px-5 sm:py-6">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-bold text-amber-300">← {business.name}</Link>
      <div className="mt-3 rounded-3xl border border-stone-800 bg-stone-900 p-4 shadow-2xl sm:mt-6 sm:rounded-[2rem] sm:p-5 md:p-8">
        <div className="mb-6 flex snap-x gap-2 overflow-x-auto pb-1 text-xs font-bold uppercase tracking-wide text-stone-400 sm:mb-8 sm:flex-wrap sm:overflow-visible">
          {steps.map((item) => {
            const active = item === step;
            const available = canOpenStep(item);

            return (
              <button
                key={item}
                type="button"
                disabled={!available}
                onClick={() => available && setStep(item)}
                aria-current={active ? "step" : undefined}
                className={`shrink-0 snap-start rounded-full px-3 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 ${
                  active
                    ? "bg-amber-400 text-stone-950"
                    : available
                      ? "bg-stone-800 text-stone-200 hover:bg-stone-700"
                      : "cursor-not-allowed bg-stone-800/50 text-stone-500"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {step === "service" && (
          <section>
            <h1 className="text-3xl font-black">Choose your service</h1>
            <p className="mt-2 text-stone-400">Pick one primary service, then add whatever extras you want.</p>
            <fieldset className="mt-6 grid gap-3">
              <legend className="sr-only">Primary service</legend>
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`relative block min-h-24 touch-manipulation rounded-2xl border p-4 text-left transition hover:border-amber-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-amber-300 active:scale-[0.99] ${service.id === serviceId ? "border-amber-300 bg-amber-300/10" : "border-stone-800 bg-stone-950"}`}
                >
                  <input
                    type="radio"
                    name="service"
                    value={service.id}
                    checked={service.id === serviceId}
                    onChange={() => setServiceId(service.id)}
                    className="absolute inset-0 z-10 cursor-pointer opacity-0"
                  />
                  <span className="flex items-start justify-between gap-3">
                    <span>
                      <span className="block font-bold">{service.name}</span>
                      <span className="mt-1 block text-sm text-stone-400">{service.description}</span>
                      <span className="mt-2 block text-sm text-amber-200">{service.durationMinutes} min · deposit {money(service.deposit)}</span>
                    </span>
                    <span className="font-black">{money(service.price)}</span>
                  </span>
                </label>
              ))}
            </fieldset>
            <h2 className="mt-8 text-xl font-black">Optional add-ons</h2>
            <fieldset className="mt-3 grid gap-3 sm:grid-cols-3">
              <legend className="sr-only">Optional add-ons</legend>
              {addOns.map((addOn) => {
                const checked = selectedAddOns.includes(addOn.id);
                return (
                  <label
                    key={addOn.id}
                    className={`relative block min-h-24 touch-manipulation rounded-2xl border p-4 text-left transition hover:border-amber-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-amber-300 active:scale-[0.99] ${checked ? "border-amber-300 bg-amber-300/10" : "border-stone-800 bg-stone-950"}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleAddOn(addOn.id)}
                      className="absolute inset-0 z-10 cursor-pointer opacity-0"
                    />
                    <span className="block font-bold">{addOn.name}</span>
                    <span className="mt-1 block text-sm text-stone-400">{money(addOn.price)} · +{addOn.durationMinutes} min</span>
                  </label>
                );
              })}
            </fieldset>
            <Summary price={totals.price} duration={totals.duration} deposit={selectedService.deposit} />
            <button type="button" onClick={() => setStep("time")} className="mt-6 min-h-14 w-full rounded-2xl bg-amber-400 px-5 py-4 font-black text-stone-950 active:scale-[0.99]">Continue to availability</button>
          </section>
        )}

        {step === "time" && (
          <section>
            <h1 className="text-3xl font-black">Pick a time</h1>
            <p className="mt-2 text-stone-400">These slots are mocked for the first pass; the backend availability engine comes next.</p>
            <fieldset className="mt-6 grid gap-3 sm:grid-cols-2">
              <legend className="sr-only">Available appointment times</legend>
              {availableSlots.map((time) => (
                <label
                  key={time}
                  className={`relative block min-h-16 touch-manipulation rounded-2xl border p-4 text-left font-bold transition hover:border-amber-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-amber-300 active:scale-[0.99] ${slot === time ? "border-amber-300 bg-amber-300/10" : "border-stone-800 bg-stone-950"}`}
                >
                  <input
                    type="radio"
                    name="slot"
                    value={time}
                    checked={slot === time}
                    onChange={() => setSlot(time)}
                    className="absolute inset-0 z-10 cursor-pointer opacity-0"
                  />
                  {time}
                </label>
              ))}
            </fieldset>
            <Nav onBack={() => setStep("service")} onNext={() => setStep("contact")} next="Continue to contact" />
          </section>
        )}

        {step === "contact" && (
          <section>
            <h1 className="text-3xl font-black">Guest contact</h1>
            <p className="mt-2 text-stone-400">No account required. We only need the basics.</p>
            <div className="mt-6 grid gap-4">
              <Input label="Name" value={contact.name} onChange={(name) => setContact({ ...contact, name })} placeholder="Kevin Barber" />
              <Input
                label="Phone"
                value={contact.phone}
                onChange={(phone) => setContact({ ...contact, phone: formatPhoneNumber(phone) })}
                placeholder="555-010-2323"
                inputMode="tel"
              />
              <Input label="Email" value={contact.email} onChange={(email) => setContact({ ...contact, email })} placeholder="you@example.com" inputMode="email" />
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
            <label className="mt-5 flex cursor-pointer gap-3 rounded-2xl border border-stone-800 bg-stone-950 p-4 text-sm text-stone-300">
              <input type="checkbox" checked={policyAccepted} onChange={(event) => setPolicyAccepted(event.target.checked)} className="mt-1 size-5 accent-amber-400" />
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
            <Link href="/appointment/demo-token" className="mt-8 inline-flex min-h-14 items-center rounded-2xl bg-amber-400 px-6 py-4 font-black text-stone-950">Open secure appointment link</Link>
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
  return <div className="mt-8 grid gap-3 sm:flex"><button type="button" onClick={onBack} className="min-h-14 flex-1 rounded-2xl border border-stone-700 px-5 py-4 font-bold active:scale-[0.99]">Back</button><button type="button" disabled={disabled} onClick={onNext} className="min-h-14 flex-1 rounded-2xl bg-amber-400 px-5 py-4 font-black text-stone-950 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40">{next}</button></div>;
}

function Input({ label, value, onChange, placeholder, inputMode }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; inputMode?: "text" | "tel" | "email" }) {
  return <label className="grid gap-2 text-sm font-bold text-stone-300">{label}<input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} inputMode={inputMode} className="min-h-12 rounded-2xl border border-stone-800 bg-stone-950 px-4 py-3 text-white outline-none focus:border-amber-300" /></label>;
}

function formatPhoneNumber(value: string) {
  const rawDigits = value.replace(/\D/g, "");
  const digits = (rawDigits.length > 10 && rawDigits.startsWith("1") ? rawDigits.slice(1) : rawDigits).slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}
