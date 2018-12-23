import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
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
  initialRouteName: ROUTES_NAMES.NewsFeedRT,
  defaultNavigationOptions: {
    header: MainHeader
  }
});

const AuthStack = createStackNavigator({
  [ROUTES_NAMES.LoginRT]: {
    screen: SCREEN.Login
  }
});

const RootRoutingStacks = createSwitchNavigator(
  {
    AuthLoading: SCREEN.AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppRoutingContainer = createAppContainer(RootRoutingStacks);
export default AppRoutingContainer;