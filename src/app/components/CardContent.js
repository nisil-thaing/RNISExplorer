import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { CARD_CONTENT_STYLES } from '../style-sheets';
import CardContentImage from './CardContentImage';

function ContentMediaWrapper(props) {
  if (!props.data) return null;

  switch (props.data.type) {
    case 0: // just dummy assign to image type
      return <CardContentImage images={ props.data.images } />;
    default: return null;
  }  
}

export default function CardContent(props) {
  return (
    <View style={[ props.style, CARD_CONTENT_STYLES.container ]}>
      <Text style={ CARD_CONTENT_STYLES.textContent }>This is card content</Text>
      <ContentMediaWrapper { ...props } />
    </View>
  );
}

CardContent.propTypes = {
  style: PropTypes.object,
  data: PropTypes.shape({
    type: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.any)
  })
};