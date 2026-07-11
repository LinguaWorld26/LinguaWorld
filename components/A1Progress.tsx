"use client";

import { useEffect, useState } from "react";

const lessonIds = [
  "french-a1-greetings",
  "french-a1-pronunciation",
  "french-a1-numbers",
  "french-a1-questions",
];

export default function A1Progress() {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const savedLessons: string[] = JSON.parse(
        localStorage.getItem("completedLessons") || "[]"
      );

      const totalCompleted = lessonIds.filter((lessonId) =>
        savedLessons.includes(lessonId)
      ).length;

      setCompletedCount(totalCompleted);
    }

    updateProgress();
    window.addEventListener("storage", updateProgress);

    return () => {
      window.removeEventListener("storage", updateProgress);
    };
  }, []);

  const percentage = (completedCount / lessonIds.length) * 100;

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

        <p className="text-2xl font-semibold">
          {Math.round(percentage)}%
        </p>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className="h-full rounded-full bg-[var(--ocean)] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {completedCount === lessonIds.length && (
        <p className="mt-5 font-semibold text-green-700">
          A1 pathway complete. Très bien!
        </p>
      )}
    </section>
  );
}