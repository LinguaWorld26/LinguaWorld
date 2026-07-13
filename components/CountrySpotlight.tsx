"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { countrySpotlights } from "../data/countrySpotlight";

export default function CountrySpotlight() {
  const [showTip, setShowTip] = useState(false);

  const country = useMemo(() => {
    const dayNumber = Math.floor(Date.now() / 86400000);

    return countrySpotlights[
      dayNumber % countrySpotlights.length
    ];
  }, []);

  return (
    <section className="editorial-card overflow-hidden p-7 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
        Country spotlight
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="text-6xl"
            >
              {country.flag}
            </span>

            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">
                {country.name}
              </h2>

              <p className="mt-2 text-[var(--muted)]">
                Capital: {country.capital}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {country.description}
          </p>

          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              Best time to visit
            </p>

            <p className="mt-2 text-lg font-semibold">
              {country.bestTime}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setShowTip((current) => !current)}
              className="secondary-button"
            >
              {showTip ? "Hide cultural tip" : "Reveal cultural tip"}
            </button>

            <Link
              href={`/countries/${country.id}`}
              className="primary-button inline-block"
            >
              Explore {country.name}
            </Link>
          </div>

          {showTip && (
            <div className="mt-6 rounded-2xl border border-[var(--border)] p-5">
              <p className="font-semibold">
                Cultural tip
              </p>

              <p className="mt-2 leading-7 text-[var(--muted)]">
                {country.culturalTip}
              </p>
            </div>
          )}
        </div>

        <div className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold">
          Changes daily
        </div>
      </div>
    </section>
  );
}