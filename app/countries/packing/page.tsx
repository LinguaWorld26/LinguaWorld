"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { packingGuides } from "../../../data/packingGuides";

type Season = "summer" | "winter" | "springFall";

export default function PackingAssistantPage() {
  const [countryId, setCountryId] = useState("france");
  const [season, setSeason] = useState<Season>("summer");
  const [tripLength, setTripLength] = useState(7);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const guide = packingGuides[countryId];

  const seasonalItems = useMemo(() => {
    return guide[season];
  }, [guide, season]);

  const clothingQuantity = useMemo(() => {
    return Math.max(3, Math.min(tripLength, 7));
  }, [tripLength]);

  const checklist = useMemo(() => {
    return [
      ...guide.essentials,
      ...seasonalItems,
      ...guide.culturalItems,
      `${clothingQuantity} everyday tops`,
      `${Math.max(2, Math.ceil(tripLength / 3))} pairs of trousers, skirts, or shorts`,
      `${tripLength + 1} pairs of underwear`,
      `${tripLength + 1} pairs of socks`,
    ];
  }, [
    guide,
    seasonalItems,
    clothingQuantity,
    tripLength,
  ]);

  function toggleItem(item: string) {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((savedItem) => savedItem !== item)
        : [...current, item]
    );
  }

  function resetChecklist() {
    setCheckedItems([]);
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
            Packing assistant
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Build your packing list
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Choose your destination, season, and trip length to create a
            practical packing checklist.
          </p>
        </div>

        <div className="mt-12 grid gap-6 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-3">
          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Destination
            </span>

            <select
              value={countryId}
              onChange={(event) => {
                setCountryId(event.target.value);
                setCheckedItems([]);
              }}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              {Object.values(packingGuides).map((item) => (
                <option
                  key={item.countryId}
                  value={item.countryId}
                >
                  {item.countryName}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Season
            </span>

            <select
              value={season}
              onChange={(event) => {
                setSeason(event.target.value as Season);
                setCheckedItems([]);
              }}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="springFall">Spring or fall</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Trip length
            </span>

            <select
              value={tripLength}
              onChange={(event) => {
                setTripLength(Number(event.target.value));
                setCheckedItems([]);
              }}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            >
              <option value={3}>3 days</option>
              <option value={5}>5 days</option>
              <option value={7}>7 days</option>
              <option value={10}>10 days</option>
              <option value={14}>14 days</option>
            </select>
          </label>
        </div>

        <div className="mt-8 rounded-[28px] border border-sky-200 bg-sky-50 p-6">
          <p className="font-semibold text-sky-900">
            Climate note
          </p>

          <p className="mt-2 leading-7 text-sky-900">
            {guide.climateNote}
          </p>
        </div>

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-800">
                Your checklist
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                Packing for {guide.countryName}
              </h2>
            </div>

            <button
              type="button"
              onClick={resetChecklist}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:bg-slate-100"
            >
              Reset checklist
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {checklist.map((item) => {
              const checked = checkedItems.includes(item);

              return (
                <label
                  key={item}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
                    checked
                      ? "border-sky-300 bg-sky-50"
                      : "border-slate-200 bg-white hover:border-sky-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleItem(item)}
                    className="mt-1 h-5 w-5"
                  />

                  <span
                    className={
                      checked
                        ? "text-slate-500 line-through"
                        : "text-slate-800"
                    }
                  >
                    {item}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold">
              {checkedItems.length} of {checklist.length} items packed
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}