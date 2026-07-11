import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { countries } from "../../../data/countries";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const countryDetails = {
  france: {
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=85",
    description:
      "France blends historic cities, regional traditions, world-famous cuisine, and everyday opportunities to experience the French language.",
    bestTime:
      "May–June and September–October for pleasant weather and lighter crowds.",
    visa:
      "Visitors from many countries can enter the Schengen Area for short stays. Longer study, work, or residence plans may require a specific French visa.",
    culturalTip:
      "A polite greeting matters. Begin interactions with “Bonjour” or “Bonsoir” before asking a question.",
  },
  japan: {
    image:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=85",
    description:
      "Japan brings together ancient traditions, modern cities, regional food, and a language shaped by rich social and cultural context.",
    bestTime:
      "March–May and October–November for mild temperatures and seasonal scenery.",
    visa:
      "Short-stay entry rules depend on nationality. Longer study or work stays generally require an appropriate visa before arrival.",
    culturalTip:
      "Quiet consideration, punctuality, and respect for shared spaces are important parts of everyday life.",
  },
  egypt: {
    image:
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/All_Gizah_Pyramids.jpg?width=1200",
    description:
      "Egypt offers a vivid mix of ancient history, major cities, desert landscapes, and the living rhythms of Arabic-speaking culture.",
    bestTime:
      "October–April, when temperatures are generally cooler and more comfortable.",
    visa:
      "Entry requirements vary by nationality. Some travelers may qualify for an eVisa or visa on arrival.",
    culturalTip:
      "Warm greetings and respectful dress are appreciated, especially in religious and traditional settings.",
  },

  spain: {
    image:
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1800&q=85",
    description:
      "Spain combines lively cities, Mediterranean landscapes, regional traditions, and many opportunities to experience the Spanish language.",
    bestTime:
      "April–June and September–October for pleasant weather and fewer summer crowds.",
    visa:
      "Short-stay entry rules depend on nationality. Longer study, work, or residence plans may require a Spanish visa.",
    culturalTip:
      "Daily schedules often run later than in the United States, especially for meals and social activities.",
  },

  italy: {
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1800&q=85",
    description:
      "Italy brings together historic cities, celebrated food, artistic heritage, and regional cultures that make the Italian language come alive.",
    bestTime:
      "April–June and September–October for comfortable weather and lighter crowds.",
    visa:
      "Short-stay entry rules depend on nationality. Longer study, employment, or residence may require an Italian visa.",
    culturalTip:
      "Greetings and polite conversation are important, especially when entering small shops, cafés, and restaurants.",
  },

  germany: {
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1800&q=85",
    description:
      "Germany connects historic towns, modern cities, varied landscapes, and a rich cultural setting for learning German.",
    bestTime:
      "May–September for warmer weather, or late November–December for seasonal markets.",
    visa:
      "Short-stay entry rules depend on nationality. Longer study, work, or residence plans may require a German visa.",
    culturalTip:
      "Punctuality, planning, and respect for rules are generally valued in everyday situations.",
  },

  russia: {
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1800&q=85",
    description:
      "Russia spans vast landscapes, historic cities, influential literature, and a deeply layered Russian-speaking culture.",
    bestTime:
      "May–September for milder weather, depending on the region and travel conditions.",
    visa:
      "Entry requirements vary significantly by nationality and travel purpose. Travelers should verify current rules before planning a trip.",
    culturalTip:
      "Polite greetings and respectful behavior are important, especially in formal or traditional settings.",
  },
};

export default async function CountryPage({ params }: Props) {
  const { id } = await params;

  const country = countries.find((item) => item.id === id);
  const details =
    countryDetails[id as keyof typeof countryDetails];

  if (!country || !details) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section
        className="relative h-[430px] bg-cover bg-center md:h-[560px]"
        style={{ backgroundImage: `url(${details.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-12 md:px-10 md:pb-16">
          <div className="text-white">
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl">
                {country.flag}
              </span>

              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                {country.name}
              </h1>
            </div>

            <p className="mt-4 text-xl text-white/90 md:text-2xl">
              {country.language}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <p className="max-w-5xl text-2xl leading-10 text-slate-700 md:text-3xl md:leading-[1.55]">
          {details.description}
        </p>

        <div className="mt-14 grid gap-10 border-b border-slate-200 pb-14 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
              Capital
            </p>
            <p className="mt-3 text-3xl font-semibold">
              {country.capital}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
              Best time to visit
            </p>
            <p className="mt-3 max-w-xl text-2xl leading-9 text-slate-700">
              {details.bestTime}
            </p>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          <section className="grid gap-6 py-12 md:grid-cols-[280px_1fr]">
            <h2 className="text-2xl font-semibold">
              Visa information
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              {details.visa}
            </p>
          </section>

          <section className="grid gap-6 py-12 md:grid-cols-[280px_1fr]">
            <h2 className="text-2xl font-semibold">
              Cultural tip
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              {details.culturalTip}
            </p>
          </section>

          <section className="grid gap-6 py-12 md:grid-cols-[280px_1fr]">
            <h2 className="text-2xl font-semibold">
              Explore next
            </h2>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg">
              <a className="underline underline-offset-4" href="#">
                Popular cities
              </a>

              <a className="underline underline-offset-4" href="#">
                Language resources
              </a>

              <a className="underline underline-offset-4" href="#">
                Culture and etiquette
              </a>

              <a className="underline underline-offset-4" href="#">
                Travel planning
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}