import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AUTH_ACTIONS } from '../store/actions';

class AuthLoading extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.props.dispatch(AUTH_ACTIONS.checkingAuthInfo());
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapStateToProps = state => state.authReducer;

export default connect(mapStateToProps)(AuthLoading);