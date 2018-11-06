import { getStore } from '../store';

export default function httpInterceptor(config: any) {
  const store = getStore();
  if (!store) return config;

  const state = store.getState();
  const userToken = state.authReducer
                    && state.authReducer.userData
                    && state.authReducer.userData.token;

  if (userToken) {
    config.headers.Authorization = `Bearer ${ userToken }`;
  }

  return config;
}
