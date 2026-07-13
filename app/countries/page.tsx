import Navbar from "../../components/Navbar";
import Link from "next/link";
import CountrySpotlight from "../../components/CountrySpotlight";
import CountryCard from "../../components/CountryCard";
import { countries } from "../../data/countries";

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Explore the world
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Countries
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Discover languages, culture, cities, and practical travel
            information from around the world.
          </p>

          <Link
            href="/countries/compare"
            className="inline-block rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            Compare countries
          </Link>

          <Link
            href="/countries/moods"
            className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Explore by travel mood
         </Link>

         <Link
           href="/countries/itinerary"
           className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
         >
           Build an itinerary
         </Link>

         <Link
           href="/countries/packing"
           className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
         >
           Build a packing list
         </Link>

         <Link
           href="/countries/readiness"
           className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
         >
           Check travel readiness
         </Link>

         <Link
           href="/countries/budget"
           className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
         >
           Estimate a travel budget
         </Link>
        </div>

        <section className="mt-12">
         <CountrySpotlight />
        </section>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard
              key={country.id}
              id={country.id}
              flag={country.flag}
              country={country.name}
              capital={country.capital}
              language={country.language}
              description={country.description}
              image={country.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}