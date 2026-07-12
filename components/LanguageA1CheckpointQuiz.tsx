"use client";

import { useState } from "react";
import type { A1Checkpoint } from "../data/a1Checkpoints";

type LanguageA1CheckpointQuizProps = {
  checkpoint: A1Checkpoint;
};

export default function LanguageA1CheckpointQuiz({
  checkpoint,
}: LanguageA1CheckpointQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = checkpoint.questions[currentQuestion];

  function handleNextQuestion() {
    if (!selectedAnswer) return;

    const answerIsCorrect =
      selectedAnswer === question.correctAnswer;

    const updatedScore = answerIsCorrect ? score + 1 : score;

    if (answerIsCorrect) {
      setScore(updatedScore);
    }

    if (currentQuestion === checkpoint.questions.length - 1) {
      if (updatedScore >= checkpoint.passingScore) {
        localStorage.setItem(
          `${checkpoint.languageId}A1CheckpointPassed`,
          "true"
        );
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
    const passed = score >= checkpoint.passingScore;

    return (
      <div className="editorial-card mt-12 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
          Checkpoint complete
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          You scored {score} out of {checkpoint.questions.length}
        </h2>

        <p className="mt-4 text-lg text-[var(--muted)]">
          {passed
            ? `You passed the ${checkpoint.languageName} A1 checkpoint.`
            : "Review the lessons and try again."}
        </p>

        {passed && (
          <div className="mt-8 rounded-2xl border border-[var(--ocean)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
              Achievement unlocked
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              {checkpoint.languageName} A1 Foundations Complete
            </h3>
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
          {currentQuestion + 1} of {checkpoint.questions.length}
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
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
        className="primary-button mt-7 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {currentQuestion === checkpoint.questions.length - 1
          ? "Finish checkpoint"
          : "Next question"}
      </button>
    </div>
  );
}