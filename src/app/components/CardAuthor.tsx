import React from 'react';
import { View, Image, Text } from 'react-native';
import { CARD_AUTHOR_STYLES } from '../style-sheets';

function CardAuthor() {
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
          <Text style={ CARD_AUTHOR_STYLES.timestampText }>
            Yesterday at 11:09 AM
            <Text> . </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CardAuthor