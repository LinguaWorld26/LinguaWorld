import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import LanguageLevelTest from "../../../../components/LanguageLevelTest";
import { languageHomepages } from "../../../../data/languageHomepages";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export default async function LanguageLevelTestPage({
  params,
}: Props) {
  const { language } = await params;
  const page = languageHomepages[language];

  if (!page) {
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
          ← Back to {page.name}
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Placement guide
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Find your {page.name} starting level
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Answer a few questions about your current comfort with{" "}
            {page.name}. Your result will suggest where to begin.
          </p>
        </div>

        <div className="mt-12 max-w-4xl">
          <LanguageLevelTest
            languageId={language}
            languageName={page.name}
          />
        </div>
      </section>
    </main>
  );
}