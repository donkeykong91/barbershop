import Link from "next/link";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-4 py-4 sm:px-5 sm:py-5">
      <Link href="/" className="inline-flex min-h-11 flex-1 items-center text-lg font-black tracking-tight">The Barber Shop</Link>
      <nav className="grid w-full grid-cols-2 gap-2 text-sm text-stone-300 sm:flex sm:w-auto sm:items-center sm:gap-3">
        <Link href="/book" className="inline-flex min-h-11 items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-center font-bold text-stone-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 active:scale-[0.98]">Book now</Link>
        <Link href="/dashboard" className="inline-flex min-h-11 items-center justify-center rounded-full border border-stone-700 px-4 py-2 text-center transition hover:border-stone-500 hover:bg-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400 active:scale-[0.98]">Dashboard</Link>
      </nav>
    </header>
  );
}
