"use client";

import { useSyncExternalStore } from "react";

type LanguageA1ProgressProps = {
  languageId: string;
  lessonIds: string[];
};

function subscribeToCompletedLessons(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("completedLessonsChanged", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("completedLessonsChanged", callback);
  };
}

function getCompletedLessons() {
  return localStorage.getItem("completedLessons") || "[]";
}

function getServerCompletedLessons() {
  return "[]";
}

export default function LanguageA1Progress({
  languageId,
  lessonIds,
}: LanguageA1ProgressProps) {
  const completedLessonsSnapshot = useSyncExternalStore(
    subscribeToCompletedLessons,
    getCompletedLessons,
    getServerCompletedLessons
  );

  const completedLessons: string[] = JSON.parse(
    completedLessonsSnapshot
  );

  const completedCount = lessonIds.filter((lessonId) =>
    completedLessons.includes(`${languageId}-a1-${lessonId}`)
  ).length;

  const percentage =
    lessonIds.length === 0
      ? 0
      : Math.round((completedCount / lessonIds.length) * 100);

  return (
    <section className="editorial-card mt-10 p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
            Your progress
          </p>

          <p className="mt-2 text-2xl font-semibold">
            {completedCount} of {lessonIds.length} lessons complete
          </p>
        </div>

        <p className="text-2xl font-semibold">{percentage}%</p>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className="h-full rounded-full bg-[var(--ocean)] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {completedCount === lessonIds.length && lessonIds.length > 0 && (
        <p className="mt-5 font-semibold text-green-700">
          All A1 lessons complete.
        </p>
      )}
    </section>
  );
}