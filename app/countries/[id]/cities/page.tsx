import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { countries } from "../../../../data/countries";
import { cities } from "../../../../data/cities";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CountryCitiesPage({ params }: Props) {
  const { id } = await params;

  const country = countries.find((item) => item.id === id);

  if (!country) {
    notFound();
  }

  const countryCities = cities.filter(
    (city) => city.countryId === country.id
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href={`/countries/${country.id}`}
          className="text-sm font-medium text-sky-900 underline underline-offset-4"
        >
          ← Back to {country.name}
        </Link>

        <div className="mt-8">
          <p className="text-4xl">{country.flag}</p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Popular cities in {country.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore cities, local culture, language tips, neighborhoods,
            and highlights across {country.name}.
          </p>
        </div>

        {countryCities.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {countryCities.map((city) => (
              <Link
                key={city.id}
                href={`/countries/${country.id}/cities/${city.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-slate-900 group-hover:text-sky-900">
                    {city.name}
                  </h2>

                  <p className="mt-2 text-base font-medium text-sky-900">
                    {city.tagline}
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    {city.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-sky-900">
                    Explore {city.name} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl bg-white p-8 text-slate-600 shadow-sm">
            City guides for {country.name} are coming soon.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}