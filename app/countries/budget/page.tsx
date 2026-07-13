"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import {
  travelBudgets,
  type TravelStyle,
} from "../../../data/travelBudget";

export default function TravelBudgetPage() {
  const [countryId, setCountryId] = useState("france");
  const [tripLength, setTripLength] = useState(7);
  const [travelers, setTravelers] = useState(1);
  const [travelStyle, setTravelStyle] =
    useState<TravelStyle>("standard");
  const [flightCost, setFlightCost] = useState(800);
  const [emergencyPercent, setEmergencyPercent] = useState(10);

  const destination = travelBudgets[countryId];
  const dailyCosts = destination.dailyCosts[travelStyle];

  const calculations = useMemo(() => {
    const lodging =
      dailyCosts.lodging * tripLength * travelers;

    const food =
      dailyCosts.food * tripLength * travelers;

    const transportation =
      dailyCosts.transportation * tripLength * travelers;

    const activities =
      dailyCosts.activities * tripLength * travelers;

    const flights = flightCost * travelers;

    const subtotal =
      lodging +
      food +
      transportation +
      activities +
      flights;

    const emergencyFund =
      subtotal * (emergencyPercent / 100);

    const total = subtotal + emergencyFund;

    const perTraveler = total / travelers;

    return {
      lodging,
      food,
      transportation,
      activities,
      flights,
      subtotal,
      emergencyFund,
      total,
      perTraveler,
    };
  }, [
    dailyCosts,
    tripLength,
    travelers,
    flightCost,
    emergencyPercent,
  ]);

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: destination.currency,
      maximumFractionDigits: 0,
    }).format(value);
  }

  const budgetRows = [
    {
      label: "Lodging",
      value: calculations.lodging,
    },
    {
      label: "Food",
      value: calculations.food,
    },
    {
      label: "Local transportation",
      value: calculations.transportation,
    },
    {
      label: "Activities",
      value: calculations.activities,
    },
    {
      label: "Flights",
      value: calculations.flights,
    },
    {
      label: `Emergency cushion (${emergencyPercent}%)`,
      value: calculations.emergencyFund,
    },
  ];

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
            Trip finances
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Travel budget estimator
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Build a starting estimate for lodging, food,
            transportation, activities, flights, and emergencies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-2 lg:grid-cols-3">
          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Destination
            </span>

            <select
              value={countryId}
              onChange={(event) =>
                setCountryId(event.target.value)
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              {Object.values(travelBudgets).map((country) => (
                <option
                  key={country.countryId}
                  value={country.countryId}
                >
                  {country.countryName}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Travel style
            </span>

            <select
              value={travelStyle}
              onChange={(event) =>
                setTravelStyle(
                  event.target.value as TravelStyle
                )
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg capitalize outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              <option value="budget">Budget</option>
              <option value="standard">Standard</option>
              <option value="comfort">Comfort</option>
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
              <option value={3}>3 days</option>
              <option value={5}>5 days</option>
              <option value={7}>7 days</option>
              <option value={10}>10 days</option>
              <option value={14}>14 days</option>
              <option value={21}>21 days</option>
              <option value={30}>30 days</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Travelers
            </span>

            <select
              value={travelers}
              onChange={(event) =>
                setTravelers(Number(event.target.value))
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              <option value={1}>1 traveler</option>
              <option value={2}>2 travelers</option>
              <option value={3}>3 travelers</option>
              <option value={4}>4 travelers</option>
              <option value={5}>5 travelers</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Flight cost per traveler
            </span>

            <input
              type="number"
              min={0}
              step={50}
              value={flightCost}
              onChange={(event) =>
                setFlightCost(
                  Math.max(0, Number(event.target.value))
                )
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            />
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Emergency cushion
            </span>

            <select
              value={emergencyPercent}
              onChange={(event) =>
                setEmergencyPercent(
                  Number(event.target.value)
                )
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              <option value={5}>5%</option>
              <option value={10}>10%</option>
              <option value={15}>15%</option>
              <option value={20}>20%</option>
            </select>
          </label>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-800">
                Estimated breakdown
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                {tripLength} days in{" "}
                {destination.countryName}
              </h2>
            </div>

            <div className="mt-8 divide-y divide-slate-200">
              {budgetRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <p className="text-slate-600">
                    {row.label}
                  </p>

                  <p className="text-lg font-bold">
                    {formatCurrency(row.value)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-[32px] bg-sky-900 p-7 text-white shadow-lg md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-100">
              Estimated total
            </p>

            <p className="mt-4 text-5xl font-bold">
              {formatCurrency(calculations.total)}
            </p>

            <p className="mt-3 text-sky-100">
              For {travelers}{" "}
              {travelers === 1 ? "traveler" : "travelers"}
            </p>

            <div className="mt-8 border-t border-sky-700 pt-7">
              <p className="text-sm text-sky-100">
                Estimated per traveler
              </p>

              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(
                  calculations.perTraveler
                )}
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">
                Planning note
              </p>

              <p className="mt-2 leading-7 text-sky-100">
                Prices vary by city, season, booking time,
                exchange rates, and personal habits. Use this
                as a starting estimate and confirm current
                prices before booking.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            Continue planning
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/countries/itinerary"
              className="rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
            >
              Build an itinerary
            </Link>

            <Link
              href="/countries/packing"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Build a packing list
            </Link>

            <Link
              href="/countries/readiness"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Check travel readiness
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}