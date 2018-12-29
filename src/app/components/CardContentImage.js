import React from 'react';
import {
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

import { CARD_CONTENT_IMAGE_STYLES } from '../style-sheets';

export default function CardContentImage(props) {
  const isSingleImageContent = props.images && props.images.length === 1;
  const isTwoImagesContent = props.images && props.images.length === 2;

  const customImageType = index => {
    switch (true) {
      case isSingleImageContent && index === 0:
        return [CARD_CONTENT_IMAGE_STYLES.itemSingleImage];
      case isTwoImagesContent:
        return [
          CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
          index === 0 ? { marginRight: 2.5 } : { marginLeft: 2.5 }
        ];
      default: return [];
    }
  };

  return (
    <View style={[ props.style, CARD_CONTENT_IMAGE_STYLES.container ]}>
      { props.images && props.images.map((image, index) => (
        <Image
          style={[
            CARD_CONTENT_IMAGE_STYLES.contentImage,
            [ ...customImageType(index) ]
          ]}
          key={ index }
          source={ image } />  
      )) }
    </View>
  );
}

CardContentImage.propTypes = {
  style: PropTypes.object,
  // images: PropTypes.arrayOf(PropTypes.string)
  // just bypass for dummy image
  images: PropTypes.arrayOf(PropTypes.any)
};