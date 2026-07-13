import Link from "next/link";
import { countries } from "../data/countries";
import type { CountryMood } from "../data/countryMoods";

type CountryMoodCardProps = {
  mood: CountryMood;
};

export default function CountryMoodCard({
  mood,
}: CountryMoodCardProps) {
  const matchingCountries = mood.countryIds
    .map((countryId) =>
      countries.find((country) => country.id === countryId)
    )
    .filter(
      (country): country is (typeof countries)[number] =>
        Boolean(country)
    );

  return (
    <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="text-5xl"
        >
          {mood.emoji}
        </span>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {mood.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {mood.description}
          </p>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {matchingCountries.map((country) => (
          <Link
            key={country.id}
            href={`/countries/${country.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
          >
            <span aria-hidden="true">
              {country.flag}
            </span>

            {country.name}
          </Link>
        ))}
      </div>
    </article>
  );
}