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
  };