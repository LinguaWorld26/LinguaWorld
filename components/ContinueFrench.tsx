"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const lessons = [
  {
    id: "french-a1-greetings",
    title: "Greetings and introductions",
    href: "/languages/french/a1/greetings",
  },
  {
    id: "french-a1-pronunciation",
    title: "French pronunciation basics",
    href: "/languages/french/a1/pronunciation",
  },
  {
    id: "french-a1-numbers",
    title: "Numbers and personal information",
    href: "/languages/french/a1/numbers",
  },
  {
    id: "french-a1-questions",
    title: "Everyday questions",
    href: "/languages/french/a1/questions",
  },
];

export default function ContinueFrench() {
  const [nextLesson, setNextLesson] = useState(lessons[0]);
  const [allComplete, setAllComplete] = useState(false);

  useEffect(() => {
    const completedLessons: string[] = JSON.parse(
      localStorage.getItem("completedLessons") || "[]"
    );

    const unfinishedLesson = lessons.find(
      (lesson) => !completedLessons.includes(lesson.id)
    );

    if (unfinishedLesson) {
      setNextLesson(unfinishedLesson);
    } else {
      setAllComplete(true);
    }
  }, []);

  if (allComplete) {
    return (
      <div className="editorial-card mt-8 p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
          Continue learning
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Take the A1 checkpoint
        </h2>

        <p className="mt-3 text-[var(--muted)]">
          You completed all four A1 lessons.
        </p>

        <Link
          href="/languages/french/a1/checkpoint"
          className="primary-button mt-6 inline-block"
        >
          Open checkpoint
        </Link>
      </div>
    );
  }

  return (
    <div className="editorial-card mt-8 p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
        Continue learning
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        {nextLesson.title}
      </h2>

      <p className="mt-3 text-[var(--muted)]">
        Continue from your next unfinished A1 lesson.
      </p>

      <Link
        href={nextLesson.href}
        className="primary-button mt-6 inline-block"
      >
        Continue lesson
      </Link>
    </div>
  );
}