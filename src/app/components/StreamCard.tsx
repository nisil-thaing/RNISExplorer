import React from 'react';
import { View } from 'react-native';

import { STREAM_CARD_STYLES } from '../style-sheets';
import CardAuthor from './CardAuthor';

export default function StreamCard() {
  return (
    <View style={ STREAM_CARD_STYLES.container }>
      <CardAuthor></CardAuthor>
    </View>
  );
}
