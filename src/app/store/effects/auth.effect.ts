import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '../../services';
import { AUTH_ACTIONS, AUTH_ACTION_TYPES, ROUTING_ACTIONS } from '../actions';
import { ROUTES_NAMES } from '../../utils/routes.constant';

const _authService = new AuthService();

function* sendLoginRequest(action: any) {
  try {
    const loginResult = yield call(
      _authService.login,
      action.payload.params
    );

    yield put(ROUTING_ACTIONS.navigate({
      routeName: ROUTES_NAMES.HomeRT
    }));
    yield put(AUTH_ACTIONS.loginRequestSuccess(loginResult));
  } catch (err) {
    yield put(AUTH_ACTIONS.loginRequestFailure(err));
  }
}

export function* login$() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGIN_REQUEST, sendLoginRequest);
}