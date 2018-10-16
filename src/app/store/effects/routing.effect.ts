import { NavigationActions } from 'react-navigation';
import { all, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { ROUTING_ACTION_TYPES } from '../actions';
import { ROUTING_SELECTOR } from '../selectors';

function* navigate(action: any) {
  const navigator = yield select(ROUTING_SELECTOR.navigatorSelector);

  if (navigator && action.payload) {
    const { routeName, params } = action.payload;
    yield navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }
}

export function* routing$() {
  yield all([
    takeLatest(ROUTING_ACTION_TYPES.NAVIGATE, navigate)
  ]);
}