import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import routingReducer from './routing.reducer';

export const rootReducer = combineReducers({
  authReducer,
  routingReducer
});