'use client';

import { useMoviesStore, Movie } from '../store/useMoviesStore';

export default function MoviesPage() {
  const movies = useMoviesStore((state) => state.movies);
  const removeMovie = useMoviesStore((state) => state.removeMovie);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Список фильмов</h1>
      {movies.length === 0 ? (
        <p>Фильмы не добавлены.</p>
      ) : (
        <ul>
          {movies.map(({ id, title, year }: Movie) => (
            <li key={id} className="mb-2 flex justify-between items-center">
              <div>
                {title} ({year})
              </div>
              <button
                className="text-red-600 hover:underline"
                onClick={() => removeMovie(id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
