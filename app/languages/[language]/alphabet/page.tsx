import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import PronunciationButton from "../../../../components/PronunciationButton";
import { alphabetCharts } from "../../../../data/alphabetCharts";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export default async function AlphabetPage({ params }: Props) {
  const { language } = await params;
  const chart = alphabetCharts[language];

  if (!chart) {
    notFound();
  }

  const isRightToLeft = chart.direction === "rtl";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href={`/languages/${language}/a1`}
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to A1
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            {chart.nativeName}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            {chart.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            {chart.introduction}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chart.entries.map((entry) => (
            <article
              key={`${entry.symbol}-${entry.example}`}
              className="editorial-card p-6"
            >
              <div
                dir={isRightToLeft ? "rtl" : "ltr"}
                lang={language === "arabic" ? "ar" : undefined}
                className={isRightToLeft ? "text-right" : "text-left"}
              >
                <p className="text-5xl font-semibold">
                  {entry.symbol}
                </p>

                {entry.name && (
                  <p className="mt-3 text-lg font-semibold text-[var(--ocean)]">
                    {entry.name}
                  </p>
                )}
              </div>

              <div dir="ltr" className="mt-5 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Sound
                </p>

                <p className="mt-1 text-lg">
                  {entry.sound}
                </p>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Example
                </p>

                <p
                  dir={isRightToLeft ? "rtl" : "ltr"}
                  lang={language === "arabic" ? "ar" : undefined}
                  className={`mt-1 text-2xl font-semibold ${
                    isRightToLeft ? "text-right" : "text-left"
                  }`}
                >
                  {entry.example}
                </p>

                <p className="mt-1 text-[var(--muted)]">
                  {entry.translation}
                </p>

                <div className="mt-5">
                  <PronunciationButton
                    text={entry.pronunciationText ?? entry.example}
                    language={chart.speechLanguage}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}