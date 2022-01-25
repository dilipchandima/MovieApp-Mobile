import { all } from 'redux-saga/effects';
import GenresSaga from 'saga/Genres.saga';
import MoviesSaga from 'saga/Movies.saga';

export default function* rootSaga() {
  yield all([MoviesSaga(), GenresSaga()]);
}
