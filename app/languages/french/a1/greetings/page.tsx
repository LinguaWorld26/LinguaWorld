import Link from "next/link";
import Navbar from "../../../../../components/Navbar";
import PronunciationButton from "../../../../../components/PronunciationButton";
import GreetingsQuiz from "../../../../../components/GreetingsQuiz";
import LessonCompleteButton from "../../../../../components/LessonCompleteButton";

const phrases = [
  {
    french: "Bonjour",
    english: "Hello / Good morning",
  },
  {
    french: "Bonsoir",
    english: "Good evening",
  },
  {
    french: "Salut",
    english: "Hi / Bye, informal",
  },
  {
    french: "Je m’appelle…",
    english: "My name is…",
  },
  {
    french: "Comment vous appelez-vous ?",
    english: "What is your name? Formal",
  },
  {
    french: "Enchanté(e)",
    english: "Nice to meet you",
  },
];

export default function GreetingsLessonPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <LessonCompleteButton lessonId="french-a1-greetings" />
      <section className="page-container section-spacing">
        <Link
          href="/languages/french/a1"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to French A1
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Lesson 01
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Greetings and introductions
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Learn the first phrases you need to greet someone and introduce
            yourself naturally in French.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Essential phrases</h2>

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

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Practice</h2>

          <div className="editorial-card mt-8 p-8">
            <p className="text-lg leading-8">
              Complete this introduction:
            </p>

            <p className="mt-5 text-2xl font-semibold">
              Bonjour, je m’appelle ________. Enchanté(e).
            </p>
          </div>

          <GreetingsQuiz />
        </section>
      </section>
    </main>
  );
}