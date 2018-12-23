/* export interface ISetTopLevelNavigatorAction extends IAppAction {
  payload: {
    navigator: NavigationContainer
  }
}

export interface IRoutingNavigateAction extends IAppAction {
  payload: NavigationNavigateActionPayload
}

export interface IRoutingFailureAction extends IAppAction {
  payload: IAppStateError
} */

export const ROUTING_ACTION_TYPES = {
  SET_TOP_LEVEL_NAVIGATOR: '[ROUTING_ACTION_TYPES]_SET_TOP_LEVEL_NAVIGATOR',
  NAVIGATE: '[ROUTING_ACTION_TYPES]_NAVIGATE',
  ROUTING_ACTION_FAILURE: '[ROUTING_ACTION_TYPES]_ROUTING_ACTION_FAILURE'
}

export const ROUTING_ACTIONS = {
  setTopLevelNavigator: navigationRef => ({
    type: ROUTING_ACTION_TYPES.SET_TOP_LEVEL_NAVIGATOR,
    payload: { navigator: navigationRef }
  }),
  navigate: options => ({
    type: ROUTING_ACTION_TYPES.NAVIGATE,
    payload: options
  }),
  routingActionFailure: data => ({
    type: ROUTING_ACTION_TYPES.ROUTING_ACTION_FAILURE,
    payload: data
  })
}