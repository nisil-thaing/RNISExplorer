import React from 'react';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { CARD_AUTHOR_STYLES, COLORS } from '../style-sheets';

export default function CardAuthor() {
  return (
    <View style={ CARD_AUTHOR_STYLES.container }>
      <View
        style={ CARD_AUTHOR_STYLES.avatarWrapper }>
        <Image
          style={ CARD_AUTHOR_STYLES.avatarPhoto }
          source={ require('../../assets/home-cover.jpg') } />
      </View>
      <View style={ CARD_AUTHOR_STYLES.contentRight }>
        <View style={ CARD_AUTHOR_STYLES.infoWrapper }>
          <Text style={ CARD_AUTHOR_STYLES.titleItem }>
            <Text style={ CARD_AUTHOR_STYLES.boldItem }>Isaac Nisillus </Text>
            with
            <Text style={ CARD_AUTHOR_STYLES.boldItem }> Thai Nguyen </Text>
            and
            <Text style={ CARD_AUTHOR_STYLES.boldItem }> 10 others</Text>
          </Text>
        </View>
        <View style={ CARD_AUTHOR_STYLES.timestamp }>
          <Text style={ CARD_AUTHOR_STYLES.timestampText }>Yesterday at 11:09 AM</Text>
          <Icon
            iconStyle={{ paddingLeft: 5, paddingRight: 5 }}
            name='primitive-dot'
            type='octicon'
            size={ 4 }
            color={ COLORS.BLACK } />
          <Icon
            name='globe'
            type='font-awesome'
            size={ 18 }
            color={ COLORS.SEPARATE_LINE } />
        </View>
      </View>
    </View>
  );
}
