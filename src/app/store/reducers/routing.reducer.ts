import {
  IAppAction,
  IRoutingInitialState,
  ROUTING_INITIAL_STATE
} from '../states';
import { ROUTING_ACTION_TYPES } from '../actions';

export default function routingReducer(
  state: IRoutingInitialState = ROUTING_INITIAL_STATE,
  action: IAppAction
): IRoutingInitialState {
  const { type, payload } = action;

  switch (type) {
    case ROUTING_ACTION_TYPES.SET_TOP_LEVEL_NAVIGATOR:
      return {
        ...state,
        navigator: payload.navigator
      };
    case ROUTING_ACTION_TYPES.NAVIGATE:
      return {
        ...state,
        ...payload
      };
    case ROUTING_ACTION_TYPES.ROUTING_ACTION_FAILURE:
      return {
        ...state,
        ...payload
      }
    default: return state;
  }
}