import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-5">
      <Link href="/" className="mb-8 text-sm font-bold text-amber-300">← The Barber Shop</Link>
      <section className="rounded-[2rem] border border-stone-800 bg-stone-900 p-6">
        <h1 className="text-3xl font-black">Dashboard login</h1>
        <p className="mt-2 text-stone-400">Authentication scaffold for barber/admin accounts. Production auth, MFA, reset, and RBAC come before launch.</p>
        <form className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-bold text-stone-300">Email<input className="rounded-2xl border border-stone-800 bg-stone-950 px-4 py-3 text-white" placeholder="owner@example.com" /></label>
          <label className="grid gap-2 text-sm font-bold text-stone-300">Password<input type="password" className="rounded-2xl border border-stone-800 bg-stone-950 px-4 py-3 text-white" placeholder="••••••••" /></label>
          <Link href="/dashboard" className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-amber-400 px-5 py-4 text-center font-black text-stone-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 active:scale-[0.98]">Continue demo</Link>
        </form>
      </section>
    </main>
  );
}
