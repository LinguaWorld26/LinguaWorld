"use client";

import { useState } from "react";

export default function QuestionsPractice() {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const normalizedAnswer = answer.trim().toLowerCase();

  const isCorrect =
    normalizedAnswer.startsWith("j’habite") ||
    normalizedAnswer.startsWith("j'habite");

  function checkAnswer() {
    setChecked(true);
  }

  function resetAnswer() {
    setAnswer("");
    setChecked(false);
  }

  return (
    <div className="editorial-card mt-8 p-8">
      <p className="text-lg leading-8">
        Answer this question in French:
      </p>

      <p className="mt-5 text-2xl font-semibold">
        Où habitez-vous ?
      </p>

      <input
        type="text"
        value={answer}
        onChange={(event) => {
          setAnswer(event.target.value);
          setChecked(false);
        }}
        placeholder="J’habite..."
        className="mt-6 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--ocean)]"
      />

      <button
        type="button"
        onClick={checkAnswer}
        disabled={!answer.trim()}
        className="secondary-button mt-5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Check answer
      </button>

      {checked && (
        <div className="mt-5">
          <p
            className={`font-semibold ${
              isCorrect ? "text-green-700" : "text-red-700"
            }`}
          >
            {isCorrect
              ? "Correct. Your answer begins with J’habite."
              : "Try beginning your answer with J’habite..."}
          </p>

          <button
            type="button"
            onClick={resetAnswer}
            className="mt-4 text-sm font-semibold text-[var(--ocean)]"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}