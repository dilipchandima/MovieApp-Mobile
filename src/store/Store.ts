import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './RootReducer';
import rootSaga from './RootSaga';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
