"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { countries } from "../data/countries";

type SearchItem = {
  name: string;
  type: "Country" | "Language" | "City";
  href: string;
  detail?: string;
};

const languages: SearchItem[] = [
  {
    name: "French",
    type: "Language",
    href: "/languages/french",
    detail: "Français",
  },
  {
    name: "Spanish",
    type: "Language",
    href: "/languages/spanish/a1",
    detail: "Español",
  },
  {
    name: "Italian",
    type: "Language",
    href: "/languages/italian/a1",
    detail: "Italiano",
  },
  {
    name: "German",
    type: "Language",
    href: "/languages/german/a1",
    detail: "Deutsch",
  },
  {
    name: "Russian",
    type: "Language",
    href: "/languages/russian/a1",
    detail: "Русский",
  },
  {
    name: "Japanese",
    type: "Language",
    href: "/languages/japanese/a1",
    detail: "日本語",
  },
  {
    name: "Arabic",
    type: "Language",
    href: "/languages/arabic/a1",
    detail: "العربية",
  },
];

const cities: SearchItem[] = [
  {
    name: "Paris",
    type: "City",
    href: "/countries/france/cities/paris",
    detail: "France",
  },
  {
    name: "Lyon",
    type: "City",
    href: "/countries/france",
    detail: "France",
  },
  {
    name: "Madrid",
    type: "City",
    href: "/countries/spain/cities/madrid",
    detail: "Spain",
  },
  {
    name: "Barcelona",
    type: "City",
    href: "/countries/spain",
    detail: "Spain",
  },
  {
    name: "Rome",
    type: "City",
    href: "/countries/italy/cities/rome",
    detail: "Italy",
  },
  {
    name: "Florence",
    type: "City",
    href: "/countries/italy",
    detail: "Italy",
  },
  {
    name: "Berlin",
    type: "City",
    href: "/countries/germany/cities/berlin",
    detail: "Germany",
  },
  {
    name: "Munich",
    type: "City",
    href: "/countries/germany",
    detail: "Germany",
  },
  {
    name: "Moscow",
    type: "City",
    href: "/countries/russia/cities/moscow",
    detail: "Russia",
  },
  {
    name: "Saint Petersburg",
    type: "City",
    href: "/countries/russia",
    detail: "Russia",
  },
  {
    name: "Tokyo",
    type: "City",
    href: "/countries/japan/cities/tokyo",
    detail: "Japan",
  },
  {
    name: "Kyoto",
    type: "City",
    href: "/countries/japan",
    detail: "Japan",
  },
  {
    name: "Cairo",
    type: "City",
    href: "/countries/egypt/cities/cairo",
    detail: "Egypt",
  },
  {
    name: "Alexandria",
    type: "City",
    href: "/countries/egypt",
    detail: "Egypt",
  },
];

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const countryItems: SearchItem[] = countries.map((country) => ({
    name: country.name,
    type: "Country",
    href: `/countries/${country.id}`,
    detail: country.capital,
  }));

  const searchItems = [...countryItems, ...languages, ...cities];

  const results = useMemo(() => {
    const cleanedQuery = query.trim().toLowerCase();

    if (!cleanedQuery) {
      return [];
    }

    return searchItems
      .filter((item) => {
        const searchableText = [
          item.name,
          item.type,
          item.detail ?? "",
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(cleanedQuery);
      })
      .slice(0, 8);
  }, [query]);

  const showResults = isFocused && query.trim().length > 0;

  return (
    <div className="relative w-full">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          window.setTimeout(() => setIsFocused(false), 150);
        }}
        placeholder="Search countries, languages, or cities..."
        className="w-full rounded-full border border-slate-300 bg-white px-6 py-5 text-lg shadow-md outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
        aria-label="Search LinguaWorld"
        autoComplete="off"
      />

      {showResults && (
        <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-50 overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-xl">
          {results.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {results.map((result) => (
                <Link
                  key={`${result.type}-${result.name}`}
                  href={result.href}
                  className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-sky-50"
                >
                  <div>
                    <p className="font-semibold text-slate-900">
                      {result.name}
                    </p>

                    {result.detail && (
                      <p className="mt-1 text-sm text-slate-500">
                        {result.detail}
                      </p>
                    )}
                  </div>

                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-900">
                    {result.type}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-6 py-5">
              <p className="font-semibold text-slate-900">
                No results found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Try searching for a country, language, or major city.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}