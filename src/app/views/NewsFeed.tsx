import React, { Component } from 'react';
import { View } from 'react-native';

import { NewStatusInput } from '../partials';
import { NEWS_FEED_PAGE_STYLES } from '../style-sheets';

class NewsFeed extends Component {
  render() {
    return (
      <View style={ NEWS_FEED_PAGE_STYLES.container }>
        <NewStatusInput></NewStatusInput>
      </View>
    );
  }
}

export default NewsFeed;