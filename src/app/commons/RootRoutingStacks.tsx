import {
  createStackNavigator,
  createSwitchNavigator,
  NavigationContainer
} from 'react-navigation';

import { ROUTES_NAMES } from '../utils/routes.constant';
import * as SCREEN from '../views';

const AppStack = createStackNavigator({
  [ROUTES_NAMES.HomeRT]: {
    screen: SCREEN.Home
  },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#4f6d7a'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});
const AuthStack = createStackNavigator({
  [ROUTES_NAMES.LoginRT]: {
    screen: SCREEN.Login
  }
}, {
  navigationOptions: { header: null }
});

export const RootRoutingStacks: NavigationContainer = createSwitchNavigator(
  {
    AuthLoading: SCREEN.AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);