import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import PronunciationButton from "../../../../components/PronunciationButton";
import { countryPhrasebooks } from "../../../../data/countryPhrasebooks";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const categories = [
  "Basics",
  "Food",
  "Directions",
  "Emergency",
] as const;

export default async function CountryPhrasebookPage({
  params,
}: Props) {
  const { id } = await params;
  const phrasebook = countryPhrasebooks[id];

  if (!phrasebook) {
    notFound();
  }

  const isRightToLeft =
    phrasebook.direction === "rtl";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <Link
          href={`/countries/${phrasebook.countryId}`}
          className="font-semibold text-sky-800"
        >
          ← Back to {phrasebook.countryName}
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
            Travel phrasebook
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Essential {phrasebook.languageName} phrases
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Practical words and phrases for traveling through{" "}
            {phrasebook.countryName}.
          </p>

          <p className="mt-4 font-semibold text-sky-800">
            {phrasebook.nativeLanguageName}
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {categories.map((category) => {
            const categoryPhrases =
              phrasebook.phrases.filter(
                (phrase) =>
                  phrase.category === category
              );

            if (categoryPhrases.length === 0) {
              return null;
            }

            return (
              <section key={category}>
                <h2 className="text-3xl font-bold">
                  {category}
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {categoryPhrases.map((phrase) => (
                    <article
                      key={phrase.phrase}
                      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <p
                        dir={
                          isRightToLeft
                            ? "rtl"
                            : "ltr"
                        }
                        lang={
                          isRightToLeft
                            ? "ar"
                            : undefined
                        }
                        className={`text-2xl font-bold ${
                          isRightToLeft
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {phrase.phrase}
                      </p>

                      <p
                        dir="ltr"
                        className="mt-3 text-left text-slate-600"
                      >
                        {phrase.translation}
                      </p>

                      <div className="mt-5">
                        <PronunciationButton
                          text={phrase.phrase}
                          language={
                            phrasebook.speechLanguage
                          }
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}