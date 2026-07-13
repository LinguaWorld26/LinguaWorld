"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PronunciationButton from "./PronunciationButton";

const challenges = [
  {
    language: "French",
    languageId: "french",
    phrase: "Comment allez-vous ?",
    translation: "How are you?",
    speechLanguage: "fr-FR",
    task: "Say the phrase aloud twice.",
  },
  {
    language: "Spanish",
    languageId: "spanish",
    phrase: "Mucho gusto.",
    translation: "Nice to meet you.",
    speechLanguage: "es-ES",
    task: "Use the phrase in a short introduction.",
  },
  {
    language: "Italian",
    languageId: "italian",
    phrase: "Dove vivi?",
    translation: "Where do you live?",
    speechLanguage: "it-IT",
    task: "Answer the question aloud.",
  },
  {
    language: "German",
    languageId: "german",
    phrase: "Wie geht es dir?",
    translation: "How are you?",
    speechLanguage: "de-DE",
    task: "Repeat it slowly, then at normal speed.",
  },
  {
    language: "Russian",
    languageId: "russian",
    phrase: "Очень приятно.",
    translation: "Nice to meet you.",
    speechLanguage: "ru-RU",
    task: "Listen and copy the rhythm.",
  },
  {
    language: "Japanese",
    languageId: "japanese",
    phrase: "はじめまして",
    translation: "Nice to meet you.",
    speechLanguage: "ja-JP",
    task: "Say it once while reading, then once from memory.",
  },
  {
    language: "Arabic",
    languageId: "arabic",
    phrase: "كيف حالك؟",
    translation: "How are you?",
    speechLanguage: "ar-SA",
    task: "Listen and repeat the phrase twice.",
  },
];

function getLocalDateKey() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function DailyLanguageChallenge() {
  const [showTranslation, setShowTranslation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [completionCount, setCompletionCount] = useState(0);

  const challenge = useMemo(() => {
    const dayNumber = Math.floor(Date.now() / 86400000);
    return challenges[dayNumber % challenges.length];
  }, []);

  const dateKey = useMemo(() => getLocalDateKey(), []);
  const completionKey = `daily-language-challenge-${dateKey}`;

  useEffect(() => {
    const savedCompletion =
      window.localStorage.getItem(completionKey) === "complete";

    const savedCount = Number(
      window.localStorage.getItem("daily-language-challenge-count") || "0"
    );

    setCompleted(savedCompletion);
    setCompletionCount(savedCount);
  }, [completionKey]);

  function completeChallenge() {
    if (completed) {
      return;
    }

    const newCount = completionCount + 1;

    window.localStorage.setItem(completionKey, "complete");
    window.localStorage.setItem(
      "daily-language-challenge-count",
      String(newCount)
    );

    setCompleted(true);
    setCompletionCount(newCount);
  }

  const isArabic = challenge.languageId === "arabic";

  return (
    <section className="editorial-card relative overflow-hidden p-7 md:p-10">
      {completed && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-5 text-4xl"
        >
          ✨
        </div>
      )}

      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">
        Daily language challenge
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[var(--muted)]">
          Today’s language: {challenge.language}
        </p>

        <p className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold">
          {completionCount} completed
        </p>
      </div>

      <p
        dir={isArabic ? "rtl" : "ltr"}
        lang={isArabic ? "ar" : undefined}
        className={`mt-6 text-4xl font-semibold md:text-5xl ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {challenge.phrase}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <PronunciationButton
          text={challenge.phrase}
          language={challenge.speechLanguage}
        />

        <button
          type="button"
          onClick={() => setShowTranslation((current) => !current)}
          className="secondary-button"
        >
          {showTranslation ? "Hide translation" : "Reveal translation"}
        </button>
      </div>

      {showTranslation && (
        <p className="mt-6 text-xl text-[var(--muted)]">
          {challenge.translation}
        </p>
      )}

      <div className="mt-8 border-t border-[var(--border)] pt-6">
        <p className="font-semibold">Today’s task</p>

        <p className="mt-2 text-[var(--muted)]">
          {challenge.task}
        </p>
      </div>

      {completed ? (
        <div className="mt-8 rounded-2xl border border-[var(--border)] p-5">
          <p className="text-xl font-semibold">
            Challenge complete 🎉
          </p>

          <p className="mt-2 text-[var(--muted)]">
            A new language challenge will appear tomorrow.
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={completeChallenge}
          className="primary-button mt-8"
        >
          Mark today’s challenge complete
        </button>
      )}

      <div className="mt-6">
        <Link
          href={`/languages/${challenge.languageId}/a1`}
          className="font-semibold text-[var(--ocean)]"
        >
          Explore {challenge.language} →
        </Link>
      </div>
    </section>
  );
}