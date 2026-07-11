import LessonCompleteButton from "../../../../../components/LessonCompleteButton";
import Link from "next/link";
import Navbar from "../../../../../components/Navbar";
import PronunciationButton from "../../../../../components/PronunciationButton";
const numbers = [
  { french: "zéro", english: "zero" },
  { french: "un", english: "one" },
  { french: "deux", english: "two" },
  { french: "trois", english: "three" },
  { french: "quatre", english: "four" },
  { french: "cinq", english: "five" },
  { french: "six", english: "six" },
  { french: "sept", english: "seven" },
  { french: "huit", english: "eight" },
  { french: "neuf", english: "nine" },
  { french: "dix", english: "ten" },
];

const phrases = [
  {
    french: "J’ai vingt-deux ans.",
    english: "I am twenty-two years old.",
  },
  {
    french: "Mon numéro de téléphone est…",
    english: "My phone number is…",
  },
  {
    french: "Je suis française.",
    english: "I am French.",
  },
  {
    french: "J’habite à Paris.",
    english: "I live in Paris.",
  },
];

export default function NumbersLessonPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <LessonCompleteButton lessonId="french-a1-numbers" />
      <section className="page-container section-spacing">
        <Link
          href="/languages/french/a1"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to French A1
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Lesson 03
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Numbers and personal information
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Learn basic numbers and use them to share simple information about
            yourself.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Numbers 0–10</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {numbers.map((number) => (
              <article
                key={number.french}
                className="editorial-card flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <p className="text-2xl font-semibold">{number.french}</p>
                  <p className="mt-1 text-[var(--muted)]">{number.english}</p>
                </div>

                <PronunciationButton text={number.french} />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Personal information</h2>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {phrases.map((phrase) => (
              <div
                key={phrase.french}
                className="grid gap-4 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center"
              >
                <p className="text-2xl font-semibold">{phrase.french}</p>

                <p className="text-lg text-[var(--muted)]">
                  {phrase.english}
                </p>

                <PronunciationButton text={phrase.french} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}