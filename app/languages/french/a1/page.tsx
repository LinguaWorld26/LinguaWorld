import Link from "next/link";
import Navbar from "../../../../components/Navbar";

const lessons = [
  {
    number: "01",
    title: "Greetings and introductions",
    description:
      "Say hello, introduce yourself, ask someone’s name, and use polite greetings.",
    href: "/languages/french/a1/greetings",
  },
  {
    number: "02",
    title: "French pronunciation basics",
    description:
      "Learn essential French sounds, silent letters, accents, and rhythm.",
    href: "/languages/french/a1/pronunciation",
  },
  {
    number: "03",
    title: "Numbers and personal information",
    description:
      "Share your age, phone number, nationality, and other basic details.",
    href: "/languages/french/a1/numbers",
  },
  {
    number: "04",
    title: "Everyday questions",
    description:
      "Ask simple questions using who, what, where, when, why, and how.",
    href: "/languages/french/a1/questions",
  },
];

export default function FrenchA1Page() {
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
            French A1
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Build your foundations.
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Start with practical French for introductions, pronunciation,
            everyday questions, and simple conversations.
          </p>
        </div>

        <div className="mt-14 grid gap-5">
          {lessons.map((lesson) => (
            <article
              key={lesson.number}
              className="editorial-card grid gap-5 p-7 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <p className="text-sm font-semibold text-[var(--ocean)]">
                {lesson.number}
              </p>

              <div>
                <h2 className="text-2xl font-semibold">{lesson.title}</h2>

                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {lesson.description}
                </p>
              </div>

              <Link href={lesson.href} className="secondary-button">
                Open lesson
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}