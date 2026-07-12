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
  };