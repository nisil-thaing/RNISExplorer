import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AUTH_ACTIONS } from '../store/actions';
import { LOGIN_PAGE_STYLES } from '../style-sheets';

class LoginForm {
  _email = '';
  _password = '';
  
  set email(value) {
    this._email = value;
  }

  get email() {
    return this._email;
  }

  set password(value) {
    this._password = value;
  }

  get password() {
    return this._password;
  }
}

class Login extends Component {
  static propTypes = {
    isInProgress: PropTypes.bool,
    dispatch: PropTypes.func
  };
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);

    this.state = {
      loginData: new LoginForm()
    }
  }

  onLoginFormTextChange = (field, value) => {
    if (!field) return;

    this.setState(prevState => ({
      ...prevState,
      loginData: {
        ...(prevState.loginData),
        [field]: value
      }
    }))
  }

  onSubmitLoginRequest = () => {
    const { email, password } = this.state.loginData;
    if (!email || !password) return;

    this.props.dispatch(AUTH_ACTIONS.loginRequest({ email, password }));
  }

  render() {
    const state = this.state;
    const { isInProgress } = this.props;
    const { email, password } = state.loginData;

    return (
      <View style={ LOGIN_PAGE_STYLES.container }>
        <View style={ LOGIN_PAGE_STYLES.heading }>
          <Image
            style={ LOGIN_PAGE_STYLES.logo }
            source={ require('../../assets/Octocat.png') } />
          <Text style={ LOGIN_PAGE_STYLES.headingTitle }>Github Browser</Text>
        </View>

        <View style={ LOGIN_PAGE_STYLES.loginForm }>
          <TextInput
            style={ LOGIN_PAGE_STYLES.input }
            placeholder="Email"
            onChangeText={ text => this.onLoginFormTextChange('email', text) } />
          <TextInput
            style={ LOGIN_PAGE_STYLES.input }
            secureTextEntry={ true }
            placeholder="Password"
            onChangeText={ text => this.onLoginFormTextChange('password', text) } />
          <TouchableHighlight
            style={ [
              LOGIN_PAGE_STYLES.submit,
              email && password ? {} : LOGIN_PAGE_STYLES.disabled
            ] }
            onPress={ this.onSubmitLoginRequest }
            disabled={ !email || !password }>
            <Text style={ LOGIN_PAGE_STYLES.submitText }>Login</Text>
          </TouchableHighlight>
        </View>

        <View style={[
          LOGIN_PAGE_STYLES.loaderWrapper,
          isInProgress ? {} : LOGIN_PAGE_STYLES.hidden
        ]}>
          <ActivityIndicator
            animating={ isInProgress }
            size="large" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => state.authReducer;

export default connect(mapStateToProps)(Login);
