export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          🌍 LinguaWorld
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-600">
          Explore languages, cultures, and countries all in one place.
          Learn a language, discover the world, and connect beyond borders.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-black px-8 py-3 text-white transition hover:opacity-80">
            Explore Languages
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-3 transition hover:bg-gray-100">
            Discover Countries
          </button>
        </div>
      </section>
    </main>
  );
}