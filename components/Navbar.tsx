import Link from "next/link";
export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
  
        <Link href="/" className="text-2xl font-bold text-sky-900">
  🌍 LinguaWorld
</Link>
  
          <div className="hidden gap-8 font-medium text-slate-700 md:flex">
            <Link href="/">Home</Link>
            <Link href="/countries">Countries</Link>
            <Link href="languages">Languages</Link>
            <a href="#">Travel</a>
            <a href="#">Community</a>
          </div>
  
          <button className="rounded-full bg-sky-900 px-5 py-2 text-white transition hover:bg-sky-800">
            Sign In
          </button>
  
        </div>
      </nav>
    );
  }