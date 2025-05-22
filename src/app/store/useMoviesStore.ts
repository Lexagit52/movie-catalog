// src/app/store/useMoviesStore.ts
import { create } from 'zustand';

export interface Movie {
  id: number;
  title: string;
  year: number;
}

interface MoviesState {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
  updateMovie: (movie: Movie) => void;
}

export const useMoviesStore = create<MoviesState>((set, get) => ({
  movies: [],

  addMovie: (movie) =>
    set((state) => ({ movies: [...state.movies, movie] })),

  removeMovie: (id) =>
    set((state) => ({ movies: state.movies.filter((m) => m.id !== id) })),

  updateMovie: (movie) =>
    set((state) => ({
      movies: state.movies.map((m) => (m.id === movie.id ? movie : m)),
    })),
}));
