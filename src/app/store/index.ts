import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { rootReducer } from './reducers';

export default function configureStore(initialState: any = {}) {
  const sagaMiddleware = createSagaMiddleware();

  return ({
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(...[sagaMiddleware, logger])
    ),
    runSaga: sagaMiddleware.run
  });
}