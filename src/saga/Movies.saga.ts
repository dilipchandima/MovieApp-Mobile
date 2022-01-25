import {
  GET_LATEST_MOVIE,
  GET_LATEST_MOVIE_FAILED,
  GET_LATEST_MOVIE_SUCCESS,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAILED,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_FAILED,
  GET_POPULAR_MOVIES_SUCCESS,
} from 'constants/ActionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as MoviesApi from 'apis/Movie.api';

function* getPopularMovies({ payload }) {
  try {
    const result = yield call(MoviesApi.getPopularMoviesApi, payload);
    yield put({ type: GET_POPULAR_MOVIES_SUCCESS, payload: result.data });
  } catch (error: any) {
    yield put({ type: GET_POPULAR_MOVIES_FAILED, payload: error.response.data });
  }
}

function* getMovieDetails({ payload }) {
  try {
    const result = yield call(MoviesApi.getMovieDetailsApi, payload);
    yield put({ type: GET_MOVIE_DETAILS_SUCCESS, payload: result.data });
  } catch (error: any) {
    yield put({ type: GET_MOVIE_DETAILS_FAILED, payload: error.response.data });
  }
}

function* getLatestMovie() {
  try {
    const result = yield call(MoviesApi.getLatestMovie);
    yield put({ type: GET_LATEST_MOVIE_SUCCESS, payload: result.data });
  } catch (error: any) {
    yield put({ type: GET_LATEST_MOVIE_FAILED, payload: error.response.data });
  }
}

function* MoviesSaga() {
  yield takeEvery(GET_POPULAR_MOVIES, getPopularMovies);
  yield takeEvery(GET_MOVIE_DETAILS, getMovieDetails);
  yield takeEvery(GET_LATEST_MOVIE, getLatestMovie);
}

export default MoviesSaga;
