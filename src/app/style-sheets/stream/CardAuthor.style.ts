import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../variables.constant';

const AVATAR_WIDTH = 40;
const PADDING = 10;
const avatarRadius = AVATAR_WIDTH / 2;
const windowWidth = Dimensions.get('window').width;
const infoWrapperWidth = windowWidth - AVATAR_WIDTH - 3 * PADDING;

export const CARD_AUTHOR_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: PADDING,
    paddingRight: PADDING,
    backgroundColor: COLORS.WHITE,
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row',
    minWidth: AVATAR_WIDTH,
    minHeight: AVATAR_WIDTH
  },
  avatarPhoto: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    borderWidth: 1,
    borderColor: COLORS.SEPARATE_LINE,
    borderRadius: avatarRadius
  },
  contentRight: {
    flex: 1,
    minWidth: infoWrapperWidth,
    minHeight: AVATAR_WIDTH
  },
  infoWrapper: {
    flexDirection: 'row'
  },
  timestamp: {
    flexDirection: 'row',
    width: infoWrapperWidth
  },
  boldItem: {
    fontWeight: 'bold'
  },
  titleItem: {
    fontSize: 16,
    flexWrap: 'wrap'
  },
  timestampText: {
    fontSize: 12,
    flexWrap: 'wrap'
  }
})