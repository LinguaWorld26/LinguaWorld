export type CountrySpotlight = {
    id: string;
    name: string;
    flag: string;
    capital: string;
    description: string;
    bestTime: string;
    culturalTip: string;
  };
  
  export const countrySpotlights: CountrySpotlight[] = [
    {
      id: "france",
      name: "France",
      flag: "🇫🇷",
      capital: "Paris",
      description:
        "A country of historic cities, Mediterranean coastlines, mountain villages, art, cuisine, and regional traditions.",
      bestTime: "April to June or September to October",
      culturalTip:
        "Begin interactions with bonjour or bonsoir before asking a question.",
    },
    {
      id: "spain",
      name: "Spain",
      flag: "🇪🇸",
      capital: "Madrid",
      description:
        "A vibrant country shaped by regional identities, historic architecture, late evenings, music, food, and coastal landscapes.",
      bestTime: "March to May or September to November",
      culturalTip:
        "Meal times are often later than in the United States, especially dinner.",
    },
    {
      id: "italy",
      name: "Italy",
      flag: "🇮🇹",
      capital: "Rome",
      description:
        "A country filled with ancient cities, artistic treasures, regional cuisines, dramatic coastlines, and lively public squares.",
      bestTime: "April to June or September to October",
      culturalTip:
        "Coffee customs are specific, and cappuccino is usually considered a morning drink.",
    },
    {
      id: "germany",
      name: "Germany",
      flag: "🇩🇪",
      capital: "Berlin",
      description:
        "A country of historic towns, modern cities, forests, castles, cultural festivals, and efficient transportation.",
      bestTime: "May to September or late November to December",
      culturalTip:
        "Punctuality is valued, especially for appointments and organized events.",
    },
    {
      id: "russia",
      name: "Russia",
      flag: "🇷🇺",
      capital: "Moscow",
      description:
        "A vast country spanning Europe and Asia, known for literature, architecture, dramatic landscapes, and layered history.",
      bestTime: "May to September",
      culturalTip:
        "Greetings may be more formal at first, especially with people you do not know.",
    },
    {
      id: "japan",
      name: "Japan",
      flag: "🇯🇵",
      capital: "Tokyo",
      description:
        "A country where advanced cities, historic temples, seasonal traditions, mountain landscapes, and regional cuisine meet.",
      bestTime: "March to May or October to November",
      culturalTip:
        "Quiet behavior is appreciated on public transportation.",
    },
    {
      id: "egypt",
      name: "Egypt",
      flag: "🇪🇬",
      capital: "Cairo",
      description:
        "A country of ancient monuments, desert landscapes, Mediterranean and Red Sea coastlines, and rich modern culture.",
      bestTime: "October to April",
      culturalTip:
        "Dress modestly when visiting religious sites and more traditional areas.",
    },
  ];