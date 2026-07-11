"use client";

import { useEffect, useState } from "react";

export default function FrenchRecommendedLevel() {
  const [level, setLevel] = useState<string | null>(null);

  useEffect(() => {
    const savedLevel = localStorage.getItem("frenchRecommendedLevel");
    setLevel(savedLevel);
  }, []);

  if (!level) {
    return null;
  }

  return (
    <div className="mt-8 rounded-2xl border border-[var(--ocean)] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ocean)]">
        Your suggested level
      </p>

      <div className="mt-3 flex items-center gap-4">
        <p className="text-5xl font-semibold">{level}</p>

        <p className="text-[var(--muted)]">
          Based on your French level test.
        </p>
      </div>
    </div>
  );
}