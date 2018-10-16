import { Action } from 'redux';
import {
  IAuthInitialState,
  IRoutingInitialState,
  AUTH_INITIAL_STATE,
  ROUTING_INITIAL_STATE
} from '.';

export interface IAppState {
  authReducer: IAuthInitialState,
  routingReducer: IRoutingInitialState
}

export interface IAppAction extends Action {
  type: string,
  payload?: any;
}

export const APP_INITIAL_STATE: IAppState = {
  authReducer: AUTH_INITIAL_STATE,
  routingReducer: ROUTING_INITIAL_STATE
}