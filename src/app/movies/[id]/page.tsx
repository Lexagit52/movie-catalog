'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { useEffect, useState } from 'react';

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const movies = useMoviesStore((state) => state.movies);

  const [movieId, setMovieId] = useState<number | null>(null);

  useEffect(() => {
    const parsed = parseInt(id);
    if (!isNaN(parsed)) setMovieId(parsed);
  }, [id]);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return <p className="p-6">Фильм не найден</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-700 mb-4">Год выпуска: {movie.year}</p>
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        onClick={() => router.back()}
      >
        Назад
      </button>
    </div>
  );
}
