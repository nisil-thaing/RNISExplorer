import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '../../services';
import { AUTH_ACTIONS, AUTH_ACTION_TYPES } from '../actions';

const _authService = new AuthService();

function* sendLoginRequest(action: any) {
  try {
    const loginResult = yield call(_authService.login, action.payload.params);
    yield put(AUTH_ACTIONS.loginRequestSuccess(loginResult));
  } catch (err) {
    yield put(AUTH_ACTIONS.loginRequestFailure(err));
  }
}

export function* login$() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGIN_REQUEST, sendLoginRequest);
}