import Navbar from "../components/Navbar";
import CountryCard from "../components/CountryCard";
import GlobeComponent from "../components/Globe";
import { countries } from "../data/countries";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-8 py-16 text-center">
        <p className="mb-5 rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-900">
          Learn • Travel • Connect
        </p>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Explore Every Language.
          <br />
          Discover Every Culture.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          LinguaWorld brings together language learning, travel, culture, and
          global communities in one place.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-sky-900 px-8 py-4 text-lg text-white transition hover:bg-sky-800">
            Explore Languages
          </button>

          <button className="rounded-full border border-slate-300 bg-white px-8 py-4 text-lg transition hover:bg-slate-100">
            Browse Countries
          </button>
        </div>

        <div className="mt-12 w-full max-w-3xl">
          <input
            type="text"
            placeholder="Search countries, languages, or cities..."
            className="w-full rounded-full border border-slate-300 bg-white px-6 py-5 text-lg shadow-md outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div className="mt-16 w-full max-w-6xl overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-sky-50 to-cyan-100 shadow-xl">
          <GlobeComponent />
        </div>

        <section className="mx-auto mt-24 w-full max-w-7xl px-0">
          <h2 className="mb-10 text-center text-4xl font-bold text-slate-900">
            Featured Countries
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
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
      </section>
    </main>
  );
}