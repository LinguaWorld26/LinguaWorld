"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { countries } from "../../data/countries";

type FavoriteItem = {
  id: string;
  type: "country" | "language" | "city";
  name: string;
};

const STORAGE_KEY = "linguaworld-favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function loadFavorites() {
      const savedFavorites =
        window.localStorage.getItem(STORAGE_KEY);

      const parsedFavorites: FavoriteItem[] = savedFavorites
        ? JSON.parse(savedFavorites)
        : [];

      setFavorites(parsedFavorites);
      setLoaded(true);
    }

    loadFavorites();

    window.addEventListener(
      "favorites-updated",
      loadFavorites
    );

    return () => {
      window.removeEventListener(
        "favorites-updated",
        loadFavorites
      );
    };
  }, []);

  function removeFavorite(item: FavoriteItem) {
    const updatedFavorites = favorites.filter(
      (favorite) =>
        !(
          favorite.id === item.id &&
          favorite.type === item.type
        )
    );

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedFavorites)
    );

    setFavorites(updatedFavorites);
  }

  const favoriteCountries = favorites
    .filter((favorite) => favorite.type === "country")
    .map((favorite) =>
      countries.find((country) => country.id === favorite.id)
    )
    .filter(
      (country): country is (typeof countries)[number] =>
        Boolean(country)
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
            Your collection
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Favorites
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Keep countries, languages, and cities you want to explore
            together in one place.
          </p>
        </div>

        {!loaded ? (
          <p className="mt-12 text-slate-600">
            Loading your favorites...
          </p>
        ) : favoriteCountries.length === 0 ? (
          <div className="mt-12 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Your favorites are empty
            </h2>

            <p className="mt-3 text-slate-600">
              Save countries that catch your eye and they will appear
              here.
            </p>

            <Link
              href="/countries"
              className="mt-6 inline-block rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
            >
              Explore countries
            </Link>
          </div>
        ) : (
          <section className="mt-14">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold">
                Saved countries
              </h2>

              <p className="text-slate-500">
                {favoriteCountries.length} saved
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {favoriteCountries.map((country) => (
                <article
                  key={country.id}
                  className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={country.image}
                    alt={`${country.name} landscape`}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="text-4xl"
                      >
                        {country.flag}
                      </span>

                      <div>
                        <h3 className="text-2xl font-bold">
                          {country.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {country.capital}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 line-clamp-3 leading-7 text-slate-600">
                      {country.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/countries/${country.id}`}
                        className="rounded-full bg-sky-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                      >
                        Explore
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          removeFavorite({
                            id: country.id,
                            type: "country",
                            name: country.name,
                          })
                        }
                        className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-slate-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}