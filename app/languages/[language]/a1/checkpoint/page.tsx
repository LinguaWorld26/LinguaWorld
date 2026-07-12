import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../../components/Navbar";
import LanguageA1CheckpointQuiz from "../../../../../components/LanguageA1CheckpointQuiz";
import { a1Checkpoints } from "../../../../../data/a1Checkpoints";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export default async function SharedA1CheckpointPage({
  params,
}: Props) {
  const { language } = await params;
  const checkpoint = a1Checkpoints[language];

  if (!checkpoint) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href={`/languages/${language}/a1`}
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to {checkpoint.languageName} A1
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            {checkpoint.languageName} A1 Checkpoint
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Test your foundations.
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Review greetings, pronunciation, numbers, personal information,
            and everyday questions.
          </p>
        </div>

        <LanguageA1CheckpointQuiz checkpoint={checkpoint} />
      </section>
    </main>
  );
}