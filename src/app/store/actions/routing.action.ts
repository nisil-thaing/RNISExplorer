import { ILoginParams } from '../../services';

export const ROUTING_ACTION_TYPES = {
  SET_TOP_LEVEL_NAVIGATOR: '[ROUTING_ACTION_TYPES]_SET_TOP_LEVEL_NAVIGATOR',
  NAVIGATE: '[ROUTING_ACTION_TYPES]_NAVIGATE'
}

export const ROUTING_ACTIONS = {
  setTopLevelNavigator: (navigationRef: any) => ({
    type: ROUTING_ACTION_TYPES.SET_TOP_LEVEL_NAVIGATOR,
    payload: { navigator: navigationRef }
  }),
  navigate: (routeName: string, params?: any) => ({
    type: ROUTING_ACTION_TYPES.NAVIGATE,
    payload: { routeName, params }
  })
}