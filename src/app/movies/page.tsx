'use client';

import Link from 'next/link';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { Movie } from '@/app/store/useMoviesStore';

export default function MoviesPage() {
  const movies = useMoviesStore((state) => state.movies);
  const removeMovie = useMoviesStore((state) => state.removeMovie);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Список фильмов</h1>
      <Link
        href="/movies/add"
        className="inline-block mb-6 bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
      >
        Добавить фильм
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map(({ id, title, year, description, link }: Movie) => (
          <div key={id} className="card border rounded shadow-lg">
            {/* Если хочешь картинку, можно сюда вставить <img> */}
            {/* <img src="..." className="card-img-top" alt={title} /> */}

            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold mb-2">{title}</h5>
              <p className="card-text text-gray-700 mb-4">{description}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/movies/${id}`}
                  className="btn btn-primary bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Подробнее
                </Link>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeMovie(id)}
                  aria-label={`Удалить фильм ${title}`}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
