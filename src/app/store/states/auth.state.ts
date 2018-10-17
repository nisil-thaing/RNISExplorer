import { IAppStateError } from '.';

export interface IAuthInitialState {
  isInProgress: boolean,
  isAuthenticated: boolean,
  userData: any,
  error: IAppStateError
}

export const AUTH_INITIAL_STATE: IAuthInitialState = {
  isInProgress: false,
  isAuthenticated: false,
  userData: null,
  error: <IAppStateError>({})
}