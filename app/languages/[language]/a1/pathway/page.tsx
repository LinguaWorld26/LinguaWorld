import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../../components/Navbar";
import { a1UnitCourses } from "../../../../../data/a1Units";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export default async function A1PathwayPage({
  params,
}: Props) {
  const { language } = await params;
  const course = a1UnitCourses[language];

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

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            {course.nativeName} · A1
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Your complete A1 pathway
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Build practical beginner skills through pronunciation,
            vocabulary, grammar, listening, speaking, and everyday
            cultural situations.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {course.units.map((unit) => (
            <article
              key={unit.id}
              className="editorial-card overflow-hidden"
            >
              <div className="border-b border-[var(--border)] p-7 md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                      Unit {unit.number}
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                      {unit.title}
                    </h2>

                    <p className="mt-4 leading-7 text-[var(--muted)]">
                      {unit.description}
                    </p>
                  </div>

                  <span className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--muted)]">
                    {unit.lessons.length}{" "}
                    {unit.lessons.length === 1
                      ? "lesson"
                      : "lessons"}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[var(--border)]">
                {unit.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="grid gap-5 p-7 md:grid-cols-[60px_1fr_auto] md:items-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-semibold text-sky-900">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {lesson.title}
                      </h3>

                      <p className="mt-2 leading-7 text-[var(--muted)]">
                        {lesson.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {lesson.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:text-right">
                      <p className="text-sm text-[var(--muted)]">
                        About {lesson.estimatedMinutes} minutes
                      </p>

                      <Link
                        href={`/languages/${language}/a1/pathway/${unit.id}/${lesson.id}`}
                        className="mt-3 inline-block font-semibold text-[var(--ocean)]"
                      >
                        Open lesson →
                     </Link>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href={`/languages/${language}/alphabet`}
            className="secondary-button"
          >
            Alphabet and sounds
          </Link>

          <Link
            href={`/languages/${language}/a1/checkpoint`}
            className="primary-button"
          >
            Take the A1 checkpoint
          </Link>
        </div>
      </section>
    </main>
  );
}