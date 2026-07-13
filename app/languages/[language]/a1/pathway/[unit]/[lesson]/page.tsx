import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../../../../components/Navbar";
import PronunciationButton from "../../../../../../../components/PronunciationButton";
import LessonCompleteButton from "../../../../../../../components/LessonCompleteButton";
import DetailedLessonQuiz from "../../../../../../../components/DetailedLessonQuiz";
import { a1DetailedLessons } from "../../../../../../../data/a1DetailedLessons";

type Props = {
  params: Promise<{
    language: string;
    unit: string;
    lesson: string;
  }>;
};

export default async function DetailedA1LessonPage({
  params,
}: Props) {
  const { language, unit, lesson } = await params;

  const lessonKey = `${language}-${unit}-${lesson}`;
  const content = a1DetailedLessons[lessonKey];

  if (!content) {
    notFound();
  }

  const isRightToLeft = content.direction === "rtl";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href={`/languages/${language}/a1/pathway`}
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to the A1 pathway
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Unit {content.unitNumber} · Lesson{" "}
            {content.lessonNumber}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            {content.introduction}
          </p>

          <p className="mt-5 text-sm font-semibold text-[var(--muted)]">
            About {content.estimatedMinutes} minutes
          </p>
        </header>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">
            What you will learn
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {content.objectives.map((objective) => (
              <div
                key={objective}
                className="editorial-card flex items-start gap-4 p-5"
              >
                <span
                  aria-hidden="true"
                  className="text-xl text-[var(--ocean)]"
                >
                  ✓
                </span>

                <p className="leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-semibold">
            Vocabulary and sounds
          </h2>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {content.vocabulary.map((item) => (
              <div
                key={item.target}
                className="grid gap-4 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center"
              >
                <div
                  dir={isRightToLeft ? "rtl" : "ltr"}
                  className={
                    isRightToLeft
                      ? "text-right"
                      : "text-left"
                  }
                >
                  <p className="text-2xl font-semibold">
                    {item.target}
                  </p>

                  {item.note && (
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.note}
                    </p>
                  )}
                </div>

                <p
                  dir="ltr"
                  className="text-left text-lg text-[var(--muted)]"
                >
                  {item.translation}
                </p>

                <PronunciationButton
                  text={item.target}
                  language={content.speechLanguage}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-semibold">
            Lesson notes
          </h2>

          <div className="mt-8 grid gap-6">
            {content.notes.map((note) => (
              <article
                key={note.title}
                className="editorial-card p-7"
              >
                <h3 className="text-2xl font-semibold">
                  {note.title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--muted)]">
                  {note.explanation}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {note.examples.map((example) => (
                    <div
                      key={`${note.title}-${example.target}`}
                      className="rounded-2xl border border-[var(--border)] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xl font-semibold">
                            {example.target}
                          </p>

                          <p className="mt-2 text-[var(--muted)]">
                            {example.translation}
                          </p>
                        </div>

                        <PronunciationButton
                          text={example.target}
                          language={content.speechLanguage}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {content.dialogue && (
          <section className="mt-20">
            <h2 className="text-4xl font-semibold">
              Dialogue
            </h2>

            <div className="editorial-card mt-8 divide-y divide-[var(--border)] p-7">
              {content.dialogue.map((line, index) => (
                <div
                  key={`${line.speaker}-${index}`}
                  className="grid gap-4 py-6 md:grid-cols-[120px_1fr_auto] md:items-center"
                >
                  <p className="font-semibold text-[var(--ocean)]">
                    {line.speaker}
                  </p>

                  <div>
                    <p className="text-xl font-semibold">
                      {line.target}
                    </p>

                    <p className="mt-2 text-[var(--muted)]">
                      {line.translation}
                    </p>
                  </div>

                  <PronunciationButton
                    text={line.target}
                    language={content.speechLanguage}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20">
          <h2 className="text-4xl font-semibold">
            Practice
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {content.activities.map((activity) => (
              <article
                key={activity.title}
                className="editorial-card p-7"
              >
                <h3 className="text-2xl font-semibold">
                  {activity.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {activity.instruction}
                </p>

                <div className="mt-6 rounded-2xl border border-[var(--border)] p-5">
                  <p className="font-semibold">
                    {activity.prompt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-card mt-20 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
            Speaking challenge
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Speak without reading
          </h2>

          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            {content.speakingPrompt}
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-semibold">
            Mini quiz
          </h2>

          <div className="mt-8 max-w-4xl">
            <DetailedLessonQuiz questions={content.quiz} />
          </div>
        </section>

        <div className="mt-12 flex flex-wrap items-center gap-4">
  <LessonCompleteButton
    lessonId={`${language}-a1-${unit}-${lesson}`}
  />

  {content.nextUnitId && content.nextLessonId && (
    <Link
      href={`/languages/${language}/a1/pathway/${content.nextUnitId}/${content.nextLessonId}`}
      className="primary-button"
    >
      Continue to next lesson →
    </Link>
  )}
</div>
      </section>
    </main>
  );
}