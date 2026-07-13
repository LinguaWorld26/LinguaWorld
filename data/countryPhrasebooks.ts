export type TravelPhrase = {
    phrase: string;
    translation: string;
    category: "Basics" | "Food" | "Directions" | "Emergency";
  };
  
  export type CountryPhrasebook = {
    countryId: string;
    countryName: string;
    languageName: string;
    nativeLanguageName: string;
    speechLanguage: string;
    direction?: "ltr" | "rtl";
    phrases: TravelPhrase[];
  };
  
  export const countryPhrasebooks: Record<string, CountryPhrasebook> = {
    france: {
      countryId: "france",
      countryName: "France",
      languageName: "French",
      nativeLanguageName: "Français",
      speechLanguage: "fr-FR",
      phrases: [
        {
          phrase: "Bonjour",
          translation: "Hello",
          category: "Basics",
        },
        {
          phrase: "Parlez-vous anglais ?",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "Je voudrais ceci, s’il vous plaît.",
          translation: "I would like this, please.",
          category: "Food",
        },
        {
          phrase: "L’addition, s’il vous plaît.",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "Où est la gare ?",
          translation: "Where is the train station?",
          category: "Directions",
        },
        {
          phrase: "J’ai besoin d’aide.",
          translation: "I need help.",
          category: "Emergency",
        },
      ],
    },
  
    spain: {
      countryId: "spain",
      countryName: "Spain",
      languageName: "Spanish",
      nativeLanguageName: "Español",
      speechLanguage: "es-ES",
      phrases: [
        {
          phrase: "Hola",
          translation: "Hello",
          category: "Basics",
        },
        {
          phrase: "¿Habla inglés?",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "Quisiera esto, por favor.",
          translation: "I would like this, please.",
          category: "Food",
        },
        {
          phrase: "La cuenta, por favor.",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "¿Dónde está la estación?",
          translation: "Where is the station?",
          category: "Directions",
        },
        {
          phrase: "Necesito ayuda.",
          translation: "I need help.",
          category: "Emergency",
        },
      ],
    },
  
    italy: {
      countryId: "italy",
      countryName: "Italy",
      languageName: "Italian",
      nativeLanguageName: "Italiano",
      speechLanguage: "it-IT",
      phrases: [
        {
          phrase: "Buongiorno",
          translation: "Hello / Good morning",
          category: "Basics",
        },
        {
          phrase: "Parla inglese?",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "Vorrei questo, per favore.",
          translation: "I would like this, please.",
          category: "Food",
        },
        {
          phrase: "Il conto, per favore.",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "Dov’è la stazione?",
          translation: "Where is the station?",
          category: "Directions",
        },
        {
          phrase: "Ho bisogno di aiuto.",
          translation: "I need help.",
          category: "Emergency",
        },
      ],
    },
  
    germany: {
      countryId: "germany",
      countryName: "Germany",
      languageName: "German",
      nativeLanguageName: "Deutsch",
      speechLanguage: "de-DE",
      phrases: [
        {
          phrase: "Guten Tag",
          translation: "Hello / Good day",
          category: "Basics",
        },
        {
          phrase: "Sprechen Sie Englisch?",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "Ich hätte gern das, bitte.",
          translation: "I would like that, please.",
          category: "Food",
        },
        {
          phrase: "Die Rechnung, bitte.",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "Wo ist der Bahnhof?",
          translation: "Where is the train station?",
          category: "Directions",
        },
        {
          phrase: "Ich brauche Hilfe.",
          translation: "I need help.",
          category: "Emergency",
        },
      ],
    },
  
    russia: {
      countryId: "russia",
      countryName: "Russia",
      languageName: "Russian",
      nativeLanguageName: "Русский",
      speechLanguage: "ru-RU",
      phrases: [
        {
          phrase: "Здравствуйте",
          translation: "Hello",
          category: "Basics",
        },
        {
          phrase: "Вы говорите по-английски?",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "Я бы хотел это, пожалуйста.",
          translation: "I would like this, please.",
          category: "Food",
        },
        {
          phrase: "Счёт, пожалуйста.",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "Где вокзал?",
          translation: "Where is the station?",
          category: "Directions",
        },
        {
          phrase: "Мне нужна помощь.",
          translation: "I need help.",
          category: "Emergency",
        },
      ],
    },
  
    japan: {
      countryId: "japan",
      countryName: "Japan",
      languageName: "Japanese",
      nativeLanguageName: "日本語",
      speechLanguage: "ja-JP",
      phrases: [
        {
          phrase: "こんにちは",
          translation: "Hello",
          category: "Basics",
        },
        {
          phrase: "英語を話せますか",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "これをお願いします",
          translation: "I would like this, please.",
          category: "Food",
        },
        {
          phrase: "お会計をお願いします",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "駅はどこですか",
          translation: "Where is the station?",
          category: "Directions",
        },
        {
          phrase: "助けてください",
          translation: "Please help me.",
          category: "Emergency",
        },
      ],
    },
  
    egypt: {
      countryId: "egypt",
      countryName: "Egypt",
      languageName: "Arabic",
      nativeLanguageName: "العربية",
      speechLanguage: "ar-EG",
      direction: "rtl",
      phrases: [
        {
          phrase: "مرحبًا",
          translation: "Hello",
          category: "Basics",
        },
        {
          phrase: "هل تتحدث الإنجليزية؟",
          translation: "Do you speak English?",
          category: "Basics",
        },
        {
          phrase: "أريد هذا، من فضلك",
          translation: "I would like this, please.",
          category: "Food",
        },
        {
          phrase: "الحساب، من فضلك",
          translation: "The bill, please.",
          category: "Food",
        },
        {
          phrase: "أين محطة القطار؟",
          translation: "Where is the train station?",
          category: "Directions",
        },
        {
          phrase: "أحتاج إلى مساعدة",
          translation: "I need help.",
          category: "Emergency",
        },
      ],
    },
  };