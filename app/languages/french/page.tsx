import Link from "next/link";
import Navbar from "../../../components/Navbar";
import FrenchRecommendedLevel from "../../../components/FrenchRecommendedLevel";
import ContinueFrench from "../../../components/ContinueFrench";

const upcomingLevels = [
  {
    level: "A2",
    title: "Everyday French",
    description:
      "Talk about routines, travel, food, family, shopping, and familiar situations.",
  },
  {
    level: "B1",
    title: "Confident Conversations",
    description:
      "Handle common situations, describe experiences, and explain your opinions.",
  },
  {
    level: "B2",
    title: "Independent French",
    description:
      "Follow authentic media, discuss complex topics, and communicate with more detail.",
  },
  {
    level: "C1",
    title: "Advanced Expression",
    description:
      "Use French flexibly for academic, professional, and social communication.",
  },
  {
    level: "C2",
    title: "Mastery",
    description:
      "Understand subtle meaning and express yourself naturally with precision.",
  },
];

export default function FrenchPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
              French
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              Learn French through real life.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--muted)]">
              Build confidence in speaking, listening, grammar, vocabulary,
              pronunciation, and cultural understanding.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
  <Link href="/languages/french/a1" className="primary-button">
    Start learning
  </Link>

  <Link
    href="/languages/french/level-test"
    className="secondary-button"
  >
    Take a level test
  </Link>
</div>

<FrenchRecommendedLevel />

<ContinueFrench />

          </div>

          <div className="editorial-card min-h-[360px] bg-[linear-gradient(145deg,#ddebe7,#e7d8bd)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
              Your French pathway
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-[var(--muted)]">Beginner</p>
                <p className="mt-1 text-2xl font-semibold">A1–A2</p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">Intermediate</p>
                <p className="mt-1 text-2xl font-semibold">B1–B2</p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">Advanced</p>
                <p className="mt-1 text-2xl font-semibold">C1–C2</p>
              </div>
            </div>
          </div>
        </div>

        <section id="levels" className="mt-24 scroll-mt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
              Choose your level
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Follow a path that matches where you are.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Begin with everyday foundations and continue toward advanced,
              independent French.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="editorial-card p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-[var(--ocean)]">
                  A1
                </p>

                <span className="rounded-full border border-[var(--ocean)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ocean)]">
                  Available
                </span>
              </div>

              <h3 className="mt-3 text-3xl font-semibold">Foundations</h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Greetings, introductions, pronunciation, numbers, and simple
                everyday sentences.
              </p>

              <Link
                href="/languages/french/a1"
                className="mt-7 inline-block font-semibold text-[var(--ocean)]"
              >
                Begin A1 →
              </Link>
            </article>

            {upcomingLevels.map((level) => (
              <article
                key={level.level}
                className="editorial-card p-7 opacity-75"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-[var(--ocean)]">
                    {level.level}
                  </p>

                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Coming soon
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-semibold">{level.title}</h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {level.description}
                </p>

                <p className="mt-7 font-semibold text-[var(--muted)]">
                  In development
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-4xl font-semibold">What you can study</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Speaking",
              "Listening",
              "Pronunciation",
              "Vocabulary",
              "Grammar",
              "Culture",
            ].map((topic) => (
              <div key={topic} className="editorial-card p-7">
                <h3 className="text-2xl font-semibold">{topic}</h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  Structured lessons, examples, and practice designed to help
                  you use French naturally.
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}