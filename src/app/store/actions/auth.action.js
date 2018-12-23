export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST_SUCCESS',
  CHECKING_AUTH_INFO: '[AUTH_ACTION_TYPES]_CHECKING_AUTH_INFO',
  CHECKING_AUTH_INFO_SUCCESS: '[AUTH_ACTION_TYPES]_CHECKING_AUTH_INFO_SUCCESS',
  AUTH_ACTION_FAILURE: '[AUTH_ACTION_TYPES]_AUTH_ACTION_FAILURE',
};

export const AUTH_ACTIONS = {
  loginRequest: params => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST,
    payload: { params }
  }),
  loginRequestSuccess: userInfo => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST_SUCCESS,
    payload: { userInfo }
  }),
  checkingAuthInfo: () => ({
    type: AUTH_ACTION_TYPES.CHECKING_AUTH_INFO,
  }),
  checkingAuthInfoSuccess: authInfo => {
    const { user, token } = authInfo || {};
    return {
      type: AUTH_ACTION_TYPES.CHECKING_AUTH_INFO_SUCCESS,
      payload: { user, token }
    };
  },
  authActionFailure: data => ({
    type: AUTH_ACTION_TYPES.AUTH_ACTION_FAILURE,
    payload: data
  })
};