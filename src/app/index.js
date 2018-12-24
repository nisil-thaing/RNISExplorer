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

import { configureStore } from './store';
import rootSaga from './store/effects';
import { AppRoutingContainer } from './commons';
import { ROUTING_ACTIONS } from './store/actions';

export default class App extends Component {
  _storeConfig;

  constructor(props) {
    super(props);

    this._storeConfig = configureStore();
    this._storeConfig.runSaga(rootSaga);
  }

  setTopLevelNavigator(navigatorRef) {
    this._storeConfig.store.dispatch(
      ROUTING_ACTIONS.setTopLevelNavigator(navigatorRef)
    );
  }

  render() {
    return (
      <Provider store={ this._storeConfig.store }>
        <PersistGate loading={null} persistor={ this._storeConfig.persistor }>
          <View style={styles.container}>
            <AppRoutingContainer ref={ this.setTopLevelNavigator.bind(this) } />
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
