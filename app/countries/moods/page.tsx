import Link from "next/link";
import Navbar from "../../../components/Navbar";
import CountryMoodCard from "../../../components/CountryMoodCard";
import { countryMoods } from "../../../data/countryMoods";

export default function CountryMoodsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <Link
          href="/countries"
          className="font-semibold text-sky-800"
        >
          ← Back to countries
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
            Travel by personality
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Find a country that fits your mood
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Explore destinations based on the kind of experience you
            want, from historic cities to warm coastlines and slow café
            afternoons.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {countryMoods.map((mood) => (
            <CountryMoodCard
              key={mood.id}
              mood={mood}
            />
          ))}
        </div>
      </section>
    </main>
  );
}