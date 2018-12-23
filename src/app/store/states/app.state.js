import { AUTH_INITIAL_STATE } from './auth.state';
import { ROUTING_INITIAL_STATE } from './routing.state';

export const APP_INITIAL_STATE = {
  authReducer: AUTH_INITIAL_STATE,
  routingReducer: ROUTING_INITIAL_STATE
}