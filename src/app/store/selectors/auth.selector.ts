import { createSelector } from 'reselect';

import { IAppState, IAuthInitialState } from '../states';

const authSelector = (state: IAppState) => state.authReducer;

export const userDataSelector = createSelector(
  authSelector,
  (authData: IAuthInitialState) => authData.userData
);

export const userTokenSelector = createSelector(
  userDataSelector,
  (userData: any) => userData.token
);