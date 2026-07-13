"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { itineraries } from "../../../data/itineraries";

export default function ItineraryBuilderPage() {
  const [countryId, setCountryId] = useState("france");
  const [tripLength, setTripLength] = useState(3);

  const itinerary = itineraries[countryId];

  const selectedDays = useMemo(() => {
    return itinerary.days.slice(0, tripLength);
  }, [itinerary, tripLength]);

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
            Trip planning
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Build a mini itinerary
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Choose a destination and trip length to generate a simple
            starting plan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-2">
          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Destination
            </span>

            <select
              value={countryId}
              onChange={(event) => setCountryId(event.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              {Object.values(itineraries).map((item) => (
                <option
                  key={item.countryId}
                  value={item.countryId}
                >
                  {item.city}, {item.countryName}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Trip length
            </span>

            <select
              value={tripLength}
              onChange={(event) =>
                setTripLength(Number(event.target.value))
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              <option value={1}>1 day</option>
              <option value={2}>2 days</option>
              <option value={3}>3 days</option>
              <option value={4}>4 days</option>
              <option value={5}>5 days</option>
            </select>
          </label>
        </div>

        <section className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-800">
                Your plan
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                {tripLength} days in {itinerary.city}
              </h2>
            </div>

            <Link
              href={`/countries/${itinerary.countryId}`}
              className="font-semibold text-sky-800"
            >
              Explore {itinerary.countryName} →
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {selectedDays.map((day, index) => (
              <article
                key={`${day.title}-${index}`}
                className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-lg font-bold text-sky-900">
                    {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold">
                    {day.title}
                  </h3>
                </div>

                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Morning
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      {day.morning}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Afternoon
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      {day.afternoon}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Evening
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      {day.evening}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}