import Navbar from "../../../components/Navbar";

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
              <a className="primary-button">
                Start learning
              </a>

              <button className="secondary-button">
                Take a level test
              </button>
            </div>
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
      Begin with everyday foundations or continue toward confident,
      independent French.
    </p>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <article className="editorial-card p-7">
      <p className="text-sm font-semibold text-[var(--ocean)]">
        A1
      </p>

      <h3 className="mt-3 text-3xl font-semibold">
        Foundations
      </h3>

      <p className="mt-4 leading-7 text-[var(--muted)]">
        Greetings, introductions, pronunciation, numbers, and simple everyday
        sentences.
      </p>

      <button className="mt-7 font-semibold text-[var(--ocean)]">
        Begin A1 →
      </button>
    </article>

    <article className="editorial-card p-7">
      <p className="text-sm font-semibold text-[var(--ocean)]">
        A2
      </p>

      <h3 className="mt-3 text-3xl font-semibold">
        Everyday French
      </h3>

      <p className="mt-4 leading-7 text-[var(--muted)]">
        Talk about routines, travel, food, family, shopping, and familiar
        situations.
      </p>

      <button className="mt-7 font-semibold text-[var(--ocean)]">
        Explore A2 →
      </button>
    </article>

    <article className="editorial-card p-7">
      <p className="text-sm font-semibold text-[var(--ocean)]">
        B1–B2
      </p>

      <h3 className="mt-3 text-3xl font-semibold">
        Independent French
      </h3>

      <p className="mt-4 leading-7 text-[var(--muted)]">
        Hold longer conversations, understand authentic media, and express
        detailed opinions.
      </p>

      <button className="mt-7 font-semibold text-[var(--ocean)]">
        Continue learning →
      </button>
    </article>
  </div>
</section>
        <section className="mt-24">
          <h2 className="text-4xl font-semibold">
            What you can study
          </h2>

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