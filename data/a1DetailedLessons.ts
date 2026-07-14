export type DetailedVocabularyItem = {
    target: string;
    translation: string;
    note?: string;
  };
  
  export type DetailedLessonNote = {
    title: string;
    explanation: string;
    examples: {
      target: string;
      translation: string;
    }[];
  };
  
  export type DialogueLine = {
    speaker: string;
    target: string;
    translation: string;
  };
  
  export type PracticeActivity = {
    title: string;
    instruction: string;
    prompt: string;
  };
  
  export type MiniQuizQuestion = {
    question: string;
    answers: string[];
    correctAnswer: string;
  };
  
  export type A1DetailedLesson = {
    languageId: string;
    languageName: string;
    unitId: string;
    lessonId: string;
    nextUnitId?: string;
    nextLessonId?: string;
    unitNumber: string;
    lessonNumber: string;
    title: string;
    introduction: string;
    estimatedMinutes: number;
    speechLanguage: string;
    direction?: "ltr" | "rtl";
    objectives: string[];
    vocabulary: DetailedVocabularyItem[];
    notes: DetailedLessonNote[];
    dialogue?: DialogueLine[];
    activities: PracticeActivity[];
    speakingPrompt: string;
    quiz: MiniQuizQuestion[];
  };
  
  export const a1DetailedLessons: Record<string, A1DetailedLesson> = {
    "spanish-alphabet-pronunciation-alphabet": {
      languageId: "spanish",
      languageName: "Spanish",
      unitId: "alphabet-pronunciation",
      lessonId: "alphabet",
      nextUnitId: "alphabet-pronunciation",
      nextLessonId: "vowels",
      unitNumber: "01",
      lessonNumber: "01",
      title: "The Spanish alphabet",
      introduction:
        "Learn the Spanish alphabet, recognize its letters, and hear how letter names appear in simple spelling situations.",
      estimatedMinutes: 12,
      speechLanguage: "es-ES",
  
      objectives: [
        "Recognize the letters of the Spanish alphabet",
        "Identify the special letter ñ",
        "Understand that letter names and letter sounds are not always identical",
        "Spell a short name aloud",
      ],
  
      vocabulary: [
        {
          target: "a",
          translation: "The letter A",
          note: "Pronounced approximately ah",
        },
        {
          target: "be",
          translation: "The letter B",
          note: "The letter name is be",
        },
        {
          target: "ce",
          translation: "The letter C",
          note: "Its sound changes depending on the following vowel",
        },
        {
          target: "de",
          translation: "The letter D",
        },
        {
          target: "e",
          translation: "The letter E",
          note: "Pronounced approximately eh",
        },
        {
          target: "efe",
          translation: "The letter F",
        },
        {
          target: "ge",
          translation: "The letter G",
          note: "Its sound changes before e and i",
        },
        {
          target: "hache",
          translation: "The letter H",
          note: "The letter h is normally silent in Spanish words",
        },
        {
          target: "i",
          translation: "The letter I",
          note: "Pronounced approximately ee",
        },
        {
          target: "jota",
          translation: "The letter J",
          note: "Often has a strong breathy sound",
        },
        {
          target: "ele",
          translation: "The letter L",
        },
        {
          target: "eme",
          translation: "The letter M",
        },
        {
          target: "ene",
          translation: "The letter N",
        },
        {
          target: "eñe",
          translation: "The letter Ñ",
          note: "Produces the ny sound heard in niño",
        },
        {
          target: "o",
          translation: "The letter O",
          note: "Pronounced approximately oh",
        },
        {
          target: "pe",
          translation: "The letter P",
        },
        {
          target: "cu",
          translation: "The letter Q",
        },
        {
          target: "erre",
          translation: "The letter R",
        },
        {
          target: "ese",
          translation: "The letter S",
        },
        {
          target: "te",
          translation: "The letter T",
        },
        {
          target: "u",
          translation: "The letter U",
          note: "Pronounced approximately oo",
        },
        {
          target: "uve",
          translation: "The letter V",
        },
        {
          target: "doble uve",
          translation: "The letter W",
        },
        {
          target: "equis",
          translation: "The letter X",
        },
        {
          target: "ye",
          translation: "The letter Y",
        },
        {
          target: "zeta",
          translation: "The letter Z",
        },
      ],
  
      notes: [
        {
          title: "The letter ñ",
          explanation:
            "Ñ is a separate letter in Spanish rather than an accented version of n. It produces a sound similar to ny.",
          examples: [
            {
              target: "niño",
              translation: "boy",
            },
            {
              target: "año",
              translation: "year",
            },
            {
              target: "España",
              translation: "Spain",
            },
          ],
        },
        {
          title: "The letter h",
          explanation:
            "The letter h is normally silent in Spanish. You see it in writing, but you do not pronounce it.",
          examples: [
            {
              target: "hola",
              translation: "hello",
            },
            {
              target: "hotel",
              translation: "hotel",
            },
            {
              target: "hora",
              translation: "hour / time",
            },
          ],
        },
        {
          title: "Letter names versus sounds",
          explanation:
            "A letter’s name is what you say while spelling. Its sound is what you hear when it appears inside a word.",
          examples: [
            {
              target: "be: Barcelona",
              translation: "The letter name is be, but the word begins with a b sound",
            },
            {
              target: "eme: Madrid",
              translation: "The letter name is eme, but the word begins with an m sound",
            },
          ],
        },
      ],
  
      dialogue: [
        {
          speaker: "Lucía",
          target: "¿Cómo te llamas?",
          translation: "What is your name?",
        },
        {
          speaker: "Daniel",
          target: "Me llamo Daniel.",
          translation: "My name is Daniel.",
        },
        {
          speaker: "Lucía",
          target: "¿Cómo se escribe?",
          translation: "How is it spelled?",
        },
        {
          speaker: "Daniel",
          target: "De, a, ene, i, e, ele.",
          translation: "D, A, N, I, E, L.",
        },
      ],
  
      activities: [
        {
          title: "Letter recognition",
          instruction:
            "Read each letter name aloud and identify its written letter.",
          prompt: "eñe → Ñ · hache → H · jota → J · equis → X",
        },
        {
          title: "Name spelling",
          instruction:
            "Spell your first name using Spanish letter names.",
          prompt: "Mi nombre se escribe…",
        },
        {
          title: "Find the silent letter",
          instruction:
            "Which letter is written but not pronounced in the word hola?",
          prompt: "The silent letter is ________.",
        },
      ],
  
      speakingPrompt:
        "Say your name, then spell it slowly using Spanish letter names.",
  
      quiz: [
        {
          question: "Which letter name represents Ñ?",
          answers: ["ene", "eñe", "eme", "ele"],
          correctAnswer: "eñe",
        },
        {
          question: "Which Spanish letter is normally silent?",
          answers: ["j", "r", "h", "ñ"],
          correctAnswer: "h",
        },
        {
          question: "Which word contains the letter ñ?",
          answers: ["hola", "niño", "casa", "mesa"],
          correctAnswer: "niño",
        },
        {
          question: "What does ¿Cómo se escribe? mean?",
          answers: [
            "What is your name?",
            "Where do you live?",
            "How is it spelled?",
            "How are you?",
          ],
          correctAnswer: "How is it spelled?",
        },
      ],
    },

    "spanish-alphabet-pronunciation-vowels": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "alphabet-pronunciation",
        lessonId: "vowels",
        nextUnitId: "alphabet-pronunciation",
        nextLessonId: "special-sounds",
        unitNumber: "01",
        lessonNumber: "02",
        title: "Spanish vowel sounds",
        introduction:
          "Spanish has five main vowel sounds. They are generally clearer and more consistent than English vowels.",
        estimatedMinutes: 10,
        speechLanguage: "es-ES",
    
        objectives: [
          "Recognize the five Spanish vowels",
          "Produce clear and consistent vowel sounds",
          "Avoid turning Spanish vowels into English-style diphthongs",
          "Hear vowels inside common beginner words",
        ],
    
        vocabulary: [
          {
            target: "a",
            translation: "A sound",
            note: "Pronounced approximately ah",
          },
          {
            target: "casa",
            translation: "house",
            note: "Both a sounds remain clear and open",
          },
          {
            target: "e",
            translation: "E sound",
            note: "Pronounced approximately eh",
          },
          {
            target: "mesa",
            translation: "table",
            note: "The e is short and clear",
          },
          {
            target: "i",
            translation: "I sound",
            note: "Pronounced approximately ee",
          },
          {
            target: "vino",
            translation: "wine",
            note: "The i is a clear ee sound",
          },
          {
            target: "o",
            translation: "O sound",
            note: "Pronounced approximately oh without a strong glide",
          },
          {
            target: "hola",
            translation: "hello",
            note: "The h is silent, so the word begins with the o sound",
          },
          {
            target: "u",
            translation: "U sound",
            note: "Pronounced approximately oo",
          },
          {
            target: "uno",
            translation: "one",
            note: "The u begins with a clear oo sound",
          },
        ],
    
        notes: [
          {
            title: "Five consistent vowel sounds",
            explanation:
              "Spanish vowels generally keep the same basic sound from one word to another. This makes pronunciation more predictable.",
            examples: [
              {
                target: "a: casa",
                translation: "a as in house",
              },
              {
                target: "e: mesa",
                translation: "e as in table",
              },
              {
                target: "i: vino",
                translation: "i as in wine",
              },
              {
                target: "o: solo",
                translation: "o as in alone",
              },
              {
                target: "u: uno",
                translation: "u as in one",
              },
            ],
          },
          {
            title: "Keep vowels short and clean",
            explanation:
              "English speakers sometimes stretch vowels or add an extra sound at the end. Spanish vowels are usually shorter and steadier.",
            examples: [
              {
                target: "no",
                translation: "no",
              },
              {
                target: "sí",
                translation: "yes",
              },
              {
                target: "tú",
                translation: "you",
              },
            ],
          },
          {
            title: "Written accents",
            explanation:
              "An accent mark usually shows which syllable receives stress. It does not create an entirely new vowel sound.",
            examples: [
              {
                target: "sí",
                translation: "yes",
              },
              {
                target: "tú",
                translation: "you",
              },
              {
                target: "música",
                translation: "music",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Teacher",
            target: "A, E, I, O, U.",
            translation: "A, E, I, O, U.",
          },
          {
            speaker: "Student",
            target: "Casa, mesa, vino, solo, uno.",
            translation: "House, table, wine, alone, one.",
          },
          {
            speaker: "Teacher",
            target: "Muy bien. Otra vez.",
            translation: "Very good. Again.",
          },
          {
            speaker: "Student",
            target: "A, E, I, O, U.",
            translation: "A, E, I, O, U.",
          },
        ],
    
        activities: [
          {
            title: "Vowel sequence",
            instruction:
              "Say each vowel slowly, then repeat the complete sequence without pausing.",
            prompt: "A · E · I · O · U",
          },
          {
            title: "Word sorting",
            instruction:
              "Identify the first vowel sound in each word.",
            prompt: "amigo · escuela · isla · ocho · uno",
          },
          {
            title: "Clear vowel practice",
            instruction:
              "Read the words aloud while keeping every vowel short and steady.",
            prompt: "casa · mesa · vino · solo · uno",
          },
        ],
    
        speakingPrompt:
          "Say A, E, I, O, U clearly. Then say one Spanish word that contains each vowel.",
    
        quiz: [
          {
            question: "Which Spanish vowel sounds approximately like ee?",
            answers: ["a", "e", "i", "o"],
            correctAnswer: "i",
          },
          {
            question: "Which word begins with the Spanish u sound?",
            answers: ["mesa", "uno", "casa", "vino"],
            correctAnswer: "uno",
          },
          {
            question: "What is generally true about Spanish vowels?",
            answers: [
              "They are normally silent",
              "They change completely in every word",
              "They usually have clear and consistent sounds",
              "They are always pronounced like English vowels",
            ],
            correctAnswer:
              "They usually have clear and consistent sounds",
          },
          {
            question: "What does an accent mark often indicate?",
            answers: [
              "The stressed syllable",
              "A silent letter",
              "A plural noun",
              "A question",
            ],
            correctAnswer: "The stressed syllable",
          },
        ],
      },

      "spanish-alphabet-pronunciation-special-sounds": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "alphabet-pronunciation",
        lessonId: "special-sounds",
        nextUnitId: "greetings-introductions",
        nextLessonId: "greetings",
        unitNumber: "01",
        lessonNumber: "03",
        title: "Ñ, J, LL, R, and RR",
        introduction:
          "Practice several Spanish sounds that may be unfamiliar to English speakers and learn how pronunciation can vary by region.",
        estimatedMinutes: 15,
        speechLanguage: "es-ES",
    
        objectives: [
          "Pronounce the letter ñ in common words",
          "Recognize the strong breathy sound of j",
          "Understand common pronunciations of ll",
          "Distinguish between the tapped r and rolled rr",
        ],
    
        vocabulary: [
          {
            target: "niño",
            translation: "boy",
            note: "Ñ sounds similar to ny",
          },
          {
            target: "España",
            translation: "Spain",
            note: "The ñ appears in the middle of the word",
          },
          {
            target: "jardín",
            translation: "garden",
            note: "J has a strong breathy sound",
          },
          {
            target: "jueves",
            translation: "Thursday",
            note: "The j begins with a breathy sound",
          },
          {
            target: "llave",
            translation: "key",
            note: "LL is often pronounced like y, with regional variation",
          },
          {
            target: "llamar",
            translation: "to call",
            note: "The ll pronunciation varies across the Spanish-speaking world",
          },
          {
            target: "pero",
            translation: "but",
            note: "The single r is tapped",
          },
          {
            target: "perro",
            translation: "dog",
            note: "The double rr is rolled more strongly",
          },
          {
            target: "caro",
            translation: "expensive",
            note: "Contains a tapped r",
          },
          {
            target: "carro",
            translation: "car",
            note: "Contains a rolled rr",
          },
        ],
    
        notes: [
          {
            title: "The ñ sound",
            explanation:
              "Ñ is pronounced with a sound similar to ny in the English word canyon. It is a separate letter in Spanish.",
            examples: [
              {
                target: "niño",
                translation: "boy",
              },
              {
                target: "mañana",
                translation: "tomorrow / morning",
              },
              {
                target: "señor",
                translation: "sir / mister",
              },
            ],
          },
          {
            title: "The Spanish j",
            explanation:
              "The letter j is normally pronounced with a breathy sound produced farther back in the mouth than the English h.",
            examples: [
              {
                target: "jardín",
                translation: "garden",
              },
              {
                target: "joven",
                translation: "young",
              },
              {
                target: "trabajo",
                translation: "work / job",
              },
            ],
          },
          {
            title: "The sound of ll",
            explanation:
              "In many regions, ll sounds similar to the English y. In other regions it can sound closer to zh or sh. These variations are natural.",
            examples: [
              {
                target: "llave",
                translation: "key",
              },
              {
                target: "calle",
                translation: "street",
              },
              {
                target: "lluvia",
                translation: "rain",
              },
            ],
          },
          {
            title: "Tapped r and rolled rr",
            explanation:
              "A single r between vowels is usually tapped quickly. Double rr uses a stronger repeated vibration. The difference can change meaning.",
            examples: [
              {
                target: "pero",
                translation: "but",
              },
              {
                target: "perro",
                translation: "dog",
              },
              {
                target: "caro",
                translation: "expensive",
              },
              {
                target: "carro",
                translation: "car",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Elena",
            target: "¿Cómo se llama tu perro?",
            translation: "What is your dog’s name?",
          },
          {
            speaker: "Mateo",
            target: "Se llama Rayo.",
            translation: "His name is Rayo.",
          },
          {
            speaker: "Elena",
            target: "¿Rayo, con erre?",
            translation: "Rayo, with an R?",
          },
          {
            speaker: "Mateo",
            target: "Sí, erre, a, ye, o.",
            translation: "Yes, R, A, Y, O.",
          },
        ],
    
        activities: [
          {
            title: "Ñ practice",
            instruction:
              "Say each word slowly and focus on the ny sound.",
            prompt: "niño · mañana · España · señor",
          },
          {
            title: "Tap or roll",
            instruction:
              "Read each pair and listen for the difference between r and rr.",
            prompt: "pero / perro · caro / carro",
          },
          {
            title: "Regional listening",
            instruction:
              "Listen to the word llave and remember that its pronunciation may vary by speaker and region.",
            prompt: "llave · calle · lluvia",
          },
        ],
    
        speakingPrompt:
          "Say niño, jardín, llave, pero, and perro. Repeat the last two until the difference between r and rr is clear.",
    
        quiz: [
          {
            question: "Which word contains the letter ñ?",
            answers: ["jardín", "niño", "llave", "perro"],
            correctAnswer: "niño",
          },
          {
            question: "Which letter normally has a strong breathy sound?",
            answers: ["j", "m", "p", "t"],
            correctAnswer: "j",
          },
          {
            question: "Which word contains a rolled rr?",
            answers: ["pero", "caro", "perro", "señor"],
            correctAnswer: "perro",
          },
          {
            question: "Why can ll sound different between speakers?",
            answers: [
              "It is always silent",
              "Its pronunciation varies by region",
              "It is only used in questions",
              "It represents a number",
            ],
            correctAnswer: "Its pronunciation varies by region",
          },
        ],
      },
      "spanish-greetings-introductions-greetings": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "greetings-introductions",
        lessonId: "greetings",
        nextUnitId: "greetings-introductions",
        nextLessonId: "introductions",
        unitNumber: "02",
        lessonNumber: "01",
        title: "Greetings",
        introduction:
          "Learn common Spanish greetings for different times of day and levels of formality.",
        estimatedMinutes: 10,
        speechLanguage: "es-ES",
    
        objectives: [
          "Use common greetings for morning, afternoon, and evening",
          "Recognize informal and more formal greetings",
          "Ask how someone is doing",
          "Respond naturally to a simple greeting",
        ],
    
        vocabulary: [
          {
            target: "Hola",
            translation: "Hello",
            note: "Useful in most informal and neutral situations",
          },
          {
            target: "Buenos días",
            translation: "Good morning",
          },
          {
            target: "Buenas tardes",
            translation: "Good afternoon",
          },
          {
            target: "Buenas noches",
            translation: "Good evening / Good night",
          },
          {
            target: "¿Cómo estás?",
            translation: "How are you?",
            note: "Informal singular",
          },
          {
            target: "¿Cómo está usted?",
            translation: "How are you?",
            note: "Formal singular",
          },
          {
            target: "Muy bien",
            translation: "Very well",
          },
          {
            target: "Bien, gracias",
            translation: "Fine, thank you",
          },
          {
            target: "Más o menos",
            translation: "So-so",
          },
          {
            target: "Hasta luego",
            translation: "See you later",
          },
        ],
    
        notes: [
          {
            title: "Time-based greetings",
            explanation:
              "Spanish greetings often change depending on the time of day. Buenos días is used in the morning, buenas tardes later in the day, and buenas noches in the evening or at night.",
            examples: [
              {
                target: "Buenos días",
                translation: "Good morning",
              },
              {
                target: "Buenas tardes",
                translation: "Good afternoon",
              },
              {
                target: "Buenas noches",
                translation: "Good evening / Good night",
              },
            ],
          },
          {
            title: "Tú and usted",
            explanation:
              "Tú is informal and used with friends, classmates, children, and familiar people. Usted is more formal and respectful.",
            examples: [
              {
                target: "¿Cómo estás?",
                translation: "How are you? Informal",
              },
              {
                target: "¿Cómo está usted?",
                translation: "How are you? Formal",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Ana",
            target: "Buenos días.",
            translation: "Good morning.",
          },
          {
            speaker: "Carlos",
            target: "Hola. ¿Cómo estás?",
            translation: "Hello. How are you?",
          },
          {
            speaker: "Ana",
            target: "Muy bien, gracias. ¿Y tú?",
            translation: "Very well, thank you. And you?",
          },
          {
            speaker: "Carlos",
            target: "Bien, gracias.",
            translation: "Fine, thank you.",
          },
        ],
    
        activities: [
          {
            title: "Choose the greeting",
            instruction:
              "Choose the best greeting for each time of day.",
            prompt:
              "8:00 a.m. → ________ · 3:00 p.m. → ________ · 9:00 p.m. → ________",
          },
          {
            title: "Formal or informal",
            instruction:
              "Decide whether each question is formal or informal.",
            prompt:
              "¿Cómo estás? · ¿Cómo está usted?",
          },
          {
            title: "Greeting response",
            instruction:
              "Answer the question naturally.",
            prompt:
              "¿Cómo estás? → ________",
          },
        ],
    
        speakingPrompt:
          "Greet someone, ask how they are, and respond with one complete phrase.",
    
        quiz: [
          {
            question: "Which phrase means good morning?",
            answers: [
              "Buenas noches",
              "Buenos días",
              "Hasta luego",
              "Más o menos",
            ],
            correctAnswer: "Buenos días",
          },
          {
            question: "Which phrase is the formal version of how are you?",
            answers: [
              "¿Cómo estás?",
              "¿Cómo está usted?",
              "¿Qué tal?",
              "¿Cómo te llamas?",
            ],
            correctAnswer: "¿Cómo está usted?",
          },
          {
            question: "What does más o menos mean?",
            answers: [
              "Very well",
              "See you later",
              "So-so",
              "Good night",
            ],
            correctAnswer: "So-so",
          },
          {
            question: "Which greeting is commonly used in the evening?",
            answers: [
              "Buenos días",
              "Buenas noches",
              "Hasta mañana",
              "Hola solamente",
            ],
            correctAnswer: "Buenas noches",
          },
        ],
      },

      "spanish-greetings-introductions-introductions": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "greetings-introductions",
        lessonId: "introductions",
        nextUnitId: "greetings-introductions",
        nextLessonId: "polite-expressions",
        unitNumber: "02",
        lessonNumber: "02",
        title: "Introducing yourself",
        introduction:
          "Learn how to share your name, nationality, language, and where you are from.",
        estimatedMinutes: 15,
        speechLanguage: "es-ES",
    
        objectives: [
          "Say your name",
          "Ask another person’s name",
          "Say where you are from",
          "Share your nationality and languages",
        ],
    
        vocabulary: [
          {
            target: "Me llamo…",
            translation: "My name is…",
          },
          {
            target: "¿Cómo te llamas?",
            translation: "What is your name?",
            note: "Informal",
          },
          {
            target: "¿Cómo se llama usted?",
            translation: "What is your name?",
            note: "Formal",
          },
          {
            target: "Soy de…",
            translation: "I am from…",
          },
          {
            target: "¿De dónde eres?",
            translation: "Where are you from?",
            note: "Informal",
          },
          {
            target: "Soy estadounidense",
            translation: "I am American",
          },
          {
            target: "Hablo inglés",
            translation: "I speak English",
          },
          {
            target: "Estudio español",
            translation: "I study Spanish",
          },
          {
            target: "Mucho gusto",
            translation: "Nice to meet you",
          },
          {
            target: "Igualmente",
            translation: "Likewise",
          },
        ],
    
        notes: [
          {
            title: "Me llamo",
            explanation:
              "Me llamo literally relates to being called, but it is the normal way to say my name is.",
            examples: [
              {
                target: "Me llamo Ana",
                translation: "My name is Ana",
              },
              {
                target: "Me llamo Daniel",
                translation: "My name is Daniel",
              },
            ],
          },
          {
            title: "Soy de",
            explanation:
              "Use soy de followed by a city, state, region, or country to say where you are from.",
            examples: [
              {
                target: "Soy de Chicago",
                translation: "I am from Chicago",
              },
              {
                target: "Soy de México",
                translation: "I am from Mexico",
              },
              {
                target: "Soy de España",
                translation: "I am from Spain",
              },
            ],
          },
          {
            title: "Nationality agreement",
            explanation:
              "Some nationality words change form depending on gender. Others stay the same.",
            examples: [
              {
                target: "Soy mexicano",
                translation: "I am Mexican, masculine",
              },
              {
                target: "Soy mexicana",
                translation: "I am Mexican, feminine",
              },
              {
                target: "Soy estadounidense",
                translation: "I am American, unchanged",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Sofía",
            target: "Hola. Me llamo Sofía. ¿Cómo te llamas?",
            translation: "Hello. My name is Sofía. What is your name?",
          },
          {
            speaker: "Lucas",
            target: "Me llamo Lucas. Mucho gusto.",
            translation: "My name is Lucas. Nice to meet you.",
          },
          {
            speaker: "Sofía",
            target: "Igualmente. ¿De dónde eres?",
            translation: "Likewise. Where are you from?",
          },
          {
            speaker: "Lucas",
            target: "Soy de Argentina. Hablo español e inglés.",
            translation: "I am from Argentina. I speak Spanish and English.",
          },
        ],
    
        activities: [
          {
            title: "Complete your introduction",
            instruction:
              "Fill in the blanks with your own information.",
            prompt:
              "Me llamo ________. Soy de ________. Hablo ________.",
          },
          {
            title: "Ask the question",
            instruction:
              "Write the informal question that asks someone’s name.",
            prompt:
              "What is your name? → ________",
          },
          {
            title: "Nationality practice",
            instruction:
              "Say one sentence using soy plus a nationality.",
            prompt:
              "Soy ________.",
          },
        ],
    
        speakingPrompt:
          "Introduce yourself using your name, where you are from, and one language you speak.",
    
        quiz: [
          {
            question: "Which phrase means my name is?",
            answers: [
              "Soy de",
              "Me llamo",
              "Hablo",
              "Mucho gusto",
            ],
            correctAnswer: "Me llamo",
          },
          {
            question: "What does ¿De dónde eres? mean?",
            answers: [
              "What is your name?",
              "Where are you from?",
              "What language do you speak?",
              "How are you?",
            ],
            correctAnswer: "Where are you from?",
          },
          {
            question: "Which phrase means I speak English?",
            answers: [
              "Estudio inglés",
              "Soy inglés",
              "Hablo inglés",
              "Me llamo inglés",
            ],
            correctAnswer: "Hablo inglés",
          },
          {
            question: "What is a natural response to mucho gusto?",
            answers: [
              "Igualmente",
              "Buenos días",
              "Soy de",
              "Hasta mañana",
            ],
            correctAnswer: "Igualmente",
          },
        ],
      },

      "spanish-greetings-introductions-polite-expressions": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "greetings-introductions",
        lessonId: "polite-expressions",
        unitNumber: "02",
        lessonNumber: "03",
        title: "Polite expressions",
        introduction:
          "Learn essential Spanish expressions for politeness, gratitude, apologies, and asking for help.",
        estimatedMinutes: 10,
        speechLanguage: "es-ES",
    
        objectives: [
          "Say please and thank you",
          "Respond politely to thanks",
          "Apologize or get someone’s attention",
          "Ask for help respectfully",
        ],
    
        vocabulary: [
          {
            target: "Por favor",
            translation: "Please",
          },
          {
            target: "Gracias",
            translation: "Thank you",
          },
          {
            target: "Muchas gracias",
            translation: "Thank you very much",
          },
          {
            target: "De nada",
            translation: "You are welcome",
          },
          {
            target: "Perdón",
            translation: "Sorry / Excuse me",
          },
          {
            target: "Disculpe",
            translation: "Excuse me",
            note: "Formal",
          },
          {
            target: "Lo siento",
            translation: "I am sorry",
          },
          {
            target: "Con permiso",
            translation: "Excuse me / With permission",
          },
          {
            target: "¿Puede ayudarme?",
            translation: "Can you help me?",
            note: "Formal or neutral",
          },
          {
            target: "No entiendo",
            translation: "I do not understand",
          },
        ],
    
        notes: [
          {
            title: "Perdón, disculpe, and lo siento",
            explanation:
              "These expressions overlap, but they are used differently. Perdón can mean excuse me or sorry, disculpe is polite and useful for getting attention, and lo siento expresses a more genuine apology.",
            examples: [
              {
                target: "Perdón",
                translation: "Excuse me / Sorry",
              },
              {
                target: "Disculpe, ¿dónde está la estación?",
                translation: "Excuse me, where is the station?",
              },
              {
                target: "Lo siento mucho",
                translation: "I am very sorry",
              },
            ],
          },
          {
            title: "Por favor with requests",
            explanation:
              "Por favor can appear before or after a request. Both positions are common.",
            examples: [
              {
                target: "Por favor, ayúdeme",
                translation: "Please help me",
              },
              {
                target: "Un café, por favor",
                translation: "A coffee, please",
              },
            ],
          },
          {
            title: "Responding to thanks",
            explanation:
              "De nada is the most common beginner response to gracias, but other polite responses also exist.",
            examples: [
              {
                target: "De nada",
                translation: "You are welcome",
              },
              {
                target: "No hay problema",
                translation: "No problem",
              },
              {
                target: "Con gusto",
                translation: "Gladly / With pleasure",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Traveler",
            target: "Disculpe, ¿puede ayudarme?",
            translation: "Excuse me, can you help me?",
          },
          {
            speaker: "Local",
            target: "Sí, claro.",
            translation: "Yes, of course.",
          },
          {
            speaker: "Traveler",
            target: "No entiendo este mapa.",
            translation: "I do not understand this map.",
          },
          {
            speaker: "Local",
            target: "No hay problema.",
            translation: "No problem.",
          },
          {
            speaker: "Traveler",
            target: "Muchas gracias.",
            translation: "Thank you very much.",
          },
          {
            speaker: "Local",
            target: "De nada.",
            translation: "You are welcome.",
          },
        ],
    
        activities: [
          {
            title: "Polite request",
            instruction:
              "Add por favor to make the request more polite.",
            prompt:
              "Un café, ________.",
          },
          {
            title: "Choose the apology",
            instruction:
              "Choose an expression for a sincere apology.",
            prompt:
              "I am sorry → ________",
          },
          {
            title: "Ask for help",
            instruction:
              "Complete the question.",
            prompt:
              "¿Puede ________?",
          },
        ],
    
        speakingPrompt:
          "Politely get someone’s attention, ask for help, and thank them.",
    
        quiz: [
          {
            question: "Which phrase means please?",
            answers: [
              "De nada",
              "Por favor",
              "Lo siento",
              "Con permiso",
            ],
            correctAnswer: "Por favor",
          },
          {
            question: "What is the most common response to gracias?",
            answers: [
              "Me llamo",
              "De nada",
              "Perdón",
              "No entiendo",
            ],
            correctAnswer: "De nada",
          },
          {
            question: "Which phrase expresses a sincere apology?",
            answers: [
              "Lo siento",
              "Por favor",
              "Con gusto",
              "Mucho gusto",
            ],
            correctAnswer: "Lo siento",
          },
          {
            question: "What does ¿Puede ayudarme? mean?",
            answers: [
              "Can you help me?",
              "Do you speak English?",
              "Where are you from?",
              "Can I pay?",
            ],
            correctAnswer: "Can you help me?",
          },
        ],
      },
      "spanish-numbers-time-numbers": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "numbers-time",
        lessonId: "numbers",
        nextUnitId: "numbers-time",
        nextLessonId: "age-phone",
        unitNumber: "03",
        lessonNumber: "01",
        title: "Numbers from 0 to 100",
        introduction:
          "Learn how Spanish numbers are formed, recognize common patterns, and use numbers for prices, ages, addresses, and everyday information.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Count from zero to twenty",
          "Recognize the tens from twenty to one hundred",
          "Build numbers such as thirty-four and seventy-eight",
          "Understand numbers in simple everyday situations",
        ],
    
        vocabulary: [
          {
            target: "cero",
            translation: "zero",
          },
          {
            target: "uno",
            translation: "one",
          },
          {
            target: "dos",
            translation: "two",
          },
          {
            target: "tres",
            translation: "three",
          },
          {
            target: "cuatro",
            translation: "four",
          },
          {
            target: "cinco",
            translation: "five",
          },
          {
            target: "seis",
            translation: "six",
          },
          {
            target: "siete",
            translation: "seven",
          },
          {
            target: "ocho",
            translation: "eight",
          },
          {
            target: "nueve",
            translation: "nine",
          },
          {
            target: "diez",
            translation: "ten",
          },
          {
            target: "once",
            translation: "eleven",
          },
          {
            target: "doce",
            translation: "twelve",
          },
          {
            target: "trece",
            translation: "thirteen",
          },
          {
            target: "catorce",
            translation: "fourteen",
          },
          {
            target: "quince",
            translation: "fifteen",
          },
          {
            target: "dieciséis",
            translation: "sixteen",
          },
          {
            target: "diecisiete",
            translation: "seventeen",
          },
          {
            target: "dieciocho",
            translation: "eighteen",
          },
          {
            target: "diecinueve",
            translation: "nineteen",
          },
          {
            target: "veinte",
            translation: "twenty",
          },
          {
            target: "treinta",
            translation: "thirty",
          },
          {
            target: "cuarenta",
            translation: "forty",
          },
          {
            target: "cincuenta",
            translation: "fifty",
          },
          {
            target: "sesenta",
            translation: "sixty",
          },
          {
            target: "setenta",
            translation: "seventy",
          },
          {
            target: "ochenta",
            translation: "eighty",
          },
          {
            target: "noventa",
            translation: "ninety",
          },
          {
            target: "cien",
            translation: "one hundred",
          },
        ],
    
        notes: [
          {
            title: "Numbers from sixteen to nineteen",
            explanation:
              "The numbers sixteen through nineteen combine diez with another number. In modern spelling, they are written as one word.",
            examples: [
              {
                target: "dieciséis",
                translation: "sixteen",
              },
              {
                target: "diecisiete",
                translation: "seventeen",
              },
              {
                target: "dieciocho",
                translation: "eighteen",
              },
              {
                target: "diecinueve",
                translation: "nineteen",
              },
            ],
          },
          {
            title: "Numbers from twenty-one to twenty-nine",
            explanation:
              "Numbers from twenty-one to twenty-nine are also normally written as one word.",
            examples: [
              {
                target: "veintiuno",
                translation: "twenty-one",
              },
              {
                target: "veintidós",
                translation: "twenty-two",
              },
              {
                target: "veintitrés",
                translation: "twenty-three",
              },
              {
                target: "veintinueve",
                translation: "twenty-nine",
              },
            ],
          },
          {
            title: "Numbers above thirty",
            explanation:
              "From thirty-one onward, use the tens number, followed by y, followed by the smaller number.",
            examples: [
              {
                target: "treinta y uno",
                translation: "thirty-one",
              },
              {
                target: "cuarenta y cinco",
                translation: "forty-five",
              },
              {
                target: "sesenta y ocho",
                translation: "sixty-eight",
              },
              {
                target: "noventa y nueve",
                translation: "ninety-nine",
              },
            ],
          },
          {
            title: "Cien and ciento",
            explanation:
              "Use cien for exactly one hundred. Use ciento when another number follows, although this lesson focuses mainly on numbers through one hundred.",
            examples: [
              {
                target: "cien",
                translation: "one hundred",
              },
              {
                target: "ciento uno",
                translation: "one hundred one",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Customer",
            target: "¿Cuánto cuesta?",
            translation: "How much does it cost?",
          },
          {
            speaker: "Seller",
            target: "Cuesta treinta y cinco euros.",
            translation: "It costs thirty-five euros.",
          },
          {
            speaker: "Customer",
            target: "¿Treinta y cinco?",
            translation: "Thirty-five?",
          },
          {
            speaker: "Seller",
            target: "Sí, treinta y cinco.",
            translation: "Yes, thirty-five.",
          },
        ],
    
        activities: [
          {
            title: "Count aloud",
            instruction:
              "Count from zero to twenty slowly, paying attention to clear vowel sounds.",
            prompt:
              "cero · uno · dos · tres · cuatro · cinco · seis · siete · ocho · nueve · diez",
          },
          {
            title: "Build the number",
            instruction:
              "Combine the tens and ones to create the complete Spanish number.",
            prompt:
              "30 + 4 → ________ · 50 + 7 → ________ · 80 + 2 → ________",
          },
          {
            title: "Price practice",
            instruction:
              "Say each price aloud in Spanish.",
            prompt:
              "€12 · €25 · €48 · €76 · €99",
          },
          {
            title: "Number recognition",
            instruction:
              "Write the numeral represented by each Spanish phrase.",
            prompt:
              "cuarenta y dos → ___ · sesenta → ___ · noventa y cinco → ___",
          },
        ],
    
        speakingPrompt:
          "Count from one to twenty, then say three prices between twenty and one hundred euros.",
    
        quiz: [
          {
            question: "Which number is quince?",
            answers: ["13", "14", "15", "16"],
            correctAnswer: "15",
          },
          {
            question: "How do you say twenty in Spanish?",
            answers: ["treinta", "veinte", "doce", "cincuenta"],
            correctAnswer: "veinte",
          },
          {
            question: "Which phrase means forty-five?",
            answers: [
              "cuarenta cinco",
              "cuatro y cinco",
              "cuarenta y cinco",
              "cincuenta y cuatro",
            ],
            correctAnswer: "cuarenta y cinco",
          },
          {
            question: "How do you say ninety?",
            answers: [
              "noventa",
              "ochenta",
              "setenta",
              "cincuenta",
            ],
            correctAnswer: "noventa",
          },
          {
            question: "Which word means exactly one hundred?",
            answers: ["ciento", "cien", "mil", "diez"],
            correctAnswer: "cien",
          },
        ],
      },
      "spanish-numbers-time-age-phone": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "numbers-time",
        lessonId: "age-phone",
        nextUnitId: "numbers-time",
        nextLessonId: "dates-time",
        unitNumber: "03",
        lessonNumber: "02",
        title: "Age and phone numbers",
        introduction:
          "Learn how to give your age, ask someone else’s age, and exchange phone numbers clearly in Spanish.",
        estimatedMinutes: 12,
        speechLanguage: "es-ES",
    
        objectives: [
          "Ask and answer questions about age",
          "Use tener when talking about age",
          "Ask for someone’s phone number",
          "Read phone numbers clearly and accurately",
        ],
    
        vocabulary: [
          {
            target: "¿Cuántos años tienes?",
            translation: "How old are you?",
            note: "Informal singular",
          },
          {
            target: "¿Cuántos años tiene usted?",
            translation: "How old are you?",
            note: "Formal singular",
          },
          {
            target: "Tengo veinte años",
            translation: "I am twenty years old",
            note: "Spanish uses tener, meaning to have, when stating age",
          },
          {
            target: "Tiene dieciocho años",
            translation: "He or she is eighteen years old",
          },
          {
            target: "¿Cuál es tu número de teléfono?",
            translation: "What is your phone number?",
            note: "Informal",
          },
          {
            target: "¿Cuál es su número de teléfono?",
            translation: "What is your phone number?",
            note: "Formal",
          },
          {
            target: "Mi número es…",
            translation: "My number is…",
          },
          {
            target: "teléfono",
            translation: "telephone / phone",
          },
          {
            target: "número",
            translation: "number",
          },
          {
            target: "Repita, por favor",
            translation: "Repeat, please",
          },
          {
            target: "Más despacio, por favor",
            translation: "More slowly, please",
          },
          {
            target: "¿Es correcto?",
            translation: "Is it correct?",
          },
        ],
    
        notes: [
          {
            title: "Use tener for age",
            explanation:
              "Spanish expresses age with the verb tener, meaning to have. Do not use ser when stating someone’s age.",
            examples: [
              {
                target: "Tengo veinte años",
                translation: "I am twenty years old",
              },
              {
                target: "Tienes diecinueve años",
                translation: "You are nineteen years old",
              },
              {
                target: "Tiene treinta años",
                translation: "He, she, or you formal are thirty years old",
              },
            ],
          },
          {
            title: "Asking someone’s age",
            explanation:
              "Use cuántos años tienes informally and cuántos años tiene usted formally.",
            examples: [
              {
                target: "¿Cuántos años tienes?",
                translation: "How old are you? Informal",
              },
              {
                target: "¿Cuántos años tiene usted?",
                translation: "How old are you? Formal",
              },
            ],
          },
          {
            title: "Reading phone numbers",
            explanation:
              "Phone numbers may be read digit by digit or in small groups depending on the country and local custom. For beginner practice, reading one digit at a time is the clearest method.",
            examples: [
              {
                target: "Seis, uno, cuatro, dos",
                translation: "Six, one, four, two",
              },
              {
                target: "Nueve, ocho, cero, cinco",
                translation: "Nine, eight, zero, five",
              },
            ],
          },
          {
            title: "Clarifying information",
            explanation:
              "Use repita or más despacio when you need someone to repeat or slow down.",
            examples: [
              {
                target: "Repita, por favor",
                translation: "Repeat, please",
              },
              {
                target: "Más despacio, por favor",
                translation: "More slowly, please",
              },
              {
                target: "¿Es correcto?",
                translation: "Is it correct?",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "María",
            target: "¿Cuántos años tienes?",
            translation: "How old are you?",
          },
          {
            speaker: "Javier",
            target: "Tengo veintidós años. ¿Y tú?",
            translation: "I am twenty-two years old. And you?",
          },
          {
            speaker: "María",
            target: "Tengo veinte años.",
            translation: "I am twenty years old.",
          },
          {
            speaker: "Javier",
            target: "¿Cuál es tu número de teléfono?",
            translation: "What is your phone number?",
          },
          {
            speaker: "María",
            target: "Mi número es seis, cuatro, cinco, dos, ocho, uno.",
            translation: "My number is six, four, five, two, eight, one.",
          },
          {
            speaker: "Javier",
            target: "Repita, por favor.",
            translation: "Repeat, please.",
          },
        ],
    
        activities: [
          {
            title: "State your age",
            instruction:
              "Complete the sentence with your age.",
            prompt:
              "Tengo ________ años.",
          },
          {
            title: "Ask the question",
            instruction:
              "Write the informal question that asks someone’s age.",
            prompt:
              "How old are you? → ________",
          },
          {
            title: "Phone number practice",
            instruction:
              "Read each sequence aloud one digit at a time.",
            prompt:
              "6 2 9 4 · 8 1 0 7 · 5 3 2 9",
          },
          {
            title: "Clarify the number",
            instruction:
              "Choose a phrase to ask someone to repeat more slowly.",
            prompt:
              "________, por favor.",
          },
        ],
    
        speakingPrompt:
          "Say your age, ask another person’s age, then read a six-digit phone number aloud in Spanish.",
    
        quiz: [
          {
            question: "Which phrase means I am twenty years old?",
            answers: [
              "Soy veinte años",
              "Tengo veinte años",
              "Estoy veinte años",
              "Hablo veinte años",
            ],
            correctAnswer: "Tengo veinte años",
          },
          {
            question: "What does ¿Cuántos años tienes? mean?",
            answers: [
              "What is your phone number?",
              "Where do you live?",
              "How old are you?",
              "What is your name?",
            ],
            correctAnswer: "How old are you?",
          },
          {
            question: "Which verb is used to state age in Spanish?",
            answers: [
              "ser",
              "estar",
              "tener",
              "hablar",
            ],
            correctAnswer: "tener",
          },
          {
            question: "What does Mi número es… mean?",
            answers: [
              "My name is…",
              "My number is…",
              "My age is…",
              "My address is…",
            ],
            correctAnswer: "My number is…",
          },
          {
            question: "Which phrase asks someone to slow down?",
            answers: [
              "Más despacio, por favor",
              "Mucho gusto",
              "Hasta luego",
              "¿Cuántos años tienes?",
            ],
            correctAnswer: "Más despacio, por favor",
          },
        ],
      },
      "spanish-numbers-time-dates-time": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "numbers-time",
        lessonId: "dates-time",
        nextUnitId: "family-people",
        nextLessonId: "family",
        unitNumber: "03",
        lessonNumber: "03",
        title: "Dates and time",
        introduction:
          "Learn how to talk about days, months, dates, and basic clock times in Spanish.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Name the days of the week",
          "Recognize the months of the year",
          "Say and understand basic dates",
          "Ask for and tell the time",
        ],
    
        vocabulary: [
          {
            target: "lunes",
            translation: "Monday",
          },
          {
            target: "martes",
            translation: "Tuesday",
          },
          {
            target: "miércoles",
            translation: "Wednesday",
          },
          {
            target: "jueves",
            translation: "Thursday",
          },
          {
            target: "viernes",
            translation: "Friday",
          },
          {
            target: "sábado",
            translation: "Saturday",
          },
          {
            target: "domingo",
            translation: "Sunday",
          },
          {
            target: "enero",
            translation: "January",
          },
          {
            target: "febrero",
            translation: "February",
          },
          {
            target: "marzo",
            translation: "March",
          },
          {
            target: "abril",
            translation: "April",
          },
          {
            target: "mayo",
            translation: "May",
          },
          {
            target: "junio",
            translation: "June",
          },
          {
            target: "julio",
            translation: "July",
          },
          {
            target: "agosto",
            translation: "August",
          },
          {
            target: "septiembre",
            translation: "September",
          },
          {
            target: "octubre",
            translation: "October",
          },
          {
            target: "noviembre",
            translation: "November",
          },
          {
            target: "diciembre",
            translation: "December",
          },
          {
            target: "¿Qué día es hoy?",
            translation: "What day is it today?",
          },
          {
            target: "Hoy es lunes",
            translation: "Today is Monday",
          },
          {
            target: "¿Cuál es la fecha?",
            translation: "What is the date?",
          },
          {
            target: "Es el cinco de mayo",
            translation: "It is May fifth",
          },
          {
            target: "¿Qué hora es?",
            translation: "What time is it?",
          },
          {
            target: "Es la una",
            translation: "It is one o’clock",
          },
          {
            target: "Son las dos",
            translation: "It is two o’clock",
          },
          {
            target: "y media",
            translation: "half past",
          },
          {
            target: "y cuarto",
            translation: "quarter past",
          },
          {
            target: "menos cuarto",
            translation: "quarter to",
          },
        ],
    
        notes: [
          {
            title: "Days and months are lowercase",
            explanation:
              "In Spanish, days of the week and months are normally written with lowercase letters unless they begin a sentence.",
            examples: [
              {
                target: "lunes",
                translation: "Monday",
              },
              {
                target: "abril",
                translation: "April",
              },
              {
                target: "Hoy es martes",
                translation: "Today is Tuesday",
              },
            ],
          },
          {
            title: "Writing the date",
            explanation:
              "Spanish usually places the day before the month. Use el followed by the number, then de, then the month.",
            examples: [
              {
                target: "el cinco de mayo",
                translation: "May fifth",
              },
              {
                target: "el doce de octubre",
                translation: "October twelfth",
              },
              {
                target: "el veintiuno de junio",
                translation: "June twenty-first",
              },
            ],
          },
          {
            title: "Es la una and son las",
            explanation:
              "Use es la with one o’clock because una is singular. Use son las for all other hours.",
            examples: [
              {
                target: "Es la una",
                translation: "It is one o’clock",
              },
              {
                target: "Son las dos",
                translation: "It is two o’clock",
              },
              {
                target: "Son las ocho",
                translation: "It is eight o’clock",
              },
            ],
          },
          {
            title: "Minutes after and before the hour",
            explanation:
              "Use y for minutes after the hour. Use menos to count backward from the following hour.",
            examples: [
              {
                target: "Son las tres y cuarto",
                translation: "It is quarter past three",
              },
              {
                target: "Son las seis y media",
                translation: "It is half past six",
              },
              {
                target: "Son las nueve menos cuarto",
                translation: "It is quarter to nine",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Lucía",
            target: "¿Qué día es hoy?",
            translation: "What day is it today?",
          },
          {
            speaker: "Mateo",
            target: "Hoy es jueves.",
            translation: "Today is Thursday.",
          },
          {
            speaker: "Lucía",
            target: "¿Cuál es la fecha?",
            translation: "What is the date?",
          },
          {
            speaker: "Mateo",
            target: "Es el doce de septiembre.",
            translation: "It is September twelfth.",
          },
          {
            speaker: "Lucía",
            target: "¿Qué hora es?",
            translation: "What time is it?",
          },
          {
            speaker: "Mateo",
            target: "Son las cuatro y media.",
            translation: "It is half past four.",
          },
        ],
    
        activities: [
          {
            title: "Day of the week",
            instruction:
              "Say the day that comes after each one.",
            prompt:
              "lunes → ________ · viernes → ________ · domingo → ________",
          },
          {
            title: "Build the date",
            instruction:
              "Write each date in Spanish.",
            prompt:
              "March 8 → ________ · July 21 → ________ · December 15 → ________",
          },
          {
            title: "Tell the time",
            instruction:
              "Say each time aloud in Spanish.",
            prompt:
              "1:00 · 2:15 · 6:30 · 8:45",
          },
          {
            title: "Answer the questions",
            instruction:
              "Answer using today’s real date and time.",
            prompt:
              "¿Qué día es hoy? · ¿Cuál es la fecha? · ¿Qué hora es?",
          },
        ],
    
        speakingPrompt:
          "Say today’s day and date, then tell the time for three different clock examples.",
    
        quiz: [
          {
            question: "Which word means Wednesday?",
            answers: [
              "martes",
              "miércoles",
              "jueves",
              "domingo",
            ],
            correctAnswer: "miércoles",
          },
          {
            question: "How do you say May fifth?",
            answers: [
              "mayo cinco",
              "cinco mayo",
              "el cinco de mayo",
              "mayo de cinco",
            ],
            correctAnswer: "el cinco de mayo",
          },
          {
            question: "Which phrase means it is one o’clock?",
            answers: [
              "Son las una",
              "Es la una",
              "Es una hora",
              "Son la una",
            ],
            correctAnswer: "Es la una",
          },
          {
            question: "What does y media mean when telling time?",
            answers: [
              "Quarter past",
              "Half past",
              "Quarter to",
              "Exactly",
            ],
            correctAnswer: "Half past",
          },
          {
            question: "How do you say it is quarter to nine?",
            answers: [
              "Son las nueve y cuarto",
              "Son las ocho y cuarto",
              "Son las nueve menos cuarto",
              "Es la nueve menos cuarto",
            ],
            correctAnswer: "Son las nueve menos cuarto",
          },
        ],
      },
      "spanish-family-people-family": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "family-people",
        lessonId: "family",
        nextUnitId: "family-people",
        nextLessonId: "describing-people",
        unitNumber: "04",
        lessonNumber: "01",
        title: "Family vocabulary",
        introduction:
          "Learn how to talk about family members, relationships, and the people who are important in your life.",
        estimatedMinutes: 15,
        speechLanguage: "es-ES",
    
        objectives: [
          "Name common family members",
          "Introduce members of your family",
          "Use possessive words such as mi and mis",
          "Ask simple questions about someone’s family",
        ],
    
        vocabulary: [
          {
            target: "la familia",
            translation: "family",
          },
          {
            target: "la madre",
            translation: "mother",
          },
          {
            target: "el padre",
            translation: "father",
          },
          {
            target: "los padres",
            translation: "parents",
            note: "Can refer to both parents together",
          },
          {
            target: "la hermana",
            translation: "sister",
          },
          {
            target: "el hermano",
            translation: "brother",
          },
          {
            target: "los hermanos",
            translation: "siblings / brothers",
            note: "May refer to brothers or a mixed group of siblings",
          },
          {
            target: "la hija",
            translation: "daughter",
          },
          {
            target: "el hijo",
            translation: "son",
          },
          {
            target: "la abuela",
            translation: "grandmother",
          },
          {
            target: "el abuelo",
            translation: "grandfather",
          },
          {
            target: "los abuelos",
            translation: "grandparents",
          },
          {
            target: "la tía",
            translation: "aunt",
          },
          {
            target: "el tío",
            translation: "uncle",
          },
          {
            target: "la prima",
            translation: "female cousin",
          },
          {
            target: "el primo",
            translation: "male cousin",
          },
          {
            target: "la esposa",
            translation: "wife",
          },
          {
            target: "el esposo",
            translation: "husband",
          },
          {
            target: "mi familia",
            translation: "my family",
          },
          {
            target: "mis padres",
            translation: "my parents",
          },
          {
            target: "Esta es mi hermana",
            translation: "This is my sister",
          },
          {
            target: "Este es mi hermano",
            translation: "This is my brother",
          },
          {
            target: "¿Tienes hermanos?",
            translation: "Do you have siblings?",
          },
          {
            target: "Tengo una hermana",
            translation: "I have one sister",
          },
          {
            target: "No tengo hermanos",
            translation: "I do not have siblings",
          },
        ],
    
        notes: [
          {
            title: "Mi and mis",
            explanation:
              "Use mi before one possession and mis before more than one. These words do not change according to the gender of the noun.",
            examples: [
              {
                target: "mi madre",
                translation: "my mother",
              },
              {
                target: "mi hermano",
                translation: "my brother",
              },
              {
                target: "mis padres",
                translation: "my parents",
              },
              {
                target: "mis hermanas",
                translation: "my sisters",
              },
            ],
          },
          {
            title: "Este and esta",
            explanation:
              "Use este with a masculine singular noun and esta with a feminine singular noun when introducing someone nearby.",
            examples: [
              {
                target: "Este es mi padre",
                translation: "This is my father",
              },
              {
                target: "Esta es mi madre",
                translation: "This is my mother",
              },
              {
                target: "Este es mi primo",
                translation: "This is my male cousin",
              },
              {
                target: "Esta es mi prima",
                translation: "This is my female cousin",
              },
            ],
          },
          {
            title: "Asking about siblings",
            explanation:
              "Use tener to ask and answer questions about family members. The plural hermanos can refer to siblings in general.",
            examples: [
              {
                target: "¿Tienes hermanos?",
                translation: "Do you have siblings?",
              },
              {
                target: "Tengo dos hermanos",
                translation: "I have two brothers or siblings",
              },
              {
                target: "Tengo una hermana",
                translation: "I have one sister",
              },
              {
                target: "No tengo hermanos",
                translation: "I do not have siblings",
              },
            ],
          },
          {
            title: "Masculine and feminine forms",
            explanation:
              "Many family words use -o for a masculine form and -a for a feminine form.",
            examples: [
              {
                target: "hermano / hermana",
                translation: "brother / sister",
              },
              {
                target: "abuelo / abuela",
                translation: "grandfather / grandmother",
              },
              {
                target: "tío / tía",
                translation: "uncle / aunt",
              },
              {
                target: "primo / prima",
                translation: "male cousin / female cousin",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Elena",
            target: "¿Tienes hermanos?",
            translation: "Do you have siblings?",
          },
          {
            speaker: "Diego",
            target: "Sí. Tengo una hermana y un hermano.",
            translation: "Yes. I have one sister and one brother.",
          },
          {
            speaker: "Elena",
            target: "¿Cómo se llaman?",
            translation: "What are their names?",
          },
          {
            speaker: "Diego",
            target: "Mi hermana se llama Carla y mi hermano se llama Luis.",
            translation:
              "My sister’s name is Carla and my brother’s name is Luis.",
          },
          {
            speaker: "Elena",
            target: "¿Viven contigo?",
            translation: "Do they live with you?",
          },
          {
            speaker: "Diego",
            target: "Mi hermano vive conmigo, pero mi hermana vive en Madrid.",
            translation:
              "My brother lives with me, but my sister lives in Madrid.",
          },
        ],
    
        activities: [
          {
            title: "Build your family list",
            instruction:
              "Write or say the names of family members who are important to you.",
            prompt:
              "mi madre · mi padre · mis hermanos · mis abuelos · mis primos",
          },
          {
            title: "Choose mi or mis",
            instruction:
              "Complete each phrase with the correct possessive word.",
            prompt:
              "___ hermana · ___ padres · ___ abuelo · ___ primos",
          },
          {
            title: "Introduce someone",
            instruction:
              "Complete each sentence using este or esta.",
            prompt:
              "___ es mi hermano. · ___ es mi abuela. · ___ es mi prima.",
          },
          {
            title: "Answer the question",
            instruction:
              "Answer with true or imagined information.",
            prompt:
              "¿Tienes hermanos? → ________",
          },
        ],
    
        speakingPrompt:
          "Introduce at least three members of your family using este es, esta es, mi, and mis.",
    
        quiz: [
          {
            question: "Which word means grandmother?",
            answers: [
              "la hermana",
              "la abuela",
              "la tía",
              "la hija",
            ],
            correctAnswer: "la abuela",
          },
          {
            question: "Which phrase means my parents?",
            answers: [
              "mi padres",
              "mis padre",
              "mis padres",
              "mi familia padres",
            ],
            correctAnswer: "mis padres",
          },
          {
            question: "How do you say this is my sister?",
            answers: [
              "Este es mi hermana",
              "Esta es mi hermana",
              "Ella mi hermana",
              "Es una hermano",
            ],
            correctAnswer: "Esta es mi hermana",
          },
          {
            question: "What does ¿Tienes hermanos? mean?",
            answers: [
              "Do you have siblings?",
              "Where are your parents?",
              "What is your sister’s name?",
              "Do you live alone?",
            ],
            correctAnswer: "Do you have siblings?",
          },
          {
            question: "Which phrase means I do not have siblings?",
            answers: [
              "No soy hermanos",
              "No tengo hermanos",
              "No hay mi familia",
              "Mis hermanos no",
            ],
            correctAnswer: "No tengo hermanos",
          },
        ],
      },
      "spanish-family-people-describing-people": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "family-people",
        lessonId: "describing-people",
        nextUnitId: "food-ordering",
        nextLessonId: "food-vocabulary",
        unitNumber: "04",
        lessonNumber: "02",
        title: "Describing people",
        introduction:
          "Learn how to describe someone’s appearance, personality, and basic characteristics using simple Spanish sentences.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Describe basic physical characteristics",
          "Use common personality adjectives",
          "Make adjectives agree with nouns",
          "Use ser and tener in simple descriptions",
        ],
    
        vocabulary: [
          {
            target: "alto",
            translation: "tall, masculine",
          },
          {
            target: "alta",
            translation: "tall, feminine",
          },
          {
            target: "bajo",
            translation: "short, masculine",
          },
          {
            target: "baja",
            translation: "short, feminine",
          },
          {
            target: "joven",
            translation: "young",
          },
          {
            target: "mayor",
            translation: "older",
          },
          {
            target: "amable",
            translation: "kind",
          },
          {
            target: "simpático",
            translation: "friendly / nice, masculine",
          },
          {
            target: "simpática",
            translation: "friendly / nice, feminine",
          },
          {
            target: "serio",
            translation: "serious, masculine",
          },
          {
            target: "seria",
            translation: "serious, feminine",
          },
          {
            target: "divertido",
            translation: "fun / funny, masculine",
          },
          {
            target: "divertida",
            translation: "fun / funny, feminine",
          },
          {
            target: "inteligente",
            translation: "intelligent",
          },
          {
            target: "trabajador",
            translation: "hardworking, masculine",
          },
          {
            target: "trabajadora",
            translation: "hardworking, feminine",
          },
          {
            target: "tímido",
            translation: "shy, masculine",
          },
          {
            target: "tímida",
            translation: "shy, feminine",
          },
          {
            target: "Tiene el pelo negro",
            translation: "He or she has black hair",
          },
          {
            target: "Tiene el pelo corto",
            translation: "He or she has short hair",
          },
          {
            target: "Tiene los ojos marrones",
            translation: "He or she has brown eyes",
          },
          {
            target: "Es alto",
            translation: "He is tall",
          },
          {
            target: "Es alta",
            translation: "She is tall",
          },
          {
            target: "Es muy amable",
            translation: "He or she is very kind",
          },
          {
            target: "¿Cómo es?",
            translation: "What is he or she like?",
          },
        ],
    
        notes: [
          {
            title: "Adjective agreement",
            explanation:
              "Many Spanish adjectives change their endings to agree with the person being described. Adjectives ending in -o often change to -a for a feminine subject.",
            examples: [
              {
                target: "Él es alto",
                translation: "He is tall",
              },
              {
                target: "Ella es alta",
                translation: "She is tall",
              },
              {
                target: "Él es divertido",
                translation: "He is fun",
              },
              {
                target: "Ella es divertida",
                translation: "She is fun",
              },
            ],
          },
          {
            title: "Adjectives that do not change",
            explanation:
              "Some adjectives have the same masculine and feminine form, especially those ending in -e.",
            examples: [
              {
                target: "Él es inteligente",
                translation: "He is intelligent",
              },
              {
                target: "Ella es inteligente",
                translation: "She is intelligent",
              },
              {
                target: "Él es amable",
                translation: "He is kind",
              },
              {
                target: "Ella es amable",
                translation: "She is kind",
              },
            ],
          },
          {
            title: "Use ser for characteristics",
            explanation:
              "Use ser to describe identity, personality, and general characteristics.",
            examples: [
              {
                target: "Es simpático",
                translation: "He is friendly",
              },
              {
                target: "Es seria",
                translation: "She is serious",
              },
              {
                target: "Es muy trabajador",
                translation: "He is very hardworking",
              },
            ],
          },
          {
            title: "Use tener for hair and eyes",
            explanation:
              "Spanish commonly uses tener when describing someone’s hair, eyes, and certain physical features.",
            examples: [
              {
                target: "Tiene el pelo largo",
                translation: "He or she has long hair",
              },
              {
                target: "Tiene los ojos verdes",
                translation: "He or she has green eyes",
              },
              {
                target: "Tiene el pelo rizado",
                translation: "He or she has curly hair",
              },
            ],
          },
          {
            title: "Muy before an adjective",
            explanation:
              "Place muy before an adjective to mean very. Muy does not change form.",
            examples: [
              {
                target: "muy amable",
                translation: "very kind",
              },
              {
                target: "muy inteligente",
                translation: "very intelligent",
              },
              {
                target: "muy divertida",
                translation: "very fun",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Marcos",
            target: "¿Cómo es tu hermana?",
            translation: "What is your sister like?",
          },
          {
            speaker: "Isabel",
            target: "Es muy simpática y divertida.",
            translation: "She is very friendly and fun.",
          },
          {
            speaker: "Marcos",
            target: "¿Es alta?",
            translation: "Is she tall?",
          },
          {
            speaker: "Isabel",
            target: "Sí, es alta. Tiene el pelo largo y los ojos marrones.",
            translation:
              "Yes, she is tall. She has long hair and brown eyes.",
          },
          {
            speaker: "Marcos",
            target: "¿Y tu hermano?",
            translation: "And your brother?",
          },
          {
            speaker: "Isabel",
            target: "Es serio, pero muy amable.",
            translation: "He is serious, but very kind.",
          },
        ],
    
        activities: [
          {
            title: "Match the adjective",
            instruction:
              "Choose the form that agrees with the person.",
            prompt:
              "Ella es alto / alta · Él es divertido / divertida · Ella es tímido / tímida",
          },
          {
            title: "Use ser or tener",
            instruction:
              "Choose the correct verb for each description.",
            prompt:
              "___ amable · ___ el pelo negro · ___ alta · ___ los ojos verdes",
          },
          {
            title: "Describe a person",
            instruction:
              "Complete the description with at least three adjectives.",
            prompt:
              "Mi amigo es ________, ________ y ________.",
          },
          {
            title: "Appearance practice",
            instruction:
              "Create one sentence about hair and one sentence about eyes.",
            prompt:
              "Tiene el pelo ________. Tiene los ojos ________.",
          },
        ],
    
        speakingPrompt:
          "Describe one person using at least two personality adjectives, one physical characteristic, and one sentence with tener.",
    
        quiz: [
          {
            question: "Which sentence correctly describes a tall woman?",
            answers: [
              "Ella es alto",
              "Ella es alta",
              "Ella tiene alta",
              "Ella está alto",
            ],
            correctAnswer: "Ella es alta",
          },
          {
            question: "Which adjective keeps the same form for masculine and feminine?",
            answers: [
              "alto",
              "divertido",
              "inteligente",
              "serio",
            ],
            correctAnswer: "inteligente",
          },
          {
            question: "Which verb is normally used for personality characteristics?",
            answers: [
              "tener",
              "ser",
              "haber",
              "llamar",
            ],
            correctAnswer: "ser",
          },
          {
            question: "How do you say she has brown eyes?",
            answers: [
              "Es los ojos marrones",
              "Tiene los ojos marrones",
              "Hay ojos marrones",
              "Está ojos marrones",
            ],
            correctAnswer: "Tiene los ojos marrones",
          },
          {
            question: "What does ¿Cómo es? ask about?",
            answers: [
              "What someone is like",
              "Where someone lives",
              "How old someone is",
              "What someone is doing now",
            ],
            correctAnswer: "What someone is like",
          },
        ],
      },
      "spanish-food-ordering-food-vocabulary": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "food-ordering",
        lessonId: "food-vocabulary",
        nextUnitId: "food-ordering",
        nextLessonId: "restaurant",
        unitNumber: "05",
        lessonNumber: "01",
        title: "Food and drink",
        introduction:
          "Learn essential Spanish vocabulary for meals, foods, drinks, preferences, and simple eating situations.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Name common foods and drinks",
          "Talk about breakfast, lunch, and dinner",
          "Say what you like and dislike",
          "Express hunger and thirst",
        ],
    
        vocabulary: [
          {
            target: "la comida",
            translation: "food / meal",
          },
          {
            target: "el desayuno",
            translation: "breakfast",
          },
          {
            target: "el almuerzo",
            translation: "lunch",
          },
          {
            target: "la cena",
            translation: "dinner",
          },
          {
            target: "el pan",
            translation: "bread",
          },
          {
            target: "el arroz",
            translation: "rice",
          },
          {
            target: "la carne",
            translation: "meat",
          },
          {
            target: "el pollo",
            translation: "chicken",
          },
          {
            target: "el pescado",
            translation: "fish",
          },
          {
            target: "las verduras",
            translation: "vegetables",
          },
          {
            target: "la fruta",
            translation: "fruit",
          },
          {
            target: "la manzana",
            translation: "apple",
          },
          {
            target: "el plátano",
            translation: "banana",
          },
          {
            target: "el queso",
            translation: "cheese",
          },
          {
            target: "el huevo",
            translation: "egg",
          },
          {
            target: "el agua",
            translation: "water",
            note: "Uses el in the singular even though agua is feminine",
          },
          {
            target: "el café",
            translation: "coffee",
          },
          {
            target: "el té",
            translation: "tea",
          },
          {
            target: "el jugo",
            translation: "juice",
          },
          {
            target: "Tengo hambre",
            translation: "I am hungry",
          },
          {
            target: "Tengo sed",
            translation: "I am thirsty",
          },
          {
            target: "Me gusta",
            translation: "I like",
          },
          {
            target: "No me gusta",
            translation: "I do not like",
          },
          {
            target: "Me encantan las frutas",
            translation: "I love fruits",
          },
          {
            target: "¿Qué te gusta comer?",
            translation: "What do you like to eat?",
          },
        ],
    
        notes: [
          {
            title: "Me gusta and me gustan",
            explanation:
              "Use me gusta before one thing or an infinitive. Use me gustan before plural things.",
            examples: [
              {
                target: "Me gusta el café",
                translation: "I like coffee",
              },
              {
                target: "Me gusta cocinar",
                translation: "I like to cook",
              },
              {
                target: "Me gustan las verduras",
                translation: "I like vegetables",
              },
            ],
          },
          {
            title: "Expressing hunger and thirst",
            explanation:
              "Spanish uses tener, meaning to have, when expressing hunger and thirst.",
            examples: [
              {
                target: "Tengo hambre",
                translation: "I am hungry",
              },
              {
                target: "Tengo sed",
                translation: "I am thirsty",
              },
              {
                target: "¿Tienes hambre?",
                translation: "Are you hungry?",
              },
            ],
          },
          {
            title: "Meal vocabulary varies",
            explanation:
              "Meal names and meal times vary across Spanish-speaking countries. Almuerzo commonly means lunch, but usage may differ by region.",
            examples: [
              {
                target: "el desayuno",
                translation: "breakfast",
              },
              {
                target: "el almuerzo",
                translation: "lunch",
              },
              {
                target: "la cena",
                translation: "dinner",
              },
            ],
          },
          {
            title: "The word agua",
            explanation:
              "Agua is feminine, but it uses el in the singular because the first syllable is stressed. Other words describing it remain feminine.",
            examples: [
              {
                target: "el agua",
                translation: "the water",
              },
              {
                target: "el agua fría",
                translation: "the cold water",
              },
              {
                target: "las aguas",
                translation: "the waters",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Clara",
            target: "¿Tienes hambre?",
            translation: "Are you hungry?",
          },
          {
            speaker: "Pablo",
            target: "Sí, tengo mucha hambre.",
            translation: "Yes, I am very hungry.",
          },
          {
            speaker: "Clara",
            target: "¿Qué te gusta comer?",
            translation: "What do you like to eat?",
          },
          {
            speaker: "Pablo",
            target: "Me gusta el pollo con arroz y verduras.",
            translation: "I like chicken with rice and vegetables.",
          },
          {
            speaker: "Clara",
            target: "¿Y qué te gusta beber?",
            translation: "And what do you like to drink?",
          },
          {
            speaker: "Pablo",
            target: "Me gusta el agua y el café.",
            translation: "I like water and coffee.",
          },
        ],
    
        activities: [
          {
            title: "Build a meal",
            instruction:
              "Choose one food and one drink for each meal.",
            prompt:
              "Desayuno: ________ · Almuerzo: ________ · Cena: ________",
          },
          {
            title: "Me gusta or me gustan",
            instruction:
              "Choose the correct phrase for each item.",
            prompt:
              "___ el café · ___ las frutas · ___ el arroz · ___ las verduras",
          },
          {
            title: "Likes and dislikes",
            instruction:
              "Write two foods you like and one you do not like.",
            prompt:
              "Me gusta ________. Me gustan ________. No me gusta ________.",
          },
          {
            title: "Hunger or thirst",
            instruction:
              "Complete each sentence with hambre or sed.",
            prompt:
              "Quiero agua. Tengo ________. · Quiero comida. Tengo ________.",
          },
        ],
    
        speakingPrompt:
          "Describe your ideal breakfast, lunch, or dinner and say which foods and drinks you like.",
    
        quiz: [
          {
            question: "Which phrase means I am hungry?",
            answers: [
              "Soy hambre",
              "Tengo hambre",
              "Estoy comida",
              "Me gusta hambre",
            ],
            correctAnswer: "Tengo hambre",
          },
          {
            question: "Which phrase is correct for liking vegetables?",
            answers: [
              "Me gusta las verduras",
              "Me gustan las verduras",
              "Yo gustan verduras",
              "Tengo verduras",
            ],
            correctAnswer: "Me gustan las verduras",
          },
          {
            question: "What does la cena mean?",
            answers: [
              "Breakfast",
              "Lunch",
              "Dinner",
              "Snack",
            ],
            correctAnswer: "Dinner",
          },
          {
            question: "Which word means fish?",
            answers: [
              "el pollo",
              "el pescado",
              "el queso",
              "el arroz",
            ],
            correctAnswer: "el pescado",
          },
          {
            question: "Which phrase means I am thirsty?",
            answers: [
              "Tengo sed",
              "Soy sed",
              "Me gusta agua",
              "Estoy bebida",
            ],
            correctAnswer: "Tengo sed",
          },
        ],
      },
      "spanish-food-ordering-restaurant": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "food-ordering",
        lessonId: "restaurant",
        nextUnitId: "daily-routines",
        nextLessonId: "routine-verbs",
        unitNumber: "05",
        lessonNumber: "02",
        title: "At a restaurant",
        introduction:
          "Learn how to request a table, understand a simple menu, order food and drinks, and ask for the bill.",
        estimatedMinutes: 20,
        speechLanguage: "es-ES",
    
        objectives: [
          "Request a table",
          "Order food and drinks politely",
          "Ask simple questions about a menu",
          "Request the bill and understand basic payment phrases",
        ],
    
        vocabulary: [
          {
            target: "el restaurante",
            translation: "restaurant",
          },
          {
            target: "la mesa",
            translation: "table",
          },
          {
            target: "el menú",
            translation: "menu",
          },
          {
            target: "el camarero",
            translation: "waiter",
          },
          {
            target: "la camarera",
            translation: "waitress",
          },
          {
            target: "Una mesa para dos, por favor",
            translation: "A table for two, please",
          },
          {
            target: "¿Puedo ver el menú?",
            translation: "May I see the menu?",
          },
          {
            target: "Quisiera…",
            translation: "I would like…",
            note: "A polite way to order",
          },
          {
            target: "Para mí…",
            translation: "For me…",
          },
          {
            target: "Voy a pedir…",
            translation: "I am going to order…",
          },
          {
            target: "¿Qué recomienda?",
            translation: "What do you recommend?",
          },
          {
            target: "¿Qué lleva?",
            translation: "What does it contain?",
          },
          {
            target: "sin",
            translation: "without",
          },
          {
            target: "con",
            translation: "with",
          },
          {
            target: "La cuenta, por favor",
            translation: "The bill, please",
          },
          {
            target: "¿Está incluido el servicio?",
            translation: "Is service included?",
          },
          {
            target: "¿Puedo pagar con tarjeta?",
            translation: "Can I pay by card?",
          },
          {
            target: "en efectivo",
            translation: "in cash",
          },
          {
            target: "Está delicioso",
            translation: "It is delicious",
          },
          {
            target: "Buen provecho",
            translation: "Enjoy your meal",
          },
        ],
    
        notes: [
          {
            title: "Polite ordering with quisiera",
            explanation:
              "Quisiera is a polite and useful way to say I would like when ordering food or asking for something.",
            examples: [
              {
                target: "Quisiera un café",
                translation: "I would like a coffee",
              },
              {
                target: "Quisiera la sopa",
                translation: "I would like the soup",
              },
              {
                target: "Quisiera agua, por favor",
                translation: "I would like water, please",
              },
            ],
          },
          {
            title: "Ordering with para mí",
            explanation:
              "Para mí means for me and is common when each person at a table is ordering separately.",
            examples: [
              {
                target: "Para mí, el pollo",
                translation: "For me, the chicken",
              },
              {
                target: "Para mí, una ensalada",
                translation: "For me, a salad",
              },
            ],
          },
          {
            title: "Using con and sin",
            explanation:
              "Use con to request an ingredient and sin to remove or avoid one.",
            examples: [
              {
                target: "café con leche",
                translation: "coffee with milk",
              },
              {
                target: "agua sin gas",
                translation: "still water",
              },
              {
                target: "una hamburguesa sin queso",
                translation: "a hamburger without cheese",
              },
            ],
          },
          {
            title: "Asking for the bill",
            explanation:
              "In many places, the bill may not arrive until you request it. Use la cuenta, por favor.",
            examples: [
              {
                target: "La cuenta, por favor",
                translation: "The bill, please",
              },
              {
                target: "¿Puedo pagar con tarjeta?",
                translation: "Can I pay by card?",
              },
              {
                target: "Pago en efectivo",
                translation: "I am paying in cash",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Camarera",
            target: "Buenas tardes. ¿Cuántas personas?",
            translation: "Good afternoon. How many people?",
          },
          {
            speaker: "Cliente",
            target: "Una mesa para dos, por favor.",
            translation: "A table for two, please.",
          },
          {
            speaker: "Camarera",
            target: "Aquí tienen el menú.",
            translation: "Here is the menu.",
          },
          {
            speaker: "Cliente",
            target: "Gracias. ¿Qué recomienda?",
            translation: "Thank you. What do you recommend?",
          },
          {
            speaker: "Camarera",
            target: "El pescado con arroz está muy bueno.",
            translation: "The fish with rice is very good.",
          },
          {
            speaker: "Cliente",
            target: "Perfecto. Quisiera el pescado y agua, por favor.",
            translation: "Perfect. I would like the fish and water, please.",
          },
          {
            speaker: "Cliente",
            target: "La cuenta, por favor.",
            translation: "The bill, please.",
          },
        ],
    
        activities: [
          {
            title: "Order a meal",
            instruction:
              "Complete the order with one food and one drink.",
            prompt:
              "Quisiera ________ y ________, por favor.",
          },
          {
            title: "With or without",
            instruction:
              "Complete each request using con or sin.",
            prompt:
              "café ___ leche · ensalada ___ queso · agua ___ gas",
          },
          {
            title: "Restaurant questions",
            instruction:
              "Match each situation with a useful question.",
            prompt:
              "Recommendation → ________ · Ingredients → ________ · Payment → ________",
          },
          {
            title: "Request the bill",
            instruction:
              "Write the phrase used to ask for the bill.",
            prompt:
              "The bill, please → ________",
          },
        ],
    
        speakingPrompt:
          "Request a table, order one meal and one drink, then ask for the bill and say how you will pay.",
    
        quiz: [
          {
            question: "Which phrase means I would like?",
            answers: [
              "Tengo",
              "Quisiera",
              "Me llamo",
              "Necesito ser",
            ],
            correctAnswer: "Quisiera",
          },
          {
            question: "How do you ask for the bill?",
            answers: [
              "El menú, por favor",
              "La cuenta, por favor",
              "La mesa, por favor",
              "El servicio, por favor",
            ],
            correctAnswer: "La cuenta, por favor",
          },
          {
            question: "What does sin queso mean?",
            answers: [
              "With cheese",
              "Without cheese",
              "More cheese",
              "Cold cheese",
            ],
            correctAnswer: "Without cheese",
          },
          {
            question: "Which question asks for a recommendation?",
            answers: [
              "¿Qué recomienda?",
              "¿Qué hora es?",
              "¿Cómo se llama?",
              "¿Cuántos años tiene?",
            ],
            correctAnswer: "¿Qué recomienda?",
          },
          {
            question: "What does ¿Puedo pagar con tarjeta? mean?",
            answers: [
              "Can I see the menu?",
              "Can I pay by card?",
              "Can I change tables?",
              "Can I order water?",
            ],
            correctAnswer: "Can I pay by card?",
          },
        ],
      },
      "spanish-daily-routines-routine-verbs": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "daily-routines",
        lessonId: "routine-verbs",
        nextUnitId: "daily-routines",
        nextLessonId: "daily-schedule",
        unitNumber: "06",
        lessonNumber: "01",
        title: "Everyday actions",
        introduction:
          "Learn common verbs for waking up, eating, studying, working, traveling, relaxing, and sleeping.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Recognize common daily routine verbs",
          "Use basic present-tense forms",
          "Describe simple everyday activities",
          "Connect actions using common sequence words",
        ],
    
        vocabulary: [
          {
            target: "despertarse",
            translation: "to wake up",
          },
          {
            target: "levantarse",
            translation: "to get up",
          },
          {
            target: "ducharse",
            translation: "to shower",
          },
          {
            target: "vestirse",
            translation: "to get dressed",
          },
          {
            target: "desayunar",
            translation: "to eat breakfast",
          },
          {
            target: "comer",
            translation: "to eat",
          },
          {
            target: "beber",
            translation: "to drink",
          },
          {
            target: "ir",
            translation: "to go",
          },
          {
            target: "estudiar",
            translation: "to study",
          },
          {
            target: "trabajar",
            translation: "to work",
          },
          {
            target: "volver",
            translation: "to return",
          },
          {
            target: "cocinar",
            translation: "to cook",
          },
          {
            target: "leer",
            translation: "to read",
          },
          {
            target: "hacer ejercicio",
            translation: "to exercise",
          },
          {
            target: "descansar",
            translation: "to rest",
          },
          {
            target: "dormir",
            translation: "to sleep",
          },
          {
            target: "Me despierto",
            translation: "I wake up",
          },
          {
            target: "Me levanto",
            translation: "I get up",
          },
          {
            target: "Desayuno",
            translation: "I eat breakfast",
          },
          {
            target: "Voy a clase",
            translation: "I go to class",
          },
          {
            target: "Trabajo",
            translation: "I work",
          },
          {
            target: "Estudio",
            translation: "I study",
          },
          {
            target: "Duermo",
            translation: "I sleep",
          },
        ],
    
        notes: [
          {
            title: "Infinitives and conjugated verbs",
            explanation:
              "The infinitive is the dictionary form ending in -ar, -er, or -ir. A conjugated verb changes to match the subject.",
            examples: [
              {
                target: "estudiar",
                translation: "to study",
              },
              {
                target: "Estudio español",
                translation: "I study Spanish",
              },
              {
                target: "comer",
                translation: "to eat",
              },
              {
                target: "Como a las dos",
                translation: "I eat at two",
              },
            ],
          },
          {
            title: "Regular present-tense yo forms",
            explanation:
              "Many regular verbs use an -o ending for the first-person singular form.",
            examples: [
              {
                target: "trabajar → trabajo",
                translation: "to work → I work",
              },
              {
                target: "estudiar → estudio",
                translation: "to study → I study",
              },
              {
                target: "comer → como",
                translation: "to eat → I eat",
              },
              {
                target: "vivir → vivo",
                translation: "to live → I live",
              },
            ],
          },
          {
            title: "Reflexive routine verbs",
            explanation:
              "Some routine verbs are reflexive. In the first person, use me before the conjugated verb.",
            examples: [
              {
                target: "Me despierto",
                translation: "I wake up",
              },
              {
                target: "Me levanto",
                translation: "I get up",
              },
              {
                target: "Me ducho",
                translation: "I shower",
              },
              {
                target: "Me visto",
                translation: "I get dressed",
              },
            ],
          },
          {
            title: "Sequence words",
            explanation:
              "Use simple sequence words to organize your routine.",
            examples: [
              {
                target: "primero",
                translation: "first",
              },
              {
                target: "después",
                translation: "afterward / then",
              },
              {
                target: "luego",
                translation: "then",
              },
              {
                target: "finalmente",
                translation: "finally",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Nora",
            target: "¿Qué haces por la mañana?",
            translation: "What do you do in the morning?",
          },
          {
            speaker: "Andrés",
            target: "Primero me despierto y me levanto.",
            translation: "First I wake up and get up.",
          },
          {
            speaker: "Nora",
            target: "¿Después desayunas?",
            translation: "Do you eat breakfast afterward?",
          },
          {
            speaker: "Andrés",
            target: "Sí. Desayuno y luego voy a clase.",
            translation: "Yes. I eat breakfast and then I go to class.",
          },
          {
            speaker: "Nora",
            target: "¿Qué haces por la noche?",
            translation: "What do you do at night?",
          },
          {
            speaker: "Andrés",
            target: "Estudio, leo un poco y duermo.",
            translation: "I study, read a little, and sleep.",
          },
        ],
    
        activities: [
          {
            title: "Build a morning routine",
            instruction:
              "Put the actions in a logical order.",
            prompt:
              "desayunar · despertarse · vestirse · levantarse",
          },
          {
            title: "Conjugate the verb",
            instruction:
              "Change each infinitive into the yo form.",
            prompt:
              "estudiar → ________ · trabajar → ________ · comer → ________",
          },
          {
            title: "Reflexive practice",
            instruction:
              "Complete each sentence with me.",
            prompt:
              "___ despierto · ___ levanto · ___ ducho · ___ visto",
          },
          {
            title: "Sequence your day",
            instruction:
              "Create four sentences using primero, después, luego, and finalmente.",
            prompt:
              "Primero ________. Después ________. Luego ________. Finalmente ________.",
          },
        ],
    
        speakingPrompt:
          "Describe four actions from your normal day using at least two sequence words.",
    
        quiz: [
          {
            question: "Which verb means to wake up?",
            answers: [
              "dormir",
              "despertarse",
              "comer",
              "volver",
            ],
            correctAnswer: "despertarse",
          },
          {
            question: "Which sentence means I study Spanish?",
            answers: [
              "Estudiar español",
              "Estudio español",
              "Estudia español",
              "Soy estudio español",
            ],
            correctAnswer: "Estudio español",
          },
          {
            question: "Which word is needed in Me levanto?",
            answers: [
              "me",
              "mi",
              "yo soy",
              "la",
            ],
            correctAnswer: "me",
          },
          {
            question: "What does después mean?",
            answers: [
              "Before",
              "Afterward",
              "Always",
              "Never",
            ],
            correctAnswer: "Afterward",
          },
          {
            question: "Which verb means to sleep?",
            answers: [
              "dormir",
              "leer",
              "vestirse",
              "beber",
            ],
            correctAnswer: "dormir",
          },
        ],
      },
      "spanish-daily-routines-daily-schedule": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "daily-routines",
        lessonId: "daily-schedule",
        nextUnitId: "directions-transportation",
        nextLessonId: "places-directions",
        unitNumber: "06",
        lessonNumber: "02",
        title: "Your daily schedule",
        introduction:
          "Learn how to say when you do activities, describe frequency, and explain a simple daily or weekly schedule.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Connect activities with clock times",
          "Use common frequency expressions",
          "Describe parts of the day",
          "Explain a simple daily schedule",
        ],
    
        vocabulary: [
          {
            target: "por la mañana",
            translation: "in the morning",
          },
          {
            target: "por la tarde",
            translation: "in the afternoon",
          },
          {
            target: "por la noche",
            translation: "at night / in the evening",
          },
          {
            target: "todos los días",
            translation: "every day",
          },
          {
            target: "cada día",
            translation: "each day",
          },
          {
            target: "siempre",
            translation: "always",
          },
          {
            target: "normalmente",
            translation: "normally",
          },
          {
            target: "generalmente",
            translation: "generally",
          },
          {
            target: "a menudo",
            translation: "often",
          },
          {
            target: "a veces",
            translation: "sometimes",
          },
          {
            target: "casi nunca",
            translation: "almost never",
          },
          {
            target: "nunca",
            translation: "never",
          },
          {
            target: "temprano",
            translation: "early",
          },
          {
            target: "tarde",
            translation: "late",
          },
          {
            target: "¿A qué hora…?",
            translation: "At what time…?",
          },
          {
            target: "A las siete",
            translation: "At seven o’clock",
          },
          {
            target: "A la una",
            translation: "At one o’clock",
          },
          {
            target: "Empiezo a trabajar a las nueve",
            translation: "I start working at nine",
          },
          {
            target: "Termino a las cinco",
            translation: "I finish at five",
          },
          {
            target: "Los lunes",
            translation: "On Mondays",
          },
          {
            target: "Durante la semana",
            translation: "During the week",
          },
          {
            target: "El fin de semana",
            translation: "On the weekend",
          },
        ],
    
        notes: [
          {
            title: "A la and a las",
            explanation:
              "Use a la with one o’clock and a las with all other clock times.",
            examples: [
              {
                target: "a la una",
                translation: "at one o’clock",
              },
              {
                target: "a las dos",
                translation: "at two o’clock",
              },
              {
                target: "a las ocho y media",
                translation: "at half past eight",
              },
            ],
          },
          {
            title: "Parts of the day",
            explanation:
              "Use por la mañana, por la tarde, and por la noche for general parts of the day.",
            examples: [
              {
                target: "Estudio por la mañana",
                translation: "I study in the morning",
              },
              {
                target: "Trabajo por la tarde",
                translation: "I work in the afternoon",
              },
              {
                target: "Leo por la noche",
                translation: "I read at night",
              },
            ],
          },
          {
            title: "Frequency expressions",
            explanation:
              "Frequency words describe how often an activity occurs. They usually appear before or after the verb phrase.",
            examples: [
              {
                target: "Siempre desayuno",
                translation: "I always eat breakfast",
              },
              {
                target: "A veces cocino",
                translation: "Sometimes I cook",
              },
              {
                target: "No trabajo nunca los domingos",
                translation: "I never work on Sundays",
              },
            ],
          },
          {
            title: "Repeated days",
            explanation:
              "Use the plural article with a day of the week to describe something that happens regularly on that day.",
            examples: [
              {
                target: "los lunes",
                translation: "on Mondays",
              },
              {
                target: "los viernes",
                translation: "on Fridays",
              },
              {
                target: "Estudio los martes",
                translation: "I study on Tuesdays",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Irene",
            target: "¿A qué hora te levantas?",
            translation: "What time do you get up?",
          },
          {
            speaker: "Tomás",
            target: "Normalmente me levanto a las siete.",
            translation: "I normally get up at seven.",
          },
          {
            speaker: "Irene",
            target: "¿Qué haces por la mañana?",
            translation: "What do you do in the morning?",
          },
          {
            speaker: "Tomás",
            target: "Desayuno y empiezo a trabajar a las nueve.",
            translation: "I eat breakfast and start working at nine.",
          },
          {
            speaker: "Irene",
            target: "¿Haces ejercicio todos los días?",
            translation: "Do you exercise every day?",
          },
          {
            speaker: "Tomás",
            target: "No. Hago ejercicio los lunes, miércoles y viernes.",
            translation: "No. I exercise on Mondays, Wednesdays, and Fridays.",
          },
        ],
    
        activities: [
          {
            title: "Add the time",
            instruction:
              "Complete each sentence with a clock time.",
            prompt:
              "Me levanto a las ________. Almuerzo a la ________. Duermo a las ________.",
          },
          {
            title: "Frequency ladder",
            instruction:
              "Order the expressions from most frequent to least frequent.",
            prompt:
              "nunca · siempre · a veces · a menudo · casi nunca",
          },
          {
            title: "Build your weekday",
            instruction:
              "Write one morning, afternoon, and evening activity.",
            prompt:
              "Por la mañana ________. Por la tarde ________. Por la noche ________.",
          },
          {
            title: "Weekly habits",
            instruction:
              "Create two sentences using plural days of the week.",
            prompt:
              "Los ________ estudio. Los ________ descanso.",
          },
        ],
    
        speakingPrompt:
          "Describe your schedule from morning to night using at least three times and two frequency expressions.",
    
        quiz: [
          {
            question: "How do you say at one o’clock?",
            answers: [
              "a las una",
              "a la una",
              "es la una",
              "por la una",
            ],
            correctAnswer: "a la una",
          },
          {
            question: "Which phrase means sometimes?",
            answers: [
              "siempre",
              "a veces",
              "nunca",
              "todos los días",
            ],
            correctAnswer: "a veces",
          },
          {
            question: "What does por la noche mean?",
            answers: [
              "In the morning",
              "In the afternoon",
              "At night",
              "At noon",
            ],
            correctAnswer: "At night",
          },
          {
            question: "How do you say on Mondays?",
            answers: [
              "el lunes",
              "a lunes",
              "los lunes",
              "por lunes",
            ],
            correctAnswer: "los lunes",
          },
          {
            question: "What does ¿A qué hora te levantas? mean?",
            answers: [
              "What do you eat?",
              "What time do you get up?",
              "Where do you work?",
              "How often do you study?",
            ],
            correctAnswer: "What time do you get up?",
          },
        ],
      },
      "spanish-directions-transportation-places-directions": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "directions-transportation",
        lessonId: "places-directions",
        nextUnitId: "directions-transportation",
        nextLessonId: "transportation",
        unitNumber: "07",
        lessonNumber: "01",
        title: "Places and directions",
        introduction:
          "Learn how to name common places, ask where something is, and understand simple directions.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Name common places in a city",
          "Ask where a place is",
          "Understand basic directional expressions",
          "Describe where something is located",
        ],
    
        vocabulary: [
          { target: "la ciudad", translation: "city" },
          { target: "la calle", translation: "street" },
          { target: "la plaza", translation: "square / plaza" },
          { target: "el banco", translation: "bank" },
          { target: "el hotel", translation: "hotel" },
          { target: "el hospital", translation: "hospital" },
          { target: "la farmacia", translation: "pharmacy" },
          { target: "el supermercado", translation: "supermarket" },
          { target: "la estación", translation: "station" },
          { target: "el restaurante", translation: "restaurant" },
          { target: "el museo", translation: "museum" },
          { target: "el baño", translation: "bathroom" },
          {
            target: "¿Dónde está…?",
            translation: "Where is…?",
          },
          {
            target: "Está aquí",
            translation: "It is here",
          },
          {
            target: "Está allí",
            translation: "It is there",
          },
          {
            target: "a la derecha",
            translation: "to the right",
          },
          {
            target: "a la izquierda",
            translation: "to the left",
          },
          {
            target: "todo recto",
            translation: "straight ahead",
          },
          {
            target: "cerca de",
            translation: "near",
          },
          {
            target: "lejos de",
            translation: "far from",
          },
          {
            target: "al lado de",
            translation: "next to",
          },
          {
            target: "enfrente de",
            translation: "across from",
          },
          {
            target: "entre",
            translation: "between",
          },
        ],
    
        notes: [
          {
            title: "Asking where something is",
            explanation:
              "Use ¿Dónde está? for one place or object. Use ¿Dónde están? for multiple places or objects.",
            examples: [
              {
                target: "¿Dónde está el banco?",
                translation: "Where is the bank?",
              },
              {
                target: "¿Dónde está la farmacia?",
                translation: "Where is the pharmacy?",
              },
              {
                target: "¿Dónde están los baños?",
                translation: "Where are the bathrooms?",
              },
            ],
          },
          {
            title: "Location with estar",
            explanation:
              "Use estar when describing the location of a person, place, or object.",
            examples: [
              {
                target: "El hotel está aquí",
                translation: "The hotel is here",
              },
              {
                target: "La estación está cerca",
                translation: "The station is nearby",
              },
              {
                target: "El museo está lejos",
                translation: "The museum is far away",
              },
            ],
          },
          {
            title: "Compound location phrases",
            explanation:
              "Use de after phrases such as cerca, lejos, al lado, and enfrente.",
            examples: [
              {
                target: "cerca del hotel",
                translation: "near the hotel",
              },
              {
                target: "al lado de la farmacia",
                translation: "next to the pharmacy",
              },
              {
                target: "enfrente del museo",
                translation: "across from the museum",
              },
            ],
          },
          {
            title: "Giving simple directions",
            explanation:
              "Direction instructions often use short command-like expressions.",
            examples: [
              {
                target: "Siga todo recto",
                translation: "Continue straight ahead",
              },
              {
                target: "Gire a la derecha",
                translation: "Turn right",
              },
              {
                target: "Gire a la izquierda",
                translation: "Turn left",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Traveler",
            target: "Disculpe, ¿dónde está la estación?",
            translation: "Excuse me, where is the station?",
          },
          {
            speaker: "Local",
            target: "Siga todo recto y gire a la derecha.",
            translation: "Continue straight and turn right.",
          },
          {
            speaker: "Traveler",
            target: "¿Está lejos?",
            translation: "Is it far?",
          },
          {
            speaker: "Local",
            target: "No, está cerca del museo.",
            translation: "No, it is near the museum.",
          },
          {
            speaker: "Traveler",
            target: "Muchas gracias.",
            translation: "Thank you very much.",
          },
        ],
    
        activities: [
          {
            title: "Ask for a place",
            instruction:
              "Create questions using ¿Dónde está?",
            prompt:
              "the pharmacy · the hotel · the museum · the bathroom",
          },
          {
            title: "Choose the direction",
            instruction:
              "Complete each instruction with derecha, izquierda, or recto.",
            prompt:
              "Gire a la ________. · Siga todo ________.",
          },
          {
            title: "Describe location",
            instruction:
              "Complete each phrase with a place.",
            prompt:
              "cerca de ________ · al lado de ________ · enfrente de ________",
          },
        ],
    
        speakingPrompt:
          "Ask where a place is, then give directions using straight ahead, right, and left.",
    
        quiz: [
          {
            question: "What does ¿Dónde está el banco? mean?",
            answers: [
              "Where is the bank?",
              "Is the bank open?",
              "How much is the bank?",
              "Who works at the bank?",
            ],
            correctAnswer: "Where is the bank?",
          },
          {
            question: "Which phrase means to the right?",
            answers: [
              "a la izquierda",
              "todo recto",
              "a la derecha",
              "entre",
            ],
            correctAnswer: "a la derecha",
          },
          {
            question: "What does al lado de mean?",
            answers: [
              "Far from",
              "Next to",
              "Behind",
              "Inside",
            ],
            correctAnswer: "Next to",
          },
          {
            question: "Which verb is used for location?",
            answers: ["ser", "estar", "tener", "hacer"],
            correctAnswer: "estar",
          },
        ],
      },
      "spanish-directions-transportation-transportation": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "directions-transportation",
        lessonId: "transportation",
        nextUnitId: "shopping-money",
        nextLessonId: "shopping",
        unitNumber: "07",
        lessonNumber: "02",
        title: "Transportation",
        introduction:
          "Learn vocabulary for public transportation, tickets, stations, and basic travel questions.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Name common forms of transportation",
          "Ask where and when transportation departs",
          "Purchase a simple ticket",
          "Understand basic station vocabulary",
        ],
    
        vocabulary: [
          { target: "el autobús", translation: "bus" },
          { target: "el tren", translation: "train" },
          { target: "el metro", translation: "subway / metro" },
          { target: "el taxi", translation: "taxi" },
          { target: "el avión", translation: "airplane" },
          { target: "la bicicleta", translation: "bicycle" },
          { target: "la estación", translation: "station" },
          { target: "la parada", translation: "stop" },
          { target: "el aeropuerto", translation: "airport" },
          { target: "el billete", translation: "ticket" },
          { target: "el boleto", translation: "ticket", note: "Common in many Latin American countries" },
          { target: "ida", translation: "one way" },
          { target: "ida y vuelta", translation: "round trip" },
          { target: "la plataforma", translation: "platform" },
          { target: "la salida", translation: "departure / exit" },
          { target: "la llegada", translation: "arrival" },
          {
            target: "¿A qué hora sale?",
            translation: "What time does it leave?",
          },
          {
            target: "¿A qué hora llega?",
            translation: "What time does it arrive?",
          },
          {
            target: "Quisiera un billete",
            translation: "I would like a ticket",
          },
          {
            target: "¿Dónde está la parada?",
            translation: "Where is the stop?",
          },
        ],
    
        notes: [
          {
            title: "Traveling by transportation",
            explanation:
              "Use en with most forms of transportation. Walking uses a pie.",
            examples: [
              {
                target: "Voy en tren",
                translation: "I go by train",
              },
              {
                target: "Viajo en autobús",
                translation: "I travel by bus",
              },
              {
                target: "Voy a pie",
                translation: "I go on foot",
              },
            ],
          },
          {
            title: "Ir and viajar",
            explanation:
              "Ir means to go. Viajar means to travel. Both can appear with transportation vocabulary.",
            examples: [
              {
                target: "Voy en metro",
                translation: "I go by metro",
              },
              {
                target: "Viajo en avión",
                translation: "I travel by airplane",
              },
            ],
          },
          {
            title: "Ticket vocabulary varies",
            explanation:
              "Billete is common in Spain, while boleto is common in many parts of Latin America.",
            examples: [
              {
                target: "un billete de tren",
                translation: "a train ticket",
              },
              {
                target: "un boleto de autobús",
                translation: "a bus ticket",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Passenger",
            target: "Quisiera un billete para Madrid.",
            translation: "I would like a ticket to Madrid.",
          },
          {
            speaker: "Agent",
            target: "¿Solo ida o ida y vuelta?",
            translation: "One way or round trip?",
          },
          {
            speaker: "Passenger",
            target: "Ida y vuelta, por favor.",
            translation: "Round trip, please.",
          },
          {
            speaker: "Passenger",
            target: "¿A qué hora sale el tren?",
            translation: "What time does the train leave?",
          },
          {
            speaker: "Agent",
            target: "Sale a las diez desde la plataforma cuatro.",
            translation: "It leaves at ten from platform four.",
          },
        ],
    
        activities: [
          {
            title: "Choose transportation",
            instruction:
              "Say how you would travel in each situation.",
            prompt:
              "Across a city → ________ · Across an ocean → ________ · Nearby → ________",
          },
          {
            title: "Buy a ticket",
            instruction:
              "Complete the request.",
            prompt:
              "Quisiera un ________ de ida y vuelta.",
          },
          {
            title: "Departure questions",
            instruction:
              "Write one question about departure and one about arrival.",
            prompt:
              "¿A qué hora ________? · ¿A qué hora ________?",
          },
        ],
    
        speakingPrompt:
          "Purchase a round-trip ticket, ask when the train leaves, and ask which platform to use.",
    
        quiz: [
          {
            question: "Which word means train?",
            answers: ["el autobús", "el tren", "el avión", "el taxi"],
            correctAnswer: "el tren",
          },
          {
            question: "What does ida y vuelta mean?",
            answers: ["One way", "Round trip", "Delayed", "First class"],
            correctAnswer: "Round trip",
          },
          {
            question: "How do you say I go by metro?",
            answers: [
              "Voy a metro",
              "Voy en metro",
              "Soy metro",
              "Tengo metro",
            ],
            correctAnswer: "Voy en metro",
          },
          {
            question: "What does ¿A qué hora sale? mean?",
            answers: [
              "Where does it stop?",
              "How much does it cost?",
              "What time does it leave?",
              "When does it arrive?",
            ],
            correctAnswer: "What time does it leave?",
          },
        ],
      },
      "spanish-shopping-money-shopping": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "shopping-money",
        lessonId: "shopping",
        nextUnitId: "shopping-money",
        nextLessonId: "prices-payment",
        unitNumber: "08",
        lessonNumber: "01",
        title: "Shopping vocabulary",
        introduction:
          "Learn how to discuss clothing, colors, sizes, stores, and products while shopping.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Name common clothing items",
          "Describe colors and sizes",
          "Ask to see or try something",
          "Explain what you are looking for",
        ],
    
        vocabulary: [
          { target: "la tienda", translation: "store" },
          { target: "la ropa", translation: "clothing" },
          { target: "la camisa", translation: "shirt" },
          { target: "la camiseta", translation: "T-shirt" },
          { target: "los pantalones", translation: "pants" },
          { target: "el vestido", translation: "dress" },
          { target: "la chaqueta", translation: "jacket" },
          { target: "los zapatos", translation: "shoes" },
          { target: "la talla", translation: "size" },
          { target: "pequeño", translation: "small" },
          { target: "mediano", translation: "medium" },
          { target: "grande", translation: "large" },
          { target: "rojo", translation: "red" },
          { target: "azul", translation: "blue" },
          { target: "negro", translation: "black" },
          { target: "blanco", translation: "white" },
          { target: "verde", translation: "green" },
          {
            target: "Busco…",
            translation: "I am looking for…",
          },
          {
            target: "¿Tiene esto en otra talla?",
            translation: "Do you have this in another size?",
          },
          {
            target: "¿Tiene esto en otro color?",
            translation: "Do you have this in another color?",
          },
          {
            target: "¿Puedo probármelo?",
            translation: "Can I try it on?",
          },
          {
            target: "Me queda bien",
            translation: "It fits me well",
          },
          {
            target: "Me queda grande",
            translation: "It is too large on me",
          },
          {
            target: "Me queda pequeño",
            translation: "It is too small on me",
          },
        ],
    
        notes: [
          {
            title: "Busco",
            explanation:
              "Busco means I am looking for and is useful when asking an employee for help.",
            examples: [
              {
                target: "Busco una chaqueta",
                translation: "I am looking for a jacket",
              },
              {
                target: "Busco zapatos negros",
                translation: "I am looking for black shoes",
              },
            ],
          },
          {
            title: "Color agreement",
            explanation:
              "Many color adjectives agree with the noun in gender and number.",
            examples: [
              {
                target: "una camisa roja",
                translation: "a red shirt",
              },
              {
                target: "un vestido rojo",
                translation: "a red dress",
              },
              {
                target: "unos zapatos negros",
                translation: "some black shoes",
              },
            ],
          },
          {
            title: "Trying something on",
            explanation:
              "Use probarse when talking about trying on clothing.",
            examples: [
              {
                target: "¿Puedo probarme la chaqueta?",
                translation: "Can I try on the jacket?",
              },
              {
                target: "¿Puedo probármelo?",
                translation: "Can I try it on?",
              },
            ],
          },
          {
            title: "Using quedar for fit",
            explanation:
              "Quedar describes how clothing fits or looks on someone.",
            examples: [
              {
                target: "Me queda bien",
                translation: "It fits me well",
              },
              {
                target: "Me queda grande",
                translation: "It is too large",
              },
              {
                target: "Me queda pequeño",
                translation: "It is too small",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Employee",
            target: "Hola. ¿En qué puedo ayudarle?",
            translation: "Hello. How can I help you?",
          },
          {
            speaker: "Customer",
            target: "Busco una chaqueta negra.",
            translation: "I am looking for a black jacket.",
          },
          {
            speaker: "Employee",
            target: "¿Qué talla necesita?",
            translation: "What size do you need?",
          },
          {
            speaker: "Customer",
            target: "Una talla mediana.",
            translation: "A medium size.",
          },
          {
            speaker: "Customer",
            target: "¿Puedo probármela?",
            translation: "Can I try it on?",
          },
          {
            speaker: "Employee",
            target: "Sí, el probador está allí.",
            translation: "Yes, the fitting room is over there.",
          },
        ],
    
        activities: [
          {
            title: "Describe an item",
            instruction:
              "Combine an item, size, and color.",
            prompt:
              "una ________ + talla ________ + color ________",
          },
          {
            title: "Ask for another option",
            instruction:
              "Ask for another size and another color.",
            prompt:
              "¿Tiene esto en ________? · ¿Tiene esto en ________?",
          },
          {
            title: "Describe the fit",
            instruction:
              "Choose bien, grande, or pequeño.",
            prompt:
              "Me queda ________.",
          },
        ],
    
        speakingPrompt:
          "Tell a store employee what clothing item, size, and color you are looking for, then ask to try it on.",
    
        quiz: [
          {
            question: "What does Busco una chaqueta mean?",
            answers: [
              "I am buying a jacket",
              "I am looking for a jacket",
              "I am wearing a jacket",
              "I dislike the jacket",
            ],
            correctAnswer: "I am looking for a jacket",
          },
          {
            question: "Which word means size?",
            answers: ["la ropa", "la talla", "la tienda", "la camisa"],
            correctAnswer: "la talla",
          },
          {
            question: "What does Me queda grande mean?",
            answers: [
              "It is too large on me",
              "It is expensive",
              "It is very pretty",
              "It is unavailable",
            ],
            correctAnswer: "It is too large on me",
          },
          {
            question: "How do you ask Can I try it on?",
            answers: [
              "¿Puedo comprarlo?",
              "¿Puedo probármelo?",
              "¿Puedo verlo?",
              "¿Puedo pagarlo?",
            ],
            correctAnswer: "¿Puedo probármelo?",
          },
        ],
      },
      "spanish-shopping-money-prices-payment": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "shopping-money",
        lessonId: "prices-payment",
        nextUnitId: "grammar-foundations",
        nextLessonId: "articles-gender",
        unitNumber: "08",
        lessonNumber: "02",
        title: "Prices and payment",
        introduction:
          "Learn how to ask prices, understand discounts, and complete a simple purchase.",
        estimatedMinutes: 15,
        speechLanguage: "es-ES",
    
        objectives: [
          "Ask how much something costs",
          "Understand simple prices",
          "Discuss payment methods",
          "Complete a basic purchase",
        ],
    
        vocabulary: [
          {
            target: "¿Cuánto cuesta?",
            translation: "How much does it cost?",
          },
          {
            target: "¿Cuánto cuestan?",
            translation: "How much do they cost?",
          },
          { target: "el precio", translation: "price" },
          { target: "el dinero", translation: "money" },
          { target: "el descuento", translation: "discount" },
          { target: "la oferta", translation: "sale / offer" },
          { target: "barato", translation: "cheap" },
          { target: "caro", translation: "expensive" },
          {
            target: "Cuesta veinte euros",
            translation: "It costs twenty euros",
          },
          {
            target: "Cuestan cincuenta euros",
            translation: "They cost fifty euros",
          },
          {
            target: "Quiero comprarlo",
            translation: "I want to buy it",
          },
          {
            target: "¿Aceptan tarjetas?",
            translation: "Do you accept cards?",
          },
          {
            target: "Voy a pagar con tarjeta",
            translation: "I am going to pay by card",
          },
          {
            target: "Voy a pagar en efectivo",
            translation: "I am going to pay in cash",
          },
          {
            target: "Necesito un recibo",
            translation: "I need a receipt",
          },
          {
            target: "Aquí tiene",
            translation: "Here you are",
          },
          {
            target: "el cambio",
            translation: "change",
          },
        ],
    
        notes: [
          {
            title: "Cuesta and cuestan",
            explanation:
              "Use cuesta for one item and cuestan for multiple items.",
            examples: [
              {
                target: "¿Cuánto cuesta la camisa?",
                translation: "How much does the shirt cost?",
              },
              {
                target: "¿Cuánto cuestan los zapatos?",
                translation: "How much do the shoes cost?",
              },
            ],
          },
          {
            title: "Payment with con and en",
            explanation:
              "Use con tarjeta for paying by card and en efectivo for paying in cash.",
            examples: [
              {
                target: "Pago con tarjeta",
                translation: "I am paying by card",
              },
              {
                target: "Pago en efectivo",
                translation: "I am paying in cash",
              },
            ],
          },
          {
            title: "Direct object endings",
            explanation:
              "Lo and la can replace a masculine or feminine singular item.",
            examples: [
              {
                target: "Quiero comprarlo",
                translation: "I want to buy it, masculine",
              },
              {
                target: "Quiero comprarla",
                translation: "I want to buy it, feminine",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Customer",
            target: "¿Cuánto cuesta esta camisa?",
            translation: "How much does this shirt cost?",
          },
          {
            speaker: "Employee",
            target: "Cuesta treinta euros.",
            translation: "It costs thirty euros.",
          },
          {
            speaker: "Customer",
            target: "¿Tiene descuento?",
            translation: "Does it have a discount?",
          },
          {
            speaker: "Employee",
            target: "Sí, tiene un descuento del veinte por ciento.",
            translation: "Yes, it has a twenty percent discount.",
          },
          {
            speaker: "Customer",
            target: "Perfecto. Quiero comprarla.",
            translation: "Perfect. I want to buy it.",
          },
          {
            speaker: "Customer",
            target: "Voy a pagar con tarjeta.",
            translation: "I am going to pay by card.",
          },
        ],
    
        activities: [
          {
            title: "Ask the price",
            instruction:
              "Choose cuesta or cuestan.",
            prompt:
              "¿Cuánto ________ la chaqueta? · ¿Cuánto ________ los zapatos?",
          },
          {
            title: "Payment choice",
            instruction:
              "Complete both payment phrases.",
            prompt:
              "Pago con ________. · Pago en ________.",
          },
          {
            title: "Complete the purchase",
            instruction:
              "Create a short purchase statement.",
            prompt:
              "Cuesta ________. Quiero comprar____. Pago ________.",
          },
        ],
    
        speakingPrompt:
          "Ask the price of an item, react to the price, say you want to buy it, and choose a payment method.",
    
        quiz: [
          {
            question: "Which question is used for one item?",
            answers: [
              "¿Cuánto cuestan?",
              "¿Cuánto cuesta?",
              "¿Cuántos cuesta?",
              "¿Qué precio son?",
            ],
            correctAnswer: "¿Cuánto cuesta?",
          },
          {
            question: "What does en efectivo mean?",
            answers: ["By card", "Online", "In cash", "With a discount"],
            correctAnswer: "In cash",
          },
          {
            question: "Which word means receipt?",
            answers: ["el cambio", "el recibo", "el precio", "el dinero"],
            correctAnswer: "el recibo",
          },
          {
            question: "What does caro mean?",
            answers: ["Cheap", "Expensive", "Free", "Small"],
            correctAnswer: "Expensive",
          },
        ],
      },
      "spanish-grammar-foundations-articles-gender": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "grammar-foundations",
        lessonId: "articles-gender",
        nextUnitId: "grammar-foundations",
        nextLessonId: "ser-estar",
        unitNumber: "09",
        lessonNumber: "01",
        title: "Articles and gender",
        introduction:
          "Learn how Spanish nouns use grammatical gender and how articles agree with nouns.",
        estimatedMinutes: 20,
        speechLanguage: "es-ES",
    
        objectives: [
          "Recognize masculine and feminine nouns",
          "Use definite and indefinite articles",
          "Make articles agree with singular and plural nouns",
          "Recognize common gender patterns and exceptions",
        ],
    
        vocabulary: [
          { target: "el", translation: "the, masculine singular" },
          { target: "la", translation: "the, feminine singular" },
          { target: "los", translation: "the, masculine plural" },
          { target: "las", translation: "the, feminine plural" },
          { target: "un", translation: "a / an, masculine" },
          { target: "una", translation: "a / an, feminine" },
          { target: "unos", translation: "some, masculine" },
          { target: "unas", translation: "some, feminine" },
          { target: "el libro", translation: "the book" },
          { target: "la casa", translation: "the house" },
          { target: "los libros", translation: "the books" },
          { target: "las casas", translation: "the houses" },
          { target: "un estudiante", translation: "a male student" },
          { target: "una estudiante", translation: "a female student" },
        ],
    
        notes: [
          {
            title: "Common noun patterns",
            explanation:
              "Many nouns ending in -o are masculine and many ending in -a are feminine, but exceptions exist.",
            examples: [
              { target: "el libro", translation: "the book" },
              { target: "el teléfono", translation: "the telephone" },
              { target: "la casa", translation: "the house" },
              { target: "la mesa", translation: "the table" },
            ],
          },
          {
            title: "Important exceptions",
            explanation:
              "Gender cannot always be predicted from the final letter, so nouns should be learned with their articles.",
            examples: [
              { target: "el día", translation: "the day" },
              { target: "el mapa", translation: "the map" },
              { target: "la mano", translation: "the hand" },
              { target: "la foto", translation: "the photo" },
            ],
          },
          {
            title: "Plural articles",
            explanation:
              "Use los and unos with masculine or mixed groups. Use las and unas with feminine groups.",
            examples: [
              { target: "los estudiantes", translation: "the students" },
              { target: "las estudiantes", translation: "the female students" },
              { target: "unos libros", translation: "some books" },
              { target: "unas casas", translation: "some houses" },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Teacher",
            target: "¿Es un libro o una revista?",
            translation: "Is it a book or a magazine?",
          },
          {
            speaker: "Student",
            target: "Es un libro.",
            translation: "It is a book.",
          },
          {
            speaker: "Teacher",
            target: "¿Y estos?",
            translation: "And these?",
          },
          {
            speaker: "Student",
            target: "Son unos cuadernos.",
            translation: "They are some notebooks.",
          },
        ],
    
        activities: [
          {
            title: "Choose the article",
            instruction:
              "Add el, la, los, or las.",
            prompt:
              "___ libro · ___ mesa · ___ zapatos · ___ casas",
          },
          {
            title: "Make it indefinite",
            instruction:
              "Replace the definite article with un, una, unos, or unas.",
            prompt:
              "el hotel → ________ · la camisa → ________ · los libros → ________",
          },
          {
            title: "Learn the exception",
            instruction:
              "Match each exception with its correct article.",
            prompt:
              "___ día · ___ mano · ___ mapa · ___ foto",
          },
        ],
    
        speakingPrompt:
          "Name five objects around you using the correct definite or indefinite article.",
    
        quiz: [
          {
            question: "Which phrase means the house?",
            answers: ["el casa", "la casa", "una casas", "los casa"],
            correctAnswer: "la casa",
          },
          {
            question: "Which article is feminine plural?",
            answers: ["el", "los", "las", "un"],
            correctAnswer: "las",
          },
          {
            question: "Which phrase is correct?",
            answers: ["la día", "el día", "una día", "las día"],
            correctAnswer: "el día",
          },
          {
            question: "What does unos libros mean?",
            answers: ["The book", "A book", "Some books", "The books"],
            correctAnswer: "Some books",
          },
        ],
      },
      "spanish-grammar-foundations-ser-estar": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "grammar-foundations",
        lessonId: "ser-estar",
        nextUnitId: "grammar-foundations",
        nextLessonId: "present-tense",
        unitNumber: "09",
        lessonNumber: "02",
        title: "Ser and estar",
        introduction:
          "Learn the basic difference between the two Spanish verbs that commonly translate as to be.",
        estimatedMinutes: 22,
        speechLanguage: "es-ES",
    
        objectives: [
          "Recognize basic forms of ser and estar",
          "Use ser for identity and characteristics",
          "Use estar for location and temporary states",
          "Choose the correct verb in beginner sentences",
        ],
    
        vocabulary: [
          { target: "soy", translation: "I am, ser" },
          { target: "eres", translation: "you are, informal ser" },
          { target: "es", translation: "he / she / it is, ser" },
          { target: "somos", translation: "we are, ser" },
          { target: "estoy", translation: "I am, estar" },
          { target: "estás", translation: "you are, informal estar" },
          { target: "está", translation: "he / she / it is, estar" },
          { target: "estamos", translation: "we are, estar" },
          {
            target: "Soy estudiante",
            translation: "I am a student",
          },
          {
            target: "Soy de México",
            translation: "I am from Mexico",
          },
          {
            target: "Estoy cansado",
            translation: "I am tired, masculine",
          },
          {
            target: "Estoy cansada",
            translation: "I am tired, feminine",
          },
          {
            target: "El hotel está aquí",
            translation: "The hotel is here",
          },
        ],
    
        notes: [
          {
            title: "Use ser for identity",
            explanation:
              "Ser is used for identity, profession, origin, nationality, time, and general characteristics.",
            examples: [
              { target: "Soy estudiante", translation: "I am a student" },
              { target: "Ella es médica", translation: "She is a doctor" },
              { target: "Somos de Colombia", translation: "We are from Colombia" },
              { target: "Es lunes", translation: "It is Monday" },
            ],
          },
          {
            title: "Use estar for location",
            explanation:
              "Estar is used to say where people, places, and objects are located.",
            examples: [
              { target: "Estoy en casa", translation: "I am at home" },
              { target: "Madrid está en España", translation: "Madrid is in Spain" },
              { target: "El banco está cerca", translation: "The bank is nearby" },
            ],
          },
          {
            title: "Use estar for states",
            explanation:
              "Estar commonly describes feelings, conditions, and temporary states.",
            examples: [
              { target: "Estoy feliz", translation: "I am happy" },
              { target: "Está cansado", translation: "He is tired" },
              { target: "Estamos ocupados", translation: "We are busy" },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Marta",
            target: "¿De dónde eres?",
            translation: "Where are you from?",
          },
          {
            speaker: "Álex",
            target: "Soy de Chile.",
            translation: "I am from Chile.",
          },
          {
            speaker: "Marta",
            target: "¿Dónde estás ahora?",
            translation: "Where are you now?",
          },
          {
            speaker: "Álex",
            target: "Estoy en Madrid.",
            translation: "I am in Madrid.",
          },
          {
            speaker: "Marta",
            target: "¿Cómo estás?",
            translation: "How are you?",
          },
          {
            speaker: "Álex",
            target: "Estoy muy bien.",
            translation: "I am very well.",
          },
        ],
    
        activities: [
          {
            title: "Choose ser or estar",
            instruction:
              "Select the correct verb.",
            prompt:
              "___ estudiante · ___ en casa · ___ cansado · ___ de España",
          },
          {
            title: "Complete the form",
            instruction:
              "Use soy, es, estoy, or está.",
            prompt:
              "Yo ___ de Perú. · Ella ___ en Lima. · Yo ___ feliz.",
          },
          {
            title: "Identity and location",
            instruction:
              "Write one sentence about who you are and one about where you are.",
            prompt:
              "Soy ________. Estoy ________.",
          },
        ],
    
        speakingPrompt:
          "Say who you are, where you are from, where you are now, and how you feel.",
    
        quiz: [
          {
            question: "Which sentence means I am a student?",
            answers: [
              "Estoy estudiante",
              "Soy estudiante",
              "Tengo estudiante",
              "Es estudiante yo",
            ],
            correctAnswer: "Soy estudiante",
          },
          {
            question: "Which verb is used for location?",
            answers: ["ser", "estar", "tener", "hacer"],
            correctAnswer: "estar",
          },
          {
            question: "How do you say I am tired?",
            answers: [
              "Soy cansado",
              "Estoy cansado",
              "Tengo cansado",
              "Es cansado",
            ],
            correctAnswer: "Estoy cansado",
          },
          {
            question: "Which sentence uses ser correctly?",
            answers: [
              "Soy de México",
              "Soy en México",
              "Estoy estudiante",
              "Está lunes",
            ],
            correctAnswer: "Soy de México",
          },
        ],
      },
      "spanish-grammar-foundations-present-tense": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "grammar-foundations",
        lessonId: "present-tense",
        nextUnitId: "grammar-foundations",
        nextLessonId: "questions",
        unitNumber: "09",
        lessonNumber: "03",
        title: "Present-tense verbs",
        introduction:
          "Learn how regular Spanish verbs change to match the subject in simple present-tense sentences.",
        estimatedMinutes: 25,
        speechLanguage: "es-ES",
    
        objectives: [
          "Recognize -ar, -er, and -ir verbs",
          "Use basic present-tense endings",
          "Match verbs with common subject pronouns",
          "Create simple present-tense sentences",
        ],
    
        vocabulary: [
          { target: "hablar", translation: "to speak" },
          { target: "estudiar", translation: "to study" },
          { target: "trabajar", translation: "to work" },
          { target: "comer", translation: "to eat" },
          { target: "beber", translation: "to drink" },
          { target: "leer", translation: "to read" },
          { target: "vivir", translation: "to live" },
          { target: "escribir", translation: "to write" },
          { target: "yo", translation: "I" },
          { target: "tú", translation: "you, informal" },
          { target: "él", translation: "he" },
          { target: "ella", translation: "she" },
          { target: "nosotros", translation: "we, masculine or mixed" },
          { target: "nosotras", translation: "we, feminine" },
          { target: "ellos", translation: "they, masculine or mixed" },
          { target: "ellas", translation: "they, feminine" },
        ],
    
        notes: [
          {
            title: "Regular -ar verbs",
            explanation:
              "Remove -ar and add the ending that matches the subject.",
            examples: [
              { target: "yo hablo", translation: "I speak" },
              { target: "tú hablas", translation: "you speak" },
              { target: "él habla", translation: "he speaks" },
              { target: "nosotros hablamos", translation: "we speak" },
              { target: "ellos hablan", translation: "they speak" },
            ],
          },
          {
            title: "Regular -er verbs",
            explanation:
              "Remove -er and add the regular -er ending.",
            examples: [
              { target: "yo como", translation: "I eat" },
              { target: "tú comes", translation: "you eat" },
              { target: "ella come", translation: "she eats" },
              { target: "nosotros comemos", translation: "we eat" },
              { target: "ellos comen", translation: "they eat" },
            ],
          },
          {
            title: "Regular -ir verbs",
            explanation:
              "Regular -ir endings resemble -er endings, but the nosotros form uses -imos.",
            examples: [
              { target: "yo vivo", translation: "I live" },
              { target: "tú vives", translation: "you live" },
              { target: "él vive", translation: "he lives" },
              { target: "nosotros vivimos", translation: "we live" },
              { target: "ellos viven", translation: "they live" },
            ],
          },
          {
            title: "Subject pronouns may be omitted",
            explanation:
              "Because verb endings often show the subject, Spanish frequently omits the subject pronoun.",
            examples: [
              { target: "Yo estudio español", translation: "I study Spanish" },
              { target: "Estudio español", translation: "I study Spanish" },
              { target: "Vivimos en Madrid", translation: "We live in Madrid" },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Sara",
            target: "¿Dónde vives?",
            translation: "Where do you live?",
          },
          {
            speaker: "Leo",
            target: "Vivo en Sevilla.",
            translation: "I live in Seville.",
          },
          {
            speaker: "Sara",
            target: "¿Trabajas o estudias?",
            translation: "Do you work or study?",
          },
          {
            speaker: "Leo",
            target: "Estudio medicina y trabajo los fines de semana.",
            translation: "I study medicine and work on weekends.",
          },
          {
            speaker: "Sara",
            target: "¿Qué idiomas hablas?",
            translation: "What languages do you speak?",
          },
          {
            speaker: "Leo",
            target: "Hablo español e inglés.",
            translation: "I speak Spanish and English.",
          },
        ],
    
        activities: [
          {
            title: "Conjugate an -ar verb",
            instruction:
              "Conjugate hablar for yo, tú, él, nosotros, and ellos.",
            prompt:
              "yo ________ · tú ________ · él ________ · nosotros ________ · ellos ________",
          },
          {
            title: "Conjugate an -er verb",
            instruction:
              "Conjugate comer for three subjects.",
            prompt:
              "yo ________ · ella ________ · nosotros ________",
          },
          {
            title: "Conjugate an -ir verb",
            instruction:
              "Conjugate vivir for three subjects.",
            prompt:
              "tú ________ · él ________ · ellos ________",
          },
          {
            title: "Build sentences",
            instruction:
              "Create one sentence with hablar, comer, and vivir.",
            prompt:
              "Hablo ________. Como ________. Vivo ________.",
          },
        ],
    
        speakingPrompt:
          "Say where you live, what you study or do for work, what you eat, and which languages you speak.",
    
        quiz: [
          {
            question: "What is the yo form of hablar?",
            answers: ["habla", "hablas", "hablo", "hablamos"],
            correctAnswer: "hablo",
          },
          {
            question: "Which form means we eat?",
            answers: ["comemos", "comen", "comes", "como"],
            correctAnswer: "comemos",
          },
          {
            question: "What is the nosotros form of vivir?",
            answers: ["viven", "vivimos", "vive", "vivo"],
            correctAnswer: "vivimos",
          },
          {
            question: "Why may Spanish omit subject pronouns?",
            answers: [
              "Spanish has no pronouns",
              "Verb endings often identify the subject",
              "Pronouns are only used in writing",
              "All verbs have the same form",
            ],
            correctAnswer: "Verb endings often identify the subject",
          },
        ],
      },
      "spanish-grammar-foundations-questions": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "grammar-foundations",
        lessonId: "questions",
        nextUnitId: "review-checkpoint",
        nextLessonId: "a1-review",
        unitNumber: "09",
        lessonNumber: "04",
        title: "Questions and question words",
        introduction:
          "Learn how to ask who, what, where, when, why, which, and how in Spanish.",
        estimatedMinutes: 18,
        speechLanguage: "es-ES",
    
        objectives: [
          "Recognize common Spanish question words",
          "Use opening and closing question marks",
          "Form simple information questions",
          "Ask useful everyday questions",
        ],
    
        vocabulary: [
          { target: "¿Qué?", translation: "What?" },
          { target: "¿Quién?", translation: "Who?" },
          { target: "¿Quiénes?", translation: "Who? plural" },
          { target: "¿Dónde?", translation: "Where?" },
          { target: "¿Cuándo?", translation: "When?" },
          { target: "¿Por qué?", translation: "Why?" },
          { target: "¿Cómo?", translation: "How? / What is ... like?" },
          { target: "¿Cuál?", translation: "Which? / What?" },
          { target: "¿Cuáles?", translation: "Which ones?" },
          { target: "¿Cuánto?", translation: "How much?" },
          { target: "¿Cuántos?", translation: "How many? masculine" },
          { target: "¿Cuántas?", translation: "How many? feminine" },
          {
            target: "¿Qué haces?",
            translation: "What are you doing? / What do you do?",
          },
          {
            target: "¿Dónde vives?",
            translation: "Where do you live?",
          },
          {
            target: "¿Cuándo trabajas?",
            translation: "When do you work?",
          },
          {
            target: "¿Por qué estudias español?",
            translation: "Why do you study Spanish?",
          },
          {
            target: "¿Cómo te llamas?",
            translation: "What is your name?",
          },
          {
            target: "¿Cuál prefieres?",
            translation: "Which do you prefer?",
          },
        ],
    
        notes: [
          {
            title: "Two question marks",
            explanation:
              "Spanish written questions begin with an inverted question mark and end with a standard question mark.",
            examples: [
              { target: "¿Cómo estás?", translation: "How are you?" },
              { target: "¿Dónde vives?", translation: "Where do you live?" },
              { target: "¿Qué quieres?", translation: "What do you want?" },
            ],
          },
          {
            title: "Accent marks matter",
            explanation:
              "Question words normally carry written accents when they ask questions.",
            examples: [
              { target: "qué", translation: "what" },
              { target: "cómo", translation: "how" },
              { target: "dónde", translation: "where" },
              { target: "cuándo", translation: "when" },
            ],
          },
          {
            title: "Qué and cuál",
            explanation:
              "Qué often asks for a definition or general information. Cuál often asks for a choice or identification.",
            examples: [
              {
                target: "¿Qué es esto?",
                translation: "What is this?",
              },
              {
                target: "¿Cuál prefieres?",
                translation: "Which do you prefer?",
              },
              {
                target: "¿Cuál es tu número?",
                translation: "What is your number?",
              },
            ],
          },
          {
            title: "Por qué and porque",
            explanation:
              "Por qué asks why. Porque answers with because.",
            examples: [
              {
                target: "¿Por qué estudias español?",
                translation: "Why do you study Spanish?",
              },
              {
                target: "Porque me gusta",
                translation: "Because I like it",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Julia",
            target: "¿Dónde vives?",
            translation: "Where do you live?",
          },
          {
            speaker: "Nicolás",
            target: "Vivo en Bogotá.",
            translation: "I live in Bogotá.",
          },
          {
            speaker: "Julia",
            target: "¿Qué estudias?",
            translation: "What do you study?",
          },
          {
            speaker: "Nicolás",
            target: "Estudio historia.",
            translation: "I study history.",
          },
          {
            speaker: "Julia",
            target: "¿Por qué estudias historia?",
            translation: "Why do you study history?",
          },
          {
            speaker: "Nicolás",
            target: "Porque me interesa mucho.",
            translation: "Because it interests me a lot.",
          },
        ],
    
        activities: [
          {
            title: "Choose the question word",
            instruction:
              "Complete each question.",
            prompt:
              "¿___ vives? · ¿___ trabajas? · ¿___ estudias español? · ¿___ haces?",
          },
          {
            title: "Add punctuation",
            instruction:
              "Add the correct opening and closing question marks.",
            prompt:
              "Cómo te llamas · Dónde está la estación",
          },
          {
            title: "Why and because",
            instruction:
              "Complete the question and answer.",
            prompt:
              "¿______ estudias español? ______ me gusta.",
          },
          {
            title: "Interview practice",
            instruction:
              "Create four questions for a new classmate.",
            prompt:
              "Name · Location · Studies · Languages",
          },
        ],
    
        speakingPrompt:
          "Ask and answer five questions using qué, dónde, cuándo, por qué, and cómo.",
    
        quiz: [
          {
            question: "Which word means where?",
            answers: ["qué", "dónde", "cuándo", "quién"],
            correctAnswer: "dónde",
          },
          {
            question: "Which phrase asks why?",
            answers: ["porque", "por qué", "para qué", "qué por"],
            correctAnswer: "por qué",
          },
          {
            question: "How are Spanish written questions punctuated?",
            answers: [
              "Only with a final question mark",
              "With an inverted opening and standard closing mark",
              "Without punctuation",
              "With two standard question marks",
            ],
            correctAnswer:
              "With an inverted opening and standard closing mark",
          },
          {
            question: "Which question asks where someone lives?",
            answers: [
              "¿Qué vives?",
              "¿Cómo vives?",
              "¿Dónde vives?",
              "¿Cuándo vives?",
            ],
            correctAnswer: "¿Dónde vives?",
          },
          {
            question: "Which word means because?",
            answers: ["por qué", "porque", "cuál", "cómo"],
            correctAnswer: "porque",
          },
        ],
      },
      "spanish-review-checkpoint-a1-review": {
        languageId: "spanish",
        languageName: "Spanish",
        unitId: "review-checkpoint",
        lessonId: "a1-review",
        unitNumber: "10",
        lessonNumber: "01",
        title: "Complete A1 review",
        introduction:
          "Review the essential vocabulary, grammar, pronunciation, and communication skills from the complete Spanish A1 pathway.",
        estimatedMinutes: 30,
        speechLanguage: "es-ES",
    
        objectives: [
          "Review essential vocabulary from all ten units",
          "Use beginner grammar in complete sentences",
          "Understand short everyday dialogues",
          "Respond to common travel and social situations",
          "Prepare for the Spanish A1 checkpoint",
        ],
    
        vocabulary: [
          {
            target: "Hola, ¿cómo estás?",
            translation: "Hello, how are you?",
          },
          {
            target: "Me llamo…",
            translation: "My name is…",
          },
          {
            target: "Soy de…",
            translation: "I am from…",
          },
          {
            target: "Hablo inglés y estudio español",
            translation: "I speak English and study Spanish",
          },
          {
            target: "Tengo veinte años",
            translation: "I am twenty years old",
          },
          {
            target: "Hoy es lunes",
            translation: "Today is Monday",
          },
          {
            target: "Son las tres y media",
            translation: "It is half past three",
          },
          {
            target: "Esta es mi familia",
            translation: "This is my family",
          },
          {
            target: "Mi hermana es muy amable",
            translation: "My sister is very kind",
          },
          {
            target: "Tengo hambre",
            translation: "I am hungry",
          },
          {
            target: "Me gustan las verduras",
            translation: "I like vegetables",
          },
          {
            target: "Quisiera un café, por favor",
            translation: "I would like a coffee, please",
          },
          {
            target: "La cuenta, por favor",
            translation: "The bill, please",
          },
          {
            target: "Me despierto a las siete",
            translation: "I wake up at seven",
          },
          {
            target: "Estudio por la mañana",
            translation: "I study in the morning",
          },
          {
            target: "¿Dónde está la estación?",
            translation: "Where is the station?",
          },
          {
            target: "Siga todo recto",
            translation: "Continue straight ahead",
          },
          {
            target: "Quisiera un billete de ida y vuelta",
            translation: "I would like a round-trip ticket",
          },
          {
            target: "¿Cuánto cuesta?",
            translation: "How much does it cost?",
          },
          {
            target: "Voy a pagar con tarjeta",
            translation: "I am going to pay by card",
          },
          {
            target: "Soy estudiante",
            translation: "I am a student",
          },
          {
            target: "Estoy cansado",
            translation: "I am tired, masculine",
          },
          {
            target: "Estoy cansada",
            translation: "I am tired, feminine",
          },
          {
            target: "Vivo en una ciudad pequeña",
            translation: "I live in a small city",
          },
          {
            target: "¿Por qué estudias español?",
            translation: "Why do you study Spanish?",
          },
          {
            target: "Porque me gusta",
            translation: "Because I like it",
          },
        ],
    
        notes: [
          {
            title: "Introducing yourself",
            explanation:
              "A complete beginner introduction can include your name, origin, age, languages, studies, work, and interests.",
            examples: [
              {
                target: "Me llamo Elena",
                translation: "My name is Elena",
              },
              {
                target: "Soy de Estados Unidos",
                translation: "I am from the United States",
              },
              {
                target: "Tengo veinte años",
                translation: "I am twenty years old",
              },
              {
                target: "Hablo inglés y estudio español",
                translation: "I speak English and study Spanish",
              },
            ],
          },
          {
            title: "Ser and estar review",
            explanation:
              "Use ser for identity, origin, profession, time, and general characteristics. Use estar for location, feelings, and temporary conditions.",
            examples: [
              {
                target: "Soy estudiante",
                translation: "I am a student",
              },
              {
                target: "Soy de Chicago",
                translation: "I am from Chicago",
              },
              {
                target: "Estoy en casa",
                translation: "I am at home",
              },
              {
                target: "Estoy cansada",
                translation: "I am tired",
              },
            ],
          },
          {
            title: "Present-tense review",
            explanation:
              "Regular present-tense verbs change their endings according to the subject. Spanish often omits subject pronouns because the ending identifies the subject.",
            examples: [
              {
                target: "Hablo español",
                translation: "I speak Spanish",
              },
              {
                target: "Trabajas los lunes",
                translation: "You work on Mondays",
              },
              {
                target: "Comemos a las dos",
                translation: "We eat at two",
              },
              {
                target: "Viven en Madrid",
                translation: "They live in Madrid",
              },
            ],
          },
          {
            title: "Gender and agreement review",
            explanation:
              "Articles and many adjectives agree with nouns in gender and number.",
            examples: [
              {
                target: "el libro rojo",
                translation: "the red book",
              },
              {
                target: "la camisa roja",
                translation: "the red shirt",
              },
              {
                target: "los zapatos negros",
                translation: "the black shoes",
              },
              {
                target: "las casas blancas",
                translation: "the white houses",
              },
            ],
          },
          {
            title: "Question words review",
            explanation:
              "Use question words to request specific information. Remember their accents and Spanish opening question marks.",
            examples: [
              {
                target: "¿Qué haces?",
                translation: "What do you do?",
              },
              {
                target: "¿Dónde vives?",
                translation: "Where do you live?",
              },
              {
                target: "¿Cuándo trabajas?",
                translation: "When do you work?",
              },
              {
                target: "¿Por qué estudias español?",
                translation: "Why do you study Spanish?",
              },
              {
                target: "¿Cómo te llamas?",
                translation: "What is your name?",
              },
            ],
          },
          {
            title: "Essential survival Spanish",
            explanation:
              "These phrases help a beginner handle confusion, requests, and everyday interactions.",
            examples: [
              {
                target: "No entiendo",
                translation: "I do not understand",
              },
              {
                target: "Repita, por favor",
                translation: "Repeat, please",
              },
              {
                target: "Más despacio, por favor",
                translation: "More slowly, please",
              },
              {
                target: "¿Puede ayudarme?",
                translation: "Can you help me?",
              },
            ],
          },
        ],
    
        dialogue: [
          {
            speaker: "Lucía",
            target: "Hola. ¿Cómo te llamas?",
            translation: "Hello. What is your name?",
          },
          {
            speaker: "Daniel",
            target: "Me llamo Daniel. Mucho gusto.",
            translation: "My name is Daniel. Nice to meet you.",
          },
          {
            speaker: "Lucía",
            target: "Igualmente. ¿De dónde eres?",
            translation: "Likewise. Where are you from?",
          },
          {
            speaker: "Daniel",
            target: "Soy de Canadá, pero ahora estoy en Madrid.",
            translation: "I am from Canada, but now I am in Madrid.",
          },
          {
            speaker: "Lucía",
            target: "¿Qué haces en Madrid?",
            translation: "What are you doing in Madrid?",
          },
          {
            speaker: "Daniel",
            target: "Estudio español y trabajo por la tarde.",
            translation: "I study Spanish and work in the afternoon.",
          },
          {
            speaker: "Lucía",
            target: "¿Te gusta la ciudad?",
            translation: "Do you like the city?",
          },
          {
            speaker: "Daniel",
            target: "Sí, me gusta mucho. La gente es amable y la comida está deliciosa.",
            translation:
              "Yes, I like it a lot. The people are kind and the food is delicious.",
          },
        ],
    
        activities: [
          {
            title: "Complete introduction",
            instruction:
              "Create a five-sentence introduction using your own or imagined information.",
            prompt:
              "Me llamo ________. Soy de ________. Tengo ________ años. Hablo ________. Estudio o trabajo ________.",
          },
          {
            title: "Choose ser or estar",
            instruction:
              "Complete each sentence with the correct form of ser or estar.",
            prompt:
              "Yo ___ estudiante. · Yo ___ en casa. · Ella ___ amable. · Ellos ___ cansados.",
          },
          {
            title: "Build a daily routine",
            instruction:
              "Describe four actions and include at least two times.",
            prompt:
              "Me despierto a las ________. Después ________. Por la tarde ________. Por la noche ________.",
          },
          {
            title: "Restaurant simulation",
            instruction:
              "Request a table, order food, request the bill, and choose a payment method.",
            prompt:
              "Una mesa para ________. Quisiera ________. La cuenta, por favor. Pago ________.",
          },
          {
            title: "Travel simulation",
            instruction:
              "Ask where the station is and purchase a ticket.",
            prompt:
              "¿Dónde está ________? Quisiera un billete de ________ para ________.",
          },
          {
            title: "Shopping simulation",
            instruction:
              "Ask for an item, size, price, and payment option.",
            prompt:
              "Busco ________. ¿Tiene otra talla? ¿Cuánto cuesta? Voy a pagar ________.",
          },
          {
            title: "Question builder",
            instruction:
              "Create one complete question with each question word.",
            prompt:
              "qué · dónde · cuándo · por qué · cómo",
          },
          {
            title: "A1 self-check",
            instruction:
              "Decide which tasks you can complete without notes.",
            prompt:
              "Introduce yourself · Tell time · Order food · Ask directions · Shop · Describe your routine",
          },
        ],
    
        speakingPrompt:
          "Give a one-minute Spanish introduction. Include your name, origin, age, languages, daily routine, family or friends, food preferences, and one future travel situation.",
    
        quiz: [
          {
            question: "Which sentence correctly states someone’s age?",
            answers: [
              "Soy veinte años",
              "Tengo veinte años",
              "Estoy veinte años",
              "Hay veinte años",
            ],
            correctAnswer: "Tengo veinte años",
          },
          {
            question: "Which sentence correctly describes location?",
            answers: [
              "El hotel es aquí",
              "El hotel está aquí",
              "El hotel tiene aquí",
              "El hotel hay aquí",
            ],
            correctAnswer: "El hotel está aquí",
          },
          {
            question: "Which phrase correctly says I like vegetables?",
            answers: [
              "Me gusta las verduras",
              "Me gustan las verduras",
              "Yo gusto verduras",
              "Tengo gusto verduras",
            ],
            correctAnswer: "Me gustan las verduras",
          },
          {
            question: "How do you politely order a coffee?",
            answers: [
              "Soy un café",
              "Quisiera un café, por favor",
              "Tengo un café",
              "¿Dónde café?",
            ],
            correctAnswer: "Quisiera un café, por favor",
          },
          {
            question: "Which phrase asks where the station is?",
            answers: [
              "¿Qué es la estación?",
              "¿Cuándo está la estación?",
              "¿Dónde está la estación?",
              "¿Cómo estación?",
            ],
            correctAnswer: "¿Dónde está la estación?",
          },
          {
            question: "Which sentence means we live in Madrid?",
            answers: [
              "Vivimos en Madrid",
              "Viven en Madrid",
              "Vivo en Madrid",
              "Vivís Madrid",
            ],
            correctAnswer: "Vivimos en Madrid",
          },
          {
            question: "Which phrase asks how much one item costs?",
            answers: [
              "¿Cuánto cuestan?",
              "¿Cuánto cuesta?",
              "¿Cuántos cuesta?",
              "¿Qué cuesta son?",
            ],
            correctAnswer: "¿Cuánto cuesta?",
          },
          {
            question: "Which phrase means more slowly, please?",
            answers: [
              "Más temprano, por favor",
              "Más despacio, por favor",
              "Todo recto, por favor",
              "Más caro, por favor",
            ],
            correctAnswer: "Más despacio, por favor",
          },
          {
            question: "Which sentence correctly describes a friendly woman?",
            answers: [
              "Ella es simpático",
              "Ella está simpática",
              "Ella es simpática",
              "Ella tiene simpático",
            ],
            correctAnswer: "Ella es simpática",
          },
          {
            question: "Which word answers ¿Por qué?",
            answers: [
              "porque",
              "dónde",
              "cuándo",
              "quién",
            ],
            correctAnswer: "porque",
          },
        ],
      },
  };