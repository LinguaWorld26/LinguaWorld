import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../../components/Navbar";
import FavoriteButton from "../../../../../components/FavoriteButton";
import { findCity } from "../../../../../data/cities";

type Props = {
  params: Promise<{
    id: string;
    city: string;
  }>;
};

export default async function CityPage({ params }: Props) {
  const { id, city: cityId } = await params;
  const city = findCity(id, cityId);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <Link
          href={`/countries/${city.countryId}`}
          className="font-semibold text-sky-800"
        >
          ← Back to {city.country}
        </Link>

        <div className="mt-5">
         <Link
           href={`/countries/${city.countryId}/phrasebook`}
           className="inline-block rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:bg-slate-100"
         >
           Open travel phrasebook
         </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl">
          <img
            src={city.image}
            alt={`${city.name}, ${city.country}`}
            className="h-[420px] w-full object-cover"
          />

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
                  City explorer
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="text-5xl"
                  >
                    {city.flag}
                  </span>

                  <div>
                    <h1 className="text-5xl font-bold md:text-7xl">
                      {city.name}
                    </h1>

                    <p className="mt-2 text-xl text-slate-500">
                      {city.country}
                    </p>
                  </div>
                </div>
              </div>

              <FavoriteButton
                itemId={`${city.countryId}-${city.id}`}
                itemType="city"
                itemName={`${city.name}, ${city.country}`}
              />
            </div>

            <p className="mt-8 text-2xl font-semibold">
              {city.tagline}
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              {city.description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Best time to visit
            </p>

            <p className="mt-3 text-2xl font-bold">
              {city.bestTime}
            </p>
          </article>

          <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Language tip
            </p>

            <p className="mt-3 text-lg leading-8 text-slate-600">
              {city.languageTip}
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-bold">
              Neighborhoods to explore
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {city.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="rounded-full bg-sky-100 px-4 py-2 font-semibold text-sky-900"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-bold">
              City highlights
            </h2>

            <ul className="mt-6 space-y-4">
              {city.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-b border-slate-100 pb-4 text-lg"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-8 rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Cultural note
          </p>

          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">
            {city.culturalTip}
          </p>
        </article>
      </section>
    </main>
  );
}