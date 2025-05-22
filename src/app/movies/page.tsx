// src/app/movies/page.tsx

'use client';

import Link from 'next/link';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { Movie } from '@/app/store/useMoviesStore';

export default function MoviesPage() {
  const movies = useMoviesStore((state) => state.movies);
  const removeMovie = useMoviesStore((state) => state.removeMovie);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Список фильмов</h1>
      <Link
        href="/movies/add"
        className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Добавить фильм
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map(({ id, title, year, genre, description, link }: Movie) => (
          <div key={id} className="card bg-white rounded-lg shadow p-4">
            {link && (
              <iframe
                className="w-full aspect-video rounded-md mb-3"
                src={link}
                allowFullScreen
                title={title}
              />
            )}
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mb-1">{year} | {genre}</p>
            <p className="text-sm mb-3">{description?.slice(0, 100)}...</p>
            <div className="flex justify-between items-center">
              <Link href={`/movies/${id}`} className="text-purple-600 hover:underline">
                Подробнее
              </Link>
              <button
                className="text-red-600 hover:underline"
                onClick={() => removeMovie(id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
