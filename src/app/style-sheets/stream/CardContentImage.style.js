import {
  StyleSheet,
  Dimensions
} from 'react-native';

import { COLORS } from '../variables.constant';

const windowWidth = Dimensions.get('window').width;
const itemSingleImageHeight = windowWidth * 9/16;
const itemTwoImagesHeight = windowWidth / 2;
const itemThreeImagesHeight = windowWidth / 3;
const firstItemFourImagesHeight = windowWidth * 2/3;
const moreImagesInfoWidth = itemThreeImagesHeight - 1;

export const CARD_CONTENT_IMAGE_STYLES = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  contentImage: {
    resizeMode: 'cover'
  },
  itemSingleImage: {
    width: windowWidth,
    height: itemSingleImageHeight
  },
  itemTwoImages: {
    flex: 1,
    height: itemTwoImagesHeight
  },
  itemThreeImages: {
    flex: 1,
    height: itemThreeImagesHeight
  },
  firstItemOfThreeImagesContent: {
    width: windowWidth,
    height: itemTwoImagesHeight,
    marginBottom: 2
  },
  firstItemOfFourImagesContent: {
    width: windowWidth,
    height: firstItemFourImagesHeight,
    marginBottom: 2
  },
  moreImagesInfoContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: moreImagesInfoWidth,
    height: itemThreeImagesHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.IMAGE_BACKDROP_COLOR
  },
  moreImagesInfo: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 32
  }
});