import {
  StyleSheet,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const CARD_CONTENT_STYLES = StyleSheet.create({
  container: {},
  imageWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  contentImage: {
    flex: 1,
    width: windowWidth,
    height: windowWidth * 9/16,
    resizeMode: 'cover'
  },
  textContent: {
    paddingLeft: 10,
    paddingRight: 10
  }
});