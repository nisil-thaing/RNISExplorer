import React from 'react';
import { View, Text } from 'react-native';

import { SOCIAL_ACTIVITY_STYLES } from '../style-sheets';
import { Icon } from 'react-native-elements';

export default function SocialActivity(props: { style?: any }) {
  return (
    <View style={[ props.style, SOCIAL_ACTIVITY_STYLES.container ]}>
      <Text>This is social activity component</Text>
      <View style={ SOCIAL_ACTIVITY_STYLES.buttonsWrapper }>
        <View style={ SOCIAL_ACTIVITY_STYLES.actionButton }>
          <Icon
            iconStyle={ SOCIAL_ACTIVITY_STYLES.buttonIcon }
            name='like'
            type='evilicon'
            size={ 36 } />
          <Text>Like</Text>
        </View>
        <View style={ SOCIAL_ACTIVITY_STYLES.actionButton }>
          <Icon
            iconStyle={ SOCIAL_ACTIVITY_STYLES.buttonIcon }
            name='comment'
            type='octicon'
            size={ 20 } />
          <Text>Comment</Text>
        </View>
        <View style={ SOCIAL_ACTIVITY_STYLES.actionButton }>
          <Icon
            iconStyle={ SOCIAL_ACTIVITY_STYLES.buttonIcon }
            name='share-outline'
            type='material-community'
            size={ 30 } />
          <Text>Like</Text>
        </View>
      </View>
    </View>
  );
}