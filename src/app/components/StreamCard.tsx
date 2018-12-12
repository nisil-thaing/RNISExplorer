import React from 'react';
import { View } from 'react-native';

import { STREAM_CARD_STYLES } from '../style-sheets';
import CardAuthor from './CardAuthor';

function StreamCard() {
  return (
    <View style={ STREAM_CARD_STYLES.container }>
      <View style={{ marginTop: 10 }}>
        <CardAuthor></CardAuthor>
      </View>
    </View>
  );
}

export default StreamCard