import Link from "next/link";
import Navbar from "../../../../../components/Navbar";
import PronunciationButton from "../../../../../components/PronunciationButton";
import LessonCompleteButton from "../../../../../components/LessonCompleteButton";

const sounds = [
  {
    example: "rouge",
    explanation: "The French R is produced farther back in the throat.",
  },
  {
    example: "tu",
    explanation: "The U sound is made with rounded lips and the tongue forward.",
  },
  {
    example: "bonjour",
    explanation: "The final R is pronounced, but many other final consonants are silent.",
  },
  {
    example: "français",
    explanation: "The ç makes an S sound.",
  },
];

export default function PronunciationLessonPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <LessonCompleteButton lessonId="french-a1-pronunciation" />
      <section className="page-container section-spacing">
        <Link
          href="/languages/french/a1"
          className="font-semibold text-[var(--ocean)]"
        >
          ← Back to French A1
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
            Lesson 02
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            French pronunciation basics
          </h1>

          <p className="mt-6 text-xl leading-8 text-[var(--muted)]">
            Learn several important French sounds and begin training your ear.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Key sounds</h2>

          <div className="mt-8 grid gap-5">
            {sounds.map((sound) => (
              <article
                key={sound.example}
                className="editorial-card grid gap-5 p-7 md:grid-cols-[1fr_2fr_auto] md:items-center"
              >
                <p className="text-3xl font-semibold">{sound.example}</p>

                <p className="text-lg leading-7 text-[var(--muted)]">
                  {sound.explanation}
                </p>

                <PronunciationButton text={sound.example} />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Quick tip</h2>

          <div className="editorial-card mt-8 p-8">
            <p className="text-lg leading-8">
              French pronunciation becomes easier when you imitate complete
              words and phrases instead of practicing isolated letters.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}