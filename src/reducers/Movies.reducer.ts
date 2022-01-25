import {
  GET_GENRES_SUCCESS,
  GET_LATEST_MOVIE_SUCCESS,
  GET_POPULAR_MOVIES_SUCCESS,
} from 'constants/ActionTypes';

const INIT_STATE = {
  popularMovies: { movies: [], currentPage: 1, totalPages: null, totalResults: null },
  latestMovie: {},
  genres: [],
};

const MovieReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: {
          movies: payload.data.results,
          currentPage: payload.data.page,
          totalPages: payload.data.total_pages,
          totalResults: payload.data.total_results,
        },
      };
    case GET_LATEST_MOVIE_SUCCESS:
      return {
        ...state,
        latestMovie: payload?.data,
      };
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload.data.genres,
      };
    default:
      return state;
  }
};

export default MovieReducer;
