import { SET_LOADER } from 'constants/ActionTypes';

const INIT_STATE = {
  loaders: [],
};

const setLoading = (state, payload) => {
  const { isSet, url } = payload;
  const loaders = [...state.loaders];
  if (isSet) {
    loaders.push(url);

    return {
      ...state,
      loaders,
    };
  } else {
    const newLoaders = loaders.filter((item) => item !== url);

    return {
      ...state,
      loaders: newLoaders,
    };
  }
};

const CommonReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_LOADER:
      return setLoading(state, payload);
    default:
      return state;
  }
};

export default CommonReducer;
