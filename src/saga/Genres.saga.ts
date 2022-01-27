import { GET_GENRES, GET_GENRES_FAILED, GET_GENRES_SUCCESS } from 'constants/ActionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as GenresApi from 'apis/Genres.api';

function* getGenres() {
  try {
    const result = yield call(GenresApi.getGenresApi);
    yield put({ type: GET_GENRES_SUCCESS, payload: result?.data });
  } catch (error: any) {
    yield put({ type: GET_GENRES_FAILED, payload: error?.response?.data });
  }
}

function* GenresSaga() {
  yield takeEvery(GET_GENRES, getGenres);
}

export default GenresSaga;
