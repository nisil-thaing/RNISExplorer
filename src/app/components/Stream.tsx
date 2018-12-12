import React from 'react';
import { View } from 'react-native';

import { STREAM_COMPONENT_STYLES } from '../style-sheets';
import StreamCard from './StreamCard';

export default function Stream() {
  return (
    <View style={ STREAM_COMPONENT_STYLES.container }>
      <StreamCard></StreamCard>
    </View>
  );
}
