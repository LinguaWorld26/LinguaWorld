"use client";

import { useSyncExternalStore } from "react";

function subscribeToCheckpoint(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("frenchA1CheckpointChanged", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("frenchA1CheckpointChanged", callback);
  };
}

function getCheckpointPassed() {
  return localStorage.getItem("frenchA1CheckpointPassed") === "true";
}

function getServerCheckpointPassed() {
  return false;
}

export default function A1Achievement() {
  const passed = useSyncExternalStore(
    subscribeToCheckpoint,
    getCheckpointPassed,
    getServerCheckpointPassed
  );

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