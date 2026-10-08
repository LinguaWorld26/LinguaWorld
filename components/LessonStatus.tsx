"use client";

import { useSyncExternalStore } from "react";

type LessonStatusProps = {
  lessonId: string;
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

export default function LessonStatus({ lessonId }: LessonStatusProps) {
  const completedLessonsSnapshot = useSyncExternalStore(
    subscribeToCompletedLessons,
    getCompletedLessons,
    getServerCompletedLessons
  );

  const savedLessons: string[] = JSON.parse(completedLessonsSnapshot);
  const completed = savedLessons.includes(lessonId);

  if (!completed) {
    return null;
  }

  return (
    <span className="rounded-full border border-green-700 px-3 py-1 text-sm font-semibold text-green-700">
      Completed
    </span>
  );
}