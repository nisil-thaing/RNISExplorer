import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import authReducer from './auth.reducer';
import routingReducer from './routing.reducer';

const rootPersistConfig = {
  key: 'rootReducer',
  storage,
  whitelist: ['authReducer']
};

const authPersistConfig = {
  key: 'authReducer',
  storage: storage,
  // whitelist: ['userData']
};

const rootReducer = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  routingReducer
});

export default persistReducer(rootPersistConfig, rootReducer);