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

const setPopularMovies = (state, payload) => {
  const { results, page, total_pages, total_results } = payload?.data;
  if (page === 1) {
    return {
      ...state,
      popularMovies: {
        movies: results,
        currentPage: page,
        totalPages: total_pages,
        totalResults: total_results,
      },
    };
  }

  return {
    ...state,
    popularMovies: {
      movies: [...state.popularMovies.movies, ...results],
      currentPage: page,
      totalPages: total_pages,
      totalResults: total_results,
    },
  };
};

const MovieReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return setPopularMovies(state, payload);
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
