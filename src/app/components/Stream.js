import React from 'react';
import { View } from 'react-native';

import { STREAM_COMPONENT_STYLES } from '../style-sheets';
import StreamCard from './StreamCard';

export default function Stream() {
  const data = [{
    type: 0,
    images: [require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')]
  }, {
    type: 0,
    images: [
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')
    ]
  }, {
    type: 0,
    images: [
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')
    ]
  }, {
    type: 0,
    images: [
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')
    ]
  }, {
    type: 0,
    images: [
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')
    ]
  }, {
    type: 0,
    images: [
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')
    ]
  }, {
    type: 0,
    images: [
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg'),
      require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')
    ]
  }];

  return (
    <View style={ STREAM_COMPONENT_STYLES.container }>
      {
        data.map((item, index) => (
          <StreamCard
            style={ index > 0 ? { marginTop: 10 } : {} }
            key={ index }
            data={ item } />
        ))
      }
    </View>
  );
}
