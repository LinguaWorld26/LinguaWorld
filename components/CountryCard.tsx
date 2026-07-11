import Link from "next/link";

type CountryCardProps = {
  id: string;
  flag: string;
  country: string;
  capital: string;
  language: string;
  description: string;
  image: string;
};

export default function CountryCard({
  id,
  flag,
  country,
  capital,
  language,
  description,
  image,
}: CountryCardProps) {
  return (
    <Link
      href={`/countries/${id}`}
      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{flag}</span>

            <h3 className="text-3xl font-semibold">
              {country}
            </h3>
          </div>

          <p className="mt-3 text-lg text-white/90">
            {language}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-lg leading-8 text-slate-600">
          {description}
        </p>

        <p className="mt-5 font-medium text-slate-500">
          Capital: {capital}
        </p>
      </div>
    </Link>
  );
}