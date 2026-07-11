"use client";

import { useEffect, useState } from "react";

type LessonCompleteButtonProps = {
  lessonId: string;
};

export default function LessonCompleteButton({
  lessonId,
}: LessonCompleteButtonProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedLessons = JSON.parse(
      localStorage.getItem("completedLessons") || "[]"
    );

    setCompleted(savedLessons.includes(lessonId));
  }, [lessonId]);

  function toggleComplete() {
    const savedLessons: string[] = JSON.parse(
      localStorage.getItem("completedLessons") || "[]"
    );

    const updatedLessons = completed
      ? savedLessons.filter((id) => id !== lessonId)
      : [...savedLessons, lessonId];

    localStorage.setItem(
      "completedLessons",
      JSON.stringify(updatedLessons)
    );

    setCompleted(!completed);
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