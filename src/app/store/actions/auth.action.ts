import { ILoginParams } from '../../services';
import { IAppAction } from '../states';

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

export interface ILoginRequestFailureAction extends IAppAction {
  payload: {
    error: any
  }
}

export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FALURE: '[AUTH_ACTION_TYPES]_LOGIN_REQUEST_FAILURE'
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
  loginRequestFailure: (error: any): ILoginRequestFailureAction => ({
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST_FALURE,
    payload: { error }
  })
}