export type CountryMood = {
    id: string;
    title: string;
    description: string;
    emoji: string;
    countryIds: string[];
  };
  
  export const countryMoods: CountryMood[] = [
    {
      id: "history-lovers",
      title: "For history lovers",
      description:
        "Ancient landmarks, museums, historic neighborhoods, and stories layered into everyday life.",
      emoji: "🏛️",
      countryIds: ["egypt", "italy", "france", "russia"],
    },
    {
      id: "food-focused",
      title: "For food-focused travelers",
      description:
        "Regional dishes, markets, cafés, bakeries, and meals worth building an itinerary around.",
      emoji: "🍽️",
      countryIds: ["italy", "france", "spain", "japan"],
    },
    {
      id: "city-energy",
      title: "For big-city energy",
      description:
        "Fast-moving capitals, nightlife, shopping, culture, and neighborhoods that never feel still.",
      emoji: "🌆",
      countryIds: ["japan", "france", "germany", "russia"],
    },
    {
      id: "slow-travel",
      title: "For slow travel",
      description:
        "Cafés, scenic streets, long meals, neighborhood wandering, and unhurried afternoons.",
      emoji: "☕",
      countryIds: ["france", "italy", "spain"],
    },
    {
      id: "architecture",
      title: "For architecture lovers",
      description:
        "Castles, temples, palaces, cathedrals, monuments, and cityscapes with serious visual drama.",
      emoji: "🏰",
      countryIds: ["germany", "russia", "italy", "japan"],
    },
    {
      id: "warm-weather",
      title: "For warm-weather seekers",
      description:
        "Sunshine, coastlines, open-air dining, and destinations that feel made for long days outside.",
      emoji: "☀️",
      countryIds: ["spain", "italy", "egypt", "france"],
    },
    {
      id: "art-culture",
      title: "For art and culture",
      description:
        "Museums, performance, design, literature, music, and cultural traditions with deep roots.",
      emoji: "🎭",
      countryIds: ["france", "italy", "germany", "russia", "japan"],
    },
    {
      id: "first-international-trip",
      title: "For a first international trip",
      description:
        "Strong transportation, well-known attractions, useful tourist infrastructure, and plenty to explore.",
      emoji: "🧳",
      countryIds: ["france", "spain", "italy", "japan", "germany"],
    },
  ];