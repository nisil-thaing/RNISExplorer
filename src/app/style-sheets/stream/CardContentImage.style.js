import {
  StyleSheet,
  Dimensions
} from 'react-native';

import { COLORS } from '../variables.constant';

const windowWidth = Dimensions.get('window').width;
const itemSingleImageHeight = windowWidth * 9/16;
const itemTwoImagesHeight = windowWidth / 2;
const itemThreeImagesHeight = windowWidth / 3 - 1;
const firstItemFourImagesHeight = windowWidth * 2/3;
const firstItemFiveImagesWidth = windowWidth / 2 - 1;
const firstItemSixImagesWidth = firstItemFourImagesHeight - 1;
const moreImagesInfoWidth = itemThreeImagesHeight;

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
  firstItemOfFiveImagesContent: {
    width: firstItemFiveImagesWidth,
    height: firstItemFourImagesHeight,
    marginBottom: 2
  },
  firstItemOfSixImagesContent: {
    width: firstItemSixImagesWidth,
    height: firstItemFourImagesHeight,
    marginRight: 1,
    marginBottom: 2
  },
  secondItemOfSixImagesContent: {
    width: itemThreeImagesHeight,
    height: itemThreeImagesHeight,
    marginLeft: 1,
    marginBottom: 2
  },
  thirdItemOfSixImagesContent: {
    position: 'absolute',
    right: 0,
    top: itemThreeImagesHeight + 2,
    width: itemThreeImagesHeight,
    height: itemThreeImagesHeight
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