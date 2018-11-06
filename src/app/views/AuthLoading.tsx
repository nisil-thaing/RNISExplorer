import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { IAppState } from '../store/states';
import { AUTH_ACTIONS } from '../store/actions';

class AuthLoading extends Component<{ dispatch: Function }> {
  constructor(props: { dispatch: Function }) {
    super(props);
    this.props.dispatch(AUTH_ACTIONS.checkingAuthInfo());
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => state.authReducer;

export default connect(mapStateToProps)(AuthLoading);