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
      <ul>
        {movies.map(({ id, title, year }: Movie) => (
          <li key={id} className="mb-2 flex justify-between items-center">
            <div>
              {title} ({year})
            </div>
            <div className="flex gap-2">
              <Link
                href={`/movies/edit/${id}`}
                className="text-blue-600 hover:underline"
              >
                Редактировать
              </Link>
              <button
                className="text-red-600 hover:underline"
                onClick={() => removeMovie(id)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
