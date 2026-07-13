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
    "italian-greetings": {
        languageId: "italian",
        lessonId: "greetings",
        number: "01",
        title: "Greetings and introductions",
        introduction:
          "Learn common Italian greetings and the phrases you need to introduce yourself.",
        sectionTitle: "Essential phrases",
        phrases: [
          {
            target: "Ciao",
            english: "Hello / Goodbye, informal",
          },
          {
            target: "Buongiorno",
            english: "Good morning / Good day",
          },
          {
            target: "Buonasera",
            english: "Good evening",
          },
          {
            target: "Mi chiamo…",
            english: "My name is…",
          },
          {
            target: "Come ti chiami?",
            english: "What is your name? Informal",
          },
          {
            target: "Piacere",
            english: "Nice to meet you",
          },
        ],
        practiceQuestion: "Complete this introduction:",
        practicePrompt: "Ciao, mi chiamo ________. Piacere.",
      },
    
      "italian-pronunciation": {
        languageId: "italian",
        lessonId: "pronunciation",
        number: "02",
        title: "Italian pronunciation basics",
        introduction:
          "Practice clear Italian vowels and several important pronunciation patterns.",
        sectionTitle: "Key sounds",
        phrases: [
          {
            target: "casa",
            english: "The A has a clear ah sound.",
          },
          {
            target: "gelato",
            english: "G before E or I often sounds like the J in jam.",
          },
          {
            target: "che",
            english: "CH before E or I has a hard K sound.",
          },
          {
            target: "gnocchi",
            english: "GN has a sound similar to ny.",
          },
          {
            target: "spaghetti",
            english: "Double consonants are held slightly longer.",
          },
          {
            target: "famiglia",
            english: "GLI has a special blended sound.",
          },
        ],
        practiceQuestion: "Say this phrase aloud:",
        practicePrompt: "Buongiorno, mi chiamo Sofia.",
      },
    
      "italian-numbers": {
        languageId: "italian",
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
            target: "due",
            english: "two",
          },
          {
            target: "tre",
            english: "three",
          },
          {
            target: "quattro",
            english: "four",
          },
          {
            target: "Ho venti anni.",
            english: "I am twenty years old.",
          },
          {
            target: "Vivo negli Stati Uniti.",
            english: "I live in the United States.",
          },
        ],
        practiceQuestion: "Complete this sentence:",
        practicePrompt: "Ho ________ anni.",
      },
    
      "italian-questions": {
        languageId: "italian",
        lessonId: "questions",
        number: "04",
        title: "Everyday questions",
        introduction:
          "Learn essential Italian question words and simple questions for daily conversations.",
        sectionTitle: "Essential questions",
        phrases: [
          {
            target: "Chi è?",
            english: "Who is it?",
          },
          {
            target: "Che cos’è?",
            english: "What is it?",
          },
          {
            target: "Dove vivi?",
            english: "Where do you live?",
          },
          {
            target: "Quando parti?",
            english: "When are you leaving?",
          },
          {
            target: "Perché studi italiano?",
            english: "Why are you studying Italian?",
          },
          {
            target: "Come stai?",
            english: "How are you?",
          },
        ],
        practiceQuestion: "Answer this question in Italian:",
        practicePrompt: "Dove vivi?",
      },
      "german-greetings": {
        languageId: "german",
        lessonId: "greetings",
        number: "01",
        title: "Greetings and introductions",
        introduction:
          "Learn common German greetings and the phrases you need to introduce yourself.",
        sectionTitle: "Essential phrases",
        phrases: [
          {
            target: "Hallo",
            english: "Hello",
          },
          {
            target: "Guten Morgen",
            english: "Good morning",
          },
          {
            target: "Guten Tag",
            english: "Good day",
          },
          {
            target: "Guten Abend",
            english: "Good evening",
          },
          {
            target: "Ich heiße…",
            english: "My name is…",
          },
          {
            target: "Freut mich",
            english: "Nice to meet you",
          },
        ],
        practiceQuestion: "Complete this introduction:",
        practicePrompt: "Hallo, ich heiße ________. Freut mich.",
      },
    
      "german-pronunciation": {
        languageId: "german",
        lessonId: "pronunciation",
        number: "02",
        title: "German pronunciation basics",
        introduction:
          "Practice important German sounds, vowels, umlauts, and consonant combinations.",
        sectionTitle: "Key sounds",
        phrases: [
          {
            target: "ich",
            english: "The CH sound is soft after I.",
          },
          {
            target: "Buch",
            english: "The CH sound is deeper after U.",
          },
          {
            target: "schön",
            english: "Ö is a rounded vowel sound.",
          },
          {
            target: "über",
            english: "Ü is pronounced with rounded lips.",
          },
          {
            target: "Straße",
            english: "The letter ß usually sounds like ss.",
          },
          {
            target: "Deutsch",
            english: "EU usually sounds similar to oy.",
          },
        ],
        practiceQuestion: "Say this phrase aloud:",
        practicePrompt: "Hallo, ich heiße Anna.",
      },
    
      "german-numbers": {
        languageId: "german",
        lessonId: "numbers",
        number: "03",
        title: "Numbers and personal information",
        introduction:
          "Learn basic numbers and phrases for sharing information about yourself.",
        sectionTitle: "Numbers and phrases",
        phrases: [
          {
            target: "eins",
            english: "one",
          },
          {
            target: "zwei",
            english: "two",
          },
          {
            target: "drei",
            english: "three",
          },
          {
            target: "vier",
            english: "four",
          },
          {
            target: "Ich bin zwanzig Jahre alt.",
            english: "I am twenty years old.",
          },
          {
            target: "Ich wohne in den Vereinigten Staaten.",
            english: "I live in the United States.",
          },
        ],
        practiceQuestion: "Complete this sentence:",
        practicePrompt: "Ich bin ________ Jahre alt.",
      },
    
      "german-questions": {
        languageId: "german",
        lessonId: "questions",
        number: "04",
        title: "Everyday questions",
        introduction:
          "Learn essential German question words and simple questions for daily conversations.",
        sectionTitle: "Essential questions",
        phrases: [
          {
            target: "Wer ist das?",
            english: "Who is that?",
          },
          {
            target: "Was ist das?",
            english: "What is that?",
          },
          {
            target: "Wo wohnst du?",
            english: "Where do you live?",
          },
          {
            target: "Wann gehst du?",
            english: "When are you leaving?",
          },
          {
            target: "Warum lernst du Deutsch?",
            english: "Why are you learning German?",
          },
          {
            target: "Wie geht es dir?",
            english: "How are you?",
          },
        ],
        practiceQuestion: "Answer this question in German:",
        practicePrompt: "Wo wohnst du?",
      },
      "russian-greetings": {
        languageId: "russian",
        lessonId: "greetings",
        number: "01",
        title: "Greetings and introductions",
        introduction:
          "Learn common Russian greetings and the phrases you need to introduce yourself.",
        sectionTitle: "Essential phrases",
        phrases: [
          {
            target: "Здравствуйте",
            english: "Hello, formal",
          },
          {
            target: "Привет",
            english: "Hi, informal",
          },
          {
            target: "Доброе утро",
            english: "Good morning",
          },
          {
            target: "Добрый вечер",
            english: "Good evening",
          },
          {
            target: "Меня зовут…",
            english: "My name is…",
          },
          {
            target: "Очень приятно",
            english: "Nice to meet you",
          },
        ],
        practiceQuestion: "Complete this introduction:",
        practicePrompt: "Привет, меня зовут ________. Очень приятно.",
      },
    
      "russian-pronunciation": {
        languageId: "russian",
        lessonId: "pronunciation",
        number: "02",
        title: "Russian pronunciation basics",
        introduction:
          "Practice important Russian sounds and begin recognizing common Cyrillic letters.",
        sectionTitle: "Key sounds",
        phrases: [
          {
            target: "мама",
            english: "The letter М sounds like M.",
          },
          {
            target: "дом",
            english: "The letter Д sounds like D.",
          },
          {
            target: "нет",
            english: "The letter Н sounds like N.",
          },
          {
            target: "Россия",
            english: "The letter Я often sounds like ya.",
          },
          {
            target: "хорошо",
            english: "The letter Х has a breathy kh sound.",
          },
          {
            target: "чай",
            english: "The letter Ч sounds similar to ch.",
          },
        ],
        practiceQuestion: "Say this phrase aloud:",
        practicePrompt: "Привет, меня зовут Анна.",
      },
    
      "russian-numbers": {
        languageId: "russian",
        lessonId: "numbers",
        number: "03",
        title: "Numbers and personal information",
        introduction:
          "Learn basic Russian numbers and phrases for sharing information about yourself.",
        sectionTitle: "Numbers and phrases",
        phrases: [
          {
            target: "один",
            english: "one",
          },
          {
            target: "два",
            english: "two",
          },
          {
            target: "три",
            english: "three",
          },
          {
            target: "четыре",
            english: "four",
          },
          {
            target: "Мне двадцать лет.",
            english: "I am twenty years old.",
          },
          {
            target: "Я живу в Соединённых Штатах.",
            english: "I live in the United States.",
          },
        ],
        practiceQuestion: "Complete this sentence:",
        practicePrompt: "Мне ________ лет.",
      },
    
      "russian-questions": {
        languageId: "russian",
        lessonId: "questions",
        number: "04",
        title: "Everyday questions",
        introduction:
          "Learn essential Russian question words and simple questions for daily conversations.",
        sectionTitle: "Essential questions",
        phrases: [
          {
            target: "Кто это?",
            english: "Who is this?",
          },
          {
            target: "Что это?",
            english: "What is this?",
          },
          {
            target: "Где ты живёшь?",
            english: "Where do you live?",
          },
          {
            target: "Когда ты уходишь?",
            english: "When are you leaving?",
          },
          {
            target: "Почему ты учишь русский?",
            english: "Why are you learning Russian?",
          },
          {
            target: "Как дела?",
            english: "How are you?",
          },
        ],
        practiceQuestion: "Answer this question in Russian:",
        practicePrompt: "Где ты живёшь?",
      },
      "japanese-greetings": {
        languageId: "japanese",
        lessonId: "greetings",
        number: "01",
        title: "Greetings and introductions",
        introduction:
          "Learn common Japanese greetings and simple phrases for introducing yourself.",
        sectionTitle: "Essential phrases",
        phrases: [
          {
            target: "こんにちは",
            english: "Hello / Good afternoon",
          },
          {
            target: "おはようございます",
            english: "Good morning, polite",
          },
          {
            target: "こんばんは",
            english: "Good evening",
          },
          {
            target: "わたしは…です",
            english: "I am…",
          },
          {
            target: "おなまえはなんですか",
            english: "What is your name?",
          },
          {
            target: "はじめまして",
            english: "Nice to meet you",
          },
        ],
        practiceQuestion: "Complete this introduction:",
        practicePrompt: "はじめまして。わたしは ________ です。",
      },
    
      "japanese-pronunciation": {
        languageId: "japanese",
        lessonId: "pronunciation",
        number: "02",
        title: "Japanese pronunciation basics",
        introduction:
          "Practice the five basic Japanese vowels and several important sound patterns.",
        sectionTitle: "Key sounds",
        phrases: [
          {
            target: "あ",
            english: "A sounds like ah.",
          },
          {
            target: "い",
            english: "I sounds like ee.",
          },
          {
            target: "う",
            english: "U is a short, lightly rounded sound.",
          },
          {
            target: "え",
            english: "E sounds like eh.",
          },
          {
            target: "お",
            english: "O sounds like oh.",
          },
          {
            target: "がっこう",
            english: "A small っ creates a brief pause before the next consonant.",
          },
        ],
        practiceQuestion: "Say this phrase aloud:",
        practicePrompt: "こんにちは。わたしはアナです。",
      },
    
      "japanese-numbers": {
        languageId: "japanese",
        lessonId: "numbers",
        number: "03",
        title: "Numbers and personal information",
        introduction:
          "Learn basic Japanese numbers and phrases for sharing information about yourself.",
        sectionTitle: "Numbers and phrases",
        phrases: [
          {
            target: "いち",
            english: "one",
          },
          {
            target: "に",
            english: "two",
          },
          {
            target: "さん",
            english: "three",
          },
          {
            target: "よん",
            english: "four",
          },
          {
            target: "わたしは二十歳です",
            english: "I am twenty years old.",
          },
          {
            target: "アメリカに住んでいます",
            english: "I live in the United States.",
          },
        ],
        practiceQuestion: "Complete this sentence:",
        practicePrompt: "わたしは ________ 歳です。",
      },
    
      "japanese-questions": {
        languageId: "japanese",
        lessonId: "questions",
        number: "04",
        title: "Everyday questions",
        introduction:
          "Learn simple Japanese questions for everyday conversations.",
        sectionTitle: "Essential questions",
        phrases: [
          {
            target: "だれですか",
            english: "Who is it?",
          },
          {
            target: "なんですか",
            english: "What is it?",
          },
          {
            target: "どこに住んでいますか",
            english: "Where do you live?",
          },
          {
            target: "いつ行きますか",
            english: "When are you going?",
          },
          {
            target: "どうして日本語を勉強しますか",
            english: "Why are you studying Japanese?",
          },
          {
            target: "げんきですか",
            english: "How are you?",
          },
        ],
        practiceQuestion: "Answer this question in Japanese:",
        practicePrompt: "どこに住んでいますか。",
      },
      "arabic-greetings": {
        languageId: "arabic",
        lessonId: "greetings",
        number: "01",
        title: "Greetings and introductions",
        introduction:
          "Learn common Modern Standard Arabic greetings and simple phrases for introducing yourself.",
        sectionTitle: "Essential phrases",
        phrases: [
          {
            target: "مرحبًا",
            english: "Hello",
          },
          {
            target: "صباح الخير",
            english: "Good morning",
          },
          {
            target: "مساء الخير",
            english: "Good evening",
          },
          {
            target: "اسمي…",
            english: "My name is…",
          },
          {
            target: "ما اسمك؟",
            english: "What is your name?",
          },
          {
            target: "تشرفت بلقائك",
            english: "Nice to meet you",
          },
        ],
        practiceQuestion: "Complete this introduction:",
        practicePrompt: "مرحبًا، اسمي ________.",
      },
    
      "arabic-pronunciation": {
        languageId: "arabic",
        lessonId: "pronunciation",
        number: "02",
        title: "Arabic pronunciation basics",
        introduction:
          "Practice several important Arabic letters and sounds while becoming familiar with right-to-left writing.",
        sectionTitle: "Key sounds",
        phrases: [
          {
            target: "ب",
            english: "The letter baa sounds like B.",
          },
          {
            target: "م",
            english: "The letter meem sounds like M.",
          },
          {
            target: "ن",
            english: "The letter noon sounds like N.",
          },
          {
            target: "خ",
            english: "The letter khaa has a breathy throat sound.",
          },
          {
            target: "ع",
            english: "The letter ayn is produced deep in the throat.",
          },
          {
            target: "ش",
            english: "The letter sheen sounds like SH.",
          },
        ],
        practiceQuestion: "Say this phrase aloud:",
        practicePrompt: "مرحبًا، اسمي سارة.",
      },
    
      "arabic-numbers": {
        languageId: "arabic",
        lessonId: "numbers",
        number: "03",
        title: "Numbers and personal information",
        introduction:
          "Learn basic Arabic numbers and phrases for sharing information about yourself.",
        sectionTitle: "Numbers and phrases",
        phrases: [
          {
            target: "واحد",
            english: "one",
          },
          {
            target: "اثنان",
            english: "two",
          },
          {
            target: "ثلاثة",
            english: "three",
          },
          {
            target: "أربعة",
            english: "four",
          },
          {
            target: "عمري عشرون سنة",
            english: "I am twenty years old.",
          },
          {
            target: "أعيش في الولايات المتحدة",
            english: "I live in the United States.",
          },
        ],
        practiceQuestion: "Complete this sentence:",
        practicePrompt: "عمري ________ سنة.",
      },
    
      "arabic-questions": {
        languageId: "arabic",
        lessonId: "questions",
        number: "04",
        title: "Everyday questions",
        introduction:
          "Learn essential Arabic question words and simple questions for everyday conversations.",
        sectionTitle: "Essential questions",
        phrases: [
          {
            target: "من هذا؟",
            english: "Who is this?",
          },
          {
            target: "ما هذا؟",
            english: "What is this?",
          },
          {
            target: "أين تعيش؟",
            english: "Where do you live?",
          },
          {
            target: "متى تذهب؟",
            english: "When are you going?",
          },
          {
            target: "لماذا تتعلم العربية؟",
            english: "Why are you learning Arabic?",
          },
          {
            target: "كيف حالك؟",
            english: "How are you?",
          },
        ],
        practiceQuestion: "Answer this question in Arabic:",
        practicePrompt: "أين تعيش؟",
      },
    };