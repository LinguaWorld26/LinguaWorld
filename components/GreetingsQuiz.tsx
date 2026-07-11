"use client";

import { useState } from "react";

const answers = [
  "Bonsoir",
  "Je m’appelle",
  "Enchanté(e)",
  "Au revoir",
];

export default function GreetingsQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const correctAnswer = "Je m’appelle";
  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="editorial-card mt-8 p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
        Practice check
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        Which phrase means “My name is”?
      </h3>

      <div className="mt-6 grid gap-3">
        {answers.map((answer) => (
          <button
            key={answer}
            type="button"
            onClick={() => setSelectedAnswer(answer)}
            className="secondary-button text-left"
          >
            {answer}
          </button>
        ))}
      </div>

      {selectedAnswer && (
  <div className="mt-6">
    <p
      className={`font-semibold ${
        isCorrect ? "text-green-700" : "text-red-700"
      }`}
    >
      {isCorrect
        ? "Correct. Je m’appelle means “My name is.”"
        : "Not quite. Try another answer."}
    </p>

    <button
      type="button"
      onClick={() => setSelectedAnswer(null)}
      className="mt-4 text-sm font-semibold text-[var(--ocean)]"
    >
      Reset quiz
    </button>
  </div>
)}
    </div>
  );
}