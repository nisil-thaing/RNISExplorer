import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

class Home extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width;

    return (
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        <Image
          style={{
            flex: 1,
            width: windowWidth,
            height: windowWidth * 260/375,
            resizeMode: 'cover'
          }}
          source={ require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg') } />
      </View>
    )
  }
}

export default Home;