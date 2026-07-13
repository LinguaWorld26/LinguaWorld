"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { travelChecklistItems } from "../../../data/travelChecklist";

const STORAGE_KEY = "linguaworld-travel-readiness";

const categories = [
  "Documents",
  "Money",
  "Health",
  "Connectivity",
  "Transportation",
  "Accommodation",
  "Language",
  "Packing",
] as const;

export default function TravelReadinessPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedItems = window.localStorage.getItem(STORAGE_KEY);

    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(checkedItems)
    );
  }, [checkedItems, loaded]);

  const completedCount = checkedItems.length;
  const totalCount = travelChecklistItems.length;

  const progress = useMemo(() => {
    return Math.round((completedCount / totalCount) * 100);
  }, [completedCount, totalCount]);

  function toggleItem(itemId: string) {
    setCheckedItems((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId]
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
            Travel preparation
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Travel readiness checklist
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Track the practical details that help turn a travel idea into
            a prepared departure.
          </p>
        </div>

        <section className="mt-12 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                Overall progress
              </p>

              <p className="mt-2 text-4xl font-bold">
                {progress}% ready
              </p>

              <p className="mt-2 text-slate-600">
                {completedCount} of {totalCount} tasks completed
              </p>
            </div>

            <button
              type="button"
              onClick={resetChecklist}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:bg-slate-100"
            >
              Reset checklist
            </button>
          </div>

          <div className="mt-7 h-4 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-sky-800 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {progress === 100 && (
            <div className="mt-7 rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <p className="text-xl font-bold text-sky-900">
                Checklist complete ✈️
              </p>

              <p className="mt-2 text-sky-900">
                Your preparation dashboard is fully checked. Do one final
                document review before departure.
              </p>
            </div>
          )}
        </section>

        <div className="mt-14 space-y-12">
          {categories.map((category) => {
            const categoryItems = travelChecklistItems.filter(
              (item) => item.category === category
            );

            const categoryCompleted = categoryItems.filter((item) =>
              checkedItems.includes(item.id)
            ).length;

            return (
              <section key={category}>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 className="text-3xl font-bold">
                    {category}
                  </h2>

                  <p className="text-sm font-semibold text-slate-500">
                    {categoryCompleted} of {categoryItems.length} complete
                  </p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {categoryItems.map((item) => {
                    const checked = checkedItems.includes(item.id);

                    return (
                      <label
                        key={item.id}
                        className={`flex cursor-pointer items-start gap-4 rounded-[24px] border p-6 transition ${
                          checked
                            ? "border-sky-300 bg-sky-50"
                            : "border-slate-200 bg-white hover:border-sky-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleItem(item.id)}
                          className="mt-1 h-5 w-5"
                        />

                        <div>
                          <p
                            className={`text-lg font-bold ${
                              checked
                                ? "text-slate-500 line-through"
                                : "text-slate-900"
                            }`}
                          >
                            {item.title}
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-14 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            Continue preparing
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/countries/packing"
              className="rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
            >
              Build a packing list
            </Link>

            <Link
              href="/countries/itinerary"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Build an itinerary
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}