"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { countries } from "../../../data/countries";

export default function CountryComparePage() {
  const [firstCountryId, setFirstCountryId] = useState("france");
  const [secondCountryId, setSecondCountryId] = useState("japan");

  const firstCountry = useMemo(
    () => countries.find((country) => country.id === firstCountryId),
    [firstCountryId]
  );

  const secondCountry = useMemo(
    () => countries.find((country) => country.id === secondCountryId),
    [secondCountryId]
  );

  if (!firstCountry || !secondCountry) {
    return null;
  }

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
            Country comparison
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Compare two destinations
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Compare capitals, languages, travel details, and cultural
            highlights side by side.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              First country
            </span>

            <select
              value={firstCountryId}
              onChange={(event) => setFirstCountryId(event.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg shadow-sm outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Second country
            </span>

            <select
              value={secondCountryId}
              onChange={(event) => setSecondCountryId(event.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg shadow-sm outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[firstCountry, secondCountry].map((country) => (
            <article
              key={country.id}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
            >
              <img
                src={country.image}
                alt={`${country.name} landscape`}
                className="h-64 w-full object-cover"
              />

              <div className="p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="text-5xl" aria-hidden="true">
                    {country.flag}
                  </span>

                  <div>
                    <h2 className="text-4xl font-bold">
                      {country.name}
                    </h2>

                    <p className="mt-1 text-slate-500">
                      Capital: {country.capital}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Main language
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {country.language}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Overview
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      {country.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/countries/${country.id}`}
                  className="mt-8 inline-block rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore {country.name}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {firstCountryId === secondCountryId && (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
            Choose two different countries for a more useful comparison.
          </div>
        )}
      </section>
    </main>
  );
}