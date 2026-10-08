"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-sky-900 sm:text-2xl">
          🌍 LinguaWorld
        </Link>

        {/* Desktop menu */}
        <div className="hidden gap-8 font-medium text-slate-700 lg:flex">
          <Link href="/">Home</Link>
          <Link href="/countries">Countries</Link>
          <Link href="/languages">Languages</Link>
          <Link href="/favorites">Favorites</Link>
          <a href="#">Travel</a>
          <a href="#">Community</a>
        </div>

        {/* Desktop Sign In */}
        <button className="hidden rounded-full bg-sky-900 px-5 py-2 text-white transition hover:bg-sky-800 lg:block">
          Sign In
        </button>

        {/* Mobile/Tablet menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl text-sky-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4 font-medium text-slate-700">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/countries" onClick={() => setMenuOpen(false)}>
              Countries
            </Link>

            <Link href="/languages" onClick={() => setMenuOpen(false)}>
              Languages
            </Link>

            <Link href="/favorites" onClick={() => setMenuOpen(false)}>
              Favorites
            </Link>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Travel
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Community
            </a>

            <button className="w-fit rounded-full bg-sky-900 px-5 py-2 text-white transition hover:bg-sky-800">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}