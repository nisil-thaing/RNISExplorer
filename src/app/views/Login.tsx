import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { IAppState } from '../store/states';
import { AUTH_ACTIONS } from '../store/actions';
import { LOGIN_PAGE_STYLES } from '../style-sheets';

interface ILoginProps {
  isInProgress: boolean;
  dispatch: Function;
}

interface ILoginState {
  loginData: ILoginForm
}

interface ILoginForm {
  email: string,
  password: string
}

class LoginForm implements ILoginForm {
  private _email: string = '';
  private _password: string = '';
  
  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }

  set password(value: string) {
    this._password = value;
  }

  get password(): string {
    return this._password;
  }
}

class Login extends Component<ILoginProps, ILoginState> {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      loginData: new LoginForm()
    }
  }

  onLoginFormTextChange = (field: string, value: string) => {
    if (!field) return;

    this.setState((prevState: Readonly<ILoginState>) => ({
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
            onChangeText={ (text: string) => this.onLoginFormTextChange('email', text) } />
          <TextInput
            style={ LOGIN_PAGE_STYLES.input }
            secureTextEntry={ true }
            placeholder="Password"
            onChangeText={ (text: string) => this.onLoginFormTextChange('password', text) } />
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

const mapStateToProps = (state: IAppState) => state.authReducer;

export default connect(mapStateToProps)(Login);
