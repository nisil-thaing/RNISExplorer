import { AUTH_INITIAL_STATE } from '../states';
import { AUTH_ACTION_TYPES } from '../actions';

export default function authReducer(state = AUTH_INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        isInProgress: true,
        isAuthenticated: false,
        userData: null,
        error: {}
      };

    case AUTH_ACTION_TYPES.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        isAuthenticated: true,
        userData: (payload && payload.userInfo) || null
      };

    case AUTH_ACTION_TYPES.CHECKING_AUTH_INFO:
      return {
        ...state,
        isInProgress: true,
        error: {}
      };

    case AUTH_ACTION_TYPES.CHECKING_AUTH_INFO_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        isAuthenticated: true,
        userData: payload
      };

    case AUTH_ACTION_TYPES.AUTH_ACTION_FAILURE:
      return {
        ...state,
        isInProgress: false,
        isAuthenticated: false,
        userData: null,
        error: payload
      };

    default: return state;
  }
}