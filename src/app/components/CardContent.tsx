import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { CARD_CONTENT_STYLES } from '../style-sheets';

export default function CardContent(props: { style?: any }) {
  return (
    <View style={[ props.style, CARD_CONTENT_STYLES.container ]}>
      <Text style={ CARD_CONTENT_STYLES.textContent }>This is card content</Text>
      <View style={ CARD_CONTENT_STYLES.imageWrapper }>
        <Image
          style={ CARD_CONTENT_STYLES.contentImage }
          source={ require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg') } />
      </View>
    </View>
  );
}
