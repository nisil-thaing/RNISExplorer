/* eslint-disable react/prop-types */
import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import { ROUTES_NAMES } from '../utils/routes.constant';
import * as SCREEN from '../views';
import MainHeader from './MainHeader';
import { COLORS } from '../style-sheets';

const AppBottomTabNavigator = createBottomTabNavigator({
  [ROUTES_NAMES.NewsFeedRT]: {
    screen: SCREEN.NewsFeed,
    navigationOptions: {
      tabBarIcon: Object.assign(
        ({ tintColor }) => {
          return <Icon
            name='newspaper'
            type='material-community'
            size={ 24 }
            color={ tintColor } />;
        }, {
          displayName: `${ ROUTES_NAMES.NewsFeedRT }NavIcon`
        }
      ),
    }
  },
  [ROUTES_NAMES.FriendRequestsRT]: {
    screen: SCREEN.FriendRequests,
    navigationOptions: {
      tabBarIcon: Object.assign(
        ({ tintColor }) => {
          return <Icon
            name='users'
            type='font-awesome'
            size={ 18 }
            color={ tintColor } />;
        }, {
          displayName: `${ ROUTES_NAMES.FriendRequestsRT }NavIcon`
        }
      )
    }
  },
  [ROUTES_NAMES.WatchListRT]: {
    screen: SCREEN.WatchList,
    navigationOptions: {
      tabBarIcon: Object.assign(
        ({ tintColor }) => {
          return <Icon
            name='youtube-tv'
            type='material-community'
            size={ 24 }
            color={ tintColor } />;
        }, {
          displayName: `${ ROUTES_NAMES.WatchListRT }NavIcon`
        }
      )
    }
  },
  [ROUTES_NAMES.HomeRT]: {
    screen: SCREEN.Home,
    navigationOptions: {
      tabBarIcon: Object.assign(
        ({ tintColor }) => {
          return <Icon
            name='user'
            type='font-awesome'
            size={ 22 }
            color={ tintColor } />;
        }, {
          displayName: `${ ROUTES_NAMES.HomeRT }NavIcon`
        }
      )
    }
  },
  [ROUTES_NAMES.NotificationsRT]: {
    screen: SCREEN.Notifications,
    navigationOptions: {
      tabBarIcon: Object.assign(
        ({ tintColor }) => {
          return <Icon
            name='ios-notifications'
            type='ionicon'
            size={ 24 }
            color={ tintColor } />;
        }, {
          displayName: `${ ROUTES_NAMES.NotificationsRT }NavIcon`
        }
      )
    }
  },
  [ROUTES_NAMES.SettingsRT]: {
    screen: SCREEN.Settings,
    navigationOptions: {
      tabBarIcon: Object.assign(
        ({ tintColor }) => {
          return <Icon
            name='three-bars'
            type='octicon'
            size={ 24 }
            color={ tintColor } />;
        }, {
          displayName: `${ ROUTES_NAMES.SettingsRT }NavIcon`
        }
      )
    }
  }
}, {
  initialRouteName: ROUTES_NAMES.NewsFeedRT,
  defaultNavigationOptions: {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: COLORS.FB_HEADER,
      inactiveTintColor: COLORS.BLACK
    }
  }
});

const AppStack = createStackNavigator({
  App: AppBottomTabNavigator
}, {
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