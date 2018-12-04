import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './variables.constant';

const windowWidth = Dimensions.get('window').width;
const avatarSize = windowWidth * 0.4;
const avatarRadius = avatarSize * 0.5;

export const HOME_PAGE_STYLES = StyleSheet.create({
  container: {},
  userInfoWrapper: {
    height: windowWidth * 61/80 + 40,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SEPARATE_LINE
  },
  coverPhotoWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  coverPhoto: {
    flex: 1,
    width: windowWidth,
    height: windowWidth * 9/16,
    resizeMode: 'cover'
  },
  userInfo: {
    position: 'absolute',
    top: windowWidth * 29/80,
    left: 0,
    width: windowWidth,
    flex: 1,
    alignItems: 'center'
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  avatarPhoto: {
    width: avatarSize,
    height: avatarSize,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: avatarRadius
  }
});