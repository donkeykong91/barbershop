import { addOns, money, services } from "@/lib/business-data";

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Services & pricing</h1>
      <p className="mt-2 text-stone-600">Create, edit, disable, reorder, and configure deposits for services and add-ons.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Services</h2><div className="mt-4 grid gap-3">{services.map((service) => <div key={service.id} className="rounded-xl bg-stone-50 p-4"><strong>{service.name}</strong><p className="text-sm text-stone-600">{money(service.price)} · {service.durationMinutes} min · deposit {money(service.deposit)}</p></div>)}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Add-ons</h2><div className="mt-4 grid gap-3">{addOns.map((addOn) => <div key={addOn.id} className="rounded-xl bg-stone-50 p-4"><strong>{addOn.name}</strong><p className="text-sm text-stone-600">{money(addOn.price)} · +{addOn.durationMinutes} min</p></div>)}</div></section>
      </div>
    </div>
  );
}
