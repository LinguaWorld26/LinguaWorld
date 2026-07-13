export type LanguageLevel = {
    level: string;
    title: string;
    description: string;
    available: boolean;
  };
  
  export type LanguageHomepage = {
    id: string;
    name: string;
    nativeName: string;
    headline: string;
    description: string;
    pathwayTitle: string;
    pathwayDescription: string;
    studyTopics: string[];
    levels: LanguageLevel[];
  };
  
  const sharedUpperLevels: LanguageLevel[] = [
    {
      level: "A2",
      title: "Everyday Communication",
      description:
        "Talk about routines, travel, food, family, shopping, and familiar situations.",
      available: false,
    },
    {
      level: "B1",
      title: "Confident Conversations",
      description:
        "Handle common situations, describe experiences, and explain your opinions.",
      available: false,
    },
    {
      level: "B2",
      title: "Independent Communication",
      description:
        "Follow authentic media, discuss complex topics, and communicate with more detail.",
      available: false,
    },
    {
      level: "C1",
      title: "Advanced Expression",
      description:
        "Use the language flexibly for academic, professional, and social communication.",
      available: false,
    },
    {
      level: "C2",
      title: "Mastery",
      description:
        "Understand subtle meaning and express yourself naturally with precision.",
      available: false,
    },
  ];
  
  export const languageHomepages: Record<string, LanguageHomepage> = {
    spanish: {
      id: "spanish",
      name: "Spanish",
      nativeName: "Español",
      headline: "Learn Spanish through real conversation.",
      description:
        "Build confidence in speaking, listening, grammar, vocabulary, pronunciation, and cultural understanding.",
      pathwayTitle: "Your Spanish pathway",
      pathwayDescription:
        "Move from everyday foundations to confident and independent Spanish.",
      studyTopics: [
        "Speaking",
        "Listening",
        "Pronunciation",
        "Vocabulary",
        "Grammar",
        "Culture",
      ],
      levels: [
        {
          level: "A1",
          title: "Foundations",
          description:
            "Greetings, introductions, pronunciation, numbers, and simple everyday questions.",
          available: true,
        },
        ...sharedUpperLevels,
      ],
    },
  
    italian: {
      id: "italian",
      name: "Italian",
      nativeName: "Italiano",
      headline: "Learn Italian through everyday life.",
      description:
        "Develop natural pronunciation, practical vocabulary, grammar, listening, and cultural confidence.",
      pathwayTitle: "Your Italian pathway",
      pathwayDescription:
        "Begin with clear foundations and grow toward expressive, independent Italian.",
      studyTopics: [
        "Speaking",
        "Listening",
        "Pronunciation",
        "Vocabulary",
        "Grammar",
        "Culture",
      ],
      levels: [
        {
          level: "A1",
          title: "Foundations",
          description:
            "Greetings, introductions, Italian sounds, numbers, and everyday questions.",
          available: true,
        },
        ...sharedUpperLevels,
      ],
    },
  
    german: {
      id: "german",
      name: "German",
      nativeName: "Deutsch",
      headline: "Learn German with structure and confidence.",
      description:
        "Build practical speaking, listening, pronunciation, vocabulary, grammar, and cultural understanding.",
      pathwayTitle: "Your German pathway",
      pathwayDescription:
        "Progress from essential communication to detailed and independent German.",
      studyTopics: [
        "Speaking",
        "Listening",
        "Pronunciation",
        "Vocabulary",
        "Grammar",
        "Culture",
      ],
      levels: [
        {
          level: "A1",
          title: "Foundations",
          description:
            "Greetings, introductions, German sounds, numbers, and simple questions.",
          available: true,
        },
        ...sharedUpperLevels,
      ],
    },
  
    russian: {
      id: "russian",
      name: "Russian",
      nativeName: "Русский",
      headline: "Learn Russian from alphabet to conversation.",
      description:
        "Build confidence with Cyrillic, pronunciation, vocabulary, grammar, listening, and everyday communication.",
      pathwayTitle: "Your Russian pathway",
      pathwayDescription:
        "Begin with Cyrillic and essential phrases before advancing into richer conversation.",
      studyTopics: [
        "Cyrillic",
        "Speaking",
        "Listening",
        "Pronunciation",
        "Grammar",
        "Culture",
      ],
      levels: [
        {
          level: "A1",
          title: "Foundations",
          description:
            "Cyrillic, greetings, pronunciation, numbers, and essential everyday questions.",
          available: true,
        },
        ...sharedUpperLevels,
      ],
    },
  
    japanese: {
      id: "japanese",
      name: "Japanese",
      nativeName: "日本語",
      headline: "Learn Japanese through language and culture.",
      description:
        "Develop speaking, listening, pronunciation, writing-system knowledge, vocabulary, and grammar.",
      pathwayTitle: "Your Japanese pathway",
      pathwayDescription:
        "Begin with hiragana and essential communication before progressing toward fluent expression.",
      studyTopics: [
        "Hiragana",
        "Speaking",
        "Listening",
        "Pronunciation",
        "Grammar",
        "Culture",
      ],
      levels: [
        {
          level: "A1",
          title: "Foundations",
          description:
            "Hiragana, greetings, pronunciation, numbers, and simple everyday questions.",
          available: true,
        },
        ...sharedUpperLevels,
      ],
    },
  
    arabic: {
      id: "arabic",
      name: "Arabic",
      nativeName: "العربية",
      headline: "Learn Arabic from script to conversation.",
      description:
        "Build confidence with Arabic writing, pronunciation, listening, vocabulary, grammar, and cultural understanding.",
      pathwayTitle: "Your Arabic pathway",
      pathwayDescription:
        "Begin with the alphabet and essential communication before advancing toward independent Arabic.",
      studyTopics: [
        "Arabic Script",
        "Speaking",
        "Listening",
        "Pronunciation",
        "Grammar",
        "Culture",
      ],
      levels: [
        {
          level: "A1",
          title: "Foundations",
          description:
            "Arabic letters, greetings, pronunciation, numbers, and everyday questions.",
          available: true,
        },
        ...sharedUpperLevels,
      ],
    },
  };