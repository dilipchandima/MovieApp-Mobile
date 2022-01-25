import { Genre } from './Genre';
import { Movie, SingleMovie } from './movie';

export default interface Reducers {
  movies: MovieReducer;
  common: CommonReducer;
}

export interface MovieReducer {
  popularMovies: PopularMovies;
  latestMovie: SingleMovie;
  genres: Genre[];
}

export interface PopularMovies {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

export interface CommonReducer {
  loaders: string[];
}
