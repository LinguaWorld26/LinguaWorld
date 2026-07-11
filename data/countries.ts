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
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85",
  },
];