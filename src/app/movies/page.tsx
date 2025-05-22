'use client';

import Link from 'next/link';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { Movie } from '@/app/store/useMoviesStore';
import { useMemo } from 'react';

export default function MoviesPage() {
  const movies = useMoviesStore((state) => state.movies);
  const filterGenre = useMoviesStore((state) => state.filterGenre);
  const setFilterGenre = useMoviesStore((state) => state.setFilterGenre);
  const removeMovie = useMoviesStore((state) => state.removeMovie);

  // Получаем уникальные жанры для фильтрации
  const genres = useMemo(() => {
    const uniqueGenres = Array.from(new Set(movies.map((m) => m.genre)));
    uniqueGenres.sort();
    return uniqueGenres;
  }, [movies]);

  // Фильтруем фильмы по выбранному жанру
  const filteredMovies = useMemo(() => {
    if (!filterGenre) return movies;
    return movies.filter((m) => m.genre === filterGenre);
  }, [movies, filterGenre]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Список фильмов</h1>
      
    

      {/* Фильтр по жанрам */}
      <div className="mb-6">
        <label className="font-semibold mr-4">Фильтр по жанру:</label>
        <select
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Все жанры</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {filterGenre && (
          <button
            onClick={() => setFilterGenre('')}
            className="ml-4 text-sm text-red-600 hover:underline"
          >
            Сбросить фильтр
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMovies.map(({ id, title, year, genre, description, link }: Movie) => (
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
