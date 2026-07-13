"use client";

import { useState } from "react";
import Link from "next/link";

type LanguageLevelTestProps = {
  languageId: string;
  languageName: string;
};

const questions = [
  {
    question:
      "How comfortable are you recognizing basic greetings?",
    answers: [
      { label: "Not yet", points: 0 },
      { label: "A little", points: 1 },
      { label: "Comfortable", points: 2 },
    ],
  },
  {
    question:
      "Can you introduce yourself using simple sentences?",
    answers: [
      { label: "Not yet", points: 0 },
      { label: "With help", points: 1 },
      { label: "Yes", points: 2 },
    ],
  },
  {
    question:
      "Can you understand simple questions about your name, age, or location?",
    answers: [
      { label: "Not yet", points: 0 },
      { label: "Sometimes", points: 1 },
      { label: "Usually", points: 2 },
    ],
  },
  {
    question:
      "Can you follow a short everyday conversation?",
    answers: [
      { label: "Not yet", points: 0 },
      { label: "Some parts", points: 1 },
      { label: "Most of it", points: 2 },
    ],
  },
  {
    question:
      "Can you explain an opinion or past experience?",
    answers: [
      { label: "Not yet", points: 0 },
      { label: "With difficulty", points: 1 },
      { label: "Yes", points: 2 },
    ],
  },
];

export default function LanguageLevelTest({
  languageId,
  languageName,
}: LanguageLevelTestProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function selectAnswer(points: number) {
    const updatedScore = score + points;

    if (questionIndex === questions.length - 1) {
      setScore(updatedScore);
      setFinished(true);
      return;
    }

    setScore(updatedScore);
    setQuestionIndex((current) => current + 1);
  }

  function getRecommendedLevel() {
    if (score <= 3) {
      return "A1";
    }

    if (score <= 6) {
      return "A2";
    }

    if (score <= 8) {
      return "B1";
    }

    return "B2";
  }

  function restartTest() {
    setQuestionIndex(0);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const recommendedLevel = getRecommendedLevel();

    return (
      <section className="editorial-card p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
          Your recommended starting point
        </p>

        <p className="mt-5 text-6xl font-semibold">
          {recommendedLevel}
        </p>

        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          This short placement guide suggests starting at{" "}
          {recommendedLevel}. It is an informal recommendation rather
          than an official proficiency certification.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/languages/${languageId}/a1`}
            className="primary-button"
          >
            Start learning {languageName}
          </Link>

          <button
            type="button"
            onClick={restartTest}
            className="secondary-button"
          >
            Retake test
          </button>
        </div>
      </section>
    );
  }

  const question = questions[questionIndex];

  return (
    <section className="editorial-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
        Question {questionIndex + 1} of {questions.length}
      </p>

      <h2 className="mt-5 text-3xl font-semibold">
        {question.question}
      </h2>

      <div className="mt-8 grid gap-4">
        {question.answers.map((answer) => (
          <button
            key={answer.label}
            type="button"
            onClick={() => selectAnswer(answer.points)}
            className="rounded-2xl border border-[var(--border)] bg-white p-5 text-left font-semibold transition hover:border-[var(--ocean)] hover:bg-sky-50"
          >
            {answer.label}
          </button>
        ))}
      </div>
    </section>
  );
}