export interface IRoutingInitialState {
  navigator: any,
  routeName: string,
  params: any,
  error: any
}

export const ROUTING_INITIAL_STATE: IRoutingInitialState = {
  navigator: null,
  routeName: '',
  params: {},
  error: null
}