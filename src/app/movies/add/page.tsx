// src/app/movies/add/page.tsx

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMoviesStore } from '@/app/store/useMoviesStore';
import { getEmbedLink } from '@/app/utils/getEmbedLink';

export default function AddMoviePage() {
  const router = useRouter();
  const addMovie = useMoviesStore((state) => state.addMovie);

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !year || !genre) return; // жанр обязательный

    addMovie({
      id: Date.now(),
      title,
      year: parseInt(year),
      link: getEmbedLink(link.trim()),
      description,
      genre,
    });

    router.push('/movies');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Добавить фильм</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Название</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Год</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Ссылка на видео</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows={4}
          />
        </div>
        <div>
          <label className="block font-semibold">Жанр</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="например, Комедия, Драма, Фантастика"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
