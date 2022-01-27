import { SET_LOADER } from 'constants/ActionTypes';

export const setLoader = (payload: { isSet: boolean; url: string }) => ({
  type: SET_LOADER,
  payload,
});
