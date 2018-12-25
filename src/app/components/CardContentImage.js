import React from 'react';
import {
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

import { CARD_CONTENT_IMAGE_STYLES } from '../style-sheets';

export default function CardContentImage(props) {
  return (
    <View style={[ props.style, CARD_CONTENT_IMAGE_STYLES.container ]}>
      {
        (props.images && props.images[0])
          ? (<Image
            style={ CARD_CONTENT_IMAGE_STYLES.contentImage }
            source={ props.images[0] } />)
          : null
      }
    </View>
  );
}

CardContentImage.propTypes = {
  style: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.string)
};