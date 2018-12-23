import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { SOCIAL_ACTIVITY_STYLES, COLORS } from '../style-sheets';

export default function SocialActivity(props) {
  return (
    <View style={[ props.style, SOCIAL_ACTIVITY_STYLES.container ]}>
      <View style={ SOCIAL_ACTIVITY_STYLES.socialStatistic }>
        <View style={ SOCIAL_ACTIVITY_STYLES.socialStatReactionsWrapper }>
          <Icon
            iconStyle={ SOCIAL_ACTIVITY_STYLES.statisticIcon }
            containerStyle={[
              SOCIAL_ACTIVITY_STYLES.statisticIconWrapper,
              {
                backgroundColor: COLORS.FB_HEADER
              }
            ]}
            name='thumbs-up'
            type='font-awesome'
            size={ 10 } />
          <Text style={{ fontSize: 12, marginLeft: 5 }}>Thai Nguyen and 1250 others</Text>
        </View>
        <Text style={{ flex: 1, fontSize: 12, textAlign: 'right', lineHeight: 20 }}>520 Comments</Text>
      </View>
      <View style={ SOCIAL_ACTIVITY_STYLES.buttonsWrapper }>
        <View style={ SOCIAL_ACTIVITY_STYLES.actionButton }>
          <Icon
            iconStyle={ SOCIAL_ACTIVITY_STYLES.buttonIcon }
            name='thumbs-o-up'
            type='font-awesome'
            size={ 20 } />
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

SocialActivity.propTypes = {
  style: PropTypes.object
}