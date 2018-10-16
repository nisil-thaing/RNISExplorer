import { createStore, applyMiddleware, DeepPartial } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { rootReducer } from './reducers';
import { IAppState, APP_INITIAL_STATE } from './states';

export default function configureStore(
  initialState: IAppState = APP_INITIAL_STATE
) {
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