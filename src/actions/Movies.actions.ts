import { GET_LATEST_MOVIE, GET_MOVIE_DETAILS, GET_POPULAR_MOVIES } from 'constants/ActionTypes';

export const getPopularMovies = (payload: { page: number }) => ({
  type: GET_POPULAR_MOVIES,
  payload,
});

export const getMovieDetails = (payload: number) => ({
  type: GET_MOVIE_DETAILS,
  payload,
});

export const getLatestMovie = () => ({
  type: GET_LATEST_MOVIE,
});
