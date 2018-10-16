import { createSelector } from 'reselect';
import { IRoutingInitialState } from '../states';

const routingSelector = (state: any) => state.routingReducer;

export const navigatorSelector = createSelector(
  routingSelector,
  (routingData: IRoutingInitialState) => routingData.navigator
);