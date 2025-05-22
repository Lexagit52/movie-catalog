import { create } from 'zustand';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  link?: string;
  description?: string;
}

interface MoviesState {
  movies: Movie[];
  recentlyViewed: Movie[];
  filterGenre: string;
  setFilterGenre: (genre: string) => void;
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
  updateMovie: (movie: Movie) => void;
  markAsViewed: (movie: Movie) => void;
}

export const useMoviesStore = create<MoviesState>((set, get) => ({
  movies: [
    {
      id: 1,
      title: 'Интерстеллар',
      year: 2014,
      genre: 'Фантастика',
      link: 'https://www.youtube.com/embed/zSWdZVtXT7E',
      description: 'Группа исследователей отправляется через червоточину в космос для спасения человечества.',
    },
    {
      id: 2,
      title: 'Побег из Шоушенка',
      year: 1994,
      genre: 'Драма',
      link: 'https://www.youtube.com/embed/6hB3S9bIaco',
      description: 'История о надежде и дружбе в тюрьме Шоушенк.',
    },
    {
      id: 3,
      title: 'Начало',
      year: 2010,
      genre: 'Фантастика',
      link: 'https://www.youtube.com/embed/YoHD9XEInc0',
      description: 'Профессиональный вор внедряется в сны, чтобы украсть или внедрить идею.',
    },
    {
      id: 4,
      title: 'Форрест Гамп',
      year: 1994,
      genre: 'Драма',
      link: 'https://www.youtube.com/embed/bLvqoHBptjg',
      description: 'Жизненный путь доброго и простодушного человека.',
    },
    {
      id: 5,
      title: 'Матрица',
      year: 1999,
      genre: 'Экшн',
      link: 'https://www.youtube.com/embed/vKQi3bBA1y8',
      description: 'Виртуальная реальность и борьба за свободу человечества.',
    },
    {
      id: 6,
      title: 'Король Лев',
      year: 1994,
      genre: 'Мультфильм',
      link: 'https://www.youtube.com/embed/4sj1MT05lAA',
      description: 'Приключения львенка Симбы, который становится королём джунглей.',
    },
    {
      id: 7,
      title: 'Джокер',
      year: 2019,
      genre: 'Триллер',
      link: 'https://www.youtube.com/embed/zAGVQLHvwOY',
      description: 'История превращения комика в опасного преступника.',
    },
  ],

  recentlyViewed: [],

  filterGenre: '',
  setFilterGenre: (genre) => set({ filterGenre: genre }),

  addMovie: (movie) =>
    set((state) => ({ movies: [...state.movies, movie] })),

  removeMovie: (id) =>
    set((state) => ({ movies: state.movies.filter((m) => m.id !== id) })),

  updateMovie: (movie) =>
    set((state) => ({
      movies: state.movies.map((m) => (m.id === movie.id ? movie : m)),
    })),

  markAsViewed: (movie) => {
    const existing = get().recentlyViewed.filter((m) => m.id !== movie.id);
    set(() => ({
      recentlyViewed: [movie, ...existing].slice(0, 10),
    }));
  },
}));