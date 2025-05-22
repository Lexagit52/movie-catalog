"use client";

import Link from "next/link";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Убрали max-width и padding по бокам */}
        <div className="w-full text-center px-4">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4">Каталог фильмов</h1>
          <p className="text-xl text-gray-700 mb-10">
            Добро пожаловать в лучшее место для коллекционирования и управления вашими любимыми фильмами.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="font-bold text-lg text-gray-800 mb-2">🎬 Сохраняйте фильмы</h3>
              <p className="text-sm text-gray-600">Добавляйте любимые фильмы с подробностями, рейтингом и заметками.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="font-bold text-lg text-gray-800 mb-2">🔍 Быстрый доступ</h3>
              <p className="text-sm text-gray-600">Мгновенный поиск и фильтрация по различным параметрам.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="font-bold text-lg text-gray-800 mb-2">🛠️ Полный контроль</h3>
              <p className="text-sm text-gray-600">Редактируйте, удаляйте и настраивайте список под себя.</p>
            </div>
          </div>

          <Link
            href="/movies"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-xl shadow-lg transition"
          >
            Перейти к фильмам
          </Link>

          <div className="mt-12 mb-16">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
              alt="Movie decoration"
              className="w-32 h-32 mx-auto opacity-90"
            />
          </div>
        </div>

        <div className="w-full bg-yellow-200 text-yellow-900 py-4 px-6 border border-yellow-400 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">😎 Эхх... а здесь могла бы быть ваша реклама</p>
        </div>
      </main>
    </>
  );
}
