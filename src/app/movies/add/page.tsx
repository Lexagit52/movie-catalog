'use client'; // чтобы использовать React hooks

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddMoviePage() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Пока просто выводим в консоль и возвращаем на страницу списка
    console.log({ title, year });

    // Здесь позже добавим сохранение данных в состояние или API

    router.push('/movies'); // возвращаем на список
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Добавить новый фильм</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block mb-1">Название фильма</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Год выпуска</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Добавить фильм
        </button>
      </form>
    </div>
  );
}
