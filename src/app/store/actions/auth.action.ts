import { ILoginParams } from '../../services';
import { IAppAction, IAppStateError } from '../states';

export interface ILoginRequestAction extends IAppAction {
  payload: {
    params: ILoginParams
  }
}

export interface ILoginRequestSuccessAction extends IAppAction {
  payload: {
    userInfo: any
  }
}

export interface IAuthFailureAction extends IAppAction {
  payload: IAppStateError
}

export interface ICheckingAuthTokenSuccessAction extends IAppAction {
  payload: {
    user: any,
    token: string
  }
}

export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST_SUCCESS',
  CHECKING_AUTH_INFO: '[AUTH_ACTION_TYPES]_CHECKING_AUTH_INFO',
  CHECKING_AUTH_INFO_SUCCESS: '[AUTH_ACTION_TYPES]_CHECKING_AUTH_INFO_SUCCESS',
  AUTH_ACTION_FAILURE: '[AUTH_ACTION_TYPES]_AUTH_ACTION_FAILURE',
}

export const AUTH_ACTIONS = {
  loginRequest: (params: ILoginParams): ILoginRequestAction => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST,
    payload: { params }
  }),
  loginRequestSuccess: (userInfo: any): ILoginRequestSuccessAction => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST_SUCCESS,
    payload: { userInfo }
  }),
  checkingAuthInfo: (): IAppAction => ({
    type: AUTH_ACTION_TYPES.CHECKING_AUTH_INFO,
  }),
  checkingAuthInfoSuccess: (
    authInfo: { user: any, token: string }
  ): ICheckingAuthTokenSuccessAction => ({
    type: AUTH_ACTION_TYPES.CHECKING_AUTH_INFO_SUCCESS,
    payload: {
      user: authInfo.user,
      token: authInfo.token
    }
  }),
  authActionFailure: (data: IAppStateError): IAuthFailureAction => ({
    type: AUTH_ACTION_TYPES.AUTH_ACTION_FAILURE,
    payload: data
  })
}