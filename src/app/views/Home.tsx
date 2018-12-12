import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import { HOME_PAGE_STYLES } from '../style-sheets/Home.style';

export default class Home extends Component {
  render() {
    return (
      <View style={ HOME_PAGE_STYLES.container }>
        <View style={ HOME_PAGE_STYLES.userInfoWrapper }>
          <View style={ HOME_PAGE_STYLES.coverPhotoWrapper }>
            <Image
              style={ HOME_PAGE_STYLES.coverPhoto }
              source={ require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg') } />
          </View>
          <View style={ HOME_PAGE_STYLES.userInfo }>
            <View style={ HOME_PAGE_STYLES.avatarWrapper }>
              <Image
                style={ HOME_PAGE_STYLES.avatarPhoto }
                source={ require('../../assets/home-cover.jpg') } />
            </View>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Isaac Nisillus</Text>
          </View>
        </View>
      </View>
    )
  }
}
