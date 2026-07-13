export type A1UnitLesson = {
    id: string;
    title: string;
    description: string;
    estimatedMinutes: number;
    skills: string[];
  };
  
  export type A1Unit = {
    id: string;
    number: string;
    title: string;
    description: string;
    lessons: A1UnitLesson[];
  };
  
  export type A1UnitCourse = {
    languageId: string;
    languageName: string;
    nativeName: string;
    units: A1Unit[];
  };
  
  export const a1UnitCourses: Record<string, A1UnitCourse> = {
    spanish: {
      languageId: "spanish",
      languageName: "Spanish",
      nativeName: "Español",
      units: [
        {
          id: "alphabet-pronunciation",
          number: "01",
          title: "Alphabet and pronunciation",
          description:
            "Learn Spanish vowel sounds, accents, rhythm, and important consonant patterns.",
          lessons: [
            {
              id: "alphabet",
              title: "The Spanish alphabet",
              description:
                "Recognize Spanish letters, letter names, and common written patterns.",
              estimatedMinutes: 12,
              skills: ["Reading", "Pronunciation"],
            },
            {
              id: "vowels",
              title: "Spanish vowel sounds",
              description:
                "Practice the five clear Spanish vowel sounds.",
              estimatedMinutes: 10,
              skills: ["Listening", "Pronunciation"],
            },
            {
              id: "special-sounds",
              title: "Ñ, J, LL, R, and RR",
              description:
                "Practice several sounds that are especially important in Spanish.",
              estimatedMinutes: 15,
              skills: ["Listening", "Speaking"],
            },
          ],
        },
  
        {
          id: "greetings-introductions",
          number: "02",
          title: "Greetings and introductions",
          description:
            "Say hello, introduce yourself, ask names, and use polite expressions.",
          lessons: [
            {
              id: "greetings",
              title: "Greetings",
              description:
                "Use greetings for different times, situations, and levels of formality.",
              estimatedMinutes: 10,
              skills: ["Speaking", "Listening"],
            },
            {
              id: "introductions",
              title: "Introducing yourself",
              description:
                "Share your name, nationality, language, and where you are from.",
              estimatedMinutes: 15,
              skills: ["Speaking", "Vocabulary"],
            },
            {
              id: "polite-expressions",
              title: "Polite expressions",
              description:
                "Use please, thank you, excuse me, and other essential expressions.",
              estimatedMinutes: 10,
              skills: ["Speaking", "Culture"],
            },
          ],
        },
  
        {
          id: "numbers-time",
          number: "03",
          title: "Numbers, dates, and time",
          description:
            "Use numbers, give your age, discuss dates, and tell time.",
          lessons: [
            {
              id: "numbers",
              title: "Numbers from 0 to 100",
              description:
                "Count, understand prices, and recognize common number patterns.",
              estimatedMinutes: 18,
              skills: ["Vocabulary", "Listening"],
            },
            {
              id: "age-phone",
              title: "Age and phone numbers",
              description:
                "Give your age and exchange basic contact information.",
              estimatedMinutes: 12,
              skills: ["Speaking", "Listening"],
            },
            {
              id: "dates-time",
              title: "Dates and time",
              description:
                "Use days, months, calendar dates, and basic time expressions.",
              estimatedMinutes: 18,
              skills: ["Vocabulary", "Grammar"],
            },
          ],
        },
  
        {
          id: "family-people",
          number: "04",
          title: "Family and people",
          description:
            "Describe family members, relationships, appearance, and personality.",
          lessons: [
            {
              id: "family",
              title: "Family vocabulary",
              description:
                "Talk about parents, siblings, relatives, and relationships.",
              estimatedMinutes: 15,
              skills: ["Vocabulary", "Speaking"],
            },
            {
              id: "describing-people",
              title: "Describing people",
              description:
                "Describe appearance and simple personality traits.",
              estimatedMinutes: 18,
              skills: ["Grammar", "Speaking"],
            },
          ],
        },
  
        {
          id: "food-ordering",
          number: "05",
          title: "Food and ordering",
          description:
            "Discuss food, order meals, understand menus, and make polite requests.",
          lessons: [
            {
              id: "food-vocabulary",
              title: "Food and drink",
              description:
                "Learn essential vocabulary for meals, ingredients, and drinks.",
              estimatedMinutes: 18,
              skills: ["Vocabulary", "Listening"],
            },
            {
              id: "restaurant",
              title: "At a restaurant",
              description:
                "Order food, ask questions, and request the bill.",
              estimatedMinutes: 20,
              skills: ["Speaking", "Culture"],
            },
          ],
        },
  
        {
          id: "daily-routines",
          number: "06",
          title: "Daily routines",
          description:
            "Talk about your schedule, habits, school, work, and free time.",
          lessons: [
            {
              id: "routine-verbs",
              title: "Everyday actions",
              description:
                "Use common verbs for waking up, eating, studying, working, and resting.",
              estimatedMinutes: 18,
              skills: ["Vocabulary", "Grammar"],
            },
            {
              id: "daily-schedule",
              title: "Your daily schedule",
              description:
                "Describe when and how often you do everyday activities.",
              estimatedMinutes: 18,
              skills: ["Speaking", "Grammar"],
            },
          ],
        },
  
        {
          id: "directions-transportation",
          number: "07",
          title: "Directions and transportation",
          description:
            "Ask where places are, understand directions, and use public transportation.",
          lessons: [
            {
              id: "places-directions",
              title: "Places and directions",
              description:
                "Ask where something is and understand simple directional language.",
              estimatedMinutes: 18,
              skills: ["Speaking", "Listening"],
            },
            {
              id: "transportation",
              title: "Transportation",
              description:
                "Use vocabulary for trains, buses, stations, tickets, and travel.",
              estimatedMinutes: 18,
              skills: ["Vocabulary", "Culture"],
            },
          ],
        },
  
        {
          id: "shopping-money",
          number: "08",
          title: "Shopping and money",
          description:
            "Ask prices, discuss sizes and colors, and complete simple purchases.",
          lessons: [
            {
              id: "shopping",
              title: "Shopping vocabulary",
              description:
                "Talk about clothing, sizes, colors, stores, and products.",
              estimatedMinutes: 18,
              skills: ["Vocabulary", "Speaking"],
            },
            {
              id: "prices-payment",
              title: "Prices and payment",
              description:
                "Ask how much something costs and understand basic payment phrases.",
              estimatedMinutes: 15,
              skills: ["Listening", "Speaking"],
            },
          ],
        },
  
        {
          id: "grammar-foundations",
          number: "09",
          title: "Grammar foundations",
          description:
            "Build the essential grammar needed to create simple Spanish sentences.",
          lessons: [
            {
              id: "articles-gender",
              title: "Articles and gender",
              description:
                "Use el, la, los, las, un, and una with common nouns.",
              estimatedMinutes: 20,
              skills: ["Grammar", "Reading"],
            },
            {
              id: "ser-estar",
              title: "Ser and estar",
              description:
                "Learn the basic difference between the two verbs meaning to be.",
              estimatedMinutes: 22,
              skills: ["Grammar", "Speaking"],
            },
            {
              id: "present-tense",
              title: "Present-tense verbs",
              description:
                "Build simple sentences using common regular verbs.",
              estimatedMinutes: 25,
              skills: ["Grammar", "Writing"],
            },
            {
              id: "questions",
              title: "Questions and question words",
              description:
                "Ask who, what, where, when, why, and how.",
              estimatedMinutes: 18,
              skills: ["Speaking", "Grammar"],
            },
          ],
        },
  
        {
          id: "review-checkpoint",
          number: "10",
          title: "A1 review and checkpoint",
          description:
            "Review major skills and test your readiness to complete A1.",
          lessons: [
            {
              id: "a1-review",
              title: "Complete A1 review",
              description:
                "Review vocabulary, grammar, listening, pronunciation, and everyday communication.",
              estimatedMinutes: 30,
              skills: ["Review", "Listening", "Speaking"],
            },
          ],
        },
      ],
    },
  };