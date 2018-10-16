import { IRoutingInitialState, ROUTING_INITIAL_STATE } from '../states';
import { ROUTING_ACTION_TYPES } from '../actions';

export default function routingReducer(
  state: IRoutingInitialState = ROUTING_INITIAL_STATE,
  action: { type: string; payload: any; }
) {
  switch (action.type) {
    case ROUTING_ACTION_TYPES.SET_TOP_LEVEL_NAVIGATOR:
      return {
        ...state,
        navigator: action.payload.navigator
      };
    case ROUTING_ACTION_TYPES.NAVIGATE:
      return {
        ...state,
        routeName: action.payload.routeName,
        params: action.payload.params
      };
    default: return state;
  }
}