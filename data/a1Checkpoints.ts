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
  };