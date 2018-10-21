import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>This is Home screen</Text>
      </View>
    )
  }
}

export default Home;