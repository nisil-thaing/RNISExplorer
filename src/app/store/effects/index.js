import { all, fork } from 'redux-saga/effects';

import { login$ } from './auth.effect';
import { routing$ } from './routing.effect';

export default function* rootSaga() {
  yield all([
    // add all saga watchers here
    fork(login$),
    fork(routing$)
  ])
}