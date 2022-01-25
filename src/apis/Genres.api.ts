import Api from 'libraries/Api';

export const getGenresApi = () =>
  Api.request({
    action: '/genres',
  });
