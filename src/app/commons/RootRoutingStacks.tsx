import {
  createStackNavigator,
  createSwitchNavigator,
  NavigationContainer
} from 'react-navigation';

import { ROUTES_NAMES } from '../utils/routes.constant';
import * as SCREEN from '../views';
import MainHeader from './MainHeader';

const AppStack = createStackNavigator({
  [ROUTES_NAMES.HomeRT]: {
    screen: SCREEN.Home
  },
  [ROUTES_NAMES.NewsFeedRT]: {
    screen: SCREEN.NewsFeed
  }
}, {
  navigationOptions: {
    header: MainHeader
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