export type VerbConjugationRow = {
    subject: string;
    form: string;
    translation?: string;
  };
  
  export type VerbTenseChart = {
    id: string;
    mood: string;
    tense: string;
    explanation: string;
    rows: VerbConjugationRow[];
  };
  
  export type VerbEntry = {
    infinitive: string;
    translation: string;
    group: string;
    charts: VerbTenseChart[];
  };
  
  export type LanguageVerbCharts = {
    languageId: string;
    languageName: string;
    nativeName: string;
    introduction: string;
    speechLanguage: string;
    verbs: VerbEntry[];
  };
  
  export const verbCharts: Record<string, LanguageVerbCharts> = {
    spanish: {
      languageId: "spanish",
      languageName: "Spanish",
      nativeName: "Español",
      introduction:
        "Explore common Spanish verb forms across the indicative, subjunctive, conditional, and imperative moods.",
      speechLanguage: "es-ES",
  
      verbs: [
        {
          infinitive: "hablar",
          translation: "to speak",
          group: "Regular -ar verb",
  
          charts: [
            {
              id: "hablar-present-indicative",
              mood: "Indicative",
              tense: "Present",
              explanation:
                "The present indicative describes facts, routines, and actions happening now.",
              rows: [
                {
                  subject: "yo",
                  form: "hablo",
                  translation: "I speak",
                },
                {
                  subject: "tú",
                  form: "hablas",
                  translation: "you speak",
                },
                {
                  subject: "él / ella / usted",
                  form: "habla",
                  translation: "he, she, or you formal speak",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "hablamos",
                  translation: "we speak",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "habláis",
                  translation: "you all speak",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "hablan",
                  translation: "they or you all speak",
                },
              ],
            },
  
            {
              id: "hablar-present-subjunctive",
              mood: "Subjunctive",
              tense: "Present",
              explanation:
                "The present subjunctive commonly appears after expressions of desire, doubt, emotion, recommendation, or uncertainty.",
              rows: [
                {
                  subject: "yo",
                  form: "hable",
                  translation: "that I speak",
                },
                {
                  subject: "tú",
                  form: "hables",
                  translation: "that you speak",
                },
                {
                  subject: "él / ella / usted",
                  form: "hable",
                  translation: "that he, she, or you formal speak",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "hablemos",
                  translation: "that we speak",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "habléis",
                  translation: "that you all speak",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "hablen",
                  translation: "that they or you all speak",
                },
              ],
            },
  
            {
              id: "hablar-conditional",
              mood: "Conditional",
              tense: "Simple conditional",
              explanation:
                "The conditional describes what someone would do under certain circumstances.",
              rows: [
                {
                  subject: "yo",
                  form: "hablaría",
                  translation: "I would speak",
                },
                {
                  subject: "tú",
                  form: "hablarías",
                  translation: "you would speak",
                },
                {
                  subject: "él / ella / usted",
                  form: "hablaría",
                  translation: "he, she, or you formal would speak",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "hablaríamos",
                  translation: "we would speak",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "hablaríais",
                  translation: "you all would speak",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "hablarían",
                  translation: "they or you all would speak",
                },
              ],
            },
  
            {
              id: "hablar-imperative",
              mood: "Imperative",
              tense: "Affirmative commands",
              explanation:
                "The imperative gives instructions, requests, or commands. Spanish does not use a regular yo command.",
              rows: [
                {
                  subject: "tú",
                  form: "habla",
                  translation: "speak",
                },
                {
                  subject: "usted",
                  form: "hable",
                  translation: "speak, formal",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "hablemos",
                  translation: "let us speak",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "hablad",
                  translation: "speak, plural Spain",
                },
                {
                  subject: "ustedes",
                  form: "hablen",
                  translation: "speak, plural",
                },
              ],
            },
          ],
        },
  
        {
          infinitive: "comer",
          translation: "to eat",
          group: "Regular -er verb",
  
          charts: [
            {
              id: "comer-present-indicative",
              mood: "Indicative",
              tense: "Present",
              explanation:
                "The present indicative describes habitual actions, facts, and actions happening now.",
              rows: [
                {
                  subject: "yo",
                  form: "como",
                  translation: "I eat",
                },
                {
                  subject: "tú",
                  form: "comes",
                  translation: "you eat",
                },
                {
                  subject: "él / ella / usted",
                  form: "come",
                  translation: "he, she, or you formal eat",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "comemos",
                  translation: "we eat",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "coméis",
                  translation: "you all eat",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "comen",
                  translation: "they or you all eat",
                },
              ],
            },
  
            {
              id: "comer-present-subjunctive",
              mood: "Subjunctive",
              tense: "Present",
              explanation:
                "The present subjunctive is used when eating is desired, doubted, recommended, or viewed as uncertain.",
              rows: [
                {
                  subject: "yo",
                  form: "coma",
                  translation: "that I eat",
                },
                {
                  subject: "tú",
                  form: "comas",
                  translation: "that you eat",
                },
                {
                  subject: "él / ella / usted",
                  form: "coma",
                  translation: "that he, she, or you formal eat",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "comamos",
                  translation: "that we eat",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "comáis",
                  translation: "that you all eat",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "coman",
                  translation: "that they or you all eat",
                },
              ],
            },
  
            {
              id: "comer-conditional",
              mood: "Conditional",
              tense: "Simple conditional",
              explanation:
                "The conditional describes what someone would eat under certain circumstances.",
              rows: [
                {
                  subject: "yo",
                  form: "comería",
                  translation: "I would eat",
                },
                {
                  subject: "tú",
                  form: "comerías",
                  translation: "you would eat",
                },
                {
                  subject: "él / ella / usted",
                  form: "comería",
                  translation: "he, she, or you formal would eat",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "comeríamos",
                  translation: "we would eat",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "comeríais",
                  translation: "you all would eat",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "comerían",
                  translation: "they or you all would eat",
                },
              ],
            },
  
            {
              id: "comer-imperative",
              mood: "Imperative",
              tense: "Affirmative commands",
              explanation:
                "The imperative gives instructions or commands related to eating.",
              rows: [
                {
                  subject: "tú",
                  form: "come",
                  translation: "eat",
                },
                {
                  subject: "usted",
                  form: "coma",
                  translation: "eat, formal",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "comamos",
                  translation: "let us eat",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "comed",
                  translation: "eat, plural Spain",
                },
                {
                  subject: "ustedes",
                  form: "coman",
                  translation: "eat, plural",
                },
              ],
            },
          ],
        },
  
        {
          infinitive: "vivir",
          translation: "to live",
          group: "Regular -ir verb",
  
          charts: [
            {
              id: "vivir-present-indicative",
              mood: "Indicative",
              tense: "Present",
              explanation:
                "The present indicative describes where or how someone currently lives.",
              rows: [
                {
                  subject: "yo",
                  form: "vivo",
                  translation: "I live",
                },
                {
                  subject: "tú",
                  form: "vives",
                  translation: "you live",
                },
                {
                  subject: "él / ella / usted",
                  form: "vive",
                  translation: "he, she, or you formal live",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "vivimos",
                  translation: "we live",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "vivís",
                  translation: "you all live",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "viven",
                  translation: "they or you all live",
                },
              ],
            },
  
            {
              id: "vivir-present-subjunctive",
              mood: "Subjunctive",
              tense: "Present",
              explanation:
                "The present subjunctive may express a wish, doubt, recommendation, or uncertainty about where or how someone lives.",
              rows: [
                {
                  subject: "yo",
                  form: "viva",
                  translation: "that I live",
                },
                {
                  subject: "tú",
                  form: "vivas",
                  translation: "that you live",
                },
                {
                  subject: "él / ella / usted",
                  form: "viva",
                  translation: "that he, she, or you formal live",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "vivamos",
                  translation: "that we live",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "viváis",
                  translation: "that you all live",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "vivan",
                  translation: "that they or you all live",
                },
              ],
            },
  
            {
              id: "vivir-conditional",
              mood: "Conditional",
              tense: "Simple conditional",
              explanation:
                "The conditional describes where or how someone would live under particular circumstances.",
              rows: [
                {
                  subject: "yo",
                  form: "viviría",
                  translation: "I would live",
                },
                {
                  subject: "tú",
                  form: "vivirías",
                  translation: "you would live",
                },
                {
                  subject: "él / ella / usted",
                  form: "viviría",
                  translation: "he, she, or you formal would live",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "viviríamos",
                  translation: "we would live",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "viviríais",
                  translation: "you all would live",
                },
                {
                  subject: "ellos / ellas / ustedes",
                  form: "vivirían",
                  translation: "they or you all would live",
                },
              ],
            },
  
            {
              id: "vivir-imperative",
              mood: "Imperative",
              tense: "Affirmative commands",
              explanation:
                "The imperative gives commands or encouragement related to living.",
              rows: [
                {
                  subject: "tú",
                  form: "vive",
                  translation: "live",
                },
                {
                  subject: "usted",
                  form: "viva",
                  translation: "live, formal",
                },
                {
                  subject: "nosotros / nosotras",
                  form: "vivamos",
                  translation: "let us live",
                },
                {
                  subject: "vosotros / vosotras",
                  form: "vivid",
                  translation: "live, plural Spain",
                },
                {
                  subject: "ustedes",
                  form: "vivan",
                  translation: "live, plural",
                },
              ],
            },
          ],
        },
        {
            infinitive: "ser",
            translation: "to be",
            group: "Irregular verb",
          
            charts: [
              {
                id: "ser-present-indicative",
                mood: "Indicative",
                tense: "Present",
                explanation:
                  "The present indicative of ser describes identity, origin, profession, time, relationships, and general characteristics.",
                rows: [
                  {
                    subject: "yo",
                    form: "soy",
                    translation: "I am",
                  },
                  {
                    subject: "tú",
                    form: "eres",
                    translation: "you are",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "es",
                    translation: "he, she, or you formal are",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "somos",
                    translation: "we are",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "sois",
                    translation: "you all are",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "son",
                    translation: "they or you all are",
                  },
                ],
              },
          
              {
                id: "ser-preterite-indicative",
                mood: "Indicative",
                tense: "Preterite",
                explanation:
                  "The preterite describes completed past situations. Ser and ir share the same preterite forms, so context determines the meaning.",
                rows: [
                  {
                    subject: "yo",
                    form: "fui",
                    translation: "I was",
                  },
                  {
                    subject: "tú",
                    form: "fuiste",
                    translation: "you were",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "fue",
                    translation: "he, she, or you formal were",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "fuimos",
                    translation: "we were",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "fuisteis",
                    translation: "you all were",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "fueron",
                    translation: "they or you all were",
                  },
                ],
              },
          
              {
                id: "ser-imperfect-indicative",
                mood: "Indicative",
                tense: "Imperfect",
                explanation:
                  "The imperfect describes what someone or something used to be, ongoing past characteristics, and background information.",
                rows: [
                  {
                    subject: "yo",
                    form: "era",
                    translation: "I was / used to be",
                  },
                  {
                    subject: "tú",
                    form: "eras",
                    translation: "you were / used to be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "era",
                    translation: "he, she, or you formal were",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "éramos",
                    translation: "we were / used to be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "erais",
                    translation: "you all were / used to be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "eran",
                    translation: "they or you all were",
                  },
                ],
              },
          
              {
                id: "ser-future-indicative",
                mood: "Indicative",
                tense: "Simple future",
                explanation:
                  "The future indicative describes what someone or something will be.",
                rows: [
                  {
                    subject: "yo",
                    form: "seré",
                    translation: "I will be",
                  },
                  {
                    subject: "tú",
                    form: "serás",
                    translation: "you will be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "será",
                    translation: "he, she, or you formal will be",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "seremos",
                    translation: "we will be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "seréis",
                    translation: "you all will be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "serán",
                    translation: "they or you all will be",
                  },
                ],
              },
          
              {
                id: "ser-present-subjunctive",
                mood: "Subjunctive",
                tense: "Present",
                explanation:
                  "The present subjunctive appears when identity or characteristics are desired, doubted, evaluated, or viewed as uncertain.",
                rows: [
                  {
                    subject: "yo",
                    form: "sea",
                    translation: "that I be",
                  },
                  {
                    subject: "tú",
                    form: "seas",
                    translation: "that you be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "sea",
                    translation: "that he, she, or you formal be",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "seamos",
                    translation: "that we be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "seáis",
                    translation: "that you all be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "sean",
                    translation: "that they or you all be",
                  },
                ],
              },
          
              {
                id: "ser-conditional",
                mood: "Conditional",
                tense: "Simple conditional",
                explanation:
                  "The conditional describes what someone or something would be under certain circumstances.",
                rows: [
                  {
                    subject: "yo",
                    form: "sería",
                    translation: "I would be",
                  },
                  {
                    subject: "tú",
                    form: "serías",
                    translation: "you would be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "sería",
                    translation: "he, she, or you formal would be",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "seríamos",
                    translation: "we would be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "seríais",
                    translation: "you all would be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "serían",
                    translation: "they or you all would be",
                  },
                ],
              },
          
              {
                id: "ser-imperative",
                mood: "Imperative",
                tense: "Affirmative commands",
                explanation:
                  "The imperative forms of ser give instructions about how someone should act or behave.",
                rows: [
                  {
                    subject: "tú",
                    form: "sé",
                    translation: "be",
                  },
                  {
                    subject: "usted",
                    form: "sea",
                    translation: "be, formal",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "seamos",
                    translation: "let us be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "sed",
                    translation: "be, plural Spain",
                  },
                  {
                    subject: "ustedes",
                    form: "sean",
                    translation: "be, plural",
                  },
                ],
              },
            ],
          },
          {
            infinitive: "estar",
            translation: "to be",
            group: "Irregular verb",
          
            charts: [
              {
                id: "estar-present-indicative",
                mood: "Indicative",
                tense: "Present",
                explanation:
                  "The present indicative of estar describes location, feelings, conditions, and temporary states.",
                rows: [
                  {
                    subject: "yo",
                    form: "estoy",
                    translation: "I am",
                  },
                  {
                    subject: "tú",
                    form: "estás",
                    translation: "you are",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "está",
                    translation: "he, she, or you formal are",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estamos",
                    translation: "we are",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estáis",
                    translation: "you all are",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "están",
                    translation: "they or you all are",
                  },
                ],
              },
          
              {
                id: "estar-preterite-indicative",
                mood: "Indicative",
                tense: "Preterite",
                explanation:
                  "The preterite describes a completed state or location during a finished period.",
                rows: [
                  {
                    subject: "yo",
                    form: "estuve",
                    translation: "I was",
                  },
                  {
                    subject: "tú",
                    form: "estuviste",
                    translation: "you were",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "estuvo",
                    translation: "he, she, or you formal were",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estuvimos",
                    translation: "we were",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estuvisteis",
                    translation: "you all were",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "estuvieron",
                    translation: "they or you all were",
                  },
                ],
              },
          
              {
                id: "estar-imperfect-indicative",
                mood: "Indicative",
                tense: "Imperfect",
                explanation:
                  "The imperfect describes an ongoing past condition, feeling, or location.",
                rows: [
                  {
                    subject: "yo",
                    form: "estaba",
                    translation: "I was",
                  },
                  {
                    subject: "tú",
                    form: "estabas",
                    translation: "you were",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "estaba",
                    translation: "he, she, or you formal were",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estábamos",
                    translation: "we were",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estabais",
                    translation: "you all were",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "estaban",
                    translation: "they or you all were",
                  },
                ],
              },
          
              {
                id: "estar-future-indicative",
                mood: "Indicative",
                tense: "Simple future",
                explanation:
                  "The future indicative describes where or how someone will be.",
                rows: [
                  {
                    subject: "yo",
                    form: "estaré",
                    translation: "I will be",
                  },
                  {
                    subject: "tú",
                    form: "estarás",
                    translation: "you will be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "estará",
                    translation: "he, she, or you formal will be",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estaremos",
                    translation: "we will be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estaréis",
                    translation: "you all will be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "estarán",
                    translation: "they or you all will be",
                  },
                ],
              },
          
              {
                id: "estar-present-subjunctive",
                mood: "Subjunctive",
                tense: "Present",
                explanation:
                  "The present subjunctive is used when a location, feeling, or condition is desired, doubted, evaluated, or uncertain.",
                rows: [
                  {
                    subject: "yo",
                    form: "esté",
                    translation: "that I be",
                  },
                  {
                    subject: "tú",
                    form: "estés",
                    translation: "that you be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "esté",
                    translation: "that he, she, or you formal be",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estemos",
                    translation: "that we be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estéis",
                    translation: "that you all be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "estén",
                    translation: "that they or you all be",
                  },
                ],
              },
          
              {
                id: "estar-conditional",
                mood: "Conditional",
                tense: "Simple conditional",
                explanation:
                  "The conditional describes where or how someone would be under certain circumstances.",
                rows: [
                  {
                    subject: "yo",
                    form: "estaría",
                    translation: "I would be",
                  },
                  {
                    subject: "tú",
                    form: "estarías",
                    translation: "you would be",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "estaría",
                    translation: "he, she, or you formal would be",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estaríamos",
                    translation: "we would be",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estaríais",
                    translation: "you all would be",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "estarían",
                    translation: "they or you all would be",
                  },
                ],
              },
          
              {
                id: "estar-imperative",
                mood: "Imperative",
                tense: "Affirmative commands",
                explanation:
                  "The imperative forms of estar instruct someone to remain in a state or location.",
                rows: [
                  {
                    subject: "tú",
                    form: "está",
                    translation: "be / stay",
                  },
                  {
                    subject: "usted",
                    form: "esté",
                    translation: "be / stay, formal",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "estemos",
                    translation: "let us be / stay",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "estad",
                    translation: "be / stay, plural Spain",
                  },
                  {
                    subject: "ustedes",
                    form: "estén",
                    translation: "be / stay, plural",
                  },
                ],
              },
            ],
          },
          {
            infinitive: "tener",
            translation: "to have",
            group: "Irregular verb",
          
            charts: [
              {
                id: "tener-present-indicative",
                mood: "Indicative",
                tense: "Present",
                explanation:
                  "The present indicative describes possession and appears in expressions involving age, hunger, thirst, and obligation.",
                rows: [
                  {
                    subject: "yo",
                    form: "tengo",
                    translation: "I have",
                  },
                  {
                    subject: "tú",
                    form: "tienes",
                    translation: "you have",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "tiene",
                    translation: "he, she, or you formal have",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "tenemos",
                    translation: "we have",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "tenéis",
                    translation: "you all have",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "tienen",
                    translation: "they or you all have",
                  },
                ],
              },
          
              {
                id: "tener-preterite-indicative",
                mood: "Indicative",
                tense: "Preterite",
                explanation:
                  "The preterite describes having or experiencing something during a completed past period.",
                rows: [
                  {
                    subject: "yo",
                    form: "tuve",
                    translation: "I had",
                  },
                  {
                    subject: "tú",
                    form: "tuviste",
                    translation: "you had",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "tuvo",
                    translation: "he, she, or you formal had",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "tuvimos",
                    translation: "we had",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "tuvisteis",
                    translation: "you all had",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "tuvieron",
                    translation: "they or you all had",
                  },
                ],
              },
          
              {
                id: "tener-imperfect-indicative",
                mood: "Indicative",
                tense: "Imperfect",
                explanation:
                  "The imperfect describes ongoing possession, age, or repeated conditions in the past.",
                rows: [
                  {
                    subject: "yo",
                    form: "tenía",
                    translation: "I had / used to have",
                  },
                  {
                    subject: "tú",
                    form: "tenías",
                    translation: "you had / used to have",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "tenía",
                    translation: "he, she, or you formal had",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "teníamos",
                    translation: "we had / used to have",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "teníais",
                    translation: "you all had / used to have",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "tenían",
                    translation: "they or you all had",
                  },
                ],
              },
          
              {
                id: "tener-future-indicative",
                mood: "Indicative",
                tense: "Simple future",
                explanation:
                  "The future indicative describes what someone will have or experience.",
                rows: [
                  {
                    subject: "yo",
                    form: "tendré",
                    translation: "I will have",
                  },
                  {
                    subject: "tú",
                    form: "tendrás",
                    translation: "you will have",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "tendrá",
                    translation: "he, she, or you formal will have",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "tendremos",
                    translation: "we will have",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "tendréis",
                    translation: "you all will have",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "tendrán",
                    translation: "they or you all will have",
                  },
                ],
              },
          
              {
                id: "tener-present-subjunctive",
                mood: "Subjunctive",
                tense: "Present",
                explanation:
                  "The present subjunctive appears when having or experiencing something is desired, doubted, recommended, or uncertain.",
                rows: [
                  {
                    subject: "yo",
                    form: "tenga",
                    translation: "that I have",
                  },
                  {
                    subject: "tú",
                    form: "tengas",
                    translation: "that you have",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "tenga",
                    translation: "that he, she, or you formal have",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "tengamos",
                    translation: "that we have",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "tengáis",
                    translation: "that you all have",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "tengan",
                    translation: "that they or you all have",
                  },
                ],
              },
          
              {
                id: "tener-conditional",
                mood: "Conditional",
                tense: "Simple conditional",
                explanation:
                  "The conditional describes what someone would have under certain circumstances.",
                rows: [
                  {
                    subject: "yo",
                    form: "tendría",
                    translation: "I would have",
                  },
                  {
                    subject: "tú",
                    form: "tendrías",
                    translation: "you would have",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "tendría",
                    translation: "he, she, or you formal would have",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "tendríamos",
                    translation: "we would have",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "tendríais",
                    translation: "you all would have",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "tendrían",
                    translation: "they or you all would have",
                  },
                ],
              },
          
              {
                id: "tener-imperative",
                mood: "Imperative",
                tense: "Affirmative commands",
                explanation:
                  "The imperative forms of tener appear in commands and expressions such as ten cuidado, meaning be careful.",
                rows: [
                  {
                    subject: "tú",
                    form: "ten",
                    translation: "have",
                  },
                  {
                    subject: "usted",
                    form: "tenga",
                    translation: "have, formal",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "tengamos",
                    translation: "let us have",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "tened",
                    translation: "have, plural Spain",
                  },
                  {
                    subject: "ustedes",
                    form: "tengan",
                    translation: "have, plural",
                  },
                ],
              },
            ],
          },
          {
            infinitive: "ir",
            translation: "to go",
            group: "Irregular verb",
          
            charts: [
              {
                id: "ir-present-indicative",
                mood: "Indicative",
                tense: "Present",
                explanation:
                  "The present indicative describes where someone goes and is also used with a plus an infinitive to describe near-future plans.",
                rows: [
                  {
                    subject: "yo",
                    form: "voy",
                    translation: "I go / I am going",
                  },
                  {
                    subject: "tú",
                    form: "vas",
                    translation: "you go / you are going",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "va",
                    translation: "he, she, or you formal go",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "vamos",
                    translation: "we go / we are going",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "vais",
                    translation: "you all go",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "van",
                    translation: "they or you all go",
                  },
                ],
              },
          
              {
                id: "ir-preterite-indicative",
                mood: "Indicative",
                tense: "Preterite",
                explanation:
                  "The preterite describes a completed trip or movement in the past. Ir and ser share these forms, so context determines the meaning.",
                rows: [
                  {
                    subject: "yo",
                    form: "fui",
                    translation: "I went",
                  },
                  {
                    subject: "tú",
                    form: "fuiste",
                    translation: "you went",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "fue",
                    translation: "he, she, or you formal went",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "fuimos",
                    translation: "we went",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "fuisteis",
                    translation: "you all went",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "fueron",
                    translation: "they or you all went",
                  },
                ],
              },
          
              {
                id: "ir-imperfect-indicative",
                mood: "Indicative",
                tense: "Imperfect",
                explanation:
                  "The imperfect describes where someone used to go or was going repeatedly in the past.",
                rows: [
                  {
                    subject: "yo",
                    form: "iba",
                    translation: "I was going / used to go",
                  },
                  {
                    subject: "tú",
                    form: "ibas",
                    translation: "you were going / used to go",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "iba",
                    translation: "he, she, or you formal were going",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "íbamos",
                    translation: "we were going / used to go",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "ibais",
                    translation: "you all were going / used to go",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "iban",
                    translation: "they or you all were going",
                  },
                ],
              },
          
              {
                id: "ir-future-indicative",
                mood: "Indicative",
                tense: "Simple future",
                explanation:
                  "The simple future describes where someone will go.",
                rows: [
                  {
                    subject: "yo",
                    form: "iré",
                    translation: "I will go",
                  },
                  {
                    subject: "tú",
                    form: "irás",
                    translation: "you will go",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "irá",
                    translation: "he, she, or you formal will go",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "iremos",
                    translation: "we will go",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "iréis",
                    translation: "you all will go",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "irán",
                    translation: "they or you all will go",
                  },
                ],
              },
          
              {
                id: "ir-present-subjunctive",
                mood: "Subjunctive",
                tense: "Present",
                explanation:
                  "The present subjunctive appears when going somewhere is desired, doubted, recommended, or uncertain.",
                rows: [
                  {
                    subject: "yo",
                    form: "vaya",
                    translation: "that I go",
                  },
                  {
                    subject: "tú",
                    form: "vayas",
                    translation: "that you go",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "vaya",
                    translation: "that he, she, or you formal go",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "vayamos",
                    translation: "that we go",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "vayáis",
                    translation: "that you all go",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "vayan",
                    translation: "that they or you all go",
                  },
                ],
              },
          
              {
                id: "ir-conditional",
                mood: "Conditional",
                tense: "Simple conditional",
                explanation:
                  "The conditional describes where someone would go under certain circumstances.",
                rows: [
                  {
                    subject: "yo",
                    form: "iría",
                    translation: "I would go",
                  },
                  {
                    subject: "tú",
                    form: "irías",
                    translation: "you would go",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "iría",
                    translation: "he, she, or you formal would go",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "iríamos",
                    translation: "we would go",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "iríais",
                    translation: "you all would go",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "irían",
                    translation: "they or you all would go",
                  },
                ],
              },
          
              {
                id: "ir-imperative",
                mood: "Imperative",
                tense: "Affirmative commands",
                explanation:
                  "The imperative forms of ir tell someone to go somewhere.",
                rows: [
                  {
                    subject: "tú",
                    form: "ve",
                    translation: "go",
                  },
                  {
                    subject: "usted",
                    form: "vaya",
                    translation: "go, formal",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "vayamos",
                    translation: "let us go",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "id",
                    translation: "go, plural Spain",
                  },
                  {
                    subject: "ustedes",
                    form: "vayan",
                    translation: "go, plural",
                  },
                ],
              },
            ],
          },
          {
            infinitive: "hacer",
            translation: "to do / to make",
            group: "Irregular verb",
          
            charts: [
              {
                id: "hacer-present-indicative",
                mood: "Indicative",
                tense: "Present",
                explanation:
                  "The present indicative describes actions, tasks, activities, weather expressions, and things someone makes.",
                rows: [
                  {
                    subject: "yo",
                    form: "hago",
                    translation: "I do / I make",
                  },
                  {
                    subject: "tú",
                    form: "haces",
                    translation: "you do / you make",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "hace",
                    translation: "he, she, or you formal do / make",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "hacemos",
                    translation: "we do / we make",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "hacéis",
                    translation: "you all do / make",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "hacen",
                    translation: "they or you all do / make",
                  },
                ],
              },
          
              {
                id: "hacer-preterite-indicative",
                mood: "Indicative",
                tense: "Preterite",
                explanation:
                  "The preterite describes something that was done or made during a completed past period.",
                rows: [
                  {
                    subject: "yo",
                    form: "hice",
                    translation: "I did / I made",
                  },
                  {
                    subject: "tú",
                    form: "hiciste",
                    translation: "you did / you made",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "hizo",
                    translation: "he, she, or you formal did / made",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "hicimos",
                    translation: "we did / we made",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "hicisteis",
                    translation: "you all did / made",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "hicieron",
                    translation: "they or you all did / made",
                  },
                ],
              },
          
              {
                id: "hacer-imperfect-indicative",
                mood: "Indicative",
                tense: "Imperfect",
                explanation:
                  "The imperfect describes what someone used to do, was doing repeatedly, or ongoing past conditions.",
                rows: [
                  {
                    subject: "yo",
                    form: "hacía",
                    translation: "I was doing / used to do",
                  },
                  {
                    subject: "tú",
                    form: "hacías",
                    translation: "you were doing / used to do",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "hacía",
                    translation: "he, she, or you formal were doing",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "hacíamos",
                    translation: "we were doing / used to do",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "hacíais",
                    translation: "you all were doing / used to do",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "hacían",
                    translation: "they or you all were doing",
                  },
                ],
              },
          
              {
                id: "hacer-future-indicative",
                mood: "Indicative",
                tense: "Simple future",
                explanation:
                  "The future indicative describes what someone will do or make.",
                rows: [
                  {
                    subject: "yo",
                    form: "haré",
                    translation: "I will do / make",
                  },
                  {
                    subject: "tú",
                    form: "harás",
                    translation: "you will do / make",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "hará",
                    translation: "he, she, or you formal will do / make",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "haremos",
                    translation: "we will do / make",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "haréis",
                    translation: "you all will do / make",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "harán",
                    translation: "they or you all will do / make",
                  },
                ],
              },
          
              {
                id: "hacer-present-subjunctive",
                mood: "Subjunctive",
                tense: "Present",
                explanation:
                  "The present subjunctive appears when an action is desired, doubted, recommended, evaluated, or uncertain.",
                rows: [
                  {
                    subject: "yo",
                    form: "haga",
                    translation: "that I do / make",
                  },
                  {
                    subject: "tú",
                    form: "hagas",
                    translation: "that you do / make",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "haga",
                    translation: "that he, she, or you formal do / make",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "hagamos",
                    translation: "that we do / make",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "hagáis",
                    translation: "that you all do / make",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "hagan",
                    translation: "that they or you all do / make",
                  },
                ],
              },
          
              {
                id: "hacer-conditional",
                mood: "Conditional",
                tense: "Simple conditional",
                explanation:
                  "The conditional describes what someone would do or make under certain circumstances.",
                rows: [
                  {
                    subject: "yo",
                    form: "haría",
                    translation: "I would do / make",
                  },
                  {
                    subject: "tú",
                    form: "harías",
                    translation: "you would do / make",
                  },
                  {
                    subject: "él / ella / usted",
                    form: "haría",
                    translation: "he, she, or you formal would do / make",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "haríamos",
                    translation: "we would do / make",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "haríais",
                    translation: "you all would do / make",
                  },
                  {
                    subject: "ellos / ellas / ustedes",
                    form: "harían",
                    translation: "they or you all would do / make",
                  },
                ],
              },
          
              {
                id: "hacer-imperative",
                mood: "Imperative",
                tense: "Affirmative commands",
                explanation:
                  "The imperative forms of hacer tell someone to do or make something.",
                rows: [
                  {
                    subject: "tú",
                    form: "haz",
                    translation: "do / make",
                  },
                  {
                    subject: "usted",
                    form: "haga",
                    translation: "do / make, formal",
                  },
                  {
                    subject: "nosotros / nosotras",
                    form: "hagamos",
                    translation: "let us do / make",
                  },
                  {
                    subject: "vosotros / vosotras",
                    form: "haced",
                    translation: "do / make, plural Spain",
                  },
                  {
                    subject: "ustedes",
                    form: "hagan",
                    translation: "do / make, plural",
                  },
                ],
              },
            ],
          },
      ],
    },
  };