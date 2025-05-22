

'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { Movie } from '@/app/store/useMoviesStore';

export default function EditMoviePage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const movieId = parseInt(id); // ✅ преобразуем в число

  const movies = useMoviesStore((state) => state.movies);
  const updateMovie = useMoviesStore((state) => state.updateMovie);

  const movie = movies.find((m) => m.id === movieId); // ✅ сравнение number === number

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setYear(String(movie.year));
    }
  }, [movie]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !year) return;

    updateMovie({ id: movieId, title, year: parseInt(year) }); // ✅ все числа
    router.push('/movies');
  };

  if (!movie) {
    return <p className="p-6">Фильм не найден</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Редактировать фильм</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Название</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Год</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}
