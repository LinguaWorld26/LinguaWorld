"use client";

import { useSyncExternalStore } from "react";

type LessonCompleteButtonProps = {
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

export default function LessonCompleteButton({
  lessonId,
}: LessonCompleteButtonProps) {
  const completedLessonsSnapshot = useSyncExternalStore(
    subscribeToCompletedLessons,
    getCompletedLessons,
    getServerCompletedLessons
  );

  const savedLessons: string[] = JSON.parse(completedLessonsSnapshot);
  const completed = savedLessons.includes(lessonId);

  function toggleComplete() {
    const updatedLessons = completed
      ? savedLessons.filter((id) => id !== lessonId)
      : [...savedLessons, lessonId];

    localStorage.setItem(
      "completedLessons",
      JSON.stringify(updatedLessons)
    );

    window.dispatchEvent(new Event("completedLessonsChanged"));
  }

  return (
    <button
      type="button"
      onClick={toggleComplete}
      className="primary-button mt-12"
    >
      {completed ? "Lesson completed" : "Mark lesson complete"}
    </button>
  );
}