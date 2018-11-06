import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

import rootReducer from './reducers';
import { IAppState, APP_INITIAL_STATE } from './states';

let _store: any = null;

export function configureStore(
  initialState: IAppState = APP_INITIAL_STATE
) {
  const sagaMiddleware = createSagaMiddleware();
  _store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...[sagaMiddleware, logger])
  );
  const persistor = persistStore(_store)

  return ({
    store: _store,
    persistor,
    runSaga: sagaMiddleware.run
  });
}

export function getStore() {
  return _store;
}