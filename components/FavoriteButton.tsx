"use client";

import { useSyncExternalStore } from "react";

type FavoriteButtonProps = {
  itemId: string;
  itemType: "country" | "language" | "city";
  itemName: string;
};

type FavoriteItem = {
  id: string;
  type: "country" | "language" | "city";
  name: string;
};

const STORAGE_KEY = "linguaworld-favorites";

function subscribeToFavorites(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("favorites-updated", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("favorites-updated", callback);
  };
}

function getFavorites() {
  return window.localStorage.getItem(STORAGE_KEY) || "[]";
}

function getServerFavorites() {
  return "[]";
}

export default function FavoriteButton({
  itemId,
  itemType,
  itemName,
}: FavoriteButtonProps) {
  const savedFavorites = useSyncExternalStore(
    subscribeToFavorites,
    getFavorites,
    getServerFavorites
  );

  const favorites: FavoriteItem[] = JSON.parse(savedFavorites);

  const isFavorite = favorites.some(
    (favorite) =>
      favorite.id === itemId && favorite.type === itemType
  );

  function toggleFavorite() {
    const alreadySaved = favorites.some(
      (favorite) =>
        favorite.id === itemId && favorite.type === itemType
    );

    const updatedFavorites = alreadySaved
      ? favorites.filter(
          (favorite) =>
            !(
              favorite.id === itemId &&
              favorite.type === itemType
            )
        )
      : [
          ...favorites,
          {
            id: itemId,
            type: itemType,
            name: itemName,
          },
        ];

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedFavorites)
    );

    window.dispatchEvent(new Event("favorites-updated"));
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-pressed={isFavorite}
      aria-label={
        isFavorite
          ? `Remove ${itemName} from favorites`
          : `Add ${itemName} to favorites`
      }
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-100"
    >
      <span aria-hidden="true">
        {isFavorite ? "♥" : "♡"}
      </span>

      {isFavorite ? "Saved" : "Save"}
    </button>
  );
}