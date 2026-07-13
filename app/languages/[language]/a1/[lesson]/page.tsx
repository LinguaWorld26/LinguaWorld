import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../../components/Navbar";
import PronunciationButton from "../../../../../components/PronunciationButton";
import LessonCompleteButton from "../../../../../components/LessonCompleteButton";
import { a1LessonContent } from "../../../../../data/a1LessonContent";

type Props = {
  params: Promise<{
    language: string;
    lesson: string;
  }>;
};

const speechLanguages: Record<string, string> = {
  spanish: "es-ES",
  italian: "it-IT",
  german: "de-DE",
  russian: "ru-RU",
  japanese: "ja-JP",
  arabic: "ar-SA",
};

export default async function SharedA1LessonPage({ params }: Props) {
  const { language, lesson } = await params;

  const isRightToLeft = language === "arabic";

  const contentKey = `${language}-${lesson}`;
  const content = a1LessonContent[contentKey];

  if (!content) {
    notFound();
  }

  const speechLanguage = speechLanguages[language] || "en-US";

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

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Lesson {content.number}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            {content.introduction}
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">
            {content.sectionTitle}
          </h2>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {content.phrases.map((phrase) => (
              <div
                key={phrase.target}
                className="grid gap-4 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center"
              >
                <p
  dir={isRightToLeft ? "rtl" : "ltr"}
  lang={language === "arabic" ? "ar" : undefined}
  className={`text-xl font-semibold ${
    isRightToLeft ? "text-right" : "text-left"
  }`}
>
  {phrase.target}
</p>

                <p 
                dir="ltr"
                className="text-lg text-[var(--muted)]"
                >
                  {phrase.english}
                </p>

                <PronunciationButton
                  text={phrase.target}
                  language={speechLanguage}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Practice</h2>

          <div
  className={`editorial-card p-6 ${
    isRightToLeft ? "text-right" : "text-left"
  }`}
>
            <p className="text-lg leading-8">
              {content.practiceQuestion}
            </p>

            <p
  dir={isRightToLeft ? "rtl" : "ltr"}
  lang={language === "arabic" ? "ar" : undefined}
  className={`mt-3 text-lg font-semibold ${
    isRightToLeft ? "text-right" : "text-left"
  }`}
>
  {content.practicePrompt}
</p>
          </div>
        </section>

        <LessonCompleteButton
          lessonId={`${language}-a1-${lesson}`}
        />
      </section>
    </main>
  );
}