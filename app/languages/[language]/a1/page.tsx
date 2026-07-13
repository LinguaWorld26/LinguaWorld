import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import LanguageA1Progress from "../../../../components/LanguageA1Progress";
import { a1Courses } from "../../../../data/a1Courses";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export default async function SharedA1Page({ params }: Props) {
  const { language } = await params;
  const course = a1Courses[language];

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href="/languages"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to Languages
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            {course.languageName} A1
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Build your foundations.
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Start learning {course.nativeName} through practical phrases,
            pronunciation, numbers, and everyday questions.
          </p>
        </div>
        
        <LanguageA1Progress
  languageId={language}
  lessonIds={course.lessons.map((lesson) => lesson.id)}
/>

        <div className="mt-14 grid gap-5">
          {course.lessons.map((lesson) => (
            <article
              key={lesson.id}
              className="editorial-card grid gap-5 p-7 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <p className="text-sm font-semibold text-[var(--ocean)]">
                {lesson.number}
              </p>

              <div>
                <h2 className="text-2xl font-semibold">
                  {lesson.title}
                </h2>

                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {lesson.description}
                </p>
              </div>

              <Link
                href={`/languages/${language}/a1/${lesson.id}`}
                className="secondary-button"
              >
                Open lesson
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
  <Link
    href={`/languages/${language}/alphabet`}
    className="secondary-button inline-block"
  >
    View alphabet and sounds
  </Link>

  <Link
    href={`/languages/${language}/a1/checkpoint`}
    className="primary-button inline-block"
  >
    Take the A1 checkpoint
  </Link>
</div>

      </section>
    </main>
  );
}