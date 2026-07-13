"use client";

import { useState } from "react";
import type { MiniQuizQuestion } from "../data/a1DetailedLessons";

type DetailedLessonQuizProps = {
  questions: MiniQuizQuestion[];
};

export default function DetailedLessonQuiz({
  questions,
}: DetailedLessonQuizProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[questionIndex];

  function submitAnswer() {
    if (!selectedAnswer) {
      return;
    }

    const correct =
      selectedAnswer === question.correctAnswer;

    const updatedScore = correct ? score + 1 : score;

    if (questionIndex === questions.length - 1) {
      setScore(updatedScore);
      setFinished(true);
      return;
    }

    setScore(updatedScore);
    setQuestionIndex((current) => current + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const passed = score >= Math.ceil(questions.length * 0.75);

    return (
      <div className="editorial-card p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
          Quiz complete
        </p>

        <h3 className="mt-4 text-3xl font-semibold">
          {score} of {questions.length} correct
        </h3>

        <p className="mt-4 leading-7 text-[var(--muted)]">
          {passed
            ? "You are ready to continue to the next lesson."
            : "Review the lesson once more, then try the quiz again."}
        </p>

        <button
          type="button"
          onClick={restartQuiz}
          className="secondary-button mt-7"
        >
          Retake quiz
        </button>
      </div>
    );
  }

  return (
    <div className="editorial-card p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
        Question {questionIndex + 1} of {questions.length}
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        {question.question}
      </h3>

      <div className="mt-6 grid gap-3">
        {question.answers.map((answer) => {
          const selected = selectedAnswer === answer;

          return (
            <button
              key={answer}
              type="button"
              onClick={() => setSelectedAnswer(answer)}
              className={`rounded-2xl border p-4 text-left font-semibold transition ${
                selected
                  ? "border-[var(--ocean)] bg-sky-50"
                  : "border-[var(--border)] bg-white hover:border-[var(--ocean)]"
              }`}
            >
              {answer}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={submitAnswer}
        disabled={!selectedAnswer}
        className="primary-button mt-7 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Submit answer
      </button>
    </div>
  );
}