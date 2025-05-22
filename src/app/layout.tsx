import './globals.css'
import Header from './components/Header'



export const metadata = {
  title: 'Movie Catalog',
  description: 'Приложение для просмотра и добавления фильмов',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container mx-auto mt-4">{children}</main>
      </body>
    </html>
  )
}
