import {
  StyleSheet,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

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
    height: windowWidth * 9/16
  },
  itemTwoImages: {
    flex: 1,
    width: windowWidth / 2,
    height: windowWidth
  }
});