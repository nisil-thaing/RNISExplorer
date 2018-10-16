import {
  NavigationContainer,
  NavigationNavigateActionPayload
} from 'react-navigation';

export interface IRoutingInitialState extends NavigationNavigateActionPayload {
  navigator: NavigationContainer,
  error: any
}

export const ROUTING_INITIAL_STATE: IRoutingInitialState = {
  navigator: <NavigationContainer>({}),
  routeName: '',
  error: null
}