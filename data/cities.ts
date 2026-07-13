export type City = {
    id: string;
    countryId: string;
    name: string;
    country: string;
    flag: string;
    tagline: string;
    description: string;
    image: string;
    bestTime: string;
    languageTip: string;
    culturalTip: string;
    neighborhoods: string[];
    highlights: string[];
  };
  
  export const cities: City[] = [
    {
      id: "paris",
      countryId: "france",
      name: "Paris",
      country: "France",
      flag: "🇫🇷",
      tagline: "Art, architecture, cafés, and neighborhood life.",
      description:
        "Paris combines famous landmarks with intimate neighborhoods, markets, museums, gardens, and an everyday culture shaped by food, art, and conversation.",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      bestTime: "April to June or September to October",
      languageTip:
        "Begin conversations with bonjour or bonsoir before asking for help.",
      culturalTip:
        "Take time to explore beyond the major monuments. Much of Paris lives in its smaller streets, bakeries, parks, and neighborhood cafés.",
      neighborhoods: ["Le Marais", "Montmartre", "Latin Quarter", "Saint-Germain"],
      highlights: [
        "Louvre Museum",
        "Eiffel Tower",
        "Seine River",
        "Luxembourg Gardens",
      ],
    },
    {
      id: "madrid",
      countryId: "spain",
      name: "Madrid",
      country: "Spain",
      flag: "🇪🇸",
      tagline: "Grand boulevards, late dinners, art, and lively plazas.",
      description:
        "Madrid is an energetic capital known for major art museums, expansive parks, historic neighborhoods, food markets, and social evenings that stretch late into the night.",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
      bestTime: "March to May or September to November",
      languageTip:
        "Use buenos días, buenas tardes, or buenas noches when greeting people.",
      culturalTip:
        "Lunch and dinner are often later than many visitors expect, so plan your day around local meal times.",
      neighborhoods: ["Centro", "Malasaña", "La Latina", "Chueca"],
      highlights: [
        "Prado Museum",
        "Retiro Park",
        "Royal Palace",
        "Plaza Mayor",
      ],
    },
    {
      id: "rome",
      countryId: "italy",
      name: "Rome",
      country: "Italy",
      flag: "🇮🇹",
      tagline: "Ancient history woven into modern city life.",
      description:
        "Rome layers ancient ruins, Renaissance art, busy neighborhoods, fountains, churches, markets, and restaurants into one sprawling open-air museum.",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80",
      bestTime: "April to June or September to October",
      languageTip:
        "A simple buongiorno, per favore, and grazie will carry you through many interactions.",
      culturalTip:
        "Comfortable walking shoes matter. Many of Rome’s most rewarding streets are paved with uneven stone.",
      neighborhoods: ["Trastevere", "Monti", "Prati", "Testaccio"],
      highlights: [
        "Colosseum",
        "Roman Forum",
        "Trevi Fountain",
        "Vatican Museums",
      ],
    },
    {
      id: "berlin",
      countryId: "germany",
      name: "Berlin",
      country: "Germany",
      flag: "🇩🇪",
      tagline: "History, creativity, nightlife, and reinvention.",
      description:
        "Berlin is a spacious and constantly evolving city shaped by modern history, contemporary art, music, diverse neighborhoods, and abundant green space.",
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=80",
      bestTime: "May to September or December for holiday markets",
      languageTip:
        "Guten Tag is useful in formal settings, while Hallo works well casually.",
      culturalTip:
        "Carry a little cash because some cafés, restaurants, and smaller businesses may not accept cards.",
      neighborhoods: ["Mitte", "Kreuzberg", "Neukölln", "Prenzlauer Berg"],
      highlights: [
        "Brandenburg Gate",
        "Museum Island",
        "East Side Gallery",
        "Tiergarten",
      ],
    },
    {
      id: "moscow",
      countryId: "russia",
      name: "Moscow",
      country: "Russia",
      flag: "🇷🇺",
      tagline: "Monumental architecture, culture, and layered history.",
      description:
        "Moscow is a vast capital known for ornate architecture, major museums, performance traditions, broad avenues, historic squares, and an elaborate metro system.",
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1400&q=80",
      bestTime: "May to September",
      languageTip:
        "Здравствуйте is a polite greeting, while Привет is better for informal situations.",
      culturalTip:
        "The metro is both transportation and architecture. Allow time to look at the stations rather than rushing through them.",
      neighborhoods: ["Arbat", "Tverskoy", "Zamoskvorechye", "Khamovniki"],
      highlights: [
        "Red Square",
        "The Kremlin",
        "Bolshoi Theatre",
        "Tretyakov Gallery",
      ],
    },
    {
      id: "tokyo",
      countryId: "japan",
      name: "Tokyo",
      country: "Japan",
      flag: "🇯🇵",
      tagline: "Neon energy, quiet temples, design, and precision.",
      description:
        "Tokyo is an enormous collection of distinct neighborhoods, blending advanced technology, traditional shrines, fashion, food, gardens, and remarkably efficient transportation.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80",
      bestTime: "March to May or October to November",
      languageTip:
        "Sumimasen is extremely useful for politely getting attention, apologizing, or asking for help.",
      culturalTip:
        "Keep your voice low on trains and avoid blocking walkways while checking maps or messages.",
      neighborhoods: ["Shibuya", "Shinjuku", "Asakusa", "Ginza"],
      highlights: [
        "Meiji Shrine",
        "Senso-ji Temple",
        "Shibuya Crossing",
        "Tokyo National Museum",
      ],
    },
    {
      id: "cairo",
      countryId: "egypt",
      name: "Cairo",
      country: "Egypt",
      flag: "🇪🇬",
      tagline: "Ancient wonders and modern life along the Nile.",
      description:
        "Cairo is a dense and dynamic city where historic mosques, markets, museums, neighborhoods, and modern urban life unfold near the Nile and the Giza pyramids.",
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1400&q=80",
      bestTime: "October to April",
      languageTip:
        "Shukran means thank you, and marhaban is a useful general greeting.",
      culturalTip:
        "Dress modestly when entering mosques and traditional areas, and follow posted photography rules.",
      neighborhoods: ["Zamalek", "Downtown Cairo", "Islamic Cairo", "Coptic Cairo"],
      highlights: [
        "Egyptian Museum",
        "Khan el-Khalili",
        "Al-Azhar Mosque",
        "Giza Pyramids",
      ],
    },
  ];
  
  export function findCity(countryId: string, cityId: string) {
    return cities.find(
      (city) =>
        city.countryId === countryId &&
        city.id === cityId
    );
  }
  
  export function getCitiesByCountry(countryId: string) {
    return cities.filter(
      (city) => city.countryId === countryId
    );
  }