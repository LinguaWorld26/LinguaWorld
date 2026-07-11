"use client";

import { useState } from "react";

const questions = [
  {
    question: 'Which phrase means "My name is"?',
    answers: ["Bonsoir", "Je m’appelle", "Enchanté(e)", "Au revoir"],
    correctAnswer: "Je m’appelle",
  },
  {
    question: 'Which word means "three"?',
    answers: ["deux", "quatre", "trois", "cinq"],
    correctAnswer: "trois",
  },
  {
    question: 'What does "Où habitez-vous ?" mean?',
    answers: [
      "What is your name?",
      "Where do you live?",
      "How are you?",
      "Why are you leaving?",
    ],
    correctAnswer: "Where do you live?",
  },
  {
    question: "Which greeting is normally used in the evening?",
    answers: ["Bonjour", "Salut", "Bonsoir", "Merci"],
    correctAnswer: "Bonsoir",
  },
  {
    question: 'Which phrase means "I live in..."?',
    answers: ["Je suis...", "J’habite...", "Je m’appelle...", "J’ai..."],
    correctAnswer: "J’habite...",
  },
];

export default function A1CheckpointQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  function handleNextQuestion() {
    if (!selectedAnswer) return;

    if (selectedAnswer === question.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
        const finalScore =
          selectedAnswer === question.correctAnswer ? score + 1 : score;
      
        if (finalScore >= 4) {
          localStorage.setItem("frenchA1CheckpointPassed", "true");
        }
      
        setFinished(true);
        return;
      }

    setCurrentQuestion((current) => current + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const passed = score >= 4;
  
    return (
      <div className="editorial-card mt-12 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
          Checkpoint complete
        </p>
  
        <h2 className="mt-4 text-4xl font-semibold">
          You scored {score} out of {questions.length}
        </h2>
  
        <p className="mt-4 text-lg text-[var(--muted)]">
          {passed
            ? "You passed the A1 foundations checkpoint."
            : "Review the lessons and try the checkpoint again."}
        </p>
  
        {passed && (
          <div className="mt-8 rounded-2xl border border-[var(--ocean)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
              Achievement unlocked
            </p>
  
            <h3 className="mt-3 text-3xl font-semibold">
              A1 Foundations Complete
            </h3>
  
            <p className="mt-3 text-[var(--muted)]">
              You completed the French A1 lessons and passed the final
              checkpoint.
            </p>
          </div>
        )}
  
        <button
          type="button"
          onClick={restartQuiz}
          className="secondary-button mt-6"
        >
          Retry checkpoint
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

      <h2 className="mt-5 text-3xl font-semibold">{question.question}</h2>

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
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
        className="primary-button mt-7 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {currentQuestion === questions.length - 1
          ? "Finish checkpoint"
          : "Next question"}
      </button>
    </div>
  );
}