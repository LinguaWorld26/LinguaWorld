import Link from "next/link";
import Navbar from "../../../../../components/Navbar";
import A1CheckpointQuiz from "../../../../../components/A1CheckpointQuiz";

export default function A1CheckpointPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href="/languages/french/a1"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to French A1
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            A1 Checkpoint
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Test your foundations.
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Review greetings, pronunciation, numbers, personal information,
            and everyday questions.
          </p>
        </div>

        <A1CheckpointQuiz />
      </section>
    </main>
  );
}