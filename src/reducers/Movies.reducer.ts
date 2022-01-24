import { GET_POPULAR_MOVIES_SUCCESS } from 'constants/ActionTypes';

const INIT_STATE = {
  popularMovies: [],
};

const MovieReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
