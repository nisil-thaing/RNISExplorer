import { NavigationActions } from 'react-navigation';
import { all, select, takeLatest } from 'redux-saga/effects';

import {
  ROUTING_ACTION_TYPES,
  IRoutingNavigateAction
} from '../actions';
import { ROUTING_SELECTOR } from '../selectors';

function* navigate(action: IRoutingNavigateAction) {
  const navigator = yield select(ROUTING_SELECTOR.navigatorSelector);

  if (navigator && action.payload) {
    const options = action.payload;
    yield navigator.dispatch(
      NavigationActions.navigate(options)
    );
  }
}

export function* routing$() {
  yield all([
    takeLatest(ROUTING_ACTION_TYPES.NAVIGATE, navigate)
  ]);
}