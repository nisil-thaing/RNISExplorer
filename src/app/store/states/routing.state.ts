import {
  NavigationContainer,
  NavigationNavigateActionPayload
} from 'react-navigation';

import { IAppStateError } from '.';

export interface IRoutingInitialState extends NavigationNavigateActionPayload {
  navigator: NavigationContainer,
  error: IAppStateError
}

export const ROUTING_INITIAL_STATE: IRoutingInitialState = {
  navigator: <NavigationContainer>({}),
  routeName: '',
  error: <IAppStateError>({})
}