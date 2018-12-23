import { createSelector } from 'reselect';

const routingSelector = state => state.routingReducer;

export const navigatorSelector = createSelector(
  routingSelector,
  routingData => routingData.navigator
);