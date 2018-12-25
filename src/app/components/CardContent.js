import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { CARD_CONTENT_STYLES } from '../style-sheets';
import CardContentImage from './CardContentImage';

export default function CardContent(props) {
  const images = [require('../../assets/27573875_363298654140769_4881900956687532032_n.jpg')];

  return (
    <View style={[ props.style, CARD_CONTENT_STYLES.container ]}>
      <Text style={ CARD_CONTENT_STYLES.textContent }>This is card content</Text>
      <CardContentImage images={ images }></CardContentImage>
    </View>
  );
}

CardContent.propTypes = {
  style: PropTypes.object
};