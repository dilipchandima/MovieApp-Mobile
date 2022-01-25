import Api from 'libraries/Api';

export const getPopularMoviesApi = (params) =>
  Api.request({
    action: '/movies/popular',
    params,
  });

export const getMovieDetailsApi = (params) =>
  Api.request({
    action: `/movie/${params}`,
  });

export const getLatestMovie = () =>
  Api.request({
    action: '/movies/latest',
  });
