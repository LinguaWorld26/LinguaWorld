export type Country = {
  id: string;
  name: string;
  flag: string;
  capital: string;
  language: string;
  region: string;
  description: string;
  image: string;
};

export const countries: Country[] = [
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    capital: "Paris",
    language: "French",
    region: "Europe",
    description:
      "France brings together historic cities, regional culture, renowned food, and countless opportunities to experience the French language.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    capital: "Tokyo",
    language: "Japanese",
    region: "Asia",
    description:
      "Japan blends ancient traditions, modern cities, regional cuisine, and a language shaped by rich cultural context.",
    image:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    capital: "Cairo",
    language: "Arabic",
    region: "Africa",
    description:
      "Egypt offers ancient history, major cities, desert landscapes, and the living rhythms of Arabic-speaking culture.",
      image:
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/All_Gizah_Pyramids.jpg?width=1800",
  },
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    capital: "Madrid",
    language: "Spanish",
    region: "Europe",
    description:
      "Spain combines lively cities, Mediterranean landscapes, regional traditions, and diverse ways to experience the Spanish language.",
    image:
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    capital: "Rome",
    language: "Italian",
    region: "Europe",
    description:
      "Italy offers historic cities, celebrated cuisine, artistic heritage, and regional cultures that bring the Italian language to life.",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    capital: "Berlin",
    language: "German",
    region: "Europe",
    description:
      "Germany connects historic towns, modern cities, varied landscapes, and a rich cultural setting for learning German.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "russia",
    name: "Russia",
    flag: "🇷🇺",
    capital: "Moscow",
    language: "Russian",
    region: "Europe and Asia",
    description:
      "Russia spans vast landscapes, historic cities, influential art and literature, and a deeply layered Russian-speaking culture.",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1200&q=85",
  },
];