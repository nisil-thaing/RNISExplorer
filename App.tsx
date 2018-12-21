/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './src/app/store';
import rootSaga from './src/app/store/effects';
import {
  RootRoutingStacks,
  MainFooter
} from './src/app/commons';
import { ROUTING_ACTIONS } from './src/app/store/actions';

type Props = {};
export default class App extends Component<Props> {
  private _storeConfig: any;

  constructor(props: Props) {
    super(props);

    this._storeConfig = configureStore();
    this._storeConfig.runSaga(rootSaga);
  }

  setTopLevelNavigator(navigatorRef: any) {
    this._storeConfig.store.dispatch(
      ROUTING_ACTIONS.setTopLevelNavigator(navigatorRef)
    );
  };

  render() {
    return (
      <Provider store={ this._storeConfig.store }>
        <PersistGate loading={null} persistor={ this._storeConfig.persistor }>
          <View style={styles.container}>
            <RootRoutingStacks ref={ this.setTopLevelNavigator.bind(this) } />
            <MainFooter></MainFooter>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
