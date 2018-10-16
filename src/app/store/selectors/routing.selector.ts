import { createSelector } from 'reselect';
import { IRoutingInitialState, IAppState } from '../states';

const routingSelector = (state: IAppState) => state.routingReducer;

export const navigatorSelector = createSelector(
  routingSelector,
  (routingData: IRoutingInitialState) => routingData.navigator
);