'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { useEffect, useState } from 'react';

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const movies = useMoviesStore((state) => state.movies);
  const markAsViewed = useMoviesStore((state) => state.markAsViewed);

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

      <button
        className="mt-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        onClick={() => router.back()}
      >
        Назад
      </button>
    </div>
  );
}
