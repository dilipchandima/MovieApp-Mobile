import { GET_POPULAR_MOVIES, GET_POPULAR_MOVIES_SUCCESS } from 'constants/ActionTypes';
import { call, put, takeEvery, select } from 'redux-saga/effects';

function* getPopularMovies() {
  yield put({ type: GET_POPULAR_MOVIES_SUCCESS, payload: [{ name: 'sdsdsd' }] });
}

function* MoviesSaga() {
  yield takeEvery(GET_POPULAR_MOVIES, getPopularMovies);
}

export default MoviesSaga;
