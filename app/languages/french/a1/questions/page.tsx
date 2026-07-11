import LessonCompleteButton from "../../../../../components/LessonCompleteButton";
import Link from "next/link";
import Navbar from "../../../../../components/Navbar";
import PronunciationButton from "../../../../../components/PronunciationButton";
import QuestionsPractice from "../../../../../components/QuestionsPractice";

const questions = [
  {
    french: "Qui est-ce ?",
    english: "Who is it?",
  },
  {
    french: "Qu’est-ce que c’est ?",
    english: "What is it?",
  },
  {
    french: "Où habitez-vous ?",
    english: "Where do you live? Formal",
  },
  {
    french: "Quand partez-vous ?",
    english: "When are you leaving? Formal",
  },
  {
    french: "Pourquoi apprenez-vous le français ?",
    english: "Why are you learning French? Formal",
  },
  {
    french: "Comment allez-vous ?",
    english: "How are you? Formal",
  },
];

export default function QuestionsLessonPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <LessonCompleteButton lessonId="french-a1-questions" />
      <section className="page-container section-spacing">
        <Link
          href="/languages/french/a1"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to French A1
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Lesson 04
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Everyday questions
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Learn the essential question words you need for simple French
            conversations.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Essential questions</h2>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {questions.map((question) => (
              <div
                key={question.french}
                className="grid gap-4 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center"
              >
                <p className="text-2xl font-semibold">{question.french}</p>

                <p className="text-lg text-[var(--muted)]">
                  {question.english}
                </p>

                <PronunciationButton text={question.french} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
  <h2 className="text-4xl font-semibold">Try it</h2>
  <QuestionsPractice />
</section>
      </section>
    </main>
  );
}