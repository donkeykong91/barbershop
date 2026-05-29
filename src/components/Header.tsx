import Link from "next/link";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
      <Link href="/" className="text-lg font-black tracking-tight">The Barber Shop</Link>
      <nav className="flex items-center gap-3 text-sm text-stone-300">
        <Link href="/book" className="rounded-full bg-amber-400 px-4 py-2 font-bold text-stone-950">Book now</Link>
        <Link href="/dashboard" className="rounded-full border border-stone-700 px-4 py-2">Dashboard</Link>
      </nav>
    </header>
  );
}
