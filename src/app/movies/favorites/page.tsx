// src/app/movies/favorites/page.tsx
'use client';

import { useMoviesStore, Movie } from '@/app/store/useMoviesStore';

export default function FavoritesPage() {
  const favorites = useMoviesStore((state) => state.favorites);
  const toggleFavorite = useMoviesStore((state) => state.toggleFavorite);

  if (favorites.length === 0) {
    return <div className="container mx-auto p-4">Избранных фильмов пока нет.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Избранные фильмы</h1>
      <ul className="space-y-4">
        {favorites.map((movie) => (
          <li
            key={movie.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{movie.title} ({movie.year})</h2>
              <p className="text-gray-600">{movie.genre}</p>
              <p className="mt-1">{movie.description}</p>
            </div>
            <button
              onClick={() => toggleFavorite(movie)}
              className="text-red-500 hover:text-red-700"
              aria-label="Удалить из избранного"
            >
              ★ Убрать из избранного
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
