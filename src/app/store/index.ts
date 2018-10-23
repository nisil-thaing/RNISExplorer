import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

import rootReducer from './reducers';
import { IAppState, APP_INITIAL_STATE } from './states';

export default function configureStore(
  initialState: IAppState = APP_INITIAL_STATE
) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...[sagaMiddleware, logger])
  );
  const persistor = persistStore(store)

  return ({
    store,
    persistor,
    runSaga: sagaMiddleware.run
  });
}