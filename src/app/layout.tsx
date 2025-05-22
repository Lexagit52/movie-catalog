import './globals.css'
import Header from './components/Header'

import Footer from './components/Footer'


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
         <Footer />
      </body>
    </html>
  )

}
