import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import PronunciationButton from "../../../../components/PronunciationButton";
import { verbCharts } from "../../../../data/verbCharts";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export default async function VerbChartsPage({
  params,
}: Props) {
  const { language } = await params;
  const course = verbCharts[language];

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href={`/languages/${language}`}
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to {course.languageName}
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            {course.nativeName} grammar
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Verb conjugation charts
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            {course.introduction}
          </p>
        </header>

        <nav className="mt-12 flex flex-wrap gap-3">
          {course.verbs.map((verb) => (
            <a
              key={verb.infinitive}
              href={`#${verb.infinitive}`}
              className="secondary-button"
            >
              {verb.infinitive}
            </a>
          ))}
        </nav>

        <div className="mt-20 space-y-24">
          {course.verbs.map((verb) => (
            <section
              key={verb.infinitive}
              id={verb.infinitive}
              className="scroll-mt-28"
            >
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                    {verb.group}
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                    {verb.infinitive}
                  </h2>

                  <p className="mt-3 text-xl text-[var(--muted)]">
                    {verb.translation}
                  </p>
                </div>

                <PronunciationButton
                  text={verb.infinitive}
                  language={course.speechLanguage}
                />
              </div>

              <div className="mt-10 grid gap-8">
                {verb.charts.map((chart) => (
                  <article
                    key={chart.id}
                    className="editorial-card overflow-hidden"
                  >
                    <div className="border-b border-[var(--border)] p-7">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                        {chart.mood}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold">
                        {chart.tense}
                      </h3>

                      <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
                        {chart.explanation}
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[680px] border-collapse">
                        <thead>
                          <tr className="border-b border-[var(--border)] bg-black/5 text-left">
                            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                              Subject
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                              Conjugation
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                              Meaning
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                              Audio
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {chart.rows.map((row) => (
                            <tr
                              key={`${chart.id}-${row.subject}`}
                              className="border-b border-[var(--border)] last:border-b-0"
                            >
                              <td className="px-6 py-5 font-semibold">
                                {row.subject}
                              </td>

                              <td className="px-6 py-5 text-xl font-semibold text-[var(--ocean)]">
                                {row.form}
                              </td>

                              <td className="px-6 py-5 text-[var(--muted)]">
                                {row.translation}
                              </td>

                              <td className="px-6 py-5">
                                <PronunciationButton
                                  text={row.form}
                                  language={course.speechLanguage}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}