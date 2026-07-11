"use client";

import { useEffect, useState } from "react";

export default function A1Achievement() {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const checkpointPassed =
      localStorage.getItem("frenchA1CheckpointPassed") === "true";

    setPassed(checkpointPassed);
  }, []);

  if (!passed) {
    return null;
  }

  return (
    <section className="mt-6 rounded-2xl border border-[var(--ocean)] p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
        Achievement unlocked
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        A1 Foundations Complete
      </h2>

      <p className="mt-3 text-[var(--muted)]">
        You passed the French A1 checkpoint.
      </p>
    </section>
  );
}