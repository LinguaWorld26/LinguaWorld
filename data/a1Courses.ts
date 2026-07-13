export type A1Lesson = {
    id: string;
    number: string;
    title: string;
    description: string;
  };
  
  export type A1Course = {
    languageId: string;
    languageName: string;
    nativeName: string;
    lessons: A1Lesson[];
  };
  
  export const a1Courses: Record<string, A1Course> = {
    spanish: {
      languageId: "spanish",
      languageName: "Spanish",
      nativeName: "Español",
      lessons: [
        {
          id: "greetings",
          number: "01",
          title: "Greetings and introductions",
          description:
            "Say hello, introduce yourself, ask someone’s name, and use polite Spanish greetings.",
        },
        {
          id: "pronunciation",
          number: "02",
          title: "Spanish pronunciation basics",
          description:
            "Learn essential Spanish sounds, vowels, accents, and pronunciation patterns.",
        },
        {
          id: "numbers",
          number: "03",
          title: "Numbers and personal information",
          description:
            "Use basic numbers and share your age, nationality, phone number, and where you live.",
        },
        {
          id: "questions",
          number: "04",
          title: "Everyday questions",
          description:
            "Ask simple questions using who, what, where, when, why, and how.",
        },
      ],
    },
  
    italian: {
      languageId: "italian",
      languageName: "Italian",
      nativeName: "Italiano",
      lessons: [
        {
          id: "greetings",
          number: "01",
          title: "Greetings and introductions",
          description:
            "Say hello, introduce yourself, ask someone’s name, and use polite Italian greetings.",
        },
        {
          id: "pronunciation",
          number: "02",
          title: "Italian pronunciation basics",
          description:
            "Learn essential Italian sounds, vowels, double consonants, and pronunciation patterns.",
        },
        {
          id: "numbers",
          number: "03",
          title: "Numbers and personal information",
          description:
            "Use basic numbers and share your age, nationality, phone number, and where you live.",
        },
        {
          id: "questions",
          number: "04",
          title: "Everyday questions",
          description:
            "Ask simple questions using who, what, where, when, why, and how.",
        },
      ],
    },
    german: {
        languageId: "german",
        languageName: "German",
        nativeName: "Deutsch",
        lessons: [
          {
            id: "greetings",
            number: "01",
            title: "Greetings and introductions",
            description:
              "Say hello, introduce yourself, ask someone’s name, and use polite German greetings.",
          },
          {
            id: "pronunciation",
            number: "02",
            title: "German pronunciation basics",
            description:
              "Learn essential German sounds, vowels, umlauts, and common pronunciation patterns.",
          },
          {
            id: "numbers",
            number: "03",
            title: "Numbers and personal information",
            description:
              "Use basic numbers and share your age, nationality, phone number, and where you live.",
          },
          {
            id: "questions",
            number: "04",
            title: "Everyday questions",
            description:
              "Ask simple questions using who, what, where, when, why, and how.",
          },
        ],
      },
      russian: {
        languageId: "russian",
        languageName: "Russian",
        nativeName: "Русский",
        lessons: [
          {
            id: "greetings",
            number: "01",
            title: "Greetings and introductions",
            description:
              "Say hello, introduce yourself, ask someone’s name, and use polite Russian greetings.",
          },
          {
            id: "pronunciation",
            number: "02",
            title: "Russian pronunciation basics",
            description:
              "Learn important Russian sounds, stress patterns, and the Cyrillic alphabet.",
          },
          {
            id: "numbers",
            number: "03",
            title: "Numbers and personal information",
            description:
              "Use basic numbers and share your age, nationality, phone number, and where you live.",
          },
          {
            id: "questions",
            number: "04",
            title: "Everyday questions",
            description:
              "Ask simple questions using who, what, where, when, why, and how.",
          },
        ],
      },
      japanese: {
        languageId: "japanese",
        languageName: "Japanese",
        nativeName: "日本語",
        lessons: [
          {
            id: "greetings",
            number: "01",
            title: "Greetings and introductions",
            description:
              "Say hello, introduce yourself, ask someone’s name, and use polite Japanese greetings.",
          },
          {
            id: "pronunciation",
            number: "02",
            title: "Japanese pronunciation basics",
            description:
              "Learn the five vowel sounds, rhythm, long vowels, and basic kana pronunciation.",
          },
          {
            id: "numbers",
            number: "03",
            title: "Numbers and personal information",
            description:
              "Use basic numbers and share your age, nationality, phone number, and where you live.",
          },
          {
            id: "questions",
            number: "04",
            title: "Everyday questions",
            description:
              "Ask simple questions about people, places, time, reasons, and daily life.",
          },
        ],
      },
      arabic: {
        languageId: "arabic",
        languageName: "Arabic",
        nativeName: "العربية",
        lessons: [
          {
            id: "greetings",
            number: "01",
            title: "Greetings and introductions",
            description:
              "Say hello, introduce yourself, ask someone’s name, and use polite Arabic greetings.",
          },
          {
            id: "pronunciation",
            number: "02",
            title: "Arabic pronunciation basics",
            description:
              "Learn essential Arabic sounds, letters, and right-to-left writing.",
          },
          {
            id: "numbers",
            number: "03",
            title: "Numbers and personal information",
            description:
              "Use basic numbers and share your age, name, nationality, and where you live.",
          },
          {
            id: "questions",
            number: "04",
            title: "Everyday questions",
            description:
              "Ask simple questions about people, places, time, reasons, and daily life.",
          },
        ],
      },
    };