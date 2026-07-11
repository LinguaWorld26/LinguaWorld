import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function LanguagesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Learn through culture
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Languages
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Explore structured lessons, pronunciation, grammar, listening,
            vocabulary, and cultural context.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/languages/french"
            className="editorial-card group block"
          >
            <div className="h-64 bg-[linear-gradient(135deg,#175c67,#ddebe7)]" />

            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                Romance language
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                French
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Build confidence in speaking, listening, grammar, vocabulary,
                and everyday communication.
              </p>

              <p className="mt-6 font-semibold text-[var(--ocean)]">
                Start learning →
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}