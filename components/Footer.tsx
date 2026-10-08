import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-xl font-bold text-sky-900"
          >
            LinguaWorld
          </Link>

          <p className="mt-2 text-sm text-slate-500">
            Learn • Travel • Connect
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
          <Link
            href="/languages"
            className="transition hover:text-sky-900"
          >
            Languages
          </Link>

          <Link
            href="/countries"
            className="transition hover:text-sky-900"
          >
            Countries
          </Link>
        </nav>

        <p className="text-sm text-slate-400">
          © 2026 LinguaWorld
        </p>
      </div>
    </footer>
  );
}