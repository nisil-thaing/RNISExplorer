import { createSelector } from 'reselect';

const authSelector = state => state.authReducer;

export const userDataSelector = createSelector(
  authSelector,
  authData => authData.userData
);

export const userTokenSelector = createSelector(
  userDataSelector,
  userData => userData.token
);