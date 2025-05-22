import { create } from 'zustand';

export type Movie = {
  id: number;
  title: string;
  year: string;
};

type MoviesState = {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, 'id'>) => void;
  removeMovie: (id: number) => void;
};

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  addMovie: (movie: Omit<Movie, 'id'>) =>
    set((state) => ({
      movies: [...state.movies, { ...movie, id: Date.now() }],
    })),
  removeMovie: (id: number) =>
    set((state) => ({
      movies: state.movies.filter((movie) => movie.id !== id),
    })),
}));
