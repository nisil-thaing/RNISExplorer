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

import configureStore from './src/app/store';
import { SCREEN } from './src/app';
import rootSaga from './src/app/store/effects';

const store = configureStore();
store.runSaga(rootSaga);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <SCREEN.Login />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
