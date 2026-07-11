import Navbar from "../../components/Navbar";
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
        </div>

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