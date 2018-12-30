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
  const isThreeImagesContent = props.images && props.images.length === 3;
  const isFourImagesContent = props.images && props.images.length >= 4;

  const customImageType = index => {
    switch (true) {
      case isSingleImageContent && index === 0:
        return [CARD_CONTENT_IMAGE_STYLES.itemSingleImage];

      case isTwoImagesContent:
        return [
          CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
          index === 0 ? { marginRight: 1 } : { marginLeft: 1 }
        ];

      case isThreeImagesContent:
        if (index === 0) return [CARD_CONTENT_IMAGE_STYLES.firstItemOfThreeImagesContent];

        return [
          CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
          index === 1 ? { marginRight: 1 } : { marginLeft: 1 }
        ];

      case isFourImagesContent:
        if (index === 0) return [CARD_CONTENT_IMAGE_STYLES.firstItemOfFourImagesContent];

        switch (index) {
          case 1:
            return [
              CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
              { marginRight: 1 }
            ];
          case 2:
            return [
              CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
              { marginLeft: 1, marginRight: 1 }
            ];
          case 3:
            return [
              CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
              { marginLeft: 1 }
            ];
          default: return [];
        }

      default: return [];
    }
  };

  return (
    <View style={[ props.style, CARD_CONTENT_IMAGE_STYLES.container ]}>
      { props.images && props.images.map((image, index) => (
        index < 4 ? (
          <Image
            style={[
              CARD_CONTENT_IMAGE_STYLES.contentImage,
              [ ...customImageType(index) ]
            ]}
            key={ index }
            source={ image } />
        ) : null
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