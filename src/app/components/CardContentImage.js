import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

import { CARD_CONTENT_IMAGE_STYLES } from '../style-sheets';

export default function CardContentImage(props) {
  const MAX_SHOWING_IMAGES = 6;
  let imagesLength = 0;
  let numOfMoreImages = 0;
  let customImageItemTypes = [];

  if (props.images) {
    imagesLength = props.images.length;
    numOfMoreImages = imagesLength - MAX_SHOWING_IMAGES;

    switch (true) {
      case imagesLength === 1:
        customImageItemTypes = [[CARD_CONTENT_IMAGE_STYLES.itemSingleImage]];
        break;

      case imagesLength === 2:
        customImageItemTypes = [
          [
            CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
            { marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
            { marginLeft: 1 }
          ],
        ];
        break;

      case imagesLength === 3:
        customImageItemTypes = [
          [CARD_CONTENT_IMAGE_STYLES.firstItemOfThreeImagesContent],
          [
            CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
            { marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemTwoImages,
            { marginLeft: 1 }
          ],
        ];
        break;

      case imagesLength === 4:
        customImageItemTypes = [
          [CARD_CONTENT_IMAGE_STYLES.firstItemOfFourImagesContent],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginLeft: 1, marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginLeft: 1 }
          ],
        ];
        break;

      case imagesLength === 5:
        customImageItemTypes = [
          [
            CARD_CONTENT_IMAGE_STYLES.firstItemOfFiveImagesContent,
            { marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.firstItemOfFiveImagesContent,
            { marginLeft: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginLeft: 1, marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginLeft: 1 }
          ]
        ];
        break;

      case imagesLength >= 6:
        customImageItemTypes = [
          [CARD_CONTENT_IMAGE_STYLES.firstItemOfSixImagesContent],
          [CARD_CONTENT_IMAGE_STYLES.secondItemOfSixImagesContent],
          [CARD_CONTENT_IMAGE_STYLES.thirdItemOfSixImagesContent],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginLeft: 1, marginRight: 1 }
          ],
          [
            CARD_CONTENT_IMAGE_STYLES.itemThreeImages,
            { marginLeft: 1 }
          ]
        ];
        break;

      default: break;
    }
  }

  return (
    <View style={[ props.style, CARD_CONTENT_IMAGE_STYLES.container ]}>
      { props.images && props.images.map((image, index) => (
        index < MAX_SHOWING_IMAGES ? (
          <Image
            style={[
              CARD_CONTENT_IMAGE_STYLES.contentImage,
              [ ...(customImageItemTypes[index] || []) ]
            ]}
            key={ index }
            source={ image } />
        ) : null
      )) }
      { numOfMoreImages > 0
        ? (
          <View style={ CARD_CONTENT_IMAGE_STYLES.moreImagesInfoContainer }>
            <Text style={ CARD_CONTENT_IMAGE_STYLES.moreImagesInfo }>+{ numOfMoreImages }</Text>
          </View>
        )
        : null }
    </View>
  );
}

CardContentImage.propTypes = {
  style: PropTypes.object,
  // images: PropTypes.arrayOf(PropTypes.string)
  // just bypass for dummy image
  images: PropTypes.arrayOf(PropTypes.any)
};