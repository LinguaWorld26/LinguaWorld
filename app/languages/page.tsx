import Link from "next/link";
import Navbar from "../../components/Navbar";

const upcomingLanguages = [
  {
    name: "Spanish",
    family: "Romance language",
    gradient: "bg-[linear-gradient(135deg,#b84a3a,#f1c7a5)]",
    href: "/languages/spanish/a1",
    available: true,
  },
  {
    name: "Italian",
    family: "Romance language",
    gradient: "bg-[linear-gradient(135deg,#2f6f4e,#e8efe7)]",
    href: "#",
    available: false,
  },
  {
    name: "Japanese",
    family: "Japonic language",
    gradient: "bg-[linear-gradient(135deg,#9b3f4a,#f5e6e7)]",
    href: "#",
    available: false,
  },
  {
    name: "Arabic",
    family: "Semitic language",
    gradient: "bg-[linear-gradient(135deg,#8a6834,#efe2c4)]",
    href: "#",
    available: false,
  },
  {
    name: "Russian",
    family: "Slavic language",
    gradient: "bg-[linear-gradient(135deg,#355b8a,#dde7f2)]",
    href: "#",
    available: false,
  },
  {
    name: "German",
    family: "Germanic language",
    gradient: "bg-[linear-gradient(135deg,#55504d,#e7dfd8)]",
    href: "#",
    available: false,
  },
];

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
            className="editorial-card group block overflow-hidden"
          >
            <div className="h-64 bg-[linear-gradient(135deg,#175c67,#ddebe7)]" />

            <div className="p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                  Romance language
                </p>

                <span className="rounded-full border border-[var(--ocean)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ocean)]">
                  Available
                </span>
              </div>

              <h2 className="mt-3 text-3xl font-semibold">French</h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Build confidence in speaking, listening, grammar, vocabulary,
                and everyday communication.
              </p>

              <p className="mt-6 font-semibold text-[var(--ocean)]">
                Start learning →
              </p>
            </div>
          </Link>

          {upcomingLanguages.map((language) =>
            language.available ? (
              <Link
                key={language.name}
                href={language.href}
                className="editorial-card group block overflow-hidden"
              >
                <div className={`h-64 ${language.gradient}`} />

                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                      {language.family}
                    </p>

                    <span className="rounded-full border border-[var(--ocean)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ocean)]">
                      Available
                    </span>
                  </div>

                  <h2 className="mt-3 text-3xl font-semibold">
                    {language.name}
                  </h2>

                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    Lessons, pronunciation, culture, and learning resources are
                    ready to explore.
                  </p>

                  <p className="mt-6 font-semibold text-[var(--ocean)]">
                    Start learning →
                  </p>
                </div>
              </Link>
            ) : (
              <article
                key={language.name}
                className="editorial-card overflow-hidden opacity-75"
              >
                <div className={`h-64 ${language.gradient}`} />

                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
                      {language.family}
                    </p>

                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                      Coming soon
                    </span>
                  </div>

                  <h2 className="mt-3 text-3xl font-semibold">
                    {language.name}
                  </h2>

                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    Lessons, pronunciation, culture, and learning resources
                    will be added here.
                  </p>

                  <p className="mt-6 font-semibold text-[var(--muted)]">
                    In development
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </main>
  );
}