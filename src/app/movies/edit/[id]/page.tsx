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
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-700 mb-4">Год выпуска: {movie.year}</p>
      <p className="mb-4">{movie.description}</p>
      <p className="mb-6">
        <a
          href={movie.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Смотреть фильм
        </a>
      </p>
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        onClick={() => router.back()}
      >
        Назад
      </button>
    </div>
  );
}
