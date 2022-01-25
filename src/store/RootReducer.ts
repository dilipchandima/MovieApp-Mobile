import AsyncStorageLib from '@react-native-async-storage/async-storage';
import CommonReducer from 'reducers/Common.reducer';
import MovieReducer from 'reducers/Movies.reducer';
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';

const moviePersistConfig = {
  key: 'authReducer',
  storage: AsyncStorageLib,
};

const rootReducer = combineReducers({
  movies: persistReducer(moviePersistConfig, MovieReducer),
  common: CommonReducer,
});

export default rootReducer;
