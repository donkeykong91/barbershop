import { notificationEvents, permissions, roles } from "@/lib/domain";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Settings</h1>
      <p className="mt-2 text-stone-600">Notifications, security, roles, privacy controls, and production readiness.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Roles</h2><div className="mt-4 grid gap-3">{roles.map((role) => <div key={role} className="rounded-xl bg-stone-50 p-3"><strong>{role}</strong><p className="text-xs text-stone-500">{permissions[role].join(", ")}</p></div>)}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Notification events</h2><div className="mt-4 flex flex-wrap gap-2">{notificationEvents.map((event) => <span key={event} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">{event}</span>)}</div></section>
      </div>
    </div>
  );
}
