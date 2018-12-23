import React from 'react';
import { View, Image, Text } from 'react-native';

import { NEW_STATUS_INPUT_STYLES } from '../style-sheets';

export default function NewStatusInput() {
  return (
    <View style={ NEW_STATUS_INPUT_STYLES.container }>
      <View
        style={ NEW_STATUS_INPUT_STYLES.inputWrapper }>
        <Image
          style={ NEW_STATUS_INPUT_STYLES.avatarPhoto }
          source={ require('../../assets/home-cover.jpg') } />
        <Text style={ NEW_STATUS_INPUT_STYLES.statusInput }>What&apos;s on your mind?</Text>
      </View>
    </View>
  );
}
