export type ItineraryDay = {
    title: string;
    morning: string;
    afternoon: string;
    evening: string;
  };
  
  export type CountryItinerary = {
    countryId: string;
    countryName: string;
    city: string;
    days: ItineraryDay[];
  };
  
  export const itineraries: Record<string, CountryItinerary> = {
    france: {
      countryId: "france",
      countryName: "France",
      city: "Paris",
      days: [
        {
          title: "Classic Paris",
          morning: "Walk around the Eiffel Tower and Champ de Mars.",
          afternoon: "Visit the Louvre and stroll through the Tuileries Garden.",
          evening: "Explore Saint-Germain and have dinner nearby.",
        },
        {
          title: "Neighborhood life",
          morning: "Visit Montmartre and Sacré-Cœur.",
          afternoon: "Explore Le Marais, cafés, and local shops.",
          evening: "Take a sunset walk along the Seine.",
        },
        {
          title: "Art and gardens",
          morning: "Visit the Musée d’Orsay.",
          afternoon: "Relax in Luxembourg Gardens.",
          evening: "Explore the Latin Quarter.",
        },
        {
          title: "Royal day trip",
          morning: "Travel to Versailles.",
          afternoon: "Tour the palace and gardens.",
          evening: "Return to Paris for a quiet dinner.",
        },
        {
          title: "Flexible final day",
          morning: "Visit a neighborhood market.",
          afternoon: "Return to a favorite area or museum.",
          evening: "Enjoy a farewell meal.",
        },
      ],
    },
  
    spain: {
      countryId: "spain",
      countryName: "Spain",
      city: "Madrid",
      days: [
        {
          title: "Historic Madrid",
          morning: "Explore Plaza Mayor and Puerta del Sol.",
          afternoon: "Visit the Royal Palace.",
          evening: "Have dinner in La Latina.",
        },
        {
          title: "Art and parks",
          morning: "Visit the Prado Museum.",
          afternoon: "Walk through Retiro Park.",
          evening: "Explore the Malasaña neighborhood.",
        },
        {
          title: "Markets and local life",
          morning: "Visit Mercado de San Miguel.",
          afternoon: "Explore Chueca and Gran Vía.",
          evening: "Enjoy tapas at several small restaurants.",
        },
        {
          title: "Day trip",
          morning: "Travel to Toledo.",
          afternoon: "Explore the historic center.",
          evening: "Return to Madrid.",
        },
        {
          title: "Slow final day",
          morning: "Enjoy breakfast at a local café.",
          afternoon: "Shop or revisit a museum.",
          evening: "Watch the city come alive after sunset.",
        },
      ],
    },
  
    italy: {
      countryId: "italy",
      countryName: "Italy",
      city: "Rome",
      days: [
        {
          title: "Ancient Rome",
          morning: "Visit the Colosseum.",
          afternoon: "Explore the Roman Forum and Palatine Hill.",
          evening: "Walk through Monti.",
        },
        {
          title: "Vatican City",
          morning: "Visit the Vatican Museums.",
          afternoon: "See St. Peter’s Basilica.",
          evening: "Have dinner in Prati.",
        },
        {
          title: "Fountains and plazas",
          morning: "Visit the Pantheon.",
          afternoon: "Explore Piazza Navona and the Trevi Fountain.",
          evening: "Walk through Trastevere.",
        },
        {
          title: "Local Rome",
          morning: "Visit a neighborhood market.",
          afternoon: "Explore Testaccio.",
          evening: "Enjoy a traditional Roman meal.",
        },
        {
          title: "Flexible final day",
          morning: "Return to a favorite landmark.",
          afternoon: "Relax in Villa Borghese.",
          evening: "Enjoy a final passeggiata.",
        },
      ],
    },
  
    germany: {
      countryId: "germany",
      countryName: "Germany",
      city: "Berlin",
      days: [
        {
          title: "Central Berlin",
          morning: "Visit the Brandenburg Gate.",
          afternoon: "Explore Museum Island.",
          evening: "Walk through Mitte.",
        },
        {
          title: "History and memory",
          morning: "Visit the Berlin Wall Memorial.",
          afternoon: "Explore the East Side Gallery.",
          evening: "Have dinner in Kreuzberg.",
        },
        {
          title: "Neighborhood culture",
          morning: "Explore Prenzlauer Berg.",
          afternoon: "Visit cafés and shops in Neukölln.",
          evening: "Enjoy Berlin’s music or arts scene.",
        },
        {
          title: "Parks and palaces",
          morning: "Visit Charlottenburg Palace.",
          afternoon: "Relax in Tiergarten.",
          evening: "Explore a local market.",
        },
        {
          title: "Flexible final day",
          morning: "Visit a museum you missed.",
          afternoon: "Shop or explore another neighborhood.",
          evening: "Have a farewell dinner.",
        },
      ],
    },
  
    russia: {
      countryId: "russia",
      countryName: "Russia",
      city: "Moscow",
      days: [
        {
          title: "Historic center",
          morning: "Explore Red Square.",
          afternoon: "Visit the Kremlin area.",
          evening: "Walk near the Bolshoi Theatre.",
        },
        {
          title: "Art and architecture",
          morning: "Visit the Tretyakov Gallery.",
          afternoon: "Explore historic metro stations.",
          evening: "Walk through Arbat Street.",
        },
        {
          title: "Parks and city views",
          morning: "Visit Gorky Park.",
          afternoon: "Explore the riverfront.",
          evening: "Enjoy a local restaurant.",
        },
        {
          title: "Museums and neighborhoods",
          morning: "Visit a history museum.",
          afternoon: "Explore Zamoskvorechye.",
          evening: "Attend a cultural performance.",
        },
        {
          title: "Flexible final day",
          morning: "Return to a favorite landmark.",
          afternoon: "Shop for local goods.",
          evening: "Enjoy a final city walk.",
        },
      ],
    },
  
    japan: {
      countryId: "japan",
      countryName: "Japan",
      city: "Tokyo",
      days: [
        {
          title: "Traditional and modern Tokyo",
          morning: "Visit Meiji Shrine.",
          afternoon: "Explore Harajuku and Omotesando.",
          evening: "See Shibuya Crossing.",
        },
        {
          title: "Historic Tokyo",
          morning: "Visit Senso-ji Temple.",
          afternoon: "Explore Asakusa.",
          evening: "Walk along the Sumida River.",
        },
        {
          title: "Museums and gardens",
          morning: "Visit the Tokyo National Museum.",
          afternoon: "Explore Ueno Park.",
          evening: "Have dinner in Ginza.",
        },
        {
          title: "Neighborhood discovery",
          morning: "Explore Shinjuku.",
          afternoon: "Visit a quiet neighborhood café.",
          evening: "See the city lights from an observation deck.",
        },
        {
          title: "Flexible final day",
          morning: "Shop for souvenirs.",
          afternoon: "Return to a favorite district.",
          evening: "Enjoy a final meal.",
        },
      ],
    },
  
    egypt: {
      countryId: "egypt",
      countryName: "Egypt",
      city: "Cairo",
      days: [
        {
          title: "Ancient Egypt",
          morning: "Visit the Giza Pyramids.",
          afternoon: "Explore the surrounding area.",
          evening: "Enjoy dinner with a Nile view.",
        },
        {
          title: "Museums and history",
          morning: "Visit the Egyptian Museum.",
          afternoon: "Explore Downtown Cairo.",
          evening: "Walk through Zamalek.",
        },
        {
          title: "Historic Cairo",
          morning: "Visit Islamic Cairo.",
          afternoon: "Explore Khan el-Khalili.",
          evening: "Try a traditional Egyptian meal.",
        },
        {
          title: "Religious heritage",
          morning: "Explore Coptic Cairo.",
          afternoon: "Visit historic churches and museums.",
          evening: "Relax near the Nile.",
        },
        {
          title: "Flexible final day",
          morning: "Shop for souvenirs.",
          afternoon: "Return to a favorite area.",
          evening: "Enjoy a farewell dinner.",
        },
      ],
    },
  };