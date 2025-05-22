import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link href="/">Главная</Link>
        <Link href="/movies">Фильмы</Link>
        <Link href="/movies/add">Добавить фильм</Link>
        <Link href="/movies/recent" >Последние</Link>
        <Link href="/about">О приложении</Link>
      </nav>
    </header>
  );
}
