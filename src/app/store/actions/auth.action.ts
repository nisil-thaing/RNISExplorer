import { ILoginParams } from '../../services';

export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FALURE: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST_FAILURE'
}

export const AUTH_ACTIONS = {
  loginRequest: (params: ILoginParams) => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST,
    payload: { params }
  }),
  loginRequestSuccess: (userInfo: any) => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST_SUCCESS,
    payload: { userInfo }
  }),
  loginRequestFailure: (error: any) => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST_FALURE,
    payload: { error }
  })
}