"use client";

import { useEffect, useState } from "react";

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

export default function FavoriteButton({
  itemId,
  itemType,
  itemName,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites = window.localStorage.getItem(STORAGE_KEY);

    if (!savedFavorites) {
      return;
    }

    const favorites: FavoriteItem[] = JSON.parse(savedFavorites);

    setIsFavorite(
      favorites.some(
        (favorite) =>
          favorite.id === itemId && favorite.type === itemType
      )
    );
  }, [itemId, itemType]);

  function toggleFavorite() {
    const savedFavorites = window.localStorage.getItem(STORAGE_KEY);

    const favorites: FavoriteItem[] = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

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

    setIsFavorite(!alreadySaved);

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