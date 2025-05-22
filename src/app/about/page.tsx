'use client';

export default function AboutPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">О приложении</h1>
      <p className="mb-4">
        Это простое веб-приложение для управления коллекцией фильмов. Вы можете:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Добавлять фильмы с названием, годом, жанром, описанием и ссылкой на видео</li>
        <li>Просматривать карточки фильмов с превью</li>
        <li>Смотреть видео фильмов прямо в приложении</li>
        <li>Удалять фильмы</li>
        <li>Фильтровать фильмы по жанрам</li>
      </ul>
      <p className="text-gray-600">
        Приложение создано с использованием <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Zustand</strong> и <strong>Tailwind CSS</strong>.
      </p>
    </div>
  );
}
