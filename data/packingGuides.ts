export type PackingGuide = {
    countryId: string;
    countryName: string;
    climateNote: string;
    essentials: string[];
    summer: string[];
    winter: string[];
    springFall: string[];
    culturalItems: string[];
  };
  
  export const packingGuides: Record<string, PackingGuide> = {
    france: {
      countryId: "france",
      countryName: "France",
      climateNote:
        "Weather varies by region, with cooler northern cities and warmer Mediterranean areas.",
      essentials: [
        "Passport and travel documents",
        "Comfortable walking shoes",
        "Power adapter for Type C and E sockets",
        "Reusable water bottle",
        "Small day bag",
      ],
      summer: [
        "Lightweight shirts",
        "Breathable trousers or skirts",
        "Sunglasses",
        "Light rain jacket",
        "Sun protection",
      ],
      winter: [
        "Warm coat",
        "Sweaters",
        "Scarf and gloves",
        "Water-resistant shoes",
        "Layering basics",
      ],
      springFall: [
        "Light jacket",
        "Sweaters or cardigans",
        "Compact umbrella",
        "Layering basics",
        "Closed-toe shoes",
      ],
      culturalItems: [
        "One polished casual outfit",
        "Modest clothing for churches",
        "Small coin purse for cafés and markets",
      ],
    },
  
    spain: {
      countryId: "spain",
      countryName: "Spain",
      climateNote:
        "Summers can be very hot, while northern and inland areas are cooler in winter.",
      essentials: [
        "Passport and travel documents",
        "Comfortable walking shoes",
        "Power adapter for Type C and F sockets",
        "Reusable water bottle",
        "Small day bag",
      ],
      summer: [
        "Lightweight clothing",
        "Sun hat",
        "Sunglasses",
        "Sun protection",
        "Breathable evening outfit",
      ],
      winter: [
        "Medium-weight coat",
        "Sweaters",
        "Closed shoes",
        "Light scarf",
        "Layering basics",
      ],
      springFall: [
        "Light jacket",
        "Long-sleeve shirts",
        "Comfortable trousers",
        "Compact umbrella",
        "Layering pieces",
      ],
      culturalItems: [
        "Modest outfit for churches",
        "Smart-casual evening outfit",
        "Small bag with secure closure",
      ],
    },
  
    italy: {
      countryId: "italy",
      countryName: "Italy",
      climateNote:
        "Italy ranges from alpine conditions in the north to warm Mediterranean weather in the south.",
      essentials: [
        "Passport and travel documents",
        "Comfortable walking shoes",
        "Power adapter for Type C, F, and L sockets",
        "Reusable water bottle",
        "Small day bag",
      ],
      summer: [
        "Breathable clothing",
        "Sun hat",
        "Sunglasses",
        "Light scarf",
        "Sun protection",
      ],
      winter: [
        "Warm coat",
        "Sweaters",
        "Water-resistant shoes",
        "Scarf",
        "Layering basics",
      ],
      springFall: [
        "Light jacket",
        "Cardigan",
        "Compact umbrella",
        "Closed shoes",
        "Layering pieces",
      ],
      culturalItems: [
        "Shoulder-covering layer for churches",
        "Knee-covering outfit for religious sites",
        "Smart-casual dinner outfit",
      ],
    },
  
    germany: {
      countryId: "germany",
      countryName: "Germany",
      climateNote:
        "Germany has mild summers, cold winters, and frequent rain throughout the year.",
      essentials: [
        "Passport and travel documents",
        "Comfortable walking shoes",
        "Power adapter for Type C and F sockets",
        "Reusable water bottle",
        "Compact umbrella",
      ],
      summer: [
        "Light layers",
        "Rain jacket",
        "Comfortable trousers",
        "Sunglasses",
        "Light sweater",
      ],
      winter: [
        "Insulated coat",
        "Warm boots",
        "Scarf, gloves, and hat",
        "Thermal layers",
        "Thick socks",
      ],
      springFall: [
        "Water-resistant jacket",
        "Sweaters",
        "Closed shoes",
        "Compact umbrella",
        "Layering basics",
      ],
      culturalItems: [
        "Cash wallet",
        "Reusable shopping bag",
        "One neat casual outfit",
      ],
    },
  
    russia: {
      countryId: "russia",
      countryName: "Russia",
      climateNote:
        "Many regions have long, cold winters and short, warmer summers.",
      essentials: [
        "Passport and required travel documents",
        "Comfortable walking shoes",
        "Power adapter for Type C and F sockets",
        "Reusable water bottle",
        "Secure day bag",
      ],
      summer: [
        "Light layers",
        "Rain jacket",
        "Comfortable trousers",
        "Sunglasses",
        "Light sweater",
      ],
      winter: [
        "Heavy insulated coat",
        "Thermal base layers",
        "Warm boots",
        "Scarf, gloves, and hat",
        "Thick wool socks",
      ],
      springFall: [
        "Warm waterproof jacket",
        "Sweaters",
        "Closed shoes",
        "Gloves",
        "Layering basics",
      ],
      culturalItems: [
        "Modest clothing for churches",
        "Head covering for some religious sites",
        "Neat outfit for theaters or performances",
      ],
    },
  
    japan: {
      countryId: "japan",
      countryName: "Japan",
      climateNote:
        "Japan has four distinct seasons, humid summers, and cooler winters in many regions.",
      essentials: [
        "Passport and travel documents",
        "Comfortable slip-on shoes",
        "Power adapter for Type A and B sockets",
        "Reusable water bottle",
        "Small hand towel",
      ],
      summer: [
        "Breathable clothing",
        "Portable fan",
        "Sun protection",
        "Compact umbrella",
        "Lightweight layers",
      ],
      winter: [
        "Warm coat",
        "Sweaters",
        "Scarf and gloves",
        "Warm socks",
        "Layering basics",
      ],
      springFall: [
        "Light jacket",
        "Cardigan",
        "Compact umbrella",
        "Comfortable trousers",
        "Layering pieces",
      ],
      culturalItems: [
        "Clean socks for shoe-removal spaces",
        "Small trash bag",
        "Modest outfit for temples",
      ],
    },
  
    egypt: {
      countryId: "egypt",
      countryName: "Egypt",
      climateNote:
        "Egypt is generally hot and dry, with cooler evenings and milder winter temperatures.",
      essentials: [
        "Passport and travel documents",
        "Comfortable walking shoes",
        "Power adapter for Type C and F sockets",
        "Reusable water bottle",
        "Sun protection",
      ],
      summer: [
        "Loose breathable clothing",
        "Wide-brimmed hat",
        "Sunglasses",
        "Light scarf",
        "High-SPF sunscreen",
      ],
      winter: [
        "Light jacket",
        "Long trousers",
        "Sweater for evenings",
        "Closed shoes",
        "Layering basics",
      ],
      springFall: [
        "Breathable long sleeves",
        "Light jacket",
        "Comfortable trousers",
        "Sun protection",
        "Light scarf",
      ],
      culturalItems: [
        "Shoulder-covering tops",
        "Knee-covering trousers or skirts",
        "Scarf for religious sites",
      ],
    },
  };