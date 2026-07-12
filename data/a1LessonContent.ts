export type LessonPhrase = {
    target: string;
    english: string;
  };
  
  export type A1LessonContent = {
    languageId: string;
    lessonId: string;
    number: string;
    title: string;
    introduction: string;
    sectionTitle: string;
    phrases: LessonPhrase[];
    practiceQuestion: string;
    practicePrompt: string;
  };
  
  export const a1LessonContent: Record<string, A1LessonContent> = {
    "spanish-greetings": {
      languageId: "spanish",
      lessonId: "greetings",
      number: "01",
      title: "Greetings and introductions",
      introduction:
        "Learn common Spanish greetings and the phrases you need to introduce yourself.",
      sectionTitle: "Essential phrases",
      phrases: [
        {
          target: "Hola",
          english: "Hello",
        },
        {
          target: "Buenos días",
          english: "Good morning",
        },
        {
          target: "Buenas tardes",
          english: "Good afternoon",
        },
        {
          target: "Buenas noches",
          english: "Good evening / Good night",
        },
        {
          target: "Me llamo…",
          english: "My name is…",
        },
        {
          target: "Mucho gusto",
          english: "Nice to meet you",
        },
      ],
      practiceQuestion: "Complete this introduction:",
      practicePrompt: "Hola, me llamo ________. Mucho gusto.",
    },
  
    "spanish-pronunciation": {
      languageId: "spanish",
      lessonId: "pronunciation",
      number: "02",
      title: "Spanish pronunciation basics",
      introduction:
        "Practice clear Spanish vowels and several important pronunciation patterns.",
      sectionTitle: "Key sounds",
      phrases: [
        {
          target: "casa",
          english: "The letter A has a clear ah sound.",
        },
        {
          target: "mesa",
          english: "The letter E has a clear eh sound.",
        },
        {
          target: "vino",
          english: "The letter I has an ee sound.",
        },
        {
          target: "rojo",
          english: "The Spanish R may be tapped or rolled.",
        },
        {
          target: "mañana",
          english: "The letter Ñ sounds similar to ny.",
        },
        {
          target: "gente",
          english: "G before E or I often has a breathy sound.",
        },
      ],
      practiceQuestion: "Say this phrase aloud:",
      practicePrompt: "Hola, me llamo María.",
    },
  
    "spanish-numbers": {
      languageId: "spanish",
      lessonId: "numbers",
      number: "03",
      title: "Numbers and personal information",
      introduction:
        "Learn basic numbers and phrases for sharing information about yourself.",
      sectionTitle: "Numbers and phrases",
      phrases: [
        {
          target: "uno",
          english: "one",
        },
        {
          target: "dos",
          english: "two",
        },
        {
          target: "tres",
          english: "three",
        },
        {
          target: "cuatro",
          english: "four",
        },
        {
          target: "Tengo veinte años.",
          english: "I am twenty years old.",
        },
        {
          target: "Vivo en los Estados Unidos.",
          english: "I live in the United States.",
        },
      ],
      practiceQuestion: "Complete this sentence:",
      practicePrompt: "Tengo ________ años.",
    },
  
    "spanish-questions": {
      languageId: "spanish",
      lessonId: "questions",
      number: "04",
      title: "Everyday questions",
      introduction:
        "Learn essential Spanish question words and simple questions for daily conversations.",
      sectionTitle: "Essential questions",
      phrases: [
        {
          target: "¿Quién es?",
          english: "Who is it?",
        },
        {
          target: "¿Qué es?",
          english: "What is it?",
        },
        {
          target: "¿Dónde vives?",
          english: "Where do you live?",
        },
        {
          target: "¿Cuándo sales?",
          english: "When are you leaving?",
        },
        {
          target: "¿Por qué estudias español?",
          english: "Why are you studying Spanish?",
        },
        {
          target: "¿Cómo estás?",
          english: "How are you?",
        },
      ],
      practiceQuestion: "Answer this question in Spanish:",
      practicePrompt: "¿Dónde vives?",
    },
  };