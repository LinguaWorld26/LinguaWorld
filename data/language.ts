export type Language = {
    id: string;
    name: string;
    nativeName: string;
    family: string;
    region: string;
    description: string;
    available: boolean;
  };
  
  export const languages: Language[] = [
    {
      id: "french",
      name: "French",
      nativeName: "Français",
      family: "Romance language",
      region: "Europe, Africa, and the Americas",
      description:
        "Build confidence in speaking, listening, grammar, vocabulary, pronunciation, and everyday communication.",
      available: true,
    },
    {
      id: "spanish",
      name: "Spanish",
      nativeName: "Español",
      family: "Romance language",
      region: "Europe and the Americas",
      description:
        "Learn practical Spanish for conversations, travel, culture, pronunciation, and daily life.",
      available: false,
    },
    {
      id: "italian",
      name: "Italian",
      nativeName: "Italiano",
      family: "Romance language",
      region: "Europe",
      description:
        "Explore Italian through everyday communication, pronunciation, culture, travel, and regional traditions.",
      available: false,
    },
    {
      id: "german",
      name: "German",
      nativeName: "Deutsch",
      family: "Germanic language",
      region: "Europe",
      description:
        "Develop German skills through structured vocabulary, grammar, pronunciation, and real-life situations.",
      available: false,
    },
    {
      id: "russian",
      name: "Russian",
      nativeName: "Русский",
      family: "Slavic language",
      region: "Europe and Asia",
      description:
        "Learn the Russian alphabet, pronunciation, vocabulary, grammar, and practical everyday expressions.",
      available: false,
    },
    {
      id: "japanese",
      name: "Japanese",
      nativeName: "日本語",
      family: "Japonic language",
      region: "East Asia",
      description:
        "Study Japanese writing, pronunciation, vocabulary, grammar, and communication through cultural context.",
      available: false,
    },
    {
      id: "arabic",
      name: "Arabic",
      nativeName: "العربية",
      family: "Semitic language",
      region: "North Africa and the Middle East",
      description:
        "Build foundations in Arabic script, pronunciation, vocabulary, grammar, and everyday communication.",
      available: false,
    },
  ];