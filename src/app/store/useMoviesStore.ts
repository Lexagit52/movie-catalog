// src/app/store/useMoviesStore.ts
import { create } from 'zustand';

export interface Movie {
  id: number;
  title: string;
  year: number;
  description?: string;  // описание
  link?: string;         // ссылка на видео (YouTube URL)
}


interface MoviesState {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
  updateMovie: (movie: Movie) => void;
}


// src/app/store/useMoviesStore.ts

export interface Movie {
  id: number;
  title: string;
  year: number;
  link?: string;
  description?: string;
}

interface MoviesState {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
  updateMovie: (movie: Movie) => void;
}

export const useMoviesStore = create<MoviesState>((set) => ({
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
