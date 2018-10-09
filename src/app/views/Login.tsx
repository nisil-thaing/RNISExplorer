import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export class Login extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image
          style={ styles.logo }
          source={ require('../../assets/Octocat.png') } />
        <Text style={ styles.heading }>Github Browser</Text>

        <View style={ styles.loginForm }>
          <TextInput
            style={ styles.input }
            placeholder="Github Username" />
          <TextInput
            style={ styles.input }
            secureTextEntry={ true }
            placeholder="Github Password" />
          <TouchableHighlight style={ styles.submit }>
            <Text style={ styles.submitText }>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 40,
    alignItems: 'center'
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
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
    borderColor: '#48bbec'
  },
  submit: {
    width: '100%',
    backgroundColor: '#48bbec',
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  submitText: {
    fontSize: 18,
    color: '#fff'
  }
});