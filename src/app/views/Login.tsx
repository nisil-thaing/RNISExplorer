import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { AUTH_ACTIONS } from '../store/actions';

interface ILoginProps {
  isInProgress: boolean;
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

  onSubmitLoginRequest = (email: string, password: string) => {
    if (!email || !password) return;

    (this.props as any).dispatch(AUTH_ACTIONS.loginRequest({ email, password }));
  }

  render() {
    const state = this.state;
    const { isInProgress } = this.props;
    const { email, password } = state.loginData;

    return (
      <View style={ styles.container }>
        <View style={ styles.heading }>
          <Image
            style={ styles.logo }
            source={ require('../../assets/Octocat.png') } />
          <Text style={ styles.headingTitle }>Github Browser</Text>
        </View>

        <View style={ styles.loginForm }>
          <TextInput
            style={ styles.input }
            placeholder="Email"
            onChangeText={ (text: string) => this.onLoginFormTextChange('email', text) } />
          <TextInput
            style={ styles.input }
            secureTextEntry={ true }
            placeholder="Password"
            onChangeText={ (text: string) => this.onLoginFormTextChange('password', text) } />
          <TouchableHighlight
            style={ [
              styles.submit,
              email && password ? {} : styles.disabled
            ] }
            onPress={ () => this.onSubmitLoginRequest(email, password) }
            disabled={ !email || !password }>
            <Text style={ styles.submitText }>Login</Text>
          </TouchableHighlight>
        </View>

        <View style={[
          styles.loaderWrapper,
          isInProgress ? {} : styles.hidden
        ]}>
          <ActivityIndicator
            animating={ isInProgress }
            size="large" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({...state.authReducer});

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  hidden: {
    display: 'none'
  },
  disabled: {
    backgroundColor: 'grey'
  },
  container: {
    position: 'relative',
    flex: 1,
    width: '100%'
  },
  heading: {
    marginTop: 40,
    alignItems: 'center'
  },
  logo: {
    width: 66,
    height: 55
  },
  headingTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  loginForm: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    padding: 20,
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 50,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    borderRadius: 4
  },
  submit: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#48bbec',
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  submitText: {
    fontSize: 18,
    color: '#fff'
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});