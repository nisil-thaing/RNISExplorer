import { AUTH_INITIAL_STATE } from './auth.state';
import { ROUTING_INITIAL_STATE } from './routing.state';

/* export interface IAppState {
  authReducer: IAuthInitialState,
  routingReducer: IRoutingInitialState
}

export interface IAppStateError {
  action: string,
  errorDescription?: any
}

export interface IAppAction extends Action {
  type: string,
  payload?: any;
} */


export const APP_INITIAL_STATE = {
  authReducer: AUTH_INITIAL_STATE,
  routingReducer: ROUTING_INITIAL_STATE
}