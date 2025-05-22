'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { useEffect, useState } from 'react';

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const movies = useMoviesStore((state) => state.movies);
  const markAsViewed = useMoviesStore((state) => state.markAsViewed);
  const toggleFavorite = useMoviesStore((state) => state.toggleFavorite);
  const isFavorite = useMoviesStore((state) => state.isFavorite);

  const [movieId, setMovieId] = useState<number | null>(null);

  useEffect(() => {
    const parsed = parseInt(id);
    if (!isNaN(parsed)) setMovieId(parsed);
  }, [id]);

  const movie = movies.find((m) => m.id === movieId);

  useEffect(() => {
    if (movie) markAsViewed(movie);
  }, [movie, markAsViewed]);

  if (!movie) {
    return <p className="p-6">Фильм не найден</p>;
  }

  const favorite = isFavorite(movie.id);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

      {movie.link ? (
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={movie.link}
            title={movie.title}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border rounded"
          />
        </div>
      ) : (
        <p className="mb-4 text-gray-500">Видео отсутствует</p>
      )}

      {movie.description && (
        <p className="mt-4 text-gray-700">{movie.description}</p>
      )}

      <div className="mt-6 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            favorite ? 'bg-yellow-400 text-black' : 'bg-gray-600 text-white'
          }`}
          onClick={() => toggleFavorite(movie)}
        >
          {favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => router.back()}
        >
          Назад
        </button>
      </div>
    </div>
  );
}
