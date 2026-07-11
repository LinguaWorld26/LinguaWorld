import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import FrenchLevelTest from "../../../../components/FrenchLevelTest";

export default function FrenchLevelTestPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="page-container section-spacing">
        <Link
          href="/languages/french"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to French
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            French level test
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Find your starting point.
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Answer a short set of questions to receive a suggested French
            learning level.
          </p>
        </div>

        <FrenchLevelTest />
      </section>
    </main>
  );
}