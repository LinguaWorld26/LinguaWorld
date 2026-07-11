"use client";

import { useEffect, useState } from "react";

type LessonStatusProps = {
  lessonId: string;
};

export default function LessonStatus({ lessonId }: LessonStatusProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedLessons: string[] = JSON.parse(
      localStorage.getItem("completedLessons") || "[]"
    );

    setCompleted(savedLessons.includes(lessonId));
  }, [lessonId]);

  if (!completed) {
    return null;
  }

  return (
    <span className="rounded-full border border-green-700 px-3 py-1 text-sm font-semibold text-green-700">
      Completed
    </span>
  );
}