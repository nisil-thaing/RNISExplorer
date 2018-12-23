import { NavigationActions } from 'react-navigation';
import { all, select, takeLatest, put } from 'redux-saga/effects';

import {
  ROUTING_ACTION_TYPES,
  ROUTING_ACTIONS
} from '../actions';
import { ROUTING_SELECTOR } from '../selectors';

function* navigate(action) {
  try {
    const navigator = yield select(ROUTING_SELECTOR.navigatorSelector);
    const options = action.payload;
    yield navigator.dispatch(
      NavigationActions.navigate(options)
    );
  } catch(err) {
    yield put(ROUTING_ACTIONS.routingActionFailure({
      action: ROUTING_ACTION_TYPES.NAVIGATE,
      errorDescription: err
    }));
  }
}

export function* routing$() {
  yield all([
    takeLatest(ROUTING_ACTION_TYPES.NAVIGATE, navigate)
  ]);
}