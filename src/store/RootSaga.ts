import { all } from 'redux-saga/effects';
import MoviesSaga from 'saga/Movies.saga';

export default function* rootSaga() {
  yield all([MoviesSaga()]);
}
