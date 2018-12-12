import React, { Component } from 'react';
import { View } from 'react-native';

import { NewStatusInput, Stream } from '../components';
import { NEWS_FEED_PAGE_STYLES } from '../style-sheets';

export default class NewsFeed extends Component {
  render() {
    return (
      <View style={ NEWS_FEED_PAGE_STYLES.container }>
        <NewStatusInput></NewStatusInput>
        <View style={{ marginTop: 5 }}>
          <Stream></Stream>
        </View>
      </View>
    );
  }
}
