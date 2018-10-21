import { createStackNavigator, NavigationContainer } from 'react-navigation';

import { ROUTES_NAMES } from '../utils/routes.constant';
import * as SCREEN from '../views';

export const RootRoutingStacks: NavigationContainer = createStackNavigator({
  [ROUTES_NAMES.HomeRT]: {
    screen: SCREEN.Home
  },
  [ROUTES_NAMES.LoginRT]: {
    screen: SCREEN.Login
  }
}, {
  initialRouteName: ROUTES_NAMES.LoginRT,
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