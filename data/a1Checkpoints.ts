export type CheckpointQuestion = {
    question: string;
    answers: string[];
    correctAnswer: string;
  };
  
  export type A1Checkpoint = {
    languageId: string;
    languageName: string;
    passingScore: number;
    questions: CheckpointQuestion[];
  };
  
  export const a1Checkpoints: Record<string, A1Checkpoint> = {
    spanish: {
      languageId: "spanish",
      languageName: "Spanish",
      passingScore: 4,
      questions: [
        {
          question: 'Which Spanish word means "Hello"?',
          answers: ["Adiós", "Hola", "Gracias", "Por favor"],
          correctAnswer: "Hola",
        },
        {
          question: 'Which phrase means "My name is..."?',
          answers: ["Me llamo...", "Tengo...", "Vivo...", "Soy de..."],
          correctAnswer: "Me llamo...",
        },
        {
          question: 'Which Spanish word means "three"?',
          answers: ["uno", "dos", "tres", "cuatro"],
          correctAnswer: "tres",
        },
        {
          question: 'What does "¿Dónde vives?" mean?',
          answers: [
            "What is your name?",
            "Where do you live?",
            "How are you?",
            "When are you leaving?",
          ],
          correctAnswer: "Where do you live?",
        },
        {
          question: 'Which phrase means "I live in the United States"?',
          answers: [
            "Tengo veinte años.",
            "Me llamo María.",
            "Vivo en los Estados Unidos.",
            "Estudio español.",
          ],
          correctAnswer: "Vivo en los Estados Unidos.",
        },
      ],
    },
    italian: {
        languageId: "italian",
        languageName: "Italian",
        passingScore: 4,
        questions: [
          {
            question: 'Which Italian word means "Hello" informally?',
            answers: ["Grazie", "Ciao", "Prego", "Arrivederci"],
            correctAnswer: "Ciao",
          },
          {
            question: 'Which phrase means "My name is..."?',
            answers: ["Mi chiamo...", "Ho...", "Vivo...", "Sono di..."],
            correctAnswer: "Mi chiamo...",
          },
          {
            question: 'Which Italian word means "three"?',
            answers: ["uno", "due", "tre", "quattro"],
            correctAnswer: "tre",
          },
          {
            question: 'What does "Dove vivi?" mean?',
            answers: [
              "What is your name?",
              "Where do you live?",
              "How are you?",
              "When are you leaving?",
            ],
            correctAnswer: "Where do you live?",
          },
          {
            question: 'Which phrase means "I live in the United States"?',
            answers: [
              "Ho venti anni.",
              "Mi chiamo Sofia.",
              "Vivo negli Stati Uniti.",
              "Studio italiano.",
            ],
            correctAnswer: "Vivo negli Stati Uniti.",
          },
        ],
      },
      german: {
        languageId: "german",
        languageName: "German",
        passingScore: 4,
        questions: [
          {
            question: 'Which German word means "Hello"?',
            answers: ["Danke", "Hallo", "Bitte", "Tschüss"],
            correctAnswer: "Hallo",
          },
          {
            question: 'Which phrase means "My name is..."?',
            answers: ["Ich heiße...", "Ich wohne...", "Ich bin...", "Ich lerne..."],
            correctAnswer: "Ich heiße...",
          },
          {
            question: 'Which German word means "three"?',
            answers: ["eins", "zwei", "drei", "vier"],
            correctAnswer: "drei",
          },
          {
            question: 'What does "Wo wohnst du?" mean?',
            answers: [
              "What is your name?",
              "Where do you live?",
              "How are you?",
              "When are you leaving?",
            ],
            correctAnswer: "Where do you live?",
          },
          {
            question:
              'Which sentence means "I am twenty years old"?',
            answers: [
              "Ich heiße Anna.",
              "Ich lerne Deutsch.",
              "Ich bin zwanzig Jahre alt.",
              "Ich wohne in Berlin.",
            ],
            correctAnswer: "Ich bin zwanzig Jahre alt.",
          },
        ],
      },
      russian: {
        languageId: "russian",
        languageName: "Russian",
        passingScore: 4,
        questions: [
          {
            question: 'Which Russian word means "Hi" informally?',
            answers: ["Спасибо", "Привет", "Пожалуйста", "До свидания"],
            correctAnswer: "Привет",
          },
          {
            question: 'Which phrase means "My name is..."?',
            answers: ["Меня зовут...", "Я живу...", "Мне...", "Я учу..."],
            correctAnswer: "Меня зовут...",
          },
          {
            question: 'Which Russian word means "three"?',
            answers: ["один", "два", "три", "четыре"],
            correctAnswer: "три",
          },
          {
            question: 'What does "Где ты живёшь?" mean?',
            answers: [
              "What is your name?",
              "Where do you live?",
              "How are you?",
              "When are you leaving?",
            ],
            correctAnswer: "Where do you live?",
          },
          {
            question: 'Which sentence means "I am twenty years old"?',
            answers: [
              "Меня зовут Анна.",
              "Я учу русский.",
              "Мне двадцать лет.",
              "Я живу в Москве.",
            ],
            correctAnswer: "Мне двадцать лет.",
          },
        ],
      },
      japanese: {
        languageId: "japanese",
        languageName: "Japanese",
        passingScore: 4,
        questions: [
          {
            question: 'Which Japanese phrase means "Hello"?',
            answers: ["ありがとう", "こんにちは", "さようなら", "すみません"],
            correctAnswer: "こんにちは",
          },
          {
            question: 'Which phrase can mean "I am..."?',
            answers: [
              "わたしは…です",
              "どこですか",
              "なんですか",
              "げんきですか",
            ],
            correctAnswer: "わたしは…です",
          },
          {
            question: 'Which Japanese word means "three"?',
            answers: ["いち", "に", "さん", "よん"],
            correctAnswer: "さん",
          },
          {
            question: 'What does "どこに住んでいますか" mean?',
            answers: [
              "What is your name?",
              "Where do you live?",
              "How are you?",
              "When are you going?",
            ],
            correctAnswer: "Where do you live?",
          },
          {
            question: 'Which phrase means "Nice to meet you"?',
            answers: [
              "こんばんは",
              "はじめまして",
              "おはようございます",
              "さようなら",
            ],
            correctAnswer: "はじめまして",
          },
        ],
      },
      arabic: {
        languageId: "arabic",
        languageName: "Arabic",
        passingScore: 4,
        questions: [
          {
            question: 'Which Arabic word means "Hello"?',
            answers: ["شكرًا", "مرحبًا", "مع السلامة", "من فضلك"],
            correctAnswer: "مرحبًا",
          },
          {
            question: 'Which phrase means "My name is..."?',
            answers: ["اسمي…", "عمري…", "أعيش في…", "أنا أتعلم…"],
            correctAnswer: "اسمي…",
          },
          {
            question: 'Which Arabic word means "three"?',
            answers: ["واحد", "اثنان", "ثلاثة", "أربعة"],
            correctAnswer: "ثلاثة",
          },
          {
            question: 'What does "أين تعيش؟" mean?',
            answers: [
              "What is your name?",
              "Where do you live?",
              "How are you?",
              "When are you going?",
            ],
            correctAnswer: "Where do you live?",
          },
          {
            question: 'Which phrase means "How are you?"',
            answers: [
              "من هذا؟",
              "ما هذا؟",
              "كيف حالك؟",
              "متى تذهب؟",
            ],
            correctAnswer: "كيف حالك؟",
          },
        ],
      },
  };