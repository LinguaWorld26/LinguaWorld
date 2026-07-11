"use client";

import { useState } from "react";

const questions = [
  {
    question: 'What does "Bonjour" mean?',
    answers: ["Goodbye", "Hello", "Thank you", "Please"],
    correctAnswer: "Hello",
  },
  {
    question: 'Choose the correct form: "Je ___ française."',
    answers: ["suis", "es", "êtes", "sommes"],
    correctAnswer: "suis",
  },
  {
    question: 'What does "J’habite à Paris" mean?',
    answers: [
      "I visit Paris",
      "I like Paris",
      "I live in Paris",
      "I leave Paris",
    ],
    correctAnswer: "I live in Paris",
  },
  {
    question: 'Choose the correct sentence for "We are going to school."',
    answers: [
      "Nous allons à l’école.",
      "Nous allez à l’école.",
      "Nous va à l’école.",
      "Nous aller à l’école.",
    ],
    correctAnswer: "Nous allons à l’école.",
  },
  {
    question: 'What does "Il faut que tu viennes" mean?',
    answers: [
      "You came yesterday.",
      "You should leave.",
      "You have to come.",
      "You want to come.",
    ],
    correctAnswer: "You have to come.",
  },
  {
    question: "Choose the most natural sentence.",
    answers: [
      "Bien que je suis fatiguée, je travaille.",
      "Bien que je sois fatiguée, je travaille.",
      "Bien que je serai fatiguée, je travaille.",
      "Bien que je être fatiguée, je travaille.",
    ],
    correctAnswer: "Bien que je sois fatiguée, je travaille.",
  },
];

export default function FrenchLevelTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  function handleNext() {
    if (!selectedAnswer) return;

    const answerIsCorrect = selectedAnswer === question.correctAnswer;
    const updatedScore = answerIsCorrect ? score + 1 : score;

    if (answerIsCorrect) {
      setScore(updatedScore);
    }

    if (currentQuestion === questions.length - 1) {
        const recommendedLevel =
          updatedScore <= 1
            ? "A1"
            : updatedScore === 2
              ? "A2"
              : updatedScore === 3
                ? "B1"
                : updatedScore === 4
                  ? "B2"
                  : updatedScore === 5
                    ? "C1"
                    : "C2";
      
        localStorage.setItem("frenchRecommendedLevel", recommendedLevel);
      
        setFinished(true);
        return;
      }

    setCurrentQuestion((current) => current + 1);
    setSelectedAnswer(null);
  }

  function restartTest() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  function getRecommendedLevel() {
    if (score <= 1) return "A1";
    if (score === 2) return "A2";
    if (score === 3) return "B1";
    if (score === 4) return "B2";
    if (score === 5) return "C1";
    return "C2";
  }

  if (finished) {
    const recommendedLevel = getRecommendedLevel();

    return (
      <div className="editorial-card mt-12 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
          Suggested starting level
        </p>

        <h2 className="mt-4 text-6xl font-semibold">
          {recommendedLevel}
        </h2>

        <p className="mt-4 text-lg text-[var(--muted)]">
          You answered {score} of {questions.length} questions correctly.
        </p>

        <p className="mt-4 leading-7 text-[var(--muted)]">
          This is an early estimate, not an official CEFR certification.
        </p>

        <button
          type="button"
          onClick={restartTest}
          className="secondary-button mt-7"
        >
          Retake test
        </button>
      </div>
    );
  }

  return (
    <div className="editorial-card mt-12 p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
          Question {currentQuestion + 1}
        </p>

        <p className="text-sm font-semibold text-[var(--muted)]">
          {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <h2 className="mt-5 text-3xl font-semibold">
        {question.question}
      </h2>

      <div className="mt-7 grid gap-3">
        {question.answers.map((answer) => (
          <button
            key={answer}
            type="button"
            onClick={() => setSelectedAnswer(answer)}
            className={`rounded-xl border px-5 py-4 text-left font-semibold transition ${
              selectedAnswer === answer
                ? "border-[var(--ocean)] bg-[var(--ocean)] text-white"
                : "border-[var(--border)] hover:border-[var(--ocean)]"
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={!selectedAnswer}
        className="primary-button mt-7 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {currentQuestion === questions.length - 1
          ? "See my level"
          : "Next question"}
      </button>
    </div>
  );
}