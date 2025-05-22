'use client';

import { useMoviesStore } from '@/app/store/useMoviesStore';
import Link from 'next/link';

export default function RecentlyViewedPage() {
  const recentlyViewed = useMoviesStore((state) => state.recentlyViewed);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Последние просмотренные фильмы</h1>
      {recentlyViewed.length === 0 ? (
        <p>Вы ещё не смотрели фильмы.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recentlyViewed.map((movie) => (
            <div key={movie.id} className="border rounded shadow p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600">{movie.genre}</p>
              <Link href={`/movies/${movie.id}`} className="text-blue-600 hover:underline">
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
