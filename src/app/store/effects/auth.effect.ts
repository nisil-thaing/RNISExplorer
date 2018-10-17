import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '../../services';
import { AUTH_ACTIONS, AUTH_ACTION_TYPES, ROUTING_ACTIONS, ILoginRequestAction } from '../actions';
import { ROUTES_NAMES } from '../../utils/routes.constant';

const _authService = new AuthService();

function* sendLoginRequest(action: ILoginRequestAction) {
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
    yield put(AUTH_ACTIONS.authActionFailure({
      action: AUTH_ACTION_TYPES.LOGIN_REQUEST,
      errorDescription: err
    }));
  }
}

export function* login$() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGIN_REQUEST, sendLoginRequest);
}