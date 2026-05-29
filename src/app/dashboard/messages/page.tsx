import { demoThreads } from "@/lib/messages";

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Messages</h1>
      <p className="mt-2 text-stone-600">Appointment-linked chat with SMS/email relay status.</p>
      <div className="mt-6 grid gap-4">
        {demoThreads.map((thread) => <section key={thread.appointmentId} className="rounded-2xl border border-stone-200 bg-white p-5"><div className="flex justify-between"><h2 className="font-black">{thread.customer}</h2>{thread.unread && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Unread</span>}</div><div className="mt-4 grid gap-3">{thread.messages.map((message) => <div key={`${message.sender}-${message.timestamp}`} className="rounded-xl bg-stone-50 p-3 text-sm"><strong>{message.sender}</strong><p>{message.body}</p><p className="text-xs text-stone-500">{message.timestamp} · {message.deliveryStatus}</p></div>)}</div></section>)}
      </div>
    </div>
  );
}
